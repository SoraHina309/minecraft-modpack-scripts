ServerEvents.recipes(e => {
  // tacz 默认枪包 + 弹药合成配方（使�?e.custom�?
  // 第一批：默认武器配方（glock �?deagle_golden�?


  // 枪匠台
  //ballistics 
  e.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"qkl:fk15",HasBulletInBarrel:1b}'), [
    'A  ',
    ' AC',
    '  B'
  ], { A: '#forge:rods/iron', B: '#minecraft:planks', C: 'minecraft:flint_and_steel' }).stage('ballistics');
  e.shapeless(Item.of('tacz:ammo', 8, '{AmmoId:"qkl:16mm"}'), [
    '3x fallout:blackpowder', '3x minecraft:paper', '3x minecraft:iron_nugget'
  ]).stage('ballistics');

  e.shaped(Item.of('tacz:workbench_b', '{BlockId:"create_armorer:create_workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:ingots/steel',
    B: '#forge:storage_blocks/brass'
  }).id('create_armorer:gun_smith_table').stage('steamgun');

  e.shaped('tacz:gun_smith_table', [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:ingots/steel',
    B: '#forge:storage_blocks/steel'
  }).id('tacz:gun_smith_table').stage('adballistics');

  e.shaped(Item.of('tacz:workbench_b', '{BlockId:"immersive_armorer:workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:ingots/steel',
    B: '#forge:treated_wood'
  }).id('immersive_armorer:gun_smith_table').stage('workbench');

  e.shaped(Item.of('tacz:workbench_a', '{BlockId:"tacz:ammo_workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:rods/brass',
    B: '#forge:storage_blocks/brass'
  }).id('tacz:ammo_brass_table').stage('steamgun');

  e.shaped(Item.of('tacz:workbench_a', '{BlockId:"tacz:ammo_workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:rods/steel',
    B: '#forge:storage_blocks/brass'
  }).id('tacz:ammo_smith_table').stage('adballistics');

  e.shaped(Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:rods/brass',
    B: '#forge:ingots/steel',
  }).id('tacz:attachment_brass_table').stage('steamgun');

  e.shaped(Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}'), [
    'LLL',
    'IBI',
    'I I'
  ], {
    L: '#minecraft:logs',
    I: '#forge:rods/steel',
    B: '#forge:ingots/steel',
  }).id('tacz:attachment_smith_table').stage('adballistics');
  //adballistics
  e.shapeless(Item.of('tacz:workbench_a', '{BlockId:"bf1:telegraph"}'), [
    'tacz:gun_smith_table', 'immersiveengineering:wirecoil_copper'
  ]).stage('adballistics');
  //cybergun
  e.shapeless(Item.of('tacz:workbench_b', '{BlockId:"cyber_armorer:workbench_cyber_armorer"}'), [
    'tacz:gun_smith_table', 'mekanism:advanced_control_circuit'
  ]).stage('cybergun');
  //枪械材料
  e.shaped('9x fallout:copper_parts', [
    'AAA',
    'ABC',
    'CCC'
  ], {
    A: 'create:brass_sheet', B: 'create:cogwheel',
    C: 'create:iron_sheet'
  }).stage('steamgun');

  e.shaped('9x fallout:steel_parts', [
    'AAA',
    'ABC',
    'CCC'
  ], {
    A: 'immersiveengineering:plate_steel', B: 'immersiveengineering:component_steel',
    C: 'immersiveengineering:treated_wood_horizontal'
  }).stage('adballistics');

  e.shaped('9x fallout:black_steel_parts', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'cataclysm:black_steel_ingot', B: 'fallout:mithril_ingot'
  }).stage('adballistics');

  e.shaped('2x fallout:black_steel_parts_b', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'fallout:champion_fragment', B: 'fallout:black_steel_parts'
  }).stage('elitesoldiers');

  e.shaped('9x fallout:black_steel_parts_a', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'fallout:black_steel_parts', B: 'fallout:orichalcum_ingot'
  }).stage('seworkbench');

  e.shaped('4x fallout:mithril_parts', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'fallout:mithril_sheet', B: 'fallout:orichalcum_wafer'
  }).stage('seballistics');


  e.shaped('fallout:redblue_steel_parts', [
    'ABC',
    'BDB',
    'CBA'
  ], {
    A: 'fallout:red_steel_ingot', B: 'mekanism:ingot_refined_obsidian',
    C: 'fallout:blue_steel_ingot', D: 'minecraft:netherite_ingot'
  }).stage('cybergun');

  // 火药（无序合成）
  e.shapeless(
    Item.of('fallout:blackpowder', 16),
    [
      'minecraft:flint',
      '2x minecraft:sugar',
      '3x minecraft:charcoal'
    ]
  ).stage('ballistics');

  e.shapeless(Item.of('minecraft:gunpowder', 16), [
    '4x #forge:dusts/saltpeter',
    '#forge:dusts/sulfur',
    'minecraft:white_wool'
  ]).stage('ballistics');

  // 铁弹药箱
  e.shaped(
    Item.of('tacz:ammo_box', '{Level:0}'),
    [
      'PIP',
      'P P',
      'PPP'
    ],
    {
      I: '#forge:ingots/iron',
      P: '#forge:ingots/steel'
    }
  ).id('kubejs:iron_ammo_box')

  // 金弹药箱
  e.shaped(
    Item.of('tacz:ammo_box', '{Level:1}'),
    [
      'PIP',
      'P P',
      'PPP'
    ],
    {
      I: '#forge:ingots/gold',
      P: '#forge:ingots/steel'
    }
  ).id('kubejs:gold_ammo_box')

  // 钻弹药箱
  e.shaped(
    Item.of('tacz:ammo_box', '{Level:2}'),
    [
      'PIP',
      'P P',
      'PPP'
    ],
    {
      I: '#forge:gems/diamond',
      P: '#forge:ingots/steel'
    }
  ).id('kubejs:diamond_ammo_box')

  // 雕像
  e.shaped('tacz:statue', [
    ' _ ',
    'QCQ',
    ' C '
  ], {
    _: 'minecraft:quartz_slab',
    Q: 'minecraft:quartz_stairs',
    C: 'minecraft:chiseled_quartz_block'
  }).id('tacz:statue')

  // 目标靶
  e.shaped('tacz:target', [
    'III',
    'IRI',
    ' P '
  ], {
    I: '#forge:ingots/iron',
    R: 'minecraft:redstone',
    P: '#minecraft:planks'
  }).id('tacz:target')

  // 靶车
  e.shaped('tacz:target_minecart', [
    'A',
    'B'
  ], {
    A: 'tacz:target',
    B: 'minecraft:minecart'
  }).id('tacz:target_minecart')

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:nuggets/steel" }, "count": 18 },
      { "item": { "tag": "forge:plates/brass" }, "count": 20 },
      { "item": { "tag": "forge:gunpowder" }, "count": 16 }
    ],
    result: { "type": "ammo", "id": "create_armorer:gernade", "count": 8 }
  }).id('create_armorer:ammo/gernade');


  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 6 },
      { "item": { "tag": "forge:plates/brass" }, "count": 20 },
      { "item": { "tag": "forge:gunpowder" }, "count": 16 }
    ],
    result: { "type": "ammo", "id": "create_armorer:40mmhe", "count": 2 }
  }).id('create_armorer:ammo/40mmhe');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:plates/brass" }, "count": 20 },
      { "item": { "tag": "forge:gunpowder" }, "count": 16 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:20mm", "count": 12 }
  }).id('immersive_armorer:ammo/20mm');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:nuggets/black_steel" }, "count": 18 },
      { "item": { "tag": "forge:plates/brass" }, "count": 20 },
      { "item": { "tag": "forge:gunpowder" }, "count": 16 }
    ],
    result: { "type": "ammo", "id": "tacz:40mm", "count": 8 }
  }).id('tacz:ammo/40mm');

  // 添加 cyber_armorer:bullet_buckshot 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/lead" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_buckshot", "count": 48 }
  }).id('tacz:ammo/bullet_buckshot');

  // 添加 cyber_armorer:bullet_pistol 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 12 },
      { "item": { "tag": "forge:gunpowder" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_pistol", "count": 60 }
  }).id('tacz:ammo/bullet_pistol');

  // 添加 cyber_armorer:bullet_rifle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_rifle", "count": 48 }
  }).id('tacz:ammo/bullet_rifle');

  // 添加 cyber_armorer:bullet_sniper 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 24 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_sniper", "count": 24 }
  }).id('tacz:ammo/bullet_sniper');


  // 添加 tacz:rpg_rocket 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "superbwarfare:missile_engine" }, "count": 1 },
      { "item": { "item": "mekanism:ingot_refined_obsidian" }, "count": 1 }
    ],
    result: { "type": "ammo", "id": "tacz:rpg_rocket", "count": 2 }
  }).id('tacz:ammo/rpg_rocket');

  // 添加 tacz:ammo_mod_fmj 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:crying_obsidian" }, "count": 2 },
      { "item": { "tag": "forge:ingots/mithril" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:ammo_mod_fmj" }
  }).id('tacz:attachment/ammo_mod_fmj');

  // 添加 tacz:ammo_mod_he 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:crying_obsidian" }, "count": 3 },
      { "item": { "item": "minecraft:end_crystal" } }
    ],
    result: { "type": "attachment", "id": "tacz:ammo_mod_he" }
  }).id('tacz:attachment/ammo_mod_he');

  // 添加 tacz:ammo_mod_hp 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:crying_obsidian" }, "count": 3 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:ammo_mod_hp" }
  }).id('tacz:attachment/ammo_mod_hp');

  // 添加 tacz:ammo_mod_i 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:crying_obsidian" }, "count": 2 },
      { "item": { "item": "minecraft:fire_charge" } },
      { "item": { "tag": "forge:rods/blaze" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:ammo_mod_i" }
  }).id('tacz:attachment/ammo_mod_i');

  // 添加 tacz:bayonet_6h3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "minecraft:logs" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:bayonet_6h3" }
  }).id('tacz:attachment/bayonet_6h3');

  // 添加 tacz:bayonet_m9 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "minecraft:logs" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:bayonet_m9" }
  }).id('tacz:attachment/bayonet_m9');

  // 添加 tacz:deagle_black_steelen_long_barrel 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 30 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "tacz:deagle_black_steelen_long_barrel" }
  }).id('tacz:attachment/deagle_black_steelen_long_barrel');

  // 添加 tacz:extended_mag_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:extended_mag_1" }
  }).id('tacz:attachment/extended_mag_1');

  // 添加 tacz:extended_mag_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 20 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 8 },
      { "item": { "tag": "forge:gems/lapis" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:extended_mag_2" }
  }).id('tacz:attachment/extended_mag_2');

  // 添加 tacz:extended_mag_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 32 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 12 },
      { "item": { "tag": "forge:ingots/mithril" }, "count": 3 }
    ],
    result: { "type": "attachment", "id": "tacz:extended_mag_3" }
  }).id('tacz:attachment/extended_mag_3');

  // 添加 tacz:grip_magpul_afg_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_magpul_afg_2" }
  }).id('tacz:attachment/grip_magpul_afg_2');

  // 添加 tacz:grip_vertical_military 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_vertical_military" }
  }).id('tacz:attachment/grip_vertical_military');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_rk1_b25u" }
  }).id('tacz:attachment/grip_rk1_b25u');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_rk0" }
  }).id('tacz:attachment/grip_rk0');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_osovets_black" }
  }).id('tacz:attachment/grip_osovets_black');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_se_5" }
  }).id('tacz:attachment/grip_se_5');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_cobra" }
  }).id('tacz:attachment/grip_cobra');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_rk6" }
  }).id('tacz:attachment/grip_rk6');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_td" }
  }).id('tacz:attachment/grip_td');

  // 添加 tacz:grip_vertical_ranger 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "item": "mekanism:laser" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_vertical_ranger" }
  }).id('tacz:attachment/grip_vertical_ranger');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "item": "mekanism:laser" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:laser_compact" }
  }).id('tacz:attachment/laser_compact');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 11 },
      { "item": { "item": "mekanism:laser" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:laser_nightstick" }
  }).id('tacz:attachment/laser_nightstick');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 9 },
      { "item": { "item": "mekanism:laser" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:laser_lopro" }
  }).id('tacz:attachment/laser_lopro');

  // 添加 tacz:grip_vertical_talon 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 11 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:grip_vertical_talon" }
  }).id('tacz:attachment/grip_vertical_talon');

  // 添加 tacz:light_extended_mag_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:light_extended_mag_1" }
  }).id('tacz:attachment/light_extended_mag_1');

  // 添加 tacz:light_extended_mag_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:gems/lapis" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:light_extended_mag_2" }
  }).id('tacz:attachment/light_extended_mag_2');

  // 添加 tacz:light_extended_mag_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:gems/lapis" }, "count": 8 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:light_extended_mag_3" }
  }).id('tacz:attachment/light_extended_mag_3');

  // 添加 tacz:muzzle_brake_cthulhu 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_brake_cthulhu" }
  }).id('tacz:attachment/muzzle_brake_cthulhu');

  // 添加 tacz:muzzle_brake_cyclone_d2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_brake_cyclone_d2" }
  }).id('tacz:attachment/muzzle_brake_cyclone_d2');

  // 添加 tacz:muzzle_brake_pioneer 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_brake_pioneer" }
  }).id('tacz:attachment/muzzle_brake_pioneer');

  // 添加 tacz:muzzle_brake_trex 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_brake_trex" }
  }).id('tacz:attachment/muzzle_brake_trex');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/golden" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "tacz:deagle_golden_long_barrel" }
  }).id('tacz:attachment/deagle_golden_long_barrel');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/iron" }, "count": 6 },
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_refit_iron_spike" }
  }).id('create_armorer:attachment/muzzle_refit_iron_spike');

  // 添加 tacz:muzzle_compensator_trident 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_compensator_trident" }
  }).id('tacz:attachment/muzzle_compensator_trident');

  // 添加 tacz:muzzle_silencer_knight_qd 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:leather" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_knight_qd" }
  }).id('tacz:attachment/muzzle_silencer_knight_qd');

  // 添加 tacz:muzzle_silencer_mirage 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_mirage" }
  }).id('tacz:attachment/muzzle_silencer_mirage');

  // 添加 tacz:muzzle_silencer_phantom_s1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:leather" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_phantom_s1" }
  }).id('tacz:attachment/muzzle_silencer_phantom_s1');

  // 添加 tacz:muzzle_silencer_ptilopsis 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_ptilopsis" }
  }).id('tacz:attachment/muzzle_silencer_ptilopsis');

  // 添加 tacz:muzzle_silencer_ursus 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:leather" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_ursus" }
  }).id('tacz:attachment/muzzle_silencer_ursus');

  // 添加 tacz:muzzle_silencer_vulture 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:leather" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:muzzle_silencer_vulture" }
  }).id('tacz:attachment/muzzle_silencer_vulture');

  // 添加 tacz:oem_stock_heavy 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:leather" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "tacz:oem_stock_heavy" }
  }).id('tacz:attachment/oem_stock_heavy');

  // 添加 tacz:oem_stock_light 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:leather" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:oem_stock_light" }
  }).id('tacz:attachment/oem_stock_light');

  // 添加 tacz:oem_stock_tactical 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:oem_stock_tactical" }
  }).id('tacz:attachment/oem_stock_tactical');

  // 添加 tacz:scope_acog_ta31 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_acog_ta31" }
  }).id('tacz:attachment/scope_acog_ta31');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_contender" }
  }).id('tacz:attachment/scope_contender');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 12 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_hamr" }
  }).id('tacz:attachment/scope_hamr');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/blue_steel" }, "count": 12 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_mk5hd" }
  }).id('tacz:attachment/scope_mk5hd');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/blue_steel" }, "count": 12 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_vudu" }
  }).id('tacz:attachment/scope_vudu');

  // 添加 tacz:scope_elcan_4x 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 5 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_elcan_4x" }
  }).id('tacz:attachment/scope_elcan_4x');

  // 添加 tacz:scope_lpvo_1_6 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 4 },
      { "item": { "tag": "forge:dusts/glowstone" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_lpvo_1_6" }
  }).id('tacz:attachment/scope_lpvo_1_6');

  // 添加 tacz:scope_retro_2x 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_retro_2x" }
  }).id('tacz:attachment/scope_retro_2x');

  // 添加 tacz:scope_standard_8x 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 8 },
      { "item": { "tag": "forge:dusts/glowstone" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_standard_8x" }
  }).id('tacz:attachment/scope_standard_8x');

  // 添加 tacz:sight_552 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 5 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 6 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_552" }
  }).id('tacz:attachment/sight_552');

  // 添加 tacz:sight_coyote 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_coyote" }
  }).id('tacz:attachment/sight_coyote');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_okp7" }
  }).id('tacz:attachment/sight_okp7');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_deltapoint_rifle" }
  }).id('tacz:attachment/sight_deltapoint_rifle');


  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_acro_pistol" }
  }).id('tacz:attachment/sight_acro_pistol');


  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_pk06_pistol" }
  }).id('tacz:attachment/sight_pk06_pistol');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_deltapoint_pistol" }
  }).id('tacz:attachment/sight_deltapoint_pistol');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_fastfire_pistol" }
  }).id('tacz:attachment/sight_fastfire_pistol');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_pk06_rifle" }
  }).id('tacz:attachment/sight_pk06_rifle');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_srs_02" }
  }).id('tacz:attachment/sight_srs_02');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_fastfire_rifle" }
  }).id('tacz:attachment/sight_fastfire_rifle');

  // 添加 tacz:sight_exp3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 14 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 5 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_exp3" }
  }).id('tacz:attachment/sight_exp3');

  // 添加 tacz:sight_rmr_dot 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_rmr_dot" }
  }).id('tacz:attachment/sight_rmr_dot');

  // 添加 tacz:sight_sro_dot 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_sro_dot" }
  }).id('tacz:attachment/sight_sro_dot');

  // 添加 tacz:sight_t1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 1 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_t1" }
  }).id('tacz:attachment/sight_t1');

  // 添加 tacz:sight_t2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 1 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_t2" }
  }).id('tacz:attachment/sight_t2');

  // 添加 tacz:sight_uh1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 15 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:sight_uh1" }
  }).id('tacz:attachment/sight_uh1');

  // 添加 tacz:sniper_extended_mag_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "tacz:sniper_extended_mag_1" }
  }).id('tacz:attachment/sniper_extended_mag_1');

  // 添加 tacz:sniper_extended_mag_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 26 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 12 },
      { "item": { "tag": "forge:gems/lapis" }, "count": 12 }
    ],
    result: { "type": "attachment", "id": "tacz:sniper_extended_mag_2" }
  }).id('tacz:attachment/sniper_extended_mag_2');

  // 添加 tacz:sniper_extended_mag_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 36 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 16 },
      { "item": { "tag": "forge:gems/certus_quartz" }, "count": 8 },
      { "item": { "tag": "forge:ingots/mithril" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:sniper_extended_mag_3" }
  }).id('tacz:attachment/sniper_extended_mag_3');

  // 添加 tacz:stock_carbon_bone_c5 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:leather" }, "count": 3 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_carbon_bone_c5" }
  }).id('tacz:attachment/stock_carbon_bone_c5');

  // 添加 tacz:stock_militech_b5 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:leather" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_militech_b5" }
  }).id('tacz:attachment/stock_militech_b5');

  // 添加 tacz:stock_tactical_ar 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_tactical_ar" }
  }).id('tacz:attachment/stock_tactical_ar');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_m4ss" }
  }).id('tacz:attachment/stock_m4ss');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_hk_slim_line" }
  }).id('tacz:attachment/stock_hk_slim_line');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_sba3" }
  }).id('tacz:attachment/stock_sba3');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_ripstock" }
  }).id('tacz:attachment/stock_ripstock');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:tacz:stock_ak12" }
  }).id('tacz:attachment/stock_ak12');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 18 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 4 },
      { "item": { "tag": "forge:leather" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "tacz:stock_moe" }
  }).id('tacz:attachment/stock_moe');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 2 },
    ],
    result: { "type": "attachment", "id": "bf1:raider_club" }
  }).id('bf1:attachment/raider_club');
  // 添加 tacz:aa12 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:aa12" }
  }).id('tacz:gun/aa12');

  // 添加 tacz:ai_awp 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 }
    ],
    result: { "type": "gun", "id": "tacz:ai_awp" }
  }).id('tacz:gun/ai_awp');

  // 添加 tacz:ak47 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:ak47", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/ak47');

  // 添加 tacz:aug 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:aug" }
  }).id('tacz:gun/aug');

  // 添加 tacz:cz75 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 }
    ],
    result: { "type": "gun", "id": "tacz:cz75" }
  }).id('tacz:gun/cz75');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 }
    ],
    result: { "type": "gun", "id": "tacz:b93r" }
  }).id('tacz:gun/b93r');

  // 添加 tacz:db_long 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 18 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:db_long" }
  }).id('tacz:gun/db_long');

  // 添加 tacz:db_short 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "tacz:db_long" } }, "count": 1 }
    ],
    result: { "type": "gun", "id": "tacz:db_short" }
  }).id('tacz:gun/db_short');

  // 添加 tacz:deagle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:deagle" }
  }).id('tacz:gun/deagle');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "tacz:deagle" } }, "count": 1 },
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:timeless50" }
  }).id('tacz:gun/timeless50');

  // 添加 tacz:deagle_golden 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:deagle_golden" }
  }).id('tacz:gun/deagle_golden');

  // 添加 tacz:glock_17 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 24 }
    ],
    result: { "type": "gun", "id": "tacz:glock_17" }
  }).id('tacz:gun/glock_17');

  // 添加 tacz:hk416d 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:hk416d", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/hk416d');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:g36k", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/g36k');

  // 添加 tacz:hk_g3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:hk_g3", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/hk_g3');

  // 添加 tacz:hk_mp5a5 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:hk_mp5a5" }
  }).id('tacz:gun/hk_mp5a5');

  // 添加 tacz:m107 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 48 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 }
    ],
    result: { "type": "gun", "id": "tacz:m107" }
  }).id('tacz:gun/m107');

  // 添加 tacz:m16a1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:m16a1" }
  }).id('tacz:gun/m16a1');

  // 添加 tacz:m16a4 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:m16a4" }
  }).id('tacz:gun/m16a4');

  // 添加 tacz:m1911 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 8 },
      { "item": { "tag": "minecraft:logs" }, "count": 5 }
    ],
    result: { "type": "gun", "id": "tacz:m1911" }
  }).id('tacz:gun/m1911');

  // 添加 tacz:m249 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "tacz:m249" }
  }).id('tacz:gun/m249');

  // 添加 tacz:m320 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "tacz:m320" }
  }).id('tacz:gun/m320');

  // 添加 tacz:m4a1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:m4a1", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/m4a1');

  // 添加 tacz:m700 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 12 }
    ],
    result: { "type": "gun", "id": "tacz:m700" }
  }).id('tacz:gun/m700');

  // 添加 tacz:m870 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 22 },
      { "item": { "tag": "minecraft:logs" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:m870" }
  }).id('tacz:gun/m870');

  // 添加 tacz:m95 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "tacz:m95" }
  }).id('tacz:gun/m95');

  // 添加 tacz:mk14 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:mk14" }
  }).id('tacz:gun/mk14');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:spr15hb" }
  }).id('tacz:gun/spr15hb');

  // 添加 tacz:p320 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 }
    ],
    result: { "type": "gun", "id": "tacz:p320" }
  }).id('tacz:gun/p320');

  // 添加 tacz:p90 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:p90" }
  }).id('tacz:gun/p90');

  // 添加 tacz:qbz_95 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:qbz_95" }
  }).id('tacz:gun/qbz_95');

  // 添加 tacz:rpg7 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "tacz:rpg7" }
  }).id('tacz:gun/rpg7');

  // 添加 tacz:rpk 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "tacz:rpk", "attachments": { "stock": "tacz:oem_stock_heavy" } }
  }).id('tacz:gun/rpk');

  // 添加 tacz:scar_h 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:scar_h" }
  }).id('tacz:gun/scar_h');

  // 添加 tacz:scar_l 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:scar_l" }
  }).id('tacz:gun/scar_l');

  // 添加 tacz:sks_tactical 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:sks_tactical", "attachments": { "stock": "tacz:oem_stock_tactical" } }
  }).id('tacz:gun/sks_tactical');

  // 添加 tacz:type_81 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 7 },
      { "item": { "tag": "minecraft:logs" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:type_81" }
  }).id('tacz:gun/type_81');

  // 添加 tacz:ump45 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 48 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "tacz:ump45" }
  }).id('tacz:gun/ump45');

  // 添加 tacz:uzi 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 }
    ],
    result: { "type": "gun", "id": "tacz:uzi" }
  }).id('tacz:gun/uzi');

  // 添加 tacz:vector45 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:vector45" }
  }).id('tacz:gun/vector45');
  //沉浸军械
  // 添加 immersive_armorer:burst_capacitor 的配�?

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersiveengineering:electron_tube" }, "count": 10 },
      { "item": { "tag": "forge:plates/steel" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:burst_capacitor", "count": 48 }
  }).id('immersive_armorer:ammo/burst_capacitor');

  // 添加 immersive_armorer:chemical 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersivepetroleum:gasoline_bucket" }, "count": 1 },
      { "item": { "item": "immersiveengineering:jerrycan" }, "count": 1 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:chemical", "count": 1 }
  }).id('immersive_armorer:ammo/chemical');

  // 添加 immersive_armorer:cut_steel_rod 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:rods/steel" }, "count": 2 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:cut_steel_rod", "count": 16 }
  }).id('immersive_armorer:ammo/cut_steel_rod');

  // 添加 immersive_armorer:high_power_capacitor 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersiveengineering:electron_tube" }, "count": 16 },
      { "item": { "tag": "forge:plates/steel" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:high_power_capacitor", "count": 32 }
  }).id('immersive_armorer:ammo/high_power_capacitor');

  // 添加 immersive_armorer:stream_capacitor 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersiveengineering:electron_tube" }, "count": 8 },
      { "item": { "tag": "forge:plates/steel" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "immersive_armorer:stream_capacitor", "count": 60 }
  }).id('immersive_armorer:ammo/stream_capacitor');

  // 添加 immersive_armorer:bayonet_revolver 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:bayonet_revolver" }
  }).id('immersive_armorer:attachment/bayonet_revolver');

  // 添加 immersive_armorer:extended_capacitor_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:ingots/bronze" }, "count": 4 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_capacitor_1" }
  }).id('immersive_armorer:attachment/extended_capacitor_1');

  // 添加 immersive_armorer:extended_capacitor_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:ingots/bronze" }, "count": 8 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 2 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_capacitor_2" }
  }).id('immersive_armorer:attachment/extended_capacitor_2');

  // 添加 immersive_armorer:extended_capacitor_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:ingots/bronze" }, "count": 10 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 6 },
      { "item": { "item": "immersiveengineering:component_electronic" }, "count": 1 },
      { "item": { "item": "mekanism:structural_glass" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_capacitor_3" }
  }).id('immersive_armorer:attachment/extended_capacitor_3');

  // 添加 immersive_armorer:extended_jar_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "item": "minecraft:bucket" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_jar_1" }
  }).id('immersive_armorer:attachment/extended_jar_1');

  // 添加 immersive_armorer:extended_jar_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 6 },
      { "item": { "item": "minecraft:bucket" }, "count": 3 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_jar_2" }
  }).id('immersive_armorer:attachment/extended_jar_2');

  // 添加 immersive_armorer:extended_jar_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "item": "minecraft:bucket" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:extended_jar_3" }
  }).id('immersive_armorer:attachment/extended_jar_3');

  // 添加 immersive_armorer:grip_aluminium 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:grip_aluminium" }
  }).id('immersive_armorer:attachment/grip_aluminium');

  // 添加 immersive_armorer:grip_treated_wood 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:grip_treated_wood" }
  }).id('immersive_armorer:attachment/grip_treated_wood');

  // 添加 immersive_armorer:grip_twined 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:attachment", "nbt": { "AttachmentId": "immersive_armorer:grip_treated_wood" } }, "count": 1 },
      { "item": { "tag": "forge:string" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:grip_twined" }
  }).id('immersive_armorer:attachment/grip_twined');

  // 添加 immersive_armorer:muzzle_extended_barrel 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_extended_barrel" }
  }).id('immersive_armorer:attachment/muzzle_extended_barrel');

  // 添加 immersive_armorer:muzzle_focused_nozzle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_focused_nozzle" }
  }).id('immersive_armorer:attachment/muzzle_focused_nozzle');

  // 添加 immersive_armorer:muzzle_refit_electromagnetic_accelerator 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 8 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_electromagnetic_accelerator" }
  }).id('immersive_armorer:attachment/muzzle_refit_electromagnetic_accelerator');

  // 添加 immersive_armorer:muzzle_refit_face_melter 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_face_melter" }
  }).id('immersive_armorer:attachment/muzzle_refit_face_melter');

  // 添加 immersive_armorer:muzzle_refit_fuel_stream_diffuser 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_fuel_stream_diffuser" }
  }).id('immersive_armorer:attachment/muzzle_refit_fuel_stream_diffuser');

  // 添加 immersive_armorer:muzzle_refit_he_compound 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 4 },
      { "item": { "item": "minecraft:blaze_powder" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_he_compound" }
  }).id('immersive_armorer:attachment/muzzle_refit_he_compound');

  // 添加 immersive_armorer:muzzle_refit_melted_metal_spitter 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_melted_metal_spitter" }
  }).id('immersive_armorer:attachment/muzzle_refit_melted_metal_spitter');

  // 添加 immersive_armorer:muzzle_refit_pressure_wave 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/bronze" }, "count": 8 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "item": "minecraft:blaze_powder" }, "count": 8 },
      { "item": { "item": "minecraft:gunpowder" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:muzzle_refit_pressure_wave" }
  }).id('immersive_armorer:attachment/muzzle_refit_pressure_wave');

  // 添加 immersive_armorer:scope_spyglass_ie 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:ingots/bronze" }, "count": 6 },
      { "item": { "tag": "forge:ingots/electrum" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:scope_spyglass_ie" }
  }).id('immersive_armorer:attachment/scope_spyglass_ie');

  // 添加 immersive_armorer:sight_light 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "item": "immersiveengineering:wirecoil_steel" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:sight_light" }
  }).id('immersive_armorer:attachment/sight_light');

  // 添加 immersive_armorer:sight_simple_reflex 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:sight_simple_reflex" }
  }).id('immersive_armorer:attachment/sight_simple_reflex');

  // 添加 immersive_armorer:stock_crude 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:stock_crude" }
  }).id('immersive_armorer:attachment/stock_crude');

    e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:stock_steady" }
  }).id('immersive_armorer:attachment/stock_steady');

    e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 13 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:stock_heavy" }
  }).id('immersive_armorer:attachment/stock_heavy');

  // 添加 immersive_armorer:stock_simple 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "item": "immersiveengineering:treated_wood_horizontal" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "immersive_armorer:stock_simple" }
  }).id('immersive_armorer:attachment/stock_simple');

  // 添加 immersive_armorer:assult_rifle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 48 },
      { "item": { "item": "immersiveengineering:toolupgrade_revolver_magazine" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 16 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:assult_rifle" }
  }).id('immersive_armorer:gun/assult_rifle');


  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:short_smg" }
  }).id('immersive_armorer:gun/short_smg');
  // 添加 immersive_armorer:chemical_thrower 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:mithril_parts" }, "count": 1 },
      { "item": { "item": "immersiveengineering:chemthrower" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:chemical_thrower" }
  }).id('immersive_armorer:gun/chemical_thrower');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:mithril_parts" }, "count": 1 },
      { "item": { "item": "immersiveengineering:chemthrower" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:plasma_gun" }
  }).id('immersive_armorer:gun/plasma_gun');

  // 添加 immersive_armorer:pistol_9mm 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 9 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:pistol_9mm" }
  }).id('immersive_armorer:gun/pistol_9mm');

  // 添加 immersive_armorer:pump_shotgun 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "forge:treated_wood" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:pump_shotgun" }
  }).id('immersive_armorer:gun/pump_shotgun');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "immersive_armorer:pump_shotgun" } }, "count": 1 },
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "forge:treated_wood" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:double_shotgun" }
  }).id('immersive_armorer:gun/double_shotgun');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 9 },
      { "item": { "item": "fallout:steel_parts" }, "count": 48 },
      { "item": { "tag": "forge:treated_wood" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:dual_barrel_cannon" }
  }).id('immersive_armorer:gun/dual_barrel_cannon');

  // 添加 immersive_armorer:railgun 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersiveengineering:railgun" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_a" }, "count": 16 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:railgun" }
  }).id('immersive_armorer:gun/railgun');

  // 添加 immersive_armorer:revolver 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "immersiveengineering:revolver" }, "count": 1 },
      { "item": { "item": "fallout:steel_parts" }, "count": 28 },
      { "item": { "tag": "forge:treated_wood" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:revolver" }
  }).id('immersive_armorer:gun/revolver');

  // 添加 immersive_armorer:standard_rail_pistol_mk2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 15 },
      { "item": { "tag": "forge:treated_wood" }, "count": 4 },
      { "item": { "item": "immersiveengineering:component_electronic_adv" }, "count": 2 },
      { "item": { "item": "immersiveengineering:component_electronic" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:standard_rail_pistol_mk2" }
  }).id('immersive_armorer:gun/standard_rail_pistol_mk2');

  // 添加 immersive_armorer:standard_rail_pistol_mk3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "immersive_armorer:standard_rail_pistol_mk2" } }, "count": 1 },
      { "item": { "item": "immersiveengineering:component_electronic_adv" }, "count": 2 },
      { "item": { "item": "immersiveengineering:toolupgrade_railgun_capacitors" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:standard_rail_pistol_mk3" }
  }).id('immersive_armorer:gun/standard_rail_pistol_mk3');

  // 添加 immersive_armorer:standard_rail_pistol_mk4 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "immersive_armorer:standard_rail_pistol_mk2" } }, "count": 1 },
      { "item": { "item": "immersiveengineering:logic_circuit" }, "count": 1 },
      { "item": { "item": "immersiveengineering:component_electronic_adv" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:standard_rail_pistol_mk4" }
  }).id('immersive_armorer:gun/standard_rail_pistol_mk4');

  // 添加 immersive_armorer:standard_rail_smg_mk1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "immersive_armorer:standard_rail_pistol_mk2" } }, "count": 1 },
      { "item": { "item": "immersiveengineering:logic_circuit" }, "count": 1 },
      { "item": { "item": "immersiveengineering:component_electronic_adv" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "immersive_armorer:standard_rail_smg_mk1" }
  }).id('immersive_armorer:gun/standard_rail_smg_mk1');

  //赛博军械
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/lead" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_buckshot", "count": 48 }
  }).id('cyber_armorer:ammo/bullet_buckshot');

  // 添加 cyber_armorer:bullet_buckshot_smart 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:circuits/advanced" }, "count": 16 },
      { "item": { "tag": "forge:ingots/refined_glowstone" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 3 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_buckshot_smart", "count": 30 }
  }).id('cyber_armorer:ammo/bullet_buckshot_smart');

  // 添加 cyber_armorer:bullet_pistol 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 12 },
      { "item": { "tag": "forge:gunpowder" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_pistol", "count": 60 }
  }).id('cyber_armorer:ammo/bullet_pistol');

  // 添加 cyber_armorer:bullet_pistol_smart 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:circuits/advanced" }, "count": 16 },
      { "item": { "tag": "forge:ingots/refined_glowstone" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 3 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_pistol_smart", "count": 24 }
  }).id('cyber_armorer:ammo/bullet_pistol_smart');

  // 添加 cyber_armorer:bullet_rifle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_rifle", "count": 48 }
  }).id('cyber_armorer:ammo/bullet_rifle');

  // 添加 cyber_armorer:bullet_rifle_smart 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 5 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_rifle_smart", "count": 30 }
  }).id('cyber_armorer:ammo/bullet_rifle_smart');

  // 添加 cyber_armorer:bullet_sniper 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 24 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_sniper", "count": 24 }
  }).id('cyber_armorer:ammo/bullet_sniper');

  // 添加 cyber_armorer:bullet_sniper_smart 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_sniper_smart", "count": 15 }
  }).id('cyber_armorer:ammo/bullet_sniper_smart');

  // 添加 cyber_armorer:cyber_extended_mag_1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:cyber_extended_mag_1" }
  }).id('cyber_armorer:attachment/cyber_extended_mag_1');

  // 添加 cyber_armorer:cyber_extended_mag_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:attachment", "nbt": { "AttachmentId": "cyber_armorer:cyber_extended_mag_1" } }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:cyber_extended_mag_2" }
  }).id('cyber_armorer:attachment/cyber_extended_mag_2');

  // 添加 cyber_armorer:cyber_extended_mag_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:attachment", "nbt": { "AttachmentId": "cyber_armorer:cyber_extended_mag_2" } }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:cyber_extended_mag_3" }
  }).id('cyber_armorer:attachment/cyber_extended_mag_3');

  // 添加 cyber_armorer:mod_ap 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_ap" }
  }).id('cyber_armorer:attachment/mod_ap');

  // 添加 cyber_armorer:mod_apex 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_apex" }
  }).id('cyber_armorer:attachment/mod_apex');

  // 添加 cyber_armorer:mod_blood 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 },
      { "item": { "item": "fallout:steel_parts" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_blood" }
  }).id('cyber_armorer:attachment/mod_blood');

  // 添加 cyber_armorer:mod_consentrate 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_consentrate" }
  }).id('cyber_armorer:attachment/mod_consentrate');

  // 添加 cyber_armorer:mod_equal 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_equal" }
  }).id('cyber_armorer:attachment/mod_equal');

  // 添加 cyber_armorer:mod_hurt 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 },
      { "item": { "item": "fallout:steel_parts" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_hurt" }
  }).id('cyber_armorer:attachment/mod_hurt');

  // 添加 cyber_armorer:mod_insendiary 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_insendiary" }
  }).id('cyber_armorer:attachment/mod_insendiary');

  // 添加 cyber_armorer:mod_static 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:mod_static" }
  }).id('cyber_armorer:attachment/mod_static');

  // 添加 cyber_armorer:muzzle_02 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_02" }
  }).id('cyber_armorer:attachment/muzzle_02');

  // 添加 cyber_armorer:muzzle_03 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_03" }
  }).id('cyber_armorer:attachment/muzzle_03');

  // 添加 cyber_armorer:muzzle_04 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_04" }
  }).id('cyber_armorer:attachment/muzzle_04');

  // 添加 cyber_armorer:muzzle_05 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_05" }
  }).id('cyber_armorer:attachment/muzzle_05');

  // 添加 cyber_armorer:muzzle_06 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_06" }
  }).id('cyber_armorer:attachment/muzzle_06');

  // 添加 cyber_armorer:muzzle_07 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:muzzle_07" }
  }).id('cyber_armorer:attachment/muzzle_07');

  // 添加 cyber_armorer:optic_01 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 14 },
      { "item": { "item": "fallout:steel_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:optic_01" }
  }).id('cyber_armorer:attachment/optic_01');

  // 添加 cyber_armorer:optic_02 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 14 },
      { "item": { "item": "fallout:steel_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:optic_02" }
  }).id('cyber_armorer:attachment/optic_02');

  // 添加 cyber_armorer:scope_01 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:mithril_parts" }, "count": 2 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:scope_01" }
  }).id('cyber_armorer:attachment/scope_01');

  // 添加 cyber_armorer:sight_01 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:sight_01" }
  }).id('cyber_armorer:attachment/sight_01');

  // 添加 cyber_armorer:sight_02 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:sight_02" }
  }).id('cyber_armorer:attachment/sight_02');

  // 添加 cyber_armorer:sight_03 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:sight_03" }
  }).id('cyber_armorer:attachment/sight_03');

  // 添加 cyber_armorer:sight_04 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:sight_04" }
  }).id('cyber_armorer:attachment/sight_04');

  // 添加 cyber_armorer:sight_05 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 8 },
      { "item": { "item": "fallout:steel_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "cyber_armorer:sight_05" }
  }).id('cyber_armorer:attachment/sight_05');

  // 添加 cyber_armorer:3516 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:unity" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 16 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:3516" }

  }).id('cyber_armorer:gun/3516');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 12 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture" }
  }).id('cyber_armorer:gun/overture');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:overture" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture_amnesty" }
  }).id('cyber_armorer:gun/overture_amnesty');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "AttachmentId": "cyber_armorer:sight_05" } }, "count": 1 },
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:overture" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture_reliable" }
  }).id('cyber_armorer:gun/overture_reliable');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:overture" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture_crash" }
  }).id('cyber_armorer:gun/overture_crash');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:overture" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture_archangel" }
  }).id('cyber_armorer:gun/overture_archangel');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:overture" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:overture_rosco" }
  }).id('cyber_armorer:gun/overture_rosco');

  // 添加 cyber_armorer:ajax 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "tacz:ak47" } }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:ajax" }
  }).id('cyber_armorer:gun/ajax');

  // 添加 cyber_armorer:ajax_moron_labe 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:ajax" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:ajax_moron_labe" }
  }).id('cyber_armorer:gun/ajax_moron_labe');

  // 添加 cyber_armorer:ajax_pit_bull 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:ajax" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:ajax_pit_bull" }
  }).id('cyber_armorer:gun/ajax_pit_bull');

  // 添加 cyber_armorer:carnage 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:carnage" }
  }).id('cyber_armorer:gun/carnage');

  // 添加 cyber_armorer:carnage_guts 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:carnage" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:carnage_guts" }
  }).id('cyber_armorer:gun/carnage_guts');

  // 添加 cyber_armorer:copperhead 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:copperhead" }
  }).id('cyber_armorer:gun/copperhead');

  // 添加 cyber_armorer:copperhead_psalm 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:copperhead" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:copperhead_psalm" }
  }).id('cyber_armorer:gun/copperhead_psalm');

  // 添加 cyber_armorer:g58_dian 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 1 },
      { "item": { "item": "mekanism:elite_control_circuit" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:g58_dian" }
  }).id('cyber_armorer:gun/g58_dian');

  // 添加 cyber_armorer:g58_dian_yinglong 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:g58_dian" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "mekanism:ultimate_control_circuit" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:g58_dian_yinglong" }
  }).id('cyber_armorer:gun/g58_dian_yinglong');

  // 添加 cyber_armorer:grad 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 12 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:grad" }
  }).id('cyber_armorer:gun/grad');

  // 添加 cyber_armorer:grad_05 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:grad" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:grad_05" }
  }).id('cyber_armorer:gun/grad_05');

  // 添加 cyber_armorer:grad_borzaya 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:grad" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:grad_borzaya" }
  }).id('cyber_armorer:gun/grad_borzaya');

  // 添加 cyber_armorer:grad_overwatch 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:grad" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:grad_overwatch" }
  }).id('cyber_armorer:gun/grad_overwatch');

  // 添加 cyber_armorer:grad_sparky 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "immersive_armorer:railgun" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:grad_sparky" }
  }).id('cyber_armorer:gun/grad_sparky');

  // 添加 cyber_armorer:m2038 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:m2038" }
  }).id('cyber_armorer:gun/m2038');

  // 添加 cyber_armorer:m2038_bloody_maria 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:m2038" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:m2038_bloody_maria" }
  }).id('cyber_armorer:gun/m2038_bloody_maria');

  // 添加 cyber_armorer:m2038_the_headsman 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:m2038" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:m2038_the_headsman" }
  }).id('cyber_armorer:gun/m2038_the_headsman');

  // 添加 cyber_armorer:mantis_blade 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 24 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:mantis_blade", "nbt": { "GunCurrentAmmoCount": 1 } }
  }).id('cyber_armorer:gun/mantis_blade');

  // 添加 cyber_armorer:mantis_blade_maxtac 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:mantis_blade" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:mantis_blade_maxtac" }
  }).id('cyber_armorer:gun/mantis_blade_maxtac');

  // 添加 cyber_armorer:saratoga 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "tacz:ump45" } }, "count": 1 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:saratoga" }
  }).id('cyber_armorer:gun/saratoga');

  // 添加 cyber_armorer:saratoga_fenrir 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:saratoga" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:saratoga_fenrir" }
  }).id('cyber_armorer:gun/saratoga_fenrir');

  // 添加 cyber_armorer:saratoga_problem_solver 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:saratoga" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:saratoga_problem_solver" }
  }).id('cyber_armorer:gun/saratoga_problem_solver');

  // 添加 cyber_armorer:unity 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 12 },
      { "item": { "item": "fallout:steel_parts" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:unity" }
  }).id('cyber_armorer:gun/unity');

  // 添加 cyber_armorer:unity_cheetah 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:unity" } }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:unity_cheetah" }
  }).id('cyber_armorer:gun/unity_cheetah');

  // 添加 cyber_armorer:unity_her_majesty 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:unity" } }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 16 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:unity_her_majesty" }
  }).id('cyber_armorer:gun/unity_her_majesty');

  // 添加 cyber_armorer:yukimura 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:black_steel_parts" }, "count": 12 },
      { "item": { "item": "fallout:mithril_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:yukimura" }
  }).id('cyber_armorer:gun/yukimura');

  // 添加 cyber_armorer:yukimura_genjiroh 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:yukimura" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "mekanism:elite_control_circuit" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:yukimura_genjiroh" }
  }).id('cyber_armorer:gun/yukimura_genjiroh');

  // 添加 cyber_armorer:yukimura_skippy 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "cyber_armorer:yukimura" } }, "count": 1 },
      { "item": { "item": "fallout:redblue_steel_parts" }, "count": 1 },
      { "item": { "item": "mekanism:elite_control_circuit" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "cyber_armorer:yukimura_skippy" }
  }).id('cyber_armorer:gun/yukimura_skippy');
  //巧克力人
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "minecraft:logs" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:bayonet_cb11" }
  }).id('bf1:attachment/bayonet_cb11');

  // 添加 qkl:bayonet_fkc1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 15 }
    ],
    result: { "type": "attachment", "id": "qkl:bayonet_fkc1" }
  }).id('bf1:attachment/bayonet_fkc1');

  // 添加 qkl:m1917_bayonet 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 5 },
      { "item": { "tag": "minecraft:logs" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:m1917_bayonet" }
  }).id('bf1:attachment/m1917_bayonet');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 5 },
      { "item": { "tag": "minecraft:logs" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:m1905_bayonet" }
  }).id('bf1:attachment/m1905_bayonet');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 5 },
      { "item": { "tag": "minecraft:logs" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:hy88_bayonet" }
  }).id('bf1:attachment/hy88_bayonet');

  // 添加 qkl:m1925_bayonet 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "qkl:m1925_bayonet" }
  }).id('bf1:attachment/m1925_bayonet');

  // 添加 qkl:scope_sigk 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:scope_sigk" }
  }).id('bf1:attachment/scope_sigk');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 10 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "qkl:scope_sigk2" }
  }).id('bf1:attachment/scope_sigk2');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/brass" }, "count": 10 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "tacz:scope_1873_6x" }
  }).id('tacz:attachment/scope_1873_6x');


  // 添加 qkl:sl1 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 28 },
      { "item": { "tag": "forge:ingots/bronze" }, "count": 15 }
    ],
    result: { "type": "attachment", "id": "qkl:sl1" }
  }).id('bf1:attachment/sl1');

  // 添加 qkl:1871 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 22 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:1871" }
  }).id('bf1:gun/1871');

  // 添加 qkl:1897 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 22 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:1897" }
  }).id('bf1:gun/1897');

  // 添加 qkl:1912 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 18 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:1912" }
  }).id('bf1:gun/1912');

  // 添加 qkl:1912p16 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 2 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "qkl:1912" } }, "count": 1 }
    ],
    result: { "type": "gun", "id": "qkl:1912p16" }
  }).id('bf1:gun/1912p16');

  // 添加 qkl:clf10 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 22 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:clf10" }
  }).id('bf1:gun/clf10');

  // 添加 qkl:csg19 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "qkl:csg19" }
  }).id('bf1:gun/csg19');

  // 添加 qkl:hy88 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 28 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:hy88" }
  }).id('bf1:gun/hy88');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:cbr11" }
  }).id('bf1:gun/cbr11');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "m1903a3" }
  }).id('bf1:gun/m1903a3');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "qkl:cbr11" } }, "count": 1 },
      { "item": { "item": "fallout:steel_parts" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "qkl:cbr11sp" }
  }).id('bf1:gun/cbr11sp');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "qkl:cbr11" } }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cbr11r" }
  }).id('bf1:gun/cbr11r');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "qkl:cbr11" } }, "count": 1 },
      { "item": { "item": "fallout:steel_parts" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "cbr11c" }
  }).id('bf1:gun/cbr11c');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 26 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:cbr9" }
  }).id('bf1:gun/cbr9');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 26 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "tacz:springfield1873" }
  }).id('tacz:gun/springfield1873');

  // 添加 qkl:lmg31 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 50 },
      { "item": { "tag": "minecraft:logs" }, "count": 10 }
    ],
    result: { "type": "gun", "id": "qkl:lmg31" }
  }).id('bf1:gun/lmg31');

  // 添加 qkl:mu73 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:mu73" }
  }).id('bf1:gun/mu73');

  // 添加 qkl:mu73m 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "type": "forge:partial_nbt", "item": "tacz:modern_kinetic_gun", "nbt": { "GunId": "qkl:mua73" } }, "count": 1 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:mu73m" }
  }).id('bf1:gun/mu73m');

  // 添加 qkl:mua73 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "qkl:mua73" }
  }).id('bf1:gun/mua73');

  // 添加 qkl:rmg 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 18 }
    ],
    result: { "type": "gun", "id": "qkl:rmg" }
  }).id('bf1:gun/rmg');
  //机动军械
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 5 },
      { "item": { "item": "minecraft:andesite" }, "count": 5 }
    ],
    result: { "type": "attachment", "id": "create_armorer:extended_mag_ca_1" }
  }).id('create_armorer:attachment/extended_mag_ca_1');

  // 添加 create_armorer:extended_mag_ca_2 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/brass" }, "count": 12 },
      { "item": { "item": "fallout:copper_parts" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "create_armorer:extended_mag_ca_2" }
  }).id('create_armorer:attachment/extended_mag_ca_2');

  // 添加 create_armorer:extended_mag_ca_3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/gold" }, "count": 16 },
      { "item": { "item": "fallout:copper_parts" }, "count": 10 }
    ],
    result: { "type": "attachment", "id": "create_armorer:extended_mag_ca_3" }
  }).id('create_armorer:attachment/extended_mag_ca_3');

  // 添加 create_armorer:grip_gantry_shaft 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 2 },
      { "item": { "item": "fallout:copper_parts" }, "count": 1 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "create_armorer:grip_gantry_shaft" }
  }).id('create_armorer:attachment/grip_gantry_shaft');

  // 添加 create_armorer:grip_pipe 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 1 }
    ],
    result: { "type": "attachment", "id": "create_armorer:grip_pipe" }
  }).id('create_armorer:attachment/grip_pipe');

  // 添加 create_armorer:grip_wooden 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 2 },
      { "item": { "tag": "minecraft:logs" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "create_armorer:grip_wooden" }
  }).id('create_armorer:attachment/grip_wooden');

  // 添加 create_armorer:muzzle_pipe 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 9 }
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_pipe" }
  }).id('create_armorer:attachment/muzzle_pipe');

  // 添加 create_armorer:muzzle_refit_brass_retractor 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 12 }
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_refit_brass_retractor" }
  }).id('create_armorer:attachment/muzzle_refit_brass_retractor');

  // 添加 create_armorer:muzzle_refit_energy_blade 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 8 },
      { "item": { "tag": "forge:glass/light_blue" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_refit_energy_blade" }
  }).id('create_armorer:attachment/muzzle_refit_energy_blade');

  // 添加 create_armorer:muzzle_refit_steel_spike 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 4 }
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_refit_steel_spike" }
  }).id('create_armorer:attachment/muzzle_refit_steel_spike');

  // 添加 create_armorer:muzzle_refit_lava_perfusion_bottle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:lava_bucket" }, "count": 2 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "item": "fallout:copper_parts" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "create_armorer:muzzle_refit_lava_perfusion_bottle" }
  }).id('create_armorer:attachment/muzzle_refit_lava_perfusion_bottle');

  // 添加 create_armorer:scope_telephoto 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 3 },
      { "item": { "item": "fallout:copper_parts" }, "count": 14 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 3 }
    ],
    result: { "type": "attachment", "id": "create_armorer:scope_telephoto" }
  }).id('create_armorer:attachment/scope_telephoto');

  // 添加 create_armorer:sight_medium_distance 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 12 },
      { "item": { "item": "minecraft:dried_kelp" }, "count": 12 },
      { "item": { "tag": "forge:glass_panes" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "create_armorer:sight_medium_distance" }
  }).id('create_armorer:attachment/sight_medium_distance');

  // 添加 create_armorer:sight_standard 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 4 },
      { "item": { "item": "fallout:copper_parts" }, "count": 6 },
      { "item": { "item": "minecraft:dried_kelp" }, "count": 8 },
      { "item": { "tag": "forge:glass_panes" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "create_armorer:sight_standard" }
  }).id('create_armorer:attachment/sight_standard');

  // 添加 create_armorer:mg_platemag_flywheel 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 64 },
      { "item": { "item": "create:flywheel" }, "count": 1 },
      { "item": { "item": "create:precision_mechanism" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "create_armorer:mg_platemag_flywheel" }
  }).id('create_armorer:gun/mg_platemag_flywheel');

  // 添加 create_armorer:pistol_auto_stress 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 16 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "create_armorer:pistol_auto_stress" }
  }).id('create_armorer:gun/pistol_auto_stress');

  // 添加 create_armorer:pistol_revolver_torque 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 18 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:pistol_revolver_torque" }
  }).id('create_armorer:gun/pistol_revolver_torque');

  // 添加 create_armorer:rifle_assult_crane 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:rifle_assult_crane" }
  }).id('create_armorer:gun/rifle_assult_crane');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 16 },
      { "item": { "item": "create:mechanical_press" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:rifle_assult_roller" }
  }).id('create_armorer:gun/rifle_assult_roller');

  // 添加 create_armorer:shotgun_db_stone 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 24 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "create_armorer:shotgun_db_stone" }
  }).id('create_armorer:gun/shotgun_db_stone');

  // 添加 create_armorer:shotgun_pump_bearing 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 26 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:shotgun_pump_bearing" }
  }).id('create_armorer:gun/shotgun_pump_bearing');

  // 添加 create_armorer:smg_auto_crank 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:smg_auto_crank" }
  }).id('create_armorer:gun/smg_auto_crank');

  // 添加 create_armorer:sniper_semi_clockwork 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 38 },
      { "item": { "item": "create:copper_backtank" }, "count": 1 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:sniper_semi_clockwork" }
  }).id('create_armorer:gun/sniper_semi_clockwork');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 38 },
      { "item": { "item": "create:precision_mechanism" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "create_armorer:sniper_semi_m1" }
  }).id('create_armorer:gun/sniper_semi_m1');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 38 },
      { "item": { "item": "fallout:steel_parts" }, "count": 16 },
      { "item": { "item": "create:precision_mechanism" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "create_armorer:cannon_40mm_salamander" }
  }).id('create_armorer:gun/cannon_40mm_salamander');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:copper_parts" }, "count": 24 },
      { "item": { "item": "fallout:steel_parts" }, "count": 8 },
      { "item": { "item": "create:precision_mechanism" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:gl_revolver_devastator" }
  }).id('create_armorer:gun/gl_revolver_devastator');

  // 添加 create_armorer:special_melee_atomic 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "mekanism:atomic_disassembler" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:special_melee_atomic" }
  }).id('create_armorer:gun/special_melee_atomic');

  // 添加 create_armorer:special_melee_wrench 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/gold" }, "count": 2 },
      { "item": { "tag": "forge:ingots/iron" }, "count": 1 },
      { "item": { "tag": "minecraft:logs" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "create_armorer:special_melee_wrench" }
  }).id('create_armorer:gun/special_melee_wrench');
  //启示�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/lead" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_buckshot", "count": 48 }
  }).id('bf1:ammo/bullet_buckshot');

  // 添加 cyber_armorer:bullet_pistol 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 12 },
      { "item": { "tag": "forge:gunpowder" }, "count": 10 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_pistol", "count": 60 }
  }).id('bf1:ammo/bullet_pistol');

  // 添加 cyber_armorer:bullet_rifle 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 12 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_rifle", "count": 48 }
  }).id('bf1:ammo/bullet_rifle');

  // 添加 cyber_armorer:bullet_sniper 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:plates/brass" }, "count": 24 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 1 },
      { "item": { "tag": "forge:gunpowder" }, "count": 24 }
    ],
    result: { "type": "ammo", "id": "cyber_armorer:bullet_sniper", "count": 24 }
  }).id('bf1:ammo/bullet_sniper');

  // 添加 bf1:ammo_mod_slug 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:crying_obsidian" }, "count": 2 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:gems/quartz" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "bf1:ammo_mod_slug" }
  }).id('bf1:attachment/ammo_mod_slug');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "kaleidoscope_cookery:oil" }, "count": 2 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
    ],
    result: { "type": "attachment", "id": "bf1:ammo_mod_chauchat" }
  }).id('bf1:attachment/ammo_mod_chauchat');


  // 添加 bf1:bayonet_general 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "minecraft:logs" }, "count": 4 },
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 }
    ],
    result: { "type": "attachment", "id": "bf1:bayonet_general" }
  }).id('bf1:attachment/bayonet_general');

  // 添加 bf1:grip_trench_bipods 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 24 }
    ],
    result: { "type": "attachment", "id": "bf1:grip_trench_bipods" }
  }).id('bf1:attachment/grip_trench_bipods');

  // 添加 bf1:marksman_scope 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 3 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 3 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 6 }
    ],
    result: { "type": "attachment", "id": "bf1:marksman_scope" }
  }).id('bf1:attachment/marksman_scope');

  // 添加 bf1:oem_muzzle_choke 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 12 }
    ],
    result: { "type": "attachment", "id": "bf1:oem_muzzle_choke" }
  }).id('bf1:attachment/oem_muzzle_choke');

  // 添加 bf1:sight_nydar 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 8 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 4 },
      { "item": { "tag": "forge:glass" }, "count": 2 }
    ],
    result: { "type": "attachment", "id": "bf1:sight_nydar" }
  }).id('bf1:attachment/sight_nydar');

  // 添加 bf1:sniper_scope 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "forge:ingots/steel" }, "count": 16 },
      { "item": { "tag": "forge:ingots/black_steel" }, "count": 6 },
      { "item": { "tag": "forge:gems/amethyst" }, "count": 6 },
      { "item": { "tag": "forge:dusts/redstone" }, "count": 8 }
    ],
    result: { "type": "attachment", "id": "bf1:sniper_scope" }
  }).id('bf1:attachment/sniper_scope');

  // 添加 bf1:ef46 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "immersivepetroleum:molotov" }, "count": 1 },
      { "item": { "item": "alexscaves:metal_barrel" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "bf1:ef46", "nbt": { "DummyAmmo": 0, "HideFlags": 16 }, "ammo_count": 80 }
  }).id('bf1:gun/ef46');

  // 添加 bf1:f_faust 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "bf1:f_faust", "nbt": { "HideFlags": 16 } }
  }).id('bf1:gun/f_faust');

  // 添加 bf1:handgun 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "bf1:handgun" }
  }).id('bf1:gun/handgun');

  // 添加 bf1:kolibri 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "tag": "minecraft:logs" }, "count": 4 },
      { "item": { "item": "fallout:steel_parts" }, "count": 2 }
    ],
    result: { "type": "gun", "id": "bf1:kolibri" }
  }).id('bf1:gun/kolibri');

  // 添加 bf1:lewis 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "alexscaves:metal_barrel" }, "count": 1 }
    ],
    result: { "type": "gun", "id": "bf1:lewis", "attachments": { "stock": "tacz:oem_stock_heavy" } }
  }).id('bf1:gun/lewis');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:chauchat", "attachments": { "stock": "tacz:oem_stock_heavy" } }
  }).id('bf1:chauchat');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 42 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:liu", "attachments": { "stock": "tacz:oem_stock_heavy" } }
  }).id('bf1:liu');
  // 添加 bf1:m1916 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:m1916", "ammo_count": 25 }
  }).id('bf1:gun/m1916');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "bf1:rsc1917", "ammo_count": 25 }
  }).id('bf1:gun/rsc1917');
  // 添加 bf1:man_m95 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 24 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:man_m95" }
  }).id('bf1:gun/man_m95');

  // 添加 bf1:mg0815 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "item": "alexscaves:metal_barrel" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "bf1:mg0815", "attachments": { "stock": "tacz:oem_stock_heavy", "grip": "bf1:grip_trench_bipods" } }
  }).id('bf1:gun/mg0815');

  // 添加 bf1:mhgl 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "bf1:mhgl" }
  }).id('bf1:gun/mhgl');

  // 添加 bf1:model10 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 22 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:model10" }
  }).id('bf1:gun/model10');

  // 添加 bf1:obrez 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 18 },
      { "item": { "tag": "minecraft:logs" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:obrez" }
  }).id('bf1:gun/obrez');

  // 添加 bf1:smg0818 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 24 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:smg0818" }
  }).id('bf1:gun/smg0818');

  // 添加 bf1:sw_model3 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 28 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 9 }
    ],
    result: { "type": "gun", "id": "bf1:sw_model3" }
  }).id('bf1:gun/sw_model3');

  // 添加 bf1:syringe 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "minecraft:glass_bottle" } },
      { "item": { "tag": "forge:ingots/iron" }, "count": 3 }
    ],
    result: { "type": "gun", "id": "bf1:syringe", "nbt": { "DummyAmmo": 99, "HideFlags": 28 }, "ammo_count": 1 }
  }).id('bf1:gun/syringe');

  // 添加 bf1:tg1918 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 64 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 8 }
    ],
    result: { "type": "gun", "id": "bf1:tg1918" }
  }).id('bf1:gun/tg1918');

  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 52 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 6 }
    ],
    result: { "type": "gun", "id": "qkl:at50" }
  }).id('bf1:gun/at50');

  // 添加 bf1:vg15 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:vg15" }
  }).id('bf1:gun/vg15');

  // 添加 bf1:vp1915 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 24 },
      { "item": { "tag": "minecraft:planks" }, "count": 4 },
      { "item": { "item": "fallout:black_steel_parts" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:vp1915", "attachments": { "extended_mag": "tacz:light_extended_mag_1" } }
  }).id('bf1:gun/vp1915');

  // 添加 bf1:wex 的配�?
  e.custom({
    type: "tacz:gun_smith_table_crafting",
    materials: [
      { "item": { "item": "fallout:steel_parts" }, "count": 32 },
      { "item": { "item": "immersiveengineering:chemthrower" }, "count": 1 },
      { "item": { "item": "fallout:black_steel_parts_b" }, "count": 4 }
    ],
    result: { "type": "gun", "id": "bf1:wex" }
  }).id('bf1:gun/wex');
});