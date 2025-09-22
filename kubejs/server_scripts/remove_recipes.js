ServerEvents.recipes(e => {//以下是移除配方分区
  e.remove({ output: 'irons_spellbooks:arcane_ingot' });
  e.remove({ id: 'createaddition:compat/immersiveengineering/constantan' });
  e.remove({ output: 'ftbquests:book' });
  e.remove({ output: 'deeperdarker:sonorous_staff' });
  e.remove({ output: 'witherstormmod:formidibomb' });
  e.remove({ output: 'minecraft:gunpowder' });
  e.remove({ id: 'immersiveengineering:crusher/ore_quartz' });
  e.remove({ id: 'immersiveengineering:crusher/blaze_powder' });
  e.remove({ id: 'immersiveengineering:crusher/ore_lapis' });
  e.remove({ id: 'immersiveengineering:crusher/ore_coal' });
  e.remove({ output: 'create:cinder_flour' });
  e.remove({ id: 'create:crushing/blaze_rod' });
  e.remove({ id: 'create:crushing/lapis_ore' });
  e.remove({ id: 'create:crushing/coal_ore' });
  e.remove({ id: 'create:crushing/nether_quartz_ore' });
  e.remove({ id: 'create:crushing/sandstone' });
  e.remove({ output: 'immersivepetroleum:ethylene_bucket' });
    e.remove({ id: 'immersivepetroleum:refinery/acetaldehyde' })
  e.remove({ id: 'immersivepetroleum:distillationtower/naphtha_cracking' })
  e.remove({ id: 'immersiveengineering:jei_bucket_ethylene' })
  e.remove({ id: 'create:fill_minecraft_bucket_with_immersivepetroleum_ethylene' })



  // 删除基础
  e.remove({ output: 'mekanism:basic_smelting_factory' });
  e.remove({ output: 'mekanism:basic_enriching_factory' });
  e.remove({ output: 'mekanism:basic_crushing_factory' });
  e.remove({ output: 'mekanism:basic_compressing_factory' });
  e.remove({ output: 'mekanism:basic_purifying_factory' });
  e.remove({ output: 'mekanism:basic_injecting_factory' });
  e.remove({ output: 'mekanism:basic_infusing_factory' });
  e.remove({ output: 'mekanism:basic_sawing_factory' });
  e.remove({ output: 'mekanism:basic_combining_factory' });
  e.remove({ output: 'mekanism:basic_tier_installer' });
  e.remove({ output: 'mekanism:basic_energy_cube' });

  // 删除进阶
  e.remove({ output: 'mekanism:advanced_smelting_factory' });
  e.remove({ output: 'mekanism:advanced_enriching_factory' });
  e.remove({ output: 'mekanism:advanced_crushing_factory' });
  e.remove({ output: 'mekanism:advanced_compressing_factory' });
  e.remove({ output: 'mekanism:advanced_purifying_factory' });
  e.remove({ output: 'mekanism:advanced_injecting_factory' });
  e.remove({ output: 'mekanism:advanced_infusing_factory' });
  e.remove({ output: 'mekanism:advanced_sawing_factory' });
  e.remove({ output: 'mekanism:advanced_combining_factory' });
  e.remove({ output: 'mekanism:advanced_tier_installer' });
  e.remove({ output: 'mekanism:advanced_energy_cube' });

  // 删除精英
  e.remove({ output: 'mekanism:elite_smelting_factory' });
  e.remove({ output: 'mekanism:elite_enriching_factory' });
  e.remove({ output: 'mekanism:elite_crushing_factory' });
  e.remove({ output: 'mekanism:elite_compressing_factory' });
  e.remove({ output: 'mekanism:elite_purifying_factory' });
  e.remove({ output: 'mekanism:elite_injecting_factory' });
  e.remove({ output: 'mekanism:elite_infusing_factory' });
  e.remove({ output: 'mekanism:elite_sawing_factory' });
  e.remove({ output: 'mekanism:elite_combining_factory' });
  e.remove({ output: 'mekanism:elite_tier_installer' });
  e.remove({ output: 'mekanism:elite_energy_cube' });

  // 删除终极
  e.remove({ output: 'mekanism:ultimate_smelting_factory' });
  e.remove({ output: 'mekanism:ultimate_enriching_factory' });
  e.remove({ output: 'mekanism:ultimate_crushing_factory' });
  e.remove({ output: 'mekanism:ultimate_compressing_factory' });
  e.remove({ output: 'mekanism:ultimate_purifying_factory' });
  e.remove({ output: 'mekanism:ultimate_injecting_factory' });
  e.remove({ output: 'mekanism:ultimate_infusing_factory' });
  e.remove({ output: 'mekanism:ultimate_sawing_factory' });
  e.remove({ output: 'mekanism:ultimate_combining_factory' });
  e.remove({ output: 'mekanism:ultimate_tier_installer' });
  e.remove({ output: 'mekanism:ultimate_energy_cube' });

  // 删除杂项
  e.remove({ id: "mekanism:control_circuit/basic" });
  e.remove({ id: "mekanism:metallurgic_infusing/alloy/infused" });
  e.remove({ id: "mekanism:processing/refined_obsidian/dust/from_obsidian_dust" });
  e.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' });
  e.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' });
  e.remove({ id: 'createaddition:pressing/steel_ingot' });
  e.remove({ id: 'farmersdelight:rice_from_bag' });
  e.remove({ id: 'kaleidoscope_cookery:rice' });
  e.remove({ id: 'farmersdelight:rice' });
  e.remove({ id: 'farmersdelight:integration/create/milling/rice_panicle' });
  e.remove({ id: 'farmersdelight:cutting/rice_panicle' });
  //nanmod配方
  e.remove({ mod: 'tacz' });
  e.remove({ mod: 'create_armorer' });
  e.remove({ mod: 'cyber_armorer' });
  e.remove({ mod: 'bf1' });
  e.remove({ mod: 'qkl' });
  e.remove({ mod: 'immersive_armorer' });
  e.remove({ mod: 'superbwarfare' });
    e.remove({ mod: 'vvp' });

  // 删除阶段配方

  // revitalize
  const revitalize = [
    'create:andesite_alloy',
    'create:andesite_alloy_block',
    'create:wrench'
  ];
  revitalize.forEach(element => {
    e.remove({ output: element });
  });

  // cogwheel
  const cogwheel = [
    'create:shaft',
    'create:cogwheel',
    'create:large_cogwheel'
  ];
  cogwheel.forEach(element => {
    e.remove({ output: element });
  });

  //water_wheel
  const water_wheel = [
    'create:hand_crank',
    'create:water_wheel',
    'create:large_water_wheel'
  ];
  water_wheel.forEach(element => {
    e.remove({ output: element });
  });

  //clutch
  const clutch = [
    'create:vertical_gearbox',
    'create:gearbox',
    'create:clutch',
    'create:gearshift',
    'create:encased_chain_drive',
    'create:adjustable_chain_gearshift'
  ];
  clutch.forEach(element => {
    e.remove({ output: element });
  });

  //millstone
  const millstone = [
    'create:millstone'
  ]
  millstone.forEach(element => {
    e.remove({ output: element });
  });

  //process
  e.remove({ id: 'create_armorer:gun/special_melee_wrench' });
  const process = [
    'create:depot',
    'create:basin',
    'create:mechanical_press',
    'create:mechanical_mixer',
    'create:wrench',
    'createaddition:rolling_mill'
  ]
  process.forEach(element => {
    e.remove({ output: element });
  });

  //fan
  const fan = [
    'create:encased_fan',
    'create:nozzle'
  ];
  fan.forEach(element => {
    e.remove({ output: element });
  });

  //belt
  const belt = [
    'create:belt_connector',
    'create:chute',
    'create:andesite_tunnel',
    'create:andesite_funnel',
    'create:weighted_ejector'
  ];
  belt.forEach(element => {
    e.remove({ output: element });
  });

  //sail
  const sail = [
    'create:white_sail',
    'create:sail_frame',
    'create:windmill_bearing'
  ];
  sail.forEach(element => {
    e.remove({ output: element });
  });

  //mechanical
  const mechanical = [
    'create:mechanical_bearing',
    'create:cart_assembler',
    'create:linear_chassis',
    'create:secondary_linear_chassis',
    'create:radial_chassis',
    'create:portable_storage_interface',
    'create:sticker',
    'create:super_glue',
    'create:contraption_controls',
    'create:redstone_contact'
  ];
  mechanical.forEach(element => {
    e.remove({ output: element });
  });

  //carriage
  const carriage = [
    'create:rope_pulley',
    'create:gantry_carriage',
    'create:gantry_shaft',
    'create:piston_extension_pole',
    'create:sticky_mechanical_piston',
    'create:mechanical_piston'
  ];
  carriage.forEach(element => {
    e.remove({ output: element });
  });

  //pipe
  const pipe = [
    'create:fluid_pipe',
    'create:mechanical_pump',
    'create:spout',
    'create:fluid_valve',
    'create:copper_valve_handle',
    // 'create:copper_casing',
    'create:portable_fluid_interface',
    'create:item_drain',
    'create:hose_pulley',
    'create:fluid_tank'
  ];
  pipe.forEach(element => {
    e.remove({ output: element });
  });

  //steam
  const steam = [
    'create:steam_engine',
    'create:steam_whistle',
    'create:blaze_burner'
  ];
  steam.forEach(element => {
    e.remove({ output: element });
  });

  //brassbronze
  const brassbronze = [
    'create:brass_ingot',
    'createlowheated:basic_burner',
    'create:brass_block'
  ];
  brassbronze.forEach(element => {
    e.remove({ output: element });
  });

  //tube
  const tube = [
    'create:rose_quartz',
    // 'create:polished_rose_quartz',
    'create:electron_tube'
  ];
  tube.forEach(element => {
    e.remove({ output: element });
  });

  //switch
  const sw = [
    'create:pulse_repeater',
    'create:repackager',
    'create:packager',
    'create:package_frogport',
    'create:item_hatch',
    'create:stock_link',
    'create:stock_ticker',
    'create:redstone_requester',
    'create:factory_gauge',
    'create:stockpile_switch',
    'create:content_observer',
    'create:brass_tunnel',
    'create:brass_funnel',
    'create:smart_chute'
  ];
  sw.forEach(element => {
    e.remove({ output: element });
  });

  //drill
  const drill = [
    'create:mechanical_saw',
    'create:mechanical_drill',
    'create:mechanical_harvester',
    'create:mechanical_plough',
    'create:mechanical_roller'
  ];
  drill.forEach(element => {
    e.remove({ output: element });
  });

  //crafter
  const crafter = [
    'create:mechanical_crafter'
  ];
  crafter.forEach(element => {
    e.remove({ output: element });
  });

  //deployer
  const deployer = [
    'create:mechanical_arm',
    'create:deployer'
  ];
  deployer.forEach(element => {
    e.remove({ output: element });
  });

  //flywheel
  const flywheel = [
    'create:sequenced_gearshift',
    'create:elevator_pulley',
    'create:rotation_speed_controller',
    'create:smart_fluid_pipe',
    'create:flywheel'
  ];
  flywheel.forEach(element => {
    e.remove({ output: element });
  });

  //crushing
  const crushing = [
    'create:crushing_wheel'
  ];
  crushing.forEach(element => {
    e.remove({ output: element });
  });

  const basicelcity = [
    'createaddition:alternator',
    'createaddition:electric_motor',
    'createaddition:tesla_coil',
    'createaddition:modular_accumulator',
    'createaddition:connector',
    'createaddition:small_light_connector',
    'createaddition:large_connector'
  ];

  basicelcity.forEach(element => {
    e.remove({ output: element });
  });


  const engineer = [
    'immersiveengineering:hammer',
    'immersiveengineering:manual',
    'immersiveengineering:wirecutter',
    'immersiveengineering:screwdriver',
    'immersiveengineering:component_steel',
    'immersiveengineering:component_iron',
    'immersiveengineering:wirecoil_copper',
    'immersiveengineering:connector_lv',
    'immersiveengineering:connector_lv_relay',
    'immersiveengineering:capacitor_lv'
  ];

  engineer.forEach(element => {
    e.remove({ output: element });
  });


  //adalloy
  const adalloy = [
    'mekanism:ingot_bronze',
    'mekanism:block_bronze',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:storage_constantan',
    'immersiveengineering:storage_electrum',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:alloybrick',
    'immersiveengineering:slab_alloybrick'
  ];
  adalloy.forEach(element => {
    e.remove({ output: element });
  });



  const cokingBlocks = [
    'immersiveengineering:cokebrick',
    'immersiveengineering:slab_cokebrick',
    'immersiveengineering:stairs_treated_wood_horizontal',
    'immersiveengineering:treated_wood_horizontal',
    'immersiveengineering:slab_treated_wood_horizontal',
    'immersiveengineering:treated_wood_vertical'
  ];

  cokingBlocks.forEach(element => {
    e.remove({ output: element });
  });

  //basicsteel
  e.remove({ output: 'immersiveengineering:slab_blastbrick' });

  const adsteel = [
    'immersiveengineering:blastbrick_reinforced',
    'immersiveengineering:slab_blastbrick_reinforced',
    'immersiveengineering:blastbrick',
    'immersiveengineering:blastfurnace_preheater',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:storage_steel'
  ];

  adsteel.forEach(element => {
    e.remove({ output: element });
  });


  const standards = [
    'immersiveengineering:steel_scaffolding_standard',
    'immersiveengineering:rs_engineering',
    'immersiveengineering:heavy_engineering',
    'immersiveengineering:light_engineering',
    'immersiveengineering:electromagnet',
    'immersiveengineering:generator',
    'immersiveengineering:radiator'
  ];

  standards.forEach(element => {
    e.remove({ output: element });
  });

  const adengineer = [
    'immersiveengineering:connector_mv',
    'immersiveengineering:connector_mv_relay',
    'immersiveengineering:capacitor_mv',
    'immersiveengineering:transformer'
  ];

  adengineer.forEach(element => {
    e.remove({ output: element });
  });

  const seengineer = [
    'immersiveengineering:connector_hv',
    'immersiveengineering:connector_hv_relay',
    'immersiveengineering:capacitor_hv',
    'immersiveengineering:transformer_hv'
  ];

  seengineer.forEach(element => {
    e.remove({ output: element });
  });

  const adpipe = [
    'immersiveengineering:fluid_pump',
    'immersiveengineering:fluid_pipe',
    'immersiveengineering:metal_barrel',
    'immersiveengineering:fluid_placer',
    'immersiveengineering:fluid_sorter'
  ];

  adpipe.forEach(element => {
    e.remove({ output: element });
  });


  const sesail = [
    'immersiveengineering:conveyor_basic',
    'immersiveengineering:conveyor_dropper',
    'immersiveengineering:conveyor_splitter',
    'immersiveengineering:conveyor_extract',
    'immersiveengineering:conveyor_vertical',
    'immersiveengineering:conveyor_redstone',
    'immersiveengineering:item_batcher',
    'immersiveengineering:sorter'
  ];

  sesail.forEach(id => {
    e.remove({ output: id });
  });

  const workbench = [
    'immersiveengineering:workbench',
    'immersiveengineering:maintenance_kit',
    'immersiveengineering:buzzsaw',
    'immersiveengineering:revolver',
    'immersiveengineering:chemthrower',
    'immersiveengineering:railgun',
    'immersiveengineering:survey_tools',
    'immersiveengineering:drill',
    'immersiveengineering:powerpack'
  ];

  workbench.forEach(element => {
    e.remove({ output: element });
  });

  // const workfirearm = [
  //   'immersive_armorer/attachment:bayonet_revolver',
  //   'immersive_armorer/attachment:extended_capacitor_1',
  //   'immersive_armorer/attachment:extended_capacitor_2',
  //   'immersive_armorer/attachment:extended_capacitor_3',
  //   'immersive_armorer/attachment:extended_jar_1',
  //   'immersive_armorer/attachment:extended_jar_2',
  //   'immersive_armorer/attachment:extended_jar_3',
  //   'immersive_armorer/attachment:grip_aluminium',
  //   'immersive_armorer/attachment:grip_treated_wood',
  //   'immersive_armorer/attachment:grip_twined',
  //   'immersive_armorer/attachment:muzzle_extended_barrel',
  //   'immersive_armorer/attachment:muzzle_focused_nozzle',
  //   'immersive_armorer/attachment:muzzle_refit_electromagnetic_accelerator',
  //   'immersive_armorer/attachment:muzzle_refit_face_melter',
  //   'immersive_armorer/attachment:muzzle_refit_fuel_stream_diffuser',
  //   'immersive_armorer/attachment:muzzle_refit_he_compound',
  //   'immersive_armorer/attachment:muzzle_refit_melted_metal_spitter',
  //   'immersive_armorer/attachment:muzzle_refit_pressure_wave',
  //   'immersive_armorer/attachment:scope_spyglass_ie',
  //   'immersive_armorer/attachment:sight_light',
  //   'immersive_armorer/attachment:sight_simple_reflex',
  //   'immersive_armorer/attachment:stock_crude',
  //   'immersive_armorer/attachment:stock_simple'
  // ];

  // workfirearm.forEach(element => {
  //   e.remove({ id: element });
  // });

  // const adworkbench = [
  //   'immersive_armorer/gun:standard_rail_pistol_mk1',
  //   'immersive_armorer/gun:standard_rail_pistol_mk2',
  //   'immersive_armorer/gun:standard_rail_pistol_mk3',
  //   'immersive_armorer/gun:standard_rail_pistol_mk4',
  //   'immersive_armorer/gun:revolver'
  // ];

  // adworkbench.forEach(element => {
  //   e.remove({ id: element });
  // });

  // const seworkbench = [
  //   'immersive_armorer/gun:pistol_9mm',
  //   'immersive_armorer/gun:assult_rifle',
  //   'immersive_armorer/gun:pump_shotgun',
  //   'immersive_armorer/gun:standard_rail_smg_mk1',
  //   'immersive_armorer/gun:chemical_thrower',
  //   'immersive_armorer/gun:railgun'
  // ];

  // seworkbench.forEach(element => {
  //   e.remove({ id: element });
  // });

  // const elitesoldiers = [
  //   'bf1/gun:tg1918',
  //   'bf1/gun:mhgl',
  //   'bf1/gun:mg0815',
  //   'bf1/gun:sw_model3',
  //   'bf1/gun:smg0818',
  //   'bf1/gun:wex'
  // ];

  // elitesoldiers.forEach(element => {
  //   e.remove({ id: element });
  // });

  const sentry = [
    'immersiveengineering:tesla_coil',
    'immersiveengineering:turret_gun',
    'immersiveengineering:turret_chem'
  ];

  sentry.forEach(element => {
    e.remove({ output: element });
  });

  const grinding = [
    'immersiveengineering:crusher'
  ];

  grinding.forEach(element => {
    e.remove({ output: element });
  });

  const cultivation = [
    'immersiveengineering:cloche'
  ];

  cultivation.forEach(element => {
    e.remove({ output: element });
  });

  const biodiesel = [
    'immersivepetroleum:refinery',
    'innersiveengineering:refinery',
    'innersiveengineering:fermenter',
    'immersiveengineering:mixer'
  ];

  biodiesel.forEach(element => {
    e.remove({ output: element });
  });

  const geological = [
    'immersivepetroleum:refinery',
    'immersiveengineering:fermenter',
    'immersiveengineering:mixer'
  ];

  geological.forEach(element => {
    e.remove({ output: element });
  });

  const oil = [
    'immersivepetroleum:seismic_survey'
  ];

  oil.forEach(element => {
    e.remove({ output: element });
  });

  const petroleum = [
    'immersivepetroleunm:coking',
    'immersivepetroleum:distillationtouer',
  ];

  petroleum.forEach(element => {
    e.remove({ output: element });
  });

  const electronics = [
    'immersiveengineering:plate_duroplast',
    'immersiveengineering:logic_circuit',
    'immersiveengineering:circuit_table'
  ];

  electronics.forEach(element => {
    e.remove({ output: element });
  });

  const press = [
    // 'immersiveengineering:mold_plate'
  ];

  press.forEach(element => {
    e.remove({ output: element });
  });

  // const seballistics = [
  //   'qkl:gun/csg19',
  //   'qkl:gun/rmg',
  //   'tacz/gun:aa12',
  //   'tacz/gun:ai_awp',
  //   'tacz/gun:ak47',
  //   'tacz/gun:aug',
  //   'tacz/gun:cz75',
  //   'tacz/gun:deagle',
  //   'tacz/gun:deagle_golden',
  //   'tacz/gun:glock_17',
  //   'tacz/gun:hk_g3',
  //   'tacz/gun:hk_mp5a5',
  //   'tacz/gun:hk416d',
  //   'tacz/gun:m4a1',
  //   'tacz/gun:m16a1',
  //   'tacz/gun:m16a4',
  //   'tacz/gun:m95',
  //   'tacz/gun:m107',
  //   'tacz/gun:m249',
  //   'tacz/gun:m320',
  //   'tacz/gun:m700',
  //   'tacz/gun:mk14',
  //   'tacz/gun:p90',
  //   'tacz/gun:p320',
  //   'tacz/gun:qbz_95',
  //   'tacz/gun:rpg7',
  //   'tacz/gun:rpk',
  //   'tacz/gun:scar_h',
  //   'tacz/gun:scar_l',
  //   'tacz/gun:sks_tactical',
  //   'tacz/gun:type_81',
  //   'tacz/gun:ump45',
  //   'tacz/gun:uzi',
  //   'tacz/gun:vector45'
  // ];

  // seballistics.forEach(element => {
  //   e.remove({ id: element });
  // });

  // const sefirearm = [
  //   'tacz/attachment:sight_t1',
  //   'tacz/attachment:sight_t2',
  //   'tacz/attachment:sight_uh1',
  //   'tacz/attachment:sniper_extended_mag_1',
  //   'tacz/attachment:sniper_extended_mag_2',
  //   'tacz/attachment:sniper_extended_mag_3',
  //   'tacz/attachment:stock_carbon_bone_c5',
  //   'tacz/attachment:stock_militech_b5',
  //   'tacz/attachment:stock_tactical_ar' ,
  //   'tacz/attachment:ammo_mod_fmj',
  //   'tacz/attachment:ammo_mod_he',
  //   'tacz/attachment:ammo_mod_hp',
  //   'tacz/attachment:ammo_mod_i',
  //   'tacz/attachment:bayonet_6h3',
  //   'tacz/attachment:bayonet_m9',
  //   'tacz/attachment:deagle_golden_long_barrel',
  //   'tacz/attachment:extended_mag_1',
  //   'tacz/attachment:extended_mag_2',
  //   'tacz/attachment:extended_mag_3',
  //   'tacz/attachment:grip_magpul_afg_2',
  //   'tacz/attachment:grip_vertical_military',
  //   'tacz/attachment:grip_vertical_ranger',
  //   'tacz/attachment:grip_vertical_talon',
  //   'tacz/attachment:light_extended_mag_1',
  //   'tacz/attachment:light_extended_mag_2',
  //   'tacz/attachment:light_extended_mag_3',
  //   'tacz/attachment:muzzle_brake_cthulhu',
  //   'tacz/attachment:muzzle_brake_cyclone_d2',
  //   'tacz/attachment:muzzle_brake_pioneer',
  //   'tacz/attachment:muzzle_brake_trex',
  //   'tacz/attachment:muzzle_compensator_trident',
  //   'tacz/attachment:muzzle_silencer_knight_qd',
  //   'tacz/attachment:muzzle_silencer_mirage',
  //   'tacz/attachment:muzzle_silencer_phantom_s1',
  //   'tacz/attachment:muzzle_silencer_ptilopsis',
  //   'tacz/attachment:muzzle_silencer_ursus',
  //   'tacz/attachment:muzzle_silencer_vulture',
  //   'tacz/attachment:oem_stock_heavy',
  //   'tacz/attachment:oem_stock_light',
  //   'tacz/attachment:oem_stock_tactical',
  //   'tacz/attachment:scope_acog_ta31',
  //   'tacz/attachment:scope_elcan_4x',
  //   'tacz/attachment:scope_lpvo_1_6',
  //   'tacz/attachment:scope_retro_2x',
  //   'tacz/attachment:scope_standard_8x',
  //   'tacz/attachment:sight_552',
  //   'tacz/attachment:sight_coyote',
  //   'tacz/attachment:sight_exp3',
  //   'tacz/attachment:sight_rmr_dot',
  //   'tacz/attachment:sight_sro_dot'
  // ];

  // sefirearm.forEach(element => {
  //   e.remove({ id: element });
  // });

  const sesteel = [
    'cataclysm:black_steel_ingot'
  ];

  sesteel.forEach(element => {
    e.remove({ output: element });
  });

  const mekanism = [
    'mekanism:metallurgic_infuser',
    'mekanism:basic_mechanical_pipe',
    'mekanism:basic_universal_cable',
    'mekanism:basic_pressurized_tube',
    'mekanism:basic_thermodynamic_conductor',
    'mekanism:basic_logistical_transporter',
    'mekanism:basic_chemical_tank',
    'mekanism:basic_fluid_tank',
    'mekanism:steel_casing',
    'mekanism:structural_glass',
    'mekanismgenerators:reactor_glass'
  ];

  mekanism.forEach(element => {
    e.remove({ output: element });
  });

  const alloyinfused = [
    'mekanism:alloy_infused',
    'mekanism:advanced_control_circuit'
  ];

  alloyinfused.forEach(element => {
    e.remove({ output: element });
  });

  const bsamt = [
    'mekanism:crusher',
    'mekanism:enrichment_chamber',
    'mekanism:energized_smelter',
    'mekanism:rotary_condensentrator',
    'mekanism:nutritional_liquifier',
    'mekanismgenerators:advanced_solar_generator',
    'mekanism:pigment_extractor',
    'mekanism:seismic_vibrator',
    'mekanism:fluidic_plenisher',
    'mekanism:electric_pump',
    'mekanism:resistive_heater',
    'mekanism:canteen'
  ];

  bsamt.forEach(element => {
    e.remove({ output: element });
  });

  const bsfacroy = [
    'mekanism:basic_tier_installer'
  ];

  bsfacroy.forEach(element => {
    e.remove({ output: element });
  });

  const bsts = [
    'mekanism:advanced_mechanical_pipe',
    'mekanism:advanced_universal_cable',
    'mekanism:advanced_pressurized_tube',
    'mekanism:advanced_thermodynamic_conductor',
    'mekanism:advanced_logistical_transporter',
    'mekanism:advanced_chemical_tank',
    'mekanism:advanced_fluid_tank'
  ];

  bsts.forEach(element => {
    e.remove({ output: element });
  });

  const bspower = [
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:solar_generator'
  ];

  bspower.forEach(element => {
    e.remove({ output: element });
  });

  const alequip = [
    'mekanism:network_reader',
    'mekanism:configurator',
    'mekanism:free_runners',
    'mekanism:free_runners_armored',
    'mekanism:jetpack_armored',
    'mekanism:jetpack',
    'mekanism:scuba_tank',
    'mekanism:flamethrower',
    'mekanism:electric_bow',
    'mekanism:scuba_mask',

  ];

  alequip.forEach(element => {
    e.remove({ output: element });
  });

  const alamt = [
    'mekanism:electrolytic_separator',
    'mekanism:electrolytic_core',
    'mekanism:precision_sawmill',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:chemical_infuser',
    'mekanism:chemical_oxidizer',
    'mekanism:purification_chamber',
    'mekanism:fuelwood_heater',
    'mekanism:oredictionificator',
    'mekanism:formulaic_assemblicator',
    'mekanism:personal_chest',
    'mekanism:osmium_compressor'
  ];

  alamt.forEach(element => {
    e.remove({ output: element });
  });

  const alfacroy = [
    'mekanism:electrolytic_separator',
    'mekanism:electrolytic_core',
    'mekanism:precision_sawmill',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:chemical_infuser',
    'mekanism:chemical_oxidizer',
    'mekanism:purification_chamber',
    'mekanism:osmium_compressor'
  ];

  alfacroy.forEach(element => {
    e.remove({ output: element });
  });

  const alpower = [
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:gas_burning_generator'
  ];

  alpower.forEach(element => {
    e.remove({ output: element });
  });

  const distillation = [
    'mekanism:thermal_evaporation_controller',
    'mekanism:thermal_evaporation_valve',
    'mekanism:thermal_evaporation_block'
  ];

  distillation.forEach(element => {
    e.remove({ output: element });
  });

  const eliteinfused = [
    'mekanism:elite_control_circuit',
    'mekanism:alloy_reinforced'
  ];

  eliteinfused.forEach(element => {
    e.remove({ output: element });
  });

  const elts = [
    'mekanism:elite_mechanical_pipe',
    'mekanism:elite_universal_cable',
    'mekanism:elite_pressurized_tube',
    'mekanism:elite_thermodynamic_conductor',
    'mekanism:elite_logistical_transporter',
    'mekanism:elite_chemical_tank',
    'mekanism:elite_fluid_tank'
  ];

  elts.forEach(element => {
    e.remove({ output: element });
  });

  const boiler = [
    'mekanism:boiler_valve',
    'mekanism:boiler_casing',
    'mekanism:pressure_disperser',
    'mekanism:superheating_element'
  ];

  boiler.forEach(element => {
    e.remove({ output: element });
  });

  const elamt = [
    'mekanism:chemical_injection_chamber',
    'mekanism:combiner',
    'mekanism:solar_neutron_activator',
    'mekanism:laser_amplifier',
    'mekanism:laser',
    'mekanism:laser_tractor_beam'
  ];

  elamt.forEach(element => {
    e.remove({ output: element });
  });

  const elfacroy = [
    'mekanism:elite_tier_installer'
  ];

  elfacroy.forEach(element => {
    e.remove({ output: element });
  });

  const obsidian = [
    'mekanism:ingot_refined_obsidian',
    'mekanism:dust_refined_obsidian',
    'mekanism:block_refined_obsidian'
  ];

  obsidian.forEach(element => {
    e.remove({ output: element });
  });

  const teinfused = [
    'mekanism:ultimate_control_circuit',
    'mekanism:alloy_atomic'
  ];

  teinfused.forEach(element => {
    e.remove({ output: element });
  });

  const elequip = [
    'mekanism:atomic_disassembler',
    'mekanism:robit'
  ];

  elequip.forEach(element => {
    e.remove({ output: element });
  });

  const tets = [
    'mekanism:ultimate_mechanical_pipe',
    'mekanism:ultimate_universal_cable',
    'mekanism:ultimate_pressurized_tube',
    'mekanism:ultimate_thermodynamic_conductor',
    'mekanism:ultimate_logistical_transporter',
    'mekanism:ultimate_chemical_tank',
    'mekanism:ultimate_fluid_tank'
  ];

  tets.forEach(element => {
    e.remove({ output: element });
  });

  const transmit = [
    'mekanism:portable_qio_dashboard',
    'mekanism:portable_teleporter',
    'mekanism:teleporter',
    'mekanism:teleporter_frame',
    'mekanism:quantum_entangloporter',
    'mekanism:teleportation_core',
    'mekanism:dimensional_stabilizer'
  ];

  transmit.forEach(element => {
    e.remove({ output: element });
  });

  const teamt = [
    'mekanism:chemical_washer',
    'mekanism:chemical_crystallizer',
    'mekanism:isotopic_centrifuge',
    'mekanism:chemical_dissolution_chamber'
  ];

  teamt.forEach(element => {
    e.remove({ output: element });
  });

  const nuclear = [
    'mekanism:geiger_counter',
    'mekanism:dosimeter',
    'mekanism:hazmat_gown',
    'mekanism:hazmat_pants',
    'mekanism:hazmat_boots'
  ];

  nuclear.forEach(element => {
    e.remove({ output: element });
  });

  const nuclear_pro = [
    'mekanism:geiger_counter',
    'mekanism:dosimeter',
    'mekanism:dosimeter',
    'mekanism:hazmat_gown',
    'mekanism:hazmat_pants',
    'mekanism:hazmat_boots'
  ];

  nuclear_pro.forEach(element => {
    e.remove({ output: element });
  });

  const tefacroy = [
    'mekanism:ultimate_tier_installer'
  ];

  tefacroy.forEach(element => {
    e.remove({ output: element });
  });

  const turbine = [
    'mekanismgenerators:turbine_vent',
    'mekanismgenerators:saturating_condenser',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:turbine_casing',
    'mekanismgenerators:electromagnetic_coil',
    'mekanismgenerators:rotational_complex',
    'mekanismgenerators:turbine_rotor'
  ];

  turbine.forEach(element => {
    e.remove({ output: element });
  });

  const fusion = [
    'mekanismgenerators:fusion_reactor_logic_adapter',
    'mekanismgenerators:fusion_reactor_controller',
    'mekanismgenerators:laser_focus_matrix',
    'mekanismgenerators:fusion_reactor_port',
    'mekanismgenerators:fusion_reactor_frame'
  ];

  fusion.forEach(element => {
    e.remove({ output: element });
  });

  // const cybergun = [
  //   'cyber_armorer/gun:3516',
  //   'cyber_armorer/gun:ajax',
  //   'cyber_armorer/gun:ajax_moron_labe',
  //   'cyber_armorer/gun:ajax_pit_bull',
  //   'cyber_armorer/gun:carnage',
  //   'cyber_armorer/gun:carnage_guts',
  //   'cyber_armorer/gun:copperhead',
  //   'cyber_armorer/gun:copperhead_psalm',
  //   'cyber_armorer/gun:g58_dian',
  //   'cyber_armorer/gun:g58_dian_yinglong',
  //   'cyber_armorer/gun:grad',
  //   'cyber_armorer/gun:grad_05',
  //   'cyber_armorer/gun:grad_borzaya',
  //   'cyber_armorer/gun:grad_sparky',
  //   'cyber_armorer/gun:grad_overwatch',
  //   'cyber_armorer/gun:m2038',
  //   'cyber_armorer/gun:m2038_bloody_maria',
  //   'cyber_armorer/gun:m2038_the_headsman',
  //   'cyber_armorer/gun:mantis_blade',
  //   'cyber_armorer/gun:mantis_blade_maxtac',
  //   'cyber_armorer/gun:saratoga',
  //   'cyber_armorer/gun:saratoga_fenrir',
  //   'cyber_armorer/gun:saratoga_problem_solver',
  //   'cyber_armorer/gun:unity',
  //   'cyber_armorer/gun:unity_cheetah',
  //   'cyber_armorer/gun:unity_her_majesty',
  //   'cyber_armorer/gun:yukimura',
  //   'cyber_armorer/gun:yukimura_genjiroh',
  //   'cyber_armorer/gun:yukimura_skippy',
  //   'cyber_armorer/ammold:bullet_sniper',
  //   'cyber_armorer/ammold:bullet_sniper_smart',
  //   'cyber_armorer/ammold:bullet_rifle_smart',
  //   'cyber_armorer/ammold:bullet_rifle',
  //   'cyber_armorer/ammold:bullet_pistol_smart',
  //   'cyber_armorer/ammold:bullet_pistol',
  //   'cyber_armorer/ammold:bullet_buckshot_smart',
  //   'cyber_armorer/ammold:bullet_buckshot'
  // ];

  // cybergun.forEach(element => {
  //   e.remove({ id: element });
  // });

  // const cyberatta = [
  //   'cyber_armorer/attachment:cyber_extended_mag_1',
  //   'cyber_armorer/attachment:cyber_extended_mag_2',
  //   'cyber_armorer/attachment:cyber_extended_mag_3',
  //   'cyber_armorer/attachment:mod_ap',
  //   'cyber_armorer/attachment:mod_apex',
  //   'cyber_armorer/attachment:mod_blood',
  //   'cyber_armorer/attachment:mod_consentrate',
  //   'cyber_armorer/attachment:mod_equal',
  //   'cyber_armorer/attachment:mod_hurt',
  //   'cyber_armorer/attachment:mod_insendiary',
  //   'cyber_armorer/attachment:mod_static',
  //   'cyber_armorer/attachment:muzzle_02',
  //   'cyber_armorer/attachment:muzzle_03',
  //   'cyber_armorer/attachment:muzzle_04',
  //   'cyber_armorer/attachment:muzzle_05',
  //   'cyber_armorer/attachment:muzzle_06',
  //   'cyber_armorer/attachment:muzzle_07',
  //   'cyber_armorer/attachment:optic_01',
  //   'cyber_armorer/attachment:optic_02',
  //   'cyber_armorer/attachment:scope_01',
  //   'cyber_armorer/attachment:sight_01',
  //   'cyber_armorer/attachment:sight_02',
  //   'cyber_armorer/attachment:sight_03',
  //   'cyber_armorer/attachment:sight_04',
  //   'cyber_armorer/attachment:sight_05'
  // ];

  // cyberatta.forEach(element => {
  //   e.remove({ id: element });
  // });

  const mekarmor = [
    'mekanism:meka_tool',
    'mekanism:modification_station',
    'mekaweapons:mekatana',
    'mekaweapons:mekabow',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots'
  ];

  mekarmor.forEach(element => {
    e.remove({ output: element });
  });

  const antimatter = [
    'mekanism:sps_port',
    'mekanism:sps_casing',
    "mekanism:digital_miner",
    "mekanism:qio_importer",
    'mekanism:qio_drive_array',
    'mekanism:qio_exporter',
    'mekanism:antiprotonic_nucleosynthesizer'
  ];

  antimatter.forEach(element => {
    e.remove({ output: element });
  });
});

