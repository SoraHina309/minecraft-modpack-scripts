// 定义一个映射，key 是方块 ID，value 是对应所需阶段 & 提示信息
const protectedBlocks = {
  'immersiveengineering:blast_furnace': {
    requiredStage: 'basicsteel',
    failSound: 'minecraft:entity.zombie.break_wooden_door',
    failTitle: '你未能解析他的原理(请研究基础冶钢术)'
  },
  'immersiveengineering:coke_oven': {
    requiredStage: 'coking',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究焦化工艺)'
  },
    'immersiveengineering:advanced_blast_furnace': {
    requiredStage: 'adsteel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究进阶冶钢术)'
  },
      'immersiveengineering:advanced_blast_furnace': {
    requiredStage: 'adsteel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究进阶冶钢术)'
  },
    'immersiveengineering:metal_plate': {
    requiredStage: 'press',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究冲压机床)'
  },
      'immersivepetroleum:distillation_tower': {
    requiredStage: 'petroleum',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究石油精炼)'
  },
      'immersivepetroleum:hydrotreater': {
    requiredStage: 'petroleum',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究石油精炼)'
  },
      'immersivepetroleum:coker_unit': {
    requiredStage: 'petroleum',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究石油精炼)'
  },
              'immersiveengineering:workbench': {
    requiredStage: 'workbench',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究基础工程师装备)'
  },
            'immersiveengineering:crusher': {
    requiredStage: 'grinding',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究矿物研磨)'
    
  },
              'immersiveengineering:arc_furnace': {
    requiredStage: 'sesteel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究高级冶钢术)'
  },
            'immersiveengineering:diesel_generator': {
    requiredStage: 'biodiesel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究有机加工)'
  },
          'immersiveengineering:refinery': {
    requiredStage: 'biodiesel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究有机加工)'
  },
            'immersiveengineering:mixer': {
    requiredStage: 'biodiesel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究有机加工)'
  },
            'immersiveengineering:fermenter': {
    requiredStage: 'biodiesel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究有机加工)'
  },
            'immersiveengineering:squeezer': {
    requiredStage: 'biodiesel',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究有机加工)'
  },
        'immersivepetroleum:hydrotreater': {
    requiredStage: 'oil',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究原油开采)'
  },
      'immersivepetroleum:coker_unit': {
    requiredStage: 'oil',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究原油开采)'
  },
        'immersiveengineering:circuit_table': {
    requiredStage: 'electronics',
    failSound: 'minecraft:block.note_block.didgeridoo',
    failTitle: '你未能解析他的原理(请研究基础电子)'
  }
  
};


BlockEvents.rightClicked(event => {
  const blockId = event.block.id;
  const config = protectedBlocks[blockId];

  if (!config) return; // 如果不是受保护的方块，不处理

  const player = event.player;
  if (!player.stages.has(config.requiredStage)) {
    player.runCommandSilent(`playsound ${config.failSound} player ${player.username} ~ ~ ~`);
    player.runCommandSilent(`/title ${player.username} title {"text":"${config.failTitle}","color":"red"}`);
    event.cancel();
  }
});
