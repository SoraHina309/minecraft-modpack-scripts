ServerEvents.tags('item', event => {
//我要吃肉
  event.add('origins:meat', [
    // 蛋
    'farmersdelight:fried_egg',
    'farmersdelight:egg_sandwich',
    'farmersdelight:bacon_and_eggs',
    'kaleidoscope_cookery:chorus_fried_egg',
    'kaleidoscope_cookery:fried_egg',
    'kaleidoscope_cookery:scramble_egg_with_tomatoes',
    'kaleidoscope_cookery:scramble_egg_with_tomatoes_rice_bowl',
    'kaleidoscope_cookery:egg_fried_rice',
    'kaleidoscope_cookery:delicious_egg_fried_rice',
    'cavedelight:boiled_dino_egg',
    'cavedelight:prehistoric_egg_rice',

    // 奶
    'farmersdelight:milk_bottle',

    // 肉
    'brewinandchewin:scarlet_pierogi',
    'farmersdelight:minced_beef',
    'farmersdelight:beef_patty',
    'farmersdelight:chicken_cuts',
    'farmersdelight:cooked_chicken_cuts',
    'farmersdelight:bacon',
    'farmersdelight:cooked_bacon',
    'farmersdelight:cod_slice',
    'farmersdelight:cooked_cod_slice',
    'farmersdelight:salmon_slice',
    'farmersdelight:cooked_salmon_slice',
    'farmersdelight:mutton_chops',
    'farmersdelight:cooked_mutton_chops',
    'farmersdelight:ham',
    'farmersdelight:smoked_ham',
    'farmersdelight:barbecue_stick',
    'farmersdelight:chicken_sandwich',
    'farmersdelight:hamburger',
    'farmersdelight:bacon_sandwich',
    'farmersdelight:mutton_wrap',
    'farmersdelight:salmon_roll',
    'farmersdelight:cod_roll',
    'farmersdelight:beef_stew',
    'farmersdelight:chicken_soup',
    'farmersdelight:fish_stew',
    'farmersdelight:baked_cod_stew',
    'farmersdelight:bone_broth',
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:squid_ink_pasta',
    'farmersdelight:grilled_salmon',
    'farmersdelight:roast_chicken',
    'farmersdelight:honey_glazed_ham',
    'farmersdelight:shepherds_pie',

    'kaleidoscope_cookery:dongpo_pork',
    'kaleidoscope_cookery:spicy_chicken',
    'kaleidoscope_cookery:yakitori',
    'kaleidoscope_cookery:crystal_lamb_chop',
    'kaleidoscope_cookery:pan_seared_knight_steak',
    'kaleidoscope_cookery:blaze_lamb_chop',
    'kaleidoscope_cookery:frost_lamb_chop',
    'kaleidoscope_cookery:stir_fried_beef_offal',
    'kaleidoscope_cookery:braised_beef',
    'kaleidoscope_cookery:stir_fried_pork_with_peppers',
    'kaleidoscope_cookery:sweet_and_sour_pork',
    'kaleidoscope_cookery:fish_flavored_shredded_pork',
    'kaleidoscope_cookery:braised_fish',
    'kaleidoscope_cookery:spicy_chicken_rice_bowl',
    'kaleidoscope_cookery:pork_bone_soup',
    'kaleidoscope_cookery:seafood_miso_soup',
    'kaleidoscope_cookery:lamb_and_radish_soup',
    'kaleidoscope_cookery:braised_beef_with_potatoes',
    'kaleidoscope_cookery:wild_mushroom_rabbit_soup',
    'kaleidoscope_cookery:tomato_beef_brisket_soup',
    'kaleidoscope_cookery:pufferfish_soup',
    'kaleidoscope_cookery:beef_meatball_soup',
    'kaleidoscope_cookery:chicken_and_mushroom_stew',
    'kaleidoscope_cookery:sashimi',
    'kaleidoscope_cookery:raw_lamb_chops',
    'kaleidoscope_cookery:raw_cow_offal',
    'kaleidoscope_cookery:raw_pork_belly',
    'kaleidoscope_cookery:cooked_lamb_chops',
    'kaleidoscope_cookery:cooked_cow_offal',
    'kaleidoscope_cookery:cooked_pork_belly',

    'farmersrespite:black_cod',

    'cavedelight:boiled_trilocaris',
    'cavedelight:roasted_dino_chop',
    'cavedelight:grottoceratops_carcass',
    'cavedelight:roasted_grottoceratops',
    'cavedelight:cooked_curious_insect',
    'cavedelight:cooked_dino_cut',
    'cavedelight:cooked_trilocaris_slice',
    'cavedelight:dino_chop_pasta',
    'cavedelight:dino_cut_rice',
    'cavedelight:honey_glazed_dino_nugget',
    'cavedelight:lux_and_ham_sandwich',
    'cavedelight:plate_of_grotto_burnt_ends',
    'cavedelight:plate_of_grotto_leg',
    'cavedelight:plate_of_roasted_dino_chop',
    'cavedelight:plate_of_tail_cut',
    'cavedelight:raw_dino_cut',
    'cavedelight:raw_trilocaris_slice',
    'cavedelight:roasted_dino_chop',
    'cavedelight:shish_kebab',
    'cavedelight:stuffed_trilo_tails',
    'cavedelight:trilocaris_noodles',
    'cavedelight:trilocaris_roll',
    'cavedelight:volcanic_chop'
  ])
    // 矿物
    const materials = ['mithril', 'orichalcum', 'blue_steel', 'black_steel', 'red_steel'];
    materials.forEach(material => {
        event.add('forge:tools/paxel', `fallout:${material}_paxel`);
        event.add(`forge:plates/${material}`, `fallout:${material}_sheet`);
        event.add(`forge:ingots/${material}`, `fallout:${material}_ingot`);
        event.add(`forge:nuggets/${material}`, `fallout:${material}_nugget`);
        event.add('forge:plates', `fallout:${material}_sheet`);
        event.add('forge:ingots', `fallout:${material}_ingot`);
        event.add('forge:nuggets', `fallout:${material}_nugget`);
    });
    //刀

    // 合并所有machine分类
    const machineTiers = [
        { tier: 't1_machine', machines: ['mekanismgenerators:bio_generator', 'mekanismgenerators:gas_burning_generator', 'mekanismgenerators:heat_generator', 'mekanismgenerators:solar_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanism:pigment_extractor', 'mekanism:energized_smelter', 'mekanism:resistive_heater', 'mekanism:metallurgic_infuser', 'mekanism:seismic_vibrator', 'mekanism:precision_sawmill', 'mekanism:enrichment_chamber', 'mekanism:nutritional_liquifier', 'mekanism:fluidic_plenisher', 'mekanism:electric_pump'] },
        { tier: 't2_machine', machines: ['mekanismgenerators:rotational_complex', 'mekanism:painting_machine', 'mekanism:fuelwood_heater', 'mekanism:chemical_oxidizer', 'mekanism:oredictionificator', 'mekanism:chemical_infuser', 'mekanism:electrolytic_separator', 'mekanism:osmium_compressor', 'mekanism:pressurized_reaction_chamber', 'mekanism:formulaic_assemblicator', 'mekanism:personal_chest', 'mekanism:rotary_condensentrator'] },
        { tier: 't3_machine', machines: ['mekanismgenerators:control_rod_assembly', 'mekanism:security_desk', 'mekanism:combiner', 'mekanism:laser', 'mekanism:laser_tractor_beam', 'mekanism:chemical_injection_chamber', 'mekanism:solar_neutron_activator', 'mekanism:laser_amplifier'] },
        { tier: 't4_machine', machines: ['mekanismgenerators:fusion_reactor_controller', 'mekanism:sps_casing', 'mekanism:sps_port', 'mekanism:chemical_crystallizer', 'mekanism:chemical_washer', 'mekanism:chemical_dissolution_chamber', 'mekanism:dimensional_stabilizer', 'mekanism:teleporter_frame', 'mekanism:isotopic_centrifuge'] },
        { tier: 't5_machine', machines: ['mekanism:antiprotonic_nucleosynthesizer', 'mekanism:modification_station', 'mekanism:qio_drive_array', 'mekanism:qio_exporter', 'mekanism:qio_importer', 'mekanism:digital_miner', 'mekanism:teleporter', 'mekanism:quantum_entangloporter'] }
    ];

    machineTiers.forEach(entry => {
        const tier = entry.tier;
        const machines = entry.machines;
        machines.forEach(machine => {
            event.add(`mekanism:${tier}`, machine);
        });
    });



    // meka工厂循环优化
    const factorys = [
        'smelting_factory', 'enriching_factory', 'crushing_factory', 'compressing_factory',
        'purifying_factory', 'injecting_factory', 'infusing_factory', 'sawing_factory', 'combining_factory'
    ];
    const factoryTiers = ['basic', 'advanced', 'elite', 'ultimate'];
    factoryTiers.forEach((tier, index) => {
        factorys.forEach(factory => {
            event.add(`mekanism:t${index + 1}_machine`, `mekanism:${tier}_${factory}`);
        });
    });


    // 杂项
    event.add('kubejs:pillagers_gun_all', /pillagers_gun:.*/);
    event.add('witherstormmod:command_block_tools', 'witherstormmod:cannot_fall_in_void', 'witherstormmod:unappetizing', ['fallout:command_joker_hammer']);
    event.add('umvuthana:mask', ['mowziesmobs:umvuthana_mask_fear', 'mowziesmobs:umvuthana_mask_fury', 'mowziesmobs:umvuthana_mask_faith', 'mowziesmobs:umvuthana_mask_bliss', 'mowziesmobs:umvuthana_mask_misery', 'mowziesmobs:umvuthana_mask_rage']);
    event.add('forge:investigatable/t3', ['cataclysm:witherite_ingot', 'cataclysm:ancient_metal_ingot', 'cataclysm:ignitium_ingot', 'cataclysm:cursium_ingot']);
    event.add('forge:investigatable/t2', ['alexscaves:immortal_embryo', 'alexscaves:tectonic_shard']);
    event.add('forge:investigatable/t1', ['iceandfire:fire_dragon_heart', 'iceandfire:ice_dragon_heart', 'iceandfire:lightning_dragon_heart']);
    event.add('forge:ingots/black_steel', ['cataclysm:black_steel_ingot']);
    event.add('forge:ingots', ['cataclysm:black_steel_ingot']);
    event.add('forge:nuggets', ['cataclysm:black_steel_nugget']);
    event.add('forge:nuggets/black_steel', ['cataclysm:black_steel_nugget']);
    event.add('forge:dusts/red_steel', ['fallout:red_steel_dust']);
    event.add('forge:dusts', ['fallout:red_steel_dust', 'fallout:blue_steel_dust']);
    event.add('forge:dusts/blue_steel', ['fallout:blue_steel_dust']);
    event.add('forge:wafer', ['fallout:silicon_wafer', 'fallout:mithril_wafer', 'fallout:orichalcum_wafer']);
    event.add('forge:block/legend', ['fallout:mithril_ingot', 'fallout:orichalcum_ingot']);
    event.add('forge:plates/legend', ['fallout:mithril_sheet', 'fallout:orichalcum_sheet']);
    event.add('forge:ores/mithril', 'fallout:mithril_ore')
    event.add('forge:ores/orichalcum', 'fallout:orichalcum_ore')
    event.add('forge:tools/paxel', ['fallout:brass_paxel', 'fallout:bronze_paxel', 'fallout:copper_paxel']);
    event.add('forge:plates/brass', ['fallout:bronze_sheet']);
    event.add('forge:plates', ['fallout:bronze_sheet', 'fallout:tin_sheet']);
    event.add('forge:plates/tin', ['fallout:tin_sheet']);
    event.add('create:blaze_burner_fuel/special', ['immersiveengineering:coal_coke']);
    event.add('forge:t1', ['fallout:steam', 'fallout:primordial']);
    event.add('forge:t2', ['fallout:power', 'fallout:adaptation']);
    event.add('forge:t3', ['fallout:atom', 'fallout:assimilation']);
    event.add('mekanism:atomic_disassembler', ['mekanism:atomic_disassembler']);
    event.add('forge:ores',['iceandfire:silver_ore','iceandfire:deepslate_silver_ore','iceandfire:sapphire_ore','fallout:deepslate_mithril_ore','fallout:deepslate_orichalcum_ore']);
    event.add('forge:ores/uranium',['alexscaves:radrock_uranium_ore'])
});
ServerEvents.tags('fluid', event => {
            event.add('hajimi:ethene', ['mekanism:ethene']);
    });