ServerEvents.recipes(e => {
  // ===== vehicle_assembling（非工作台 -> e.custom）=====
  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "aircraft",
    inputs: [
      "2 superbwarfare:large_propeller",
      "#forge:storage_blocks/steel",
      "2 superbwarfare:medium_armament_module",
      "superbwarfare:heavy_armament_module",
      "2 immersiveengineering:capacitor_mv",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:f35" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "civilian",
    inputs: [
      "immersiveengineering:capacitor_mv",
      "4 #forge:storage_blocks/steel",
      "6 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:fmtv" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "superbwarfare:light_armament_module",
      "immersiveengineering:capacitor_mv",
      "minecraft:chest",
      "3 #forge:storage_blocks/steel",
      "4 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:humvee" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:heavy_armament_module",
      "superbwarfare:light_armament_module",
      "3 superbwarfare:cemented_carbide_block",
      "2 superbwarfare:track",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:m1a2" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:heavy_armament_module",
      "superbwarfare:medium_armament_module",
      "3 superbwarfare:cemented_carbide_block",
      "2 superbwarfare:track",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:m1a2_sep" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:light_armament_module",
      "superbwarfare:medium_armament_module",
      "3 #forge:storage_blocks/steel",
      "2 superbwarfare:track",
      "superbwarfare:large_motor",
      "superbwarfare:cemented_carbide_block"
    ],
    result: { entity: "vvp:m60" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "civilian",
    inputs: [
      "2 immersiveengineering:capacitor_mv",
      "minecraft:chest",
      "3 #forge:storage_blocks/steel",
      "4 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:m997_green" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "aircraft",
    inputs: [
      "superbwarfare:large_propeller",
      "superbwarfare:large_motor",
      "superbwarfare:propeller",
      "minecraft:compass",
      "2 #forge:storage_blocks/steel",
      "immersiveengineering:capacitor_hv",
      "2 superbwarfare:medium_armament_module"
    ],
    result: { entity: "vvp:mi24" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_mv",
      "superbwarfare:medium_armament_module",
      "minecraft:green_dye",
      "6 #forge:storage_blocks/steel",
      "8 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:stryker" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_mv",
      "superbwarfare:medium_armament_module",
      "superbwarfare:cemented_carbide_ingot",
      "6 #forge:storage_blocks/steel",
      "8 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:stryker_m1296" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:light_armament_module",
      "superbwarfare:medium_armament_module",
      "3 #forge:storage_blocks/steel",
      "2 superbwarfare:track",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:terminator" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "aircraft",
    inputs: [
      "superbwarfare:large_propeller",
      "superbwarfare:large_motor",
      "superbwarfare:propeller",
      "3 #forge:storage_blocks/steel",
      "immersiveengineering:capacitor_hv"
    ],
    result: { entity: "vvp:uh60" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "aircraft",
    inputs: [
      "superbwarfare:large_propeller",
      "superbwarfare:large_motor",
      "superbwarfare:propeller",
      "3 #forge:storage_blocks/steel",
      "immersiveengineering:capacitor_hv",
      "2 superbwarfare:heavy_armament_module"
    ],
    result: { entity: "vvp:uh60mod" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:medium_armament_module",
      "6 #forge:storage_blocks/steel",
      "2 superbwarfare:track",
      "superbwarfare:large_motor",
      "superbwarfare:cemented_carbide_ingot"
    ],
    result: { entity: "vvp:bradley" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_hv",
      "superbwarfare:medium_armament_module",
      "6 #forge:storage_blocks/steel",
      "2 superbwarfare:track",
      "superbwarfare:large_motor",
      "superbwarfare:sandbag"
    ],
    result: { entity: "vvp:bradley_ukr" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_mv",
      "superbwarfare:light_armament_module",
      "superbwarfare:medium_armament_module",
      "6 #forge:storage_blocks/steel",
      "8 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:btr_4" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "land",
    inputs: [
      "immersiveengineering:capacitor_mv",
      "superbwarfare:medium_armament_module",
      "minecraft:green_dye",
      "3 #forge:storage_blocks/steel",
      "8 superbwarfare:wheel",
      "superbwarfare:large_motor"
    ],
    result: { entity: "vvp:btr_80a" }
  })

  e.custom({
    type: "superbwarfare:vehicle_assembling",
    category: "aircraft",
    inputs: [
      "superbwarfare:large_propeller",
      "superbwarfare:large_motor",
      "superbwarfare:propeller",
      "minecraft:compass",
      "#forge:storage_blocks/steel",
      "minecraft:observer",
      "2 immersiveengineering:capacitor_mv",
      "superbwarfare:heavy_armament_module"
    ],
    result: { entity: "vvp:cobra" }
  })
  //本体
  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'water',
    inputs: [
      '2 #superbwarfare:storage_blocks/steel',
      '#minecraft:boats',
      'immersiveengineering:capacitor_lv',
      'superbwarfare:large_propeller',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:speedboat' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '#superbwarfare:storage_blocks/steel',
      '12 superbwarfare:mortar_barrel',
      '2 superbwarfare:wheel'
    ],
    result: { entity: 'superbwarfare:type_63' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'land',
    inputs: [
      '12 #superbwarfare:storage_blocks/steel',
      '2 superbwarfare:cemented_carbide_block',
      'superbwarfare:heavy_armament_module',
      'immersiveengineering:capacitor_hv',
      '2 superbwarfare:track',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:yx_100' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'land',
    inputs: [
      '9 #superbwarfare:storage_blocks/steel',
      'minecraft:beacon',
      'immersiveengineering:capacitor_hv',
      '2 superbwarfare:track',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:prism_tank' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '8 #superbwarfare:storage_blocks/steel',
      'superbwarfare:mle_1934_blueprint',
      '2 superbwarfare:cannon_core'
    ],
    result: { entity: 'superbwarfare:mle_1934' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '6 #superbwarfare:storage_blocks/steel',
      'superbwarfare:mk_42_blueprint',
      'superbwarfare:cannon_core'
    ],
    result: { entity: 'superbwarfare:mk_42' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'land',
    inputs: [
      '6 #superbwarfare:storage_blocks/steel',
      'superbwarfare:light_armament_module',
      'immersiveengineering:capacitor_mv',
      '4 superbwarfare:wheel',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:lav_150' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '#superbwarfare:storage_blocks/steel',
      'minecraft:beacon',
      'immersiveengineering:capacitor_lv',
      'superbwarfare:motor'
    ],
    result: { entity: 'superbwarfare:laser_tower' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '5 #superbwarfare:storage_blocks/steel',
      'superbwarfare:hpj_11_blueprint',
      'superbwarfare:cannon_core',
      'immersiveengineering:capacitor_mv',
      'superbwarfare:large_motor',
      'minecraft:observer'
    ],
    result: { entity: 'superbwarfare:hpj_11' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'land',
    inputs: [
      '8 #superbwarfare:storage_blocks/steel',
      'superbwarfare:medium_armament_module',
      'immersiveengineering:capacitor_mv',
      '2 superbwarfare:track',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:bmp_2' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '10 #superbwarfare:storage_blocks/steel',
      'superbwarfare:bl_132_blueprint',
      '4 superbwarfare:cannon_core'
    ],
    result: { entity: 'superbwarfare:bl_132' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'defense',
    inputs: [
      '24 #superbwarfare:storage_blocks/steel',
      '3 minecraft:netherite_block',
      '3 minecraft:beacon',
      'immersiveengineering:capacitor_hv',
      'superbwarfare:annihilator_blueprint'
    ],
    result: { entity: 'superbwarfare:annihilator' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'aircraft',
    inputs: [
      '3 #superbwarfare:storage_blocks/steel',
      'superbwarfare:light_armament_module',
      'immersiveengineering:capacitor_mv',
      '2 superbwarfare:large_propeller',
      'superbwarfare:large_motor'
    ],
    result: { entity: 'superbwarfare:ah_6' }
  })

  e.custom({
    type: 'superbwarfare:vehicle_assembling',
    category: 'aircraft',
    inputs: [
      '10 #superbwarfare:storage_blocks/steel',
      'superbwarfare:heavy_armament_module',
      'immersiveengineering:capacitor_hv',
      '2 superbwarfare:large_propeller',
      '2 superbwarfare:large_motor',
      '3 superbwarfare:wheel'
    ],
    result: { entity: 'superbwarfare:a_10a' }
  })

  // ===== 工作台（minecraft:crafting_shaped -> e.shaped）=====

  e.recipes.create.compacting('12x superbwarfare:high_energy_explosives', [
    Fluid.of("immersiveengineering:acetaldehyde", 100), '12x minecraft:gunpowder', 'minecraft:slime_ball',
  ]).stage('t1vehicle');

  e.shaped(
    'superbwarfare:vehicle_assembling_table',
    [
      'aaa',
      'bcd',
      'eee'
    ],
    {
      a: 'minecraft:iron_ingot',
      b: '#forge:storage_blocks/iron',
      c: 'minecraft:smithing_table',
      d: '#forge:glass_panes',
      e: '#superbwarfare:ingots/steel'
    }
  ).stage('t1vehicle');

  e.shaped(
    Item.of('superbwarfare:c4_bomb', 2, '{Control:1b}'),
    [
      'aba',
      'bcb',
      'aba'
    ],
    {
      a: 'superbwarfare:high_energy_explosives',
      b: 'minecraft:slime_ball',
      c: 'minecraft:clock'
    }
  ).stage('t1vehicle');

  e.shaped(
    '2x superbwarfare:c4_bomb',
    [
      'bab',
      'aca',
      'bab'
    ],
    {
      a: 'superbwarfare:high_energy_explosives',
      b: 'minecraft:slime_ball',
      c: 'create:transmitter'
    }
  ).stage('t1vehicle');

  e.shaped(
    '6x superbwarfare:small_rocket',
    [
      ' a ',
      ' b ',
      ' c '
    ],
    {
      a: 'superbwarfare:fusee',
      b: 'superbwarfare:c4_bomb',
      c: 'superbwarfare:missile_engine'
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:crowbar',
    [
      '  a',
      ' b ',
      'b  '
    ],
    {
      a: '#forge:plates/iron',
      b: '#forge:rods/iron',
    }
  ).stage('t1vehicle');

  e.shaped(
    '2x superbwarfare:motor',
    [
      ' b ',
      'bib',
      ' b '
    ],
    {
      b: '#forge:plates/brass',
      i: 'createaddition:electric_motor'
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:large_motor',
    [
      ' b ',
      'bib',
      ' b '
    ],
    {
      b: 'superbwarfare:motor',
      i: 'immersiveengineering:capacitor_lv'
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:track',
    [
      'sss',
      'bbb',
      'sss'
    ],
    {
      b: 'superbwarfare:wheel',
      s: '#forge:ingots/steel',
    }
  ).stage('t1vehicle');



  e.shaped(
    'superbwarfare:propeller',
    [
      ' s ',
      'sbs',
      ' s '
    ],
    {
      b: 'create:propeller',
      s: '#minecraft:planks',
    }
  ).stage('t1vehicle');


  e.shaped(
    'superbwarfare:large_propeller',
    [
      ' sp',
      'sbs',
      'ps '
    ],
    {
      b: 'superbwarfare:propeller',
      s: 'immersiveengineering:stick_aluminum',
      p: 'immersiveengineering:plate_aluminum',
    }
  ).stage('t1vehicle');

  e.shaped(
    '2x superbwarfare:mortar_barrel',
    [
      's s',
      'sbS',
      's s'
    ],
    {
      b: 'minecraft:green_dye',
      s: 'immersiveengineering:ingot_steel',
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:mortar_base_plate',
    [
      '   ',
      'bbb',
      'sss'
    ],
    {
      b: 'minecraft:green_dye',
      s: 'immersiveengineering:ingot_steel',
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:mortar_bipod',
    [
      ' s ',
      'sbs',
      's s'
    ],
    {
      b: 'minecraft:green_dye',
      s: 'immersiveengineering:stick_steel'
    }
  ).stage('t1vehicle');

  e.shapeless('superbwarfare:mortar_deployer', ['superbwarfare:mortar_bipod', 'superbwarfare:mortar_barrel', 'superbwarfare:mortar_base_plate']).stage('t1vehicle');

    e.shapeless('superbwarfare:charging_station', ['immersiveengineering:charging_station','quark:ender_watcher',]).stage('t1vehicle');

        e.shapeless('superbwarfare:wheel', ['create:gearshift','create:belt_connector']).stage('t1vehicle');

                e.shapeless('9x #superbwarfare:ingots/cemented_carbide', ['superbwarfare:cemented_carbide_block']).stage('t1vehicle');

                        e.shapeless('superbwarfare:cemented_carbide_block', ['9x #superbwarfare:ingots/cemented_carbide',]).stage('t1vehicle');

  e.shapeless('superbwarfare:c4_bomb', [Item.of('superbwarfare:c4_bomb', '{Control:1b}')]).stage('t1vehicle');

  e.shapeless(Item.of('superbwarfare:c4_bomb', '{Control:1b}'), ['superbwarfare:c4_bomb']).stage('t1vehicle');

  e.shaped(
    'superbwarfare:cannon_core',
    [
      '  w',
      'ssS',
      'zlz'
    ],
    {
      w: 'minecraft:spyglass',
      s: 'immersiveengineering:chute_steel',
      z: 'immersiveengineering:steel_fence',
      l: 'create:gearshift'
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:light_armament_module',
    [
      'ppp',
      'pmp',
      'ppp'
    ],
    {
      m: 'fallout:black_steel_parts',
      p: 'fallout:steel_parts'
    }
  ).stage('t1vehicle');

  e.shaped(
    'superbwarfare:medium_armament_module',
    [
      'bbb',
      'beb',
      'bdb'
    ],
    {
      e: 'superbwarfare:cannon_core',
      b: 'fallout:black_steel_parts',
      d: 'superbwarfare:light_armament_module'
    }
  ).stage('t2vehicle');

  e.shaped(
    '4x superbwarfare:fusee',
    [
      ' r ',
      ' s '
    ],
    {
      r: 'minecraft:observer',
      s: 'immersiveengineering:ingot_steel'
    }
  ).stage('t1vehicle');

  e.shaped(
    '4x superbwarfare:primer',
    [
      'bgb',
    ],
    {
      b: '#forge:plates/brass',
      g: 'minecraft:gunpowder'
    }
  ).stage('t2vehicle');

  e.shaped(
    '4x superbwarfare:missile_engine',
    [
      ' b ',
      'byb',
      'bgb'
    ],
    {
      b: 'cataclysm:black_steel_ingot',
      y: 'immersivepetroleum:gasoline_bucket',
      g: 'immersiveengineering:toolupgrade_chemthrower_multitank'
    }
  ).stage('t2vehicle');

  e.shaped(
    '4x superbwarfare:seeker',
    [
      ' a ',
      'bcb'
    ],
    {
      a: 'superbwarfare:fusee',
      b: 'create:stockpile_switch',
      c: 'mekanism:basic_control_circuit'
    }
  ).stage('t2vehicle');

  e.shaped(
    '2x superbwarfare:grain',
    [
      'bgb',
      'bgb',
      ' t '
    ],
    {
      b: '#forge:plates/brass',
      g: 'superbwarfare:high_energy_explosives',
      t: 'superbwarfare:primer'
    }
  ).stage('t2vehicle');

  e.shaped(
    'superbwarfare:he_head',
    [
      ' s ',
      'sgs',
      'sgs'
    ],
    {
      s: '#forge:plates/steel',
      g: 'superbwarfare:high_energy_explosives'
    }
  ).stage('t2vehicle');

  e.shaped(
    'superbwarfare:gs_head',
    [
      ' s ',
      'sps',
      'sgs'
    ],
    {
      s: '#forge:plates/steel',
      p: 'supplementaries:cannonball',
      g: 'superbwarfare:high_energy_explosives'
    }
  ).stage('t2vehicle');

  e.shaped(
    'superbwarfare:cm_head',
    [
      ' s ',
      'sps',
      'sgs'
    ],
    {
      s: '#forge:plates/steel',
      p: 'cataclysm:black_steel_ingot',
      g: 'superbwarfare:high_energy_explosives'
    }
  ).stage('t2vehicle');

  e.shaped(
    'superbwarfare:heavy_armament_module',
    [
      'mbb',
      'beb',
      'mdb'
    ],
    {
      e: 'superbwarfare:cannon_core',
      b: 'superbwarfare:cemented_carbide_ingot',
      m: 'fallout:mithril_parts',
      d: 'superbwarfare:medium_armament_module'
    }
  ).stage('t3vehicle');

})
