const ThirstProvider = Java.loadClass("sfiomn.legendarysurvivaloverhaul.common.capabilities.thirst.ThirstProvider")

PlayerEvents.tick(e => {
  let player = e.player

  if (player.age % 50 == 0) { // 每 5 秒检查一次
    try {
      let opt = player.getCapability(ThirstProvider.THIRST_CAPABILITY)

      if (opt) {
        let thirstCap = opt.resolve().orElse(null)
        if (thirstCap) {
          let hydration = thirstCap.getHydrationLevel()
          let saturation = thirstCap.getSaturationLevel()

          // 聊天栏调试输出
        //   player.tell(`[ThirstDebug] Hydration=${hydration}, Saturation=${saturation}`)

          // ====== 奖励逻辑 ======
          if (hydration >= 18) {
            player.potionEffects.add("minecraft:haste", 120, 0, true, false)         // 急迫 I
            player.potionEffects.add("minecraft:regeneration", 120, 0, true, false) // 生命恢复 I
          }

          // ====== 惩罚逻辑 ======
          if (hydration <= 6) {
            player.potionEffects.add("minecraft:weakness", 120, 0, true, false)       // 虚弱 I
            player.potionEffects.add("minecraft:mining_fatigue", 120, 0, true, false) // 挖掘疲劳 I
          }
        }
      }
    } catch (err) {
      player.tell("[ThirstDebug] 错误: " + err)
    }
  }
})