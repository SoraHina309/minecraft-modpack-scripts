ServerEvents.recipes(e => {
  const materials = ['mithril', 'orichalcum', 'blue_steel', 'red_steel'];

  materials.forEach(material => {
    // 锭和碎片
    e.shapeless(`9x fallout:${material}_nugget`, `fallout:${material}_ingot`);
        e.shapeless(`fallout:${material}_ingot`, `9x fallout:${material}_nugget`);
  });
    e.shapeless("immersiveengineering:ingot_steel", "#kubejs:pillagers_gun_all");
    e.custom({
    "type": "witherstormmod:anvil",
    "cost": 1,
    "left": {
      "item": "fallout:reinbow_joker_hammer"
    },
    "result": "fallout:command_joker_hammer",
    "right": {
      "item": "witherstormmod:command_block_book"
    }
  })
  
    e.shaped(Item.of('deeperdarker:sonorous_staff', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:sonic_boom",index:0,level:3,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b},charged:0b}'), [
    ' SX',
    ' BS',
    'B  '
  ], { X: 'deeperdarker:heart_of_the_deep', B: 'deeperdarker:sculk_bone',S: 'deeperdarker:soul_crystal' });

  e.shaped('irons_spellbooks:arcane_ingot', [
    'NNN',
    'NCN',
    'NNN'
  ], { N: 'irons_spellbooks:arcane_essence', C: 'cataclysm:black_steel_ingot' });


  e.shaped('fallout:champion_destruction', [
    'BAB',
    'CCC',
    'BDB'
  ], {
    A: 'cataclysm:flame_eye', B: 'cataclysm:black_steel_ingot',
    C: 'iceandfire:summoning_crystal_fire', D: 'fallout:champion_complete_fragments'
  }).stage('destruction');

  e.shaped('fallout:champion_haste', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:feather', B: 'cataclysm:cursed_eye', C: 'minecraft:rabbit_foot',
    D: 'alexsmobs:roadrunner_feather', E: 'fallout:champion_complete_fragments', F: 'alexsmobs:emu_feather',
    G: 'alexsmobs:dropbear_claw', H: 'alexsmobs:bison_fur', I: 'alexsmobs:raccoon_tail'
  }).stage('haste');

  e.shaped('fallout:champion_suppression', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'alexsmobs:spiked_scute', B: 'cataclysm:monstrous_eye', C: 'iceandfire:shiny_scales',
    D: 'minecraft:nautilus_shell', E: 'fallout:champion_complete_fragments', F: 'alexsmobs:crocodile_scute',
    G: 'alexsmobs:rocky_shell', H: 'minecraft:netherite_chestplate', I: '#iceandfire:scales/dragon'
  }).stage('suppression');


  e.shaped('fallout:champion_vitality', [
    'BAB',
    'CDC',
    'BFB'
  ], {
    A: 'irons_spellbooks:energized_core', B: 'legendarysurvivaloverhaul:heart_container',
    C: 'legendarysurvivaloverhaul:shield_container', D: 'fallout:champion_complete_fragments', F: 'cataclysm:mech_eye'
  }).stage('vitality');

  e.shaped('fallout:emptiness_fruit', [
    'DAD',
    'DBD',
    'DCD'
  ], {
    A: 'fallout:ancient_fruit_juice',
    B: 'minecraft:enchanted_golden_apple',
    C: 'fallout:champion_vitality',
    D: 'irons_spellbooks:blood_vial'
  }).stage('fruit');

  e.shaped('fallout:parasite_skin', [
    'FBF',
    'DAC',
    'FEF'
  ], {
    A: 'fallout:dried_parasite_skin',
    B: 'iceandfire:fire_dragon_heart',
    C: 'iceandfire:ice_dragon_heart',
    D: 'iceandfire:lightning_dragon_heart',
    E: 'iceandfire:hydra_fang',
    F: 'irons_spellbooks:blood_vial'
  }).stage('skin');

  e.shaped('fallout:parasitic_skin', [
    'DAD',
    'DBD',
    'DCD'
  ], {
    A: 'cataclysm:abyssal_sacrifice',
    B: 'fallout:parasite_skin',
    C: 'cataclysm:abyssal_egg',
    D: 'iceandfire:summoning_crystal_lightning'
  }).stage('skin');

  e.shaped('fallout:champion_domination', [
    'FAF',
    'BCD',
    'FEF'
  ], {
    A: 'fallout:parasitic_skin',
    B: 'fallout:champion_destruction',
    C: 'fallout:forbidden_fruit',
    D: 'fallout:champion_haste',
    E: 'fallout:champion_suppression',
    F: 'cataclysm:witherite_ingot'
  }).stage('domination');

  e.shaped('fallout:military_armor_bounce', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'fallout:un_armor_bounce',
    B: 'fallout:black_steel_sheet',
    C: 'minecraft:black_dye',
  })

  e.shaped('fallout:heavy_armor_bounce', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'fallout:military_armor_bounce',
    B: 'fallout:mithril_sheet',
    C: 'minecraft:green_dye',
  })

    e.shaped('witherstormmod:formidibomb', [
    'SFS',
    'FMF',
    'SFS'
  ], {
    S: 'fallout:mithril_sheet',
    F: 'mekanism:pellet_antimatter',
    M: 'witherstormmod:super_tnt',
  }).stage('bomb');



  e.custom({
    "type": "cataclysm:amethyst_bless",
    "ingredients": {
      "item": "minecraft:golden_apple"
    },
    "result": {
      "item": "legendarysurvivaloverhaul:shield_container"
    },
    "time": 1200
  }).stage('container');

  e.custom({
    "type": "cataclysm:amethyst_bless",
    "ingredients": {
      "item": "fallout:champion_chunk_fragments"
    },
    "result": {
      "item": "fallout:champion_complete_fragments"
    },
    "time": 2400
  }).stage('complete');

  e.shapeless('fallout:champion_chunk_fragments', ['7x fallout:champion_fragment', 'legendarysurvivaloverhaul:shield_container', 'legendarysurvivaloverhaul:heart_container']).stage('container');

  e.shapeless('fallout:ancient_fruit_juice', ['legendarysurvivaloverhaul:purified_water_bottle', 'minecraft:glowstone_dust', 'minecraft:redstone', 'minecraft:sugar', '3x quark:ancient_fruit']).stage('juice');

    e.shapeless('kaleidoscope_cookery:rice', ['farmersdelight:rice_panicle'])


  
  e.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      { "item": "farmersdelight:rice_panicle" }
    ],
    "result": [
      { "item": "kaleidoscope_cookery:rice", "count": 3 },
      { "item": "farmersdelight:straw" }
    ],
    "tool": { "tag": "forge:tools/knives" }
  })


  e.shaped('mbd2:t1_research', [
    'NNN',
    'SCS',
    'S S'
  ], { N: '#minecraft:planks', S: '#forge:rods/wooden', C: 'minecraft:chest' }).stage('revitalize');

  e.shaped('mbd2:t1_investigate', [
    'NNN',
    'SCS',
    'S S'
  ], { N: '#minecraft:planks', S: '#forge:rods/wooden', C: 'minecraft:glass_bottle' }).stage('revitalize');

  e.shaped('mbd2:t2_research', [
    'ABA',
    'BCD',
    'ABA'
  ], {
    A: 'immersiveengineering:ingot_steel', B: 'create:electron_tube',
    C: 'create:precision_mechanism', D: 'createaddition:capacitor'
  }).stage('engineer');

  e.shaped('mbd2:t2_investigate', [
    'ABA',
    'BCD',
    'ABA'
  ], {
    A: 'immersiveengineering:ingot_steel', B: 'create:electron_tube',
    C: 'create:precision_mechanism', D: 'minecraft:spyglass'
  }).stage('engineer');

  e.shaped('mbd2:t3_research', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'mekanism:advanced_control_circuit', B: 'fallout:black_steel_sheet',
    C: 'fallout:atom'
  }).stage('emekanism');

  e.shaped('mbd2:t3_investigate', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'mekanism:advanced_control_circuit', B: 'fallout:black_steel_sheet',
    C: 'fallout:assimilation'
  }).stage('emekanism');

  //放大镜
  e.shaped('fallout:magnifier', [
    ' B ',
    'BGG',
    ' S '
  ], {
    B: 'create:brass_sheet',
    G: 'minecraft:glass_pane',
    S: 'minecraft:stick'
  }).stage('revitalize');

  // 培养皿
  e.shaped('fallout:petri_dish', [
    ' G ',
    'G G',
    ' G '
  ], {
    G: 'immersiveengineering:insulating_glass'
  }).stage('engineer');

  // 克隆舱
  e.shaped('fallout:clone_cabin', [
    'PMP',
    'BGB',
    'PMP'
  ], {
    B: 'cataclysm:black_steel_ingot',
    P: 'mekanism:basic_control_circuit',
    G: 'immersiveengineering:insulating_glass',
    M: 'immersiveengineering:component_electronic'
  }).stage('mekanism');

  // 研究软盘
  e.shaped('fallout:floppy', [
    'RCR',
    'WPW',
    'RWR'
  ], {
    P: 'fallout:power',
    C: 'create:precision_mechanism',
    W: '#forge:treated_wood',
    R: 'minecraft:red_dye'
  }).stage('engineer');

  // 研究硬盘
  e.shaped('fallout:ssd', [
    'BWB',
    'BAB',
    'BLB'
  ], {
    A: 'fallout:atom',
    B: 'cataclysm:black_steel_ingot',
    W: '#forge:wafer',
    L: 'immersiveengineering:logic_circuit'
  }).stage('mekanism');

  e.replaceInput({ mod: 'mekanism' }, 'minecraft:redstone', 'immersiveengineering:wirecoil_redstone');
  e.replaceInput({ mod: 'mekanismgenerators' }, 'minecraft:redstone', 'immersiveengineering:wirecoil_redstone');
  e.replaceInput({ output: Ingredient.of('#mekanism:t1_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    'minecraft:iron_ingot',    // 输入的铁锭
    'immersiveengineering:plate_steel'    // 替换为钢板
  );
  e.replaceInput({ output: Ingredient.of('#mekanism:t2_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    '#forge:ingots/steel',    // 输入的铁锭
    'fallout:black_steel_sheet'    // 替换为钢板
  );
  e.replaceInput({ output: Ingredient.of('#mekanism:t3_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    '#forge:ingots/steel',    // 输入的铁锭
    'fallout:red_steel_sheet'    // 替换为钢板
  );
  //下方代码皆是无效代码,工厂疑似只能移除原先的配方然后重新制作配方来替换
  e.replaceInput({ output: Ingredient.of('#mekanism:t4_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    'minecraft:gold_ingot',   // 输入的铁锭
    'fallout:blue_steel_sheet'    // 替换为钢板
  );
  e.replaceInput({ output: Ingredient.of('#mekanism:t4_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    'minecraft:diamond',    // 输入的铁锭
    'fallout:mithril_sheet'    // 替换为钢板
  );
  e.replaceInput({ output: Ingredient.of('#mekanism:t5_machine') }, // 使用正则表达式匹配 Mekanism 的所有物品输出
    'minecraft:diamond',    // 输入的铁锭
    'fallout:orichalcum_sheet'    // 替换为钢板
  );

  const factorys = [
    'smelting_factory', 'enriching_factory', 'crushing_factory', 'compressing_factory',
    'purifying_factory', 'injecting_factory', 'infusing_factory', 'sawing_factory', 'combining_factory'
  ];
  const factoryTiers = ['basic', 'advanced', 'elite', 'ultimate'];
  factoryTiers.forEach((tier) => {
    factorys.forEach(factory => {
      e.replaceInput({ output: `mekanism:${tier}_${factory}` }, // 使用正则表达式匹配 Mekanism 的所有物品输出
        'minecraft:iron_ingot',    // 输入的铁锭
        'immersiveengineering:plate_steel'    // 替换为钢板
      );
    });
  });
  //灌注机替换
  e.replaceInput({ output: 'mekanism:metallurgic_infuser' },
    'mekanism:ingot_osmium',
    'immersiveengineering:ingot_steel'
  );
  //ie工具替换
  const ietools = [
    'immersiveengineering:wirecutter', 'immersiveengineering:hammer'
  ]
  ietools.forEach(tool => {
    e.replaceInput({ output: `${tool}` },
      'minecraft:iron_ingot',
      'immersiveengineering:ingot_steel'
    )
  });
  e.replaceInput({ output: 'immersiveengineering:screwdriver' },
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel'
  )

  e.custom({
    "type": "witherstormmod:anvil",
    "cost": 5,
    "left": {
      "item": "immersiveengineering:graphite_electrode"
    },
    "result": {
      "item":"immersiveengineering:graphite_electrode",
      "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
    },
    "right": {
      "item": "minecraft:enchanted_book",
      "nbt": "{Enchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
    }
  })
  e.shapeless('9x minecraft:gunpowder','quark:gunpowder_sack');
});
// ServerEvents.blockLootTables(e=>{
//     Block.getTypeList().forEach(block=>{
//         e.addBlock(block,l=>{
//             l.addPool(p=>{
//                 Ingredient.of("@minecraft").getItemIds().forEach(itemId=>{
//                     p.addItem(Item.of(itemId))
//                 })
//             })
//         })
//     })
// })
// ServerEvents.blockLootTables(e => {
//     e.addBlock('minecraft:spawner', table => {
//         table.addPool(pool => {
//           pool.addItem('legendarysurvivaloverhaul:heart_fragment');
//         });
//     });
// });


