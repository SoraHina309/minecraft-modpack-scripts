// 存储玩家对话状态的全局对象
const playerDialogs = {}

// 右键事件处理
BlockEvents.rightClicked(event => {
  if (event.hand !== 'MAIN_HAND') return
  const player = event.player
  if (!player) return

  const item = event.item
  const blockId = event.block.id
  const pos = event.block.pos.above()
  const level = event.level

  // ✅ 情况一：基岩 + emptiness_fruit → 召唤 farsser 并初始化对话
  if (blockId === 'minecraft:bedrock' && item.id === 'fallout:emptiness_fruit') {
    player.setMainHandItem(Item.empty)

    const pig = level.createEntity('alexsmobs:farseer')
    pig.setPos(pos.x + 0.5, pos.y, pos.z + 0.5)
    pig.setCustomName('§5§k§lSSS§l§5边界维护自律机关§k§lSSS')
    pig.setCustomNameVisible(true)
    pig.setItemSlot('mainhand', Item.of('fallout:forbidden_fruit'))
    pig.setDropChance('mainhand', 1.0)
    pig.potionEffects.add('minecraft:health_boost', 199980, 19)
    pig.spawn()

    // 初始化自律机关对话系统
    const playerId = player.id
    playerDialogs[playerId] = {
      messages: [
        '§5[自律机关]§f §a正在进行边界系统自检...§4检测到到异常能量反应',
        '§5[自律机关]§f §a分析完成...开始收容名为§4"禁忌之果"§a的异常物品',
        `§5[自律机关]§f §a侦测到禁忌之果投放者: §4${player.name}...执行C-074消灭协议`
      ],
      currentIndex: 0,
      timer: 0,
      // 添加标记表示这是自律机关对话
      isGuardianDialog: true,
      // 存储机关实体引用
      guardianEntity: pig
    }
    return
  }

  // ✅ 情况二：阿梅西斯祭坛 + champion_chunk_fragments → 召唤灾变 Boss 并初始化对话
  if (blockId === 'cataclysm:altar_of_amethyst' && item.id === 'fallout:champion_chunk_fragments') {
    player.setMainHandItem(Item.empty)

    const clawdian = level.createEntity('cataclysm:clawdian')
    clawdian.setPos(pos.x + 1, pos.y, pos.z)
    clawdian.spawn()

    const cindaria = level.createEntity('cataclysm:cindaria')
    cindaria.setPos(pos.x, pos.y, pos.z)
    cindaria.setCustomName('§b水母塞茜娅')
    cindaria.setCustomNameVisible(true)
    cindaria.setItemSlot('mainhand', Item.of('fallout:champion_complete_fragments'))
    cindaria.setDropChance('mainhand', 1.0)
    cindaria.spawn()

    const hippo = level.createEntity('cataclysm:hippocamtus')
    hippo.setPos(pos.x - 1, pos.y, pos.z)
    hippo.spawn()

    // 初始化对话系统
    const playerId = player.id
    playerDialogs[playerId] = {
      messages: [
      '§b【塞茜娅】凡人！为何仍然听信利维坦的谎言。',
      '§b【塞茜娅】冠军容器？你认为这种粗劣的仿制品能控制本源之力？真是天真。',
      '§b【塞茜娅】带着你的企图离开吧。有些知识，注定不属于凡人。'
      ],
      currentIndex: 0,
      timer: 0
    }
    return
  }
  
})

// 玩家tick事件 - 处理分步对话和机关行为
PlayerEvents.tick(event => {
  const player = event.player
  const playerId = player.id

  // 检查玩家是否有待处理的对话
  if (playerDialogs[playerId]) {
    const dialog = playerDialogs[playerId]
    dialog.timer++

    // 每2秒显示一条消息 (40 tick = 2秒)
    if (dialog.timer >= 40) {
      // 发送当前消息
      player.tell(dialog.messages[dialog.currentIndex])

      // 如果是自律机关的最后一条消息，让机关攻击玩家
      if (dialog.isGuardianDialog && dialog.currentIndex === dialog.messages.length - 1) {
        const guardian = dialog.guardianEntity
        if (guardian && guardian.isAlive()) {
          guardian.setTarget(player)
          // 可以添加一些特效或音效
          player.playSound('minecraft:entity.ender_dragon.growl', 1.0, 0.5)
        }
      }

      // 移动到下一条消息
      dialog.currentIndex++
      dialog.timer = 0

      // 如果所有消息都显示完毕，清除对话状态
      if (dialog.currentIndex >= dialog.messages.length) {
        delete playerDialogs[playerId]
      }
    }
  }
})