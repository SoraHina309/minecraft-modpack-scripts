ServerEvents.recipes(e => {


    //revitalize
    const andesite_alloy = ["#forge:nuggets/iron", "#forge:nuggets/zinc"];
    andesite_alloy.forEach(element => {
        e.shaped('create:andesite_alloy', [
            'BA',
            'AB'
        ], {
            A: 'minecraft:andesite', B: `${element}`
        }).stage('revitalize');
    });
    e.shaped('create:wrench', [
        "GG",
        "GP",
        " S"
    ], { G: "#forge:plates/gold", P: "create:cogwheel", S: "#forge:rods/wooden" }).stage('revitalize');
    e.shapeless('9x create:andesite_alloy', ['#forge:storage_blocks/andesite_alloy']).stage('revitalize');
    e.shapeless('create:andesite_alloy_block', ['9x create:andesite_alloy']).stage('revitalize');


    //cogwheel
    e.shaped('4x create:shaft', [
        "A",
        "A"
    ], { A: 'create:andesite_alloy' }).stage('cogwheel');
    e.shapeless('create:cogwheel', ['create:shaft', "#minecraft:planks"]).stage('cogwheel');
    e.shapeless('create:large_cogwheel', ['create:cogwheel', "#minecraft:planks"]).stage('cogwheel');

    //water_wheel
    e.shaped('create:hand_crank', [
        "CCC",
        "  A"
    ], { C: '#minecraft:planks', A: "create:andesite_alloy" }).stage('water_wheel');
    e.shaped('create:water_wheel', [
        "SSS",
        "SCS",
        "SSS"
    ], { S: '#minecraft:planks', C: 'create:shaft' }).stage('water_wheel');
    e.shaped('create:large_water_wheel', [
        "SSS",
        "SCS",
        "SSS"
    ], { S: '#minecraft:planks', C: 'create:water_wheel' }).stage('water_wheel');

    //clutch
    e.shaped('create:vertical_gearbox', [
        "C C",
        " B ",
        "C C"
    ], { B: 'create:andesite_casing', C: 'create:cogwheel' }).stage('clutch');
    e.shaped('create:gearbox', [
        " C ",
        "CBC",
        " C "
    ], { B: 'create:andesite_casing', C: 'create:cogwheel' }).stage('clutch');
    e.shapeless('create:clutch', ['create:andesite_casing', 'create:shaft', '#forge:dusts/redstone']).stage('clutch');
    e.shapeless('create:gearshift', ['create:andesite_casing', 'create:cogwheel', '#forge:dusts/redstone']).stage('clutch');
    e.shapeless('create:encased_chain_drive', ['create:andesite_casing', '#forge:nuggets/iron', '#forge:nuggets/iron', '#forge:nuggets/iron']).stage('clutch');
    e.shapeless('create:adjustable_chain_gearshift', ['create:encased_chain_drive', 'create:electron_tube']).stage('clutch');

    //millstone
    e.shaped('create:millstone', [
        "C",
        "S",
        "I"
    ], { C: 'create:cogwheel', S: '#forge:stone', I: 'create:andesite_casing' }).stage('millstone');

    //process

    e.shapeless('create:depot', ['create:andesite_alloy', 'create:andesite_casing']).stage('process');
    e.shaped('create:basin', [
        "A A",
        "AAA"
    ], { A: 'create:andesite_alloy' }).stage('process');
    e.shaped('create:mechanical_press', [
        "S",
        "C",
        "I"
    ], { S: 'create:shaft', C: 'create:andesite_casing', I: '#forge:storage_blocks/iron' }).stage('process');
    e.shaped('create:mechanical_mixer', [
        "S",
        "C",
        "I"
    ], { S: 'create:cogwheel', C: 'create:andesite_casing', I: 'create:whisk' }).stage('process');
    e.shaped('create:wrench', [
        "GG",
        "GP",
        " S"
    ], { G: '#forge:plates/gold', P: 'create:cogwheel', S: '#forge:rods/wooden' }).stage('process');
    e.shaped('createaddition:rolling_mill', [
        "PSP",
        "ASA",
        "ACA"
    ], { P: "forge:plates/iron", S: "create:shaft", A: "create:andesite_alloy", C: "create:andesite_casing" }).stage('process');

    //fan
    e.shaped('create:encased_fan', [
        "S",
        "A",
        "P"
    ], { A: "create:andesite_casing", P: "create:propeller", S: "create:shaft" }).stage('fan');
    e.shaped('create:nozzle', [
        " S ",
        " C ",
        "SSS"
    ], { C: "minecraft:wool", S: "create:andesite_alloy" }).stage('fan');

    //belt
    e.shaped('create:belt_connector', [
        "DDD",
        "DDD"
    ], { D: "minecraft:dried_kelp" }).stage('belt');
    e.shaped('create:chute', [
        "A",
        "I",
        "A"
    ], { A: "#forge:plates/iron", I: "#forge:ingots/iron" }).stage('belt');
    e.shaped('create:andesite_tunnel', [
        "AA",
        "KK"
    ], { A: "create:andesite_alloy", K: "minecraft:dried_kelp" }).stage('belt');
    e.shaped('create:andesite_funnel', [
        "A",
        "K"
    ], { A: "create:andesite_alloy", K: "minecraft:dried_kelp" }).stage('belt');
    e.shaped('create:weighted_ejector', [
        "A",
        "D",
        "I"
    ], { A: "#forge:plates/gold", D: "create:depot", I: "create:cogwheel" }).stage('belt');

    //sail
    e.shaped('create:white_sail', [
        "WS",
        "SA"
    ], { A: "create:andesite_alloy", S: "#forge:rods/wooden", W: "#minecraft:wool" }).stage('sail');
    e.shapeless('create:sail_frame', ['create:white_sail']).stage('sail');
    e.shaped('create:windmill_bearing', [
        "B",
        "C",
        "I"
    ], { B: "minecraft:wooden_slabs", C: "forge:stone", I: "create:shaft" }).stage('sail');

    //mechanical
    e.shaped('create:mechanical_bearing', [
        "B",
        "C",
        "I"
    ], { B: "#minecraft:wooden_slabs", C: "create:andesite_casing", I: "create:shaft" }).stage('mechanical');

    e.shaped('create:cart_assembler', [
        "CRC",
        "L L"
    ], { C: "create:andesite_alloy", L: "#minecraft:logs", R: "#forge:dusts/redstone" }).stage('mechanical');
    e.shaped('create:linear_chassis', [
        " P ",
        "LLL",
        " P "
    ], { L: "minecraft:logs", P: "create:andesite_alloy" }).stage('mechanical');
    e.shapeless('create:secondary_linear_chassis', ['create:linear_chassis']).stage('mechanical');
    e.shapeless('create:linear_chassis', ['create:secondary_linear_chassis']).stage('mechanical');
    e.shaped('create:radial_chassis', [
        " L ",
        "PLP",
        " L "
    ], { L: "#minecraft:logs", P: "create:andesite_alloy" }).stage('mechanical');
    e.shapeless('create:portable_storage_interface', ['create:andesite_casing', 'create:chute']).stage('mechanical');
    e.shaped('create:sticker', [
        "ISI",
        "CRC"
    ], { C: "#forge:cobblestone", I: "create:andesite_alloy", R: "#forge:dusts/redstone", S: "#forge:slimeballs" }).stage('mechanical');
    e.shaped('create:super_glue', [
        "AS",
        "NA"
    ], { A: "#forge:slimeballs", N: "#forge:nuggets/iron", S: "#forge:plates/iron" }).stage('mechanical');
    e.shaped('create:contraption_controls', [
        "B",
        "C",
        "I"
    ], { B: "#minecraft:buttons", C: "create:andesite_casing", I: "create:electron_tube" }).stage('mechanical');
    e.shaped('2x create:redstone_contact', [
        " S ",
        "CWC",
        "CCC"
    ], { C: "minecraft:cobblestone", S: "#forge:plates/iron", W: "#forge:dusts/redstone" }).stage('mechanical');

    //carriage
    e.shaped('create:rope_pulley', [
        "B",
        "C",
        "I"
    ], { B: "create:andesite_casing", C: "#minecraft:wool", I: "#forge:plates/iron" }).stage('carriage');
    e.shaped('create:gantry_carriage', [
        "B",
        "C",
        "I"
    ], { B: "#minecraft:wooden_slabs", C: "create:andesite_casing", I: "create:cogwheel" }).stage('carriage');
    e.shaped('8x create:gantry_shaft', [
        "A",
        "R",
        "A"
    ], { A: "create:andesite_alloy", R: "#forge:dusts/redstone" }).stage('carriage');
    e.shaped('8x create:piston_extension_pole', [
        "P",
        "A",
        "P"
    ], { A: "create:andesite_alloy", P: "#minecraft:planks" }).stage('carriage');
    e.shaped('create:sticky_mechanical_piston', [
        "S",
        "P"
    ], { P: "create:mechanical_piston", S: "#forge:slimeballs" }).stage('carriage');
    e.shaped('create:mechanical_piston', [
        "B",
        "C",
        "I"
    ], { B: "minecraft:wooden_slabs", C: "create:andesite_casing", I: "create:piston_extension_pole" }).stage('carriage');

    //pipe
    e.shaped('4x create:fluid_pipe', [
        "SCS"
    ], { C: "#forge:ingots/copper", S: "#forge:plates/copper" }).stage('pipe');
    e.shaped('4x create:fluid_pipe', [
        "S",
        "C",
        "S"
    ], { C: "#forge:ingots/copper", S: "#forge:plates/copper" }).stage('pipe');
    e.shapeless('create:mechanical_pump', ["create:cogwheel", "create:fluid_pipe"]).stage('pipe');
    e.shapeless('create:mechanical_pump', ["create:cogwheel", "create:fluid_pipe"]).stage('pipe');
    e.shaped('create:spout', [
        "T",
        "P"
    ], { P: "minecraft:dried_kelp", T: "create:copper_casing" }).stage('pipe');
    e.shapeless('create:fluid_valve', ["#forge:plates/iron", "create:fluid_pipe"]).stage('pipe');
    e.shaped('create:copper_valve_handle', [
        "CCC",
        " S "
    ], { C: "#forge:plates/copper", S: "create:andesite_alloy" }).stage('pipe');
    e.shapeless('create:copper_valve_handle', ['#create:valve_handles']).stage('pipe');
    e.shapeless('create:portable_fluid_interface', ["create:copper_casing", "create:chute"]).stage('pipe');
    e.shaped("create:item_drain", [
        "P",
        "S"
    ], { P: "minecraft:iron_bars", S: "create:copper_casing" }).stage('pipe');
    e.shaped("create:hose_pulley", [
        "B",
        "C",
        "I"
    ], { B: "create:copper_casing", C: "minecraft:dried_kelp_block", I: "#forge:plates/copper" }).stage('pipe');
    e.shaped("create:fluid_tank", [
        "B",
        "C",
        "B"
    ], { B: "#forge:plates/copper", C: "#forge:barrels/wooden" }).stage('pipe');

    //steam
    e.shaped('create:steam_engine', [
        "P",
        "A",
        "C"
    ], { A: "create:andesite_alloy", C: "#forge:storage_blocks/copper", P: "#forge:plates/gold" }).stage('steam');
    e.shaped("create:steam_whistle", [
        "P",
        "C"
    ], { C: "#forge:ingots/copper", P: "#forge:plates/gold" }).stage('steam');
    e.shaped('create:empty_blaze_burner', [
        " I ",
        "IAI",
        " I "
    ], { A: "#forge:netherrack", I: "#forge:plates/iron" }).stage('steam');

    //brass
    e.recipes.create.mixing('2x create:brass_ingot', [
        '#forge:ingots/copper', '#forge:ingots/zinc'
    ]).heated().stage('brass');

    e.recipes.create.mixing('4x mekanism:ingot_bronze', [
        '3x #forge:ingots/copper', '#forge:ingots/tin'
    ]).heated().stage('brass');
    e.recipes.create.pressing('#forge:plates/brass', 'mekanism:ingot_bronze')

    e.shaped('createlowheated:basic_burner', [
        "   ",
        "A A",
        " A "
    ], { A: "create:andesite_alloy" }).stage('brass');
    e.shapeless('9x create:brass_ingot', ['#forge:storage_blocks/brass']).stage('brass');
    e.shapeless('create:brass_block', ['9x create:brass_ingot']).stage('brass');

    //tube
    e.shapeless('create:rose_quartz', ['#forge:gems/quartz', "8x #forge:dusts/redstone"]).stage('tube');
    //'create:polished_rose_quartz'
    e.shaped('create:electron_tube', [
        "L",
        "N"
    ], { L: "create:polished_rose_quartz", N: "#forge:plates/iron" }).stage('tube');

    //switch

    e.shaped('create:pulse_repeater', [
        "RCT",
        "SSS"
    ], {
        R: '#forge:dusts/redstone',
        C: '#forge:plates/brass',
        S: '#forge:stone',
        T: 'minecraft:redstone_torch'
    }).stage('switch')

    e.shapeless('create:repackager', [
        'create:packager'
    ]).stage('switch')

    e.shapeless('create:packager', [
        'create:repackager'
    ]).stage('switch')

    e.shaped('create:package_frogport', [
        "B",
        "A",
        "C"
    ], {
        A: 'create:item_vault',
        B: '#forge:slimeballs',
        C: 'create:andesite_alloy'
    }).stage('switch')

    e.shapeless('create:item_hatch', [
        'create:andesite_alloy',
        'minecraft:iron_trapdoor'
    ]).stage('switch')

    e.shapeless('create:stock_link', [
        'create:stock_link'
    ]).stage('switch')

    e.shaped('create:stock_link', [
        "C",
        "B"
    ], {
        B: 'create:item_vault',
        C: 'create:transmitter'
    }).stage('switch')

    e.shapeless('create:stock_ticker', [
        'create:stock_ticker'
    ]).stage('switch')

    e.shaped('create:stock_ticker', [
        "C",
        "A",
        "B"
    ], {
        A: 'create:stock_link',
        B: '#forge:ingots/gold',
        C: '#forge:glass'
    }).stage('switch')

    e.shaped('create:redstone_requester', [
        "C",
        "A",
        "B"
    ], {
        A: 'create:stock_link',
        B: '#forge:ingots/iron',
        C: '#forge:dusts/redstone'
    }).stage('switch')

    e.shapeless('create:redstone_requester', [
        'create:redstone_requester'
    ]).stage('switch')

    e.shapeless('create:factory_gauge', [
        'create:factory_gauge'
    ]).stage('switch')

    e.shapeless('2x create:factory_gauge', [
        'create:stock_link',
        'create:precision_mechanism'
    ]).stage('switch')


    e.shaped('create:stockpile_switch', [
        "R",
        "B",
        "I"
    ], { B: "create:brass_casing", I: "minecraft:comparator", R: "create:electron_tube" }).stage('switch');
    e.shaped('create:content_observer', [
        "R",
        "B",
        "I"
    ], { B: "create:brass_casing", I: "minecraft:observer", R: "create:electron_tube" }).stage('switch');
    e.shaped('create:brass_tunnel', [
        "E ",
        "AA",
        "KK"
    ], { A: "#forge:ingots/brass", E: "create:electron_tube", K: "minecraft:dried_kelp" }).stage('switch');
    e.shaped('create:brass_funnel', [
        "E",
        "A",
        "K"
    ], { A: "#forge:ingots/brass", E: "create:electron_tube", K: "minecraft:dried_kelp" }).stage('switch');
    e.shaped('create:smart_chute', [
        "I",
        "S",
        "P"
    ], { I: "#forge:plates/brass", P: "create:electron_tube", S: "create:chute" }).stage('switch');
    //drill
    e.shaped('create:mechanical_saw', [
        " A ",
        "AIA",
        " C "
    ], { A: "#forge:plates/iron", C: "create:andesite_casing", I: "#forge:ingots/iron" }).stage('drill');
    e.shaped('create:mechanical_drill', [
        " A ",
        "AIA",
        " C "
    ], { A: "create:andesite_alloy", C: "create:andesite_casing", I: "#forge:ingots/iron" }).stage('drill');
    e.shaped('create:mechanical_harvester', [
        "AIA",
        "AIA",
        " C "
    ], { A: "create:andesite_alloy", C: "create:andesite_casing", I: "#forge:plates/iron" }).stage('drill');
    e.shaped('create:mechanical_plough', [
        "III",
        "AAA",
        " C "
    ], { A: "create:andesite_alloy", C: "create:andesite_casing", I: "#forge:plates/iron" }).stage('drill');
    e.shaped('create:mechanical_roller', [
        "A",
        "C",
        "I"
    ], { A: "create:electron_tube", C: "create:andesite_casing", I: "create:crushing_wheel" }).stage('drill');
    //steel
    e.recipes.create.compacting('fallout:pig_iron_ingot', [
        'minecraft:iron_ingot', '3x #minecraft:coals'
    ]).superheated().stage('steel');
    e.shapeless('#forge:storage_blocks/steel', '9x #forge:ingots/steel').stage('steel');
    e.shapeless('9x #forge:ingots/steel', '#forge:storage_blocks/steel').stage('steel');
    e.shapeless('9x #forge:nuggets/steel', '#forge:ingots/steel').stage('steel');
    // e.recipes.create.compacting('fallout:pig_iron_ingot', [
    //     'minecraft:iron_ingot', '3x minecraft:charcoal'
    // ]).superheated().stage('steel');
    //T1vehicle
    //crafter
    e.shaped('create:mechanical_crafter', [
        "B",
        "C",
        "R"
    ], { B: "create:electron_tube", C: "create:brass_casing", R: "minecraft:crafting_table" }).stage('crafter');
    //deployer
    e.shaped('create:mechanical_arm', [
        "LLA",
        "L  ",
        "IC "
    ], { A: "create:andesite_alloy", C: "create:brass_casing", I: "create:precision_mechanism", L: "#forge:plates/brass" }).stage('deployer');

    e.shaped('create:precision_mechanism', [
        "ACB",
        "ADB",
        "ACB"
    ], { A: "create:cogwheel", B: "create:large_cogwheel", C: "minecraft:iron_nugget", D: "#forge:plates/gold" }).stage('deployer');
    e.shaped('create:deployer', [
        "B",
        "C",
        "I"
    ], { B: "create:electron_tube", C: "create:andesite_casing", I: "create:brass_hand" }).stage('deployer');
    //flywheel
    e.shapeless('create:sequenced_gearshift', ["create:brass_casing", "create:cogwheel", "create:electron_tube"]).stage('flywheel');
    e.shaped('create:elevator_pulley', [
        "B",
        "C",
        "I"
    ], { B: "create:brass_casing", C: "minecraft:dried_kelp_block", I: "#forge:plates/iron" }).stage('flywheel');
    e.shaped('create:rotation_speed_controller', [
        "B",
        "C"
    ], { B: "create:precision_mechanism", C: "create:brass_casing" }).stage('flywheel');
    e.shaped('create:smart_fluid_pipe', [
        "I",
        "S",
        "P"
    ], { I: "#forge:plates/brass", P: "create:electron_tube", S: "create:fluid_pipe" }).stage('flywheel');
    e.shaped('create:flywheel', [
        "CCC",
        "CAC",
        "CCC"
    ], { A: "create:shaft", C: "#forge:ingots/brass" }).stage('flywheel');

    e.shaped('createaddition:modular_accumulator', [
        " R ",
        "CBC",
        " W "
    ], { R: "#forge:rods/copper", B: "create:brass_casing", C: "createaddition:capacitor", W: "#forge:wires/electrum" }).stage('basicelcity');
    e.shaped('createaddition:modular_accumulator', [
        " R ",
        "CBC",
        " W "
    ], { R: "#forge:rods/copper", B: "create:brass_casing", C: "createaddition:capacitor", W: "#forge:wires/gold" }).stage('basicelcity');
    e.shaped('3x createaddition:connector', [
        "AB",
        "C "
    ], { A: '#forge:rods/copper', B: 'create:andesite_alloy', C: '#forge:slimeballs' }).stage('basicelcity');
    e.shapeless('createaddition:small_light_connector', ["#forge:wires/iron", "#forge:glass", "createaddition:connector"]).stage('basicelcity');
    e.shapeless('2x createaddition:large_connector', ["#forge:rods/electrum", "create:andesite_alloy", "create:andesite_alloy", "#forge:slimeballs"]).stage('basicelcity');
    e.shapeless('2x createaddition:large_connector', ["#forge:rods/gold", "create:andesite_alloy", "create:andesite_alloy", "#forge:slimeballs"]).stage('basicelcity');

    e.recipes.create.mixing('2x immersiveengineering:ingot_constantan', [
        '#forge:ingots/nickel', '#forge:ingots/copper'
    ]).heated().stage('adalloy');

    e.recipes.create.mixing('2x immersiveengineering:ingot_electrum', [
        '#forge:ingots/gold', '#forge:ingots/silver'
    ]).heated().stage('adalloy');


    //crushing
    e.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
        " AAA ",
        "AAPAA",
        "APSPA",
        "AAPAA",
        " AAA "
    ], { A: "create:andesite_alloy", P: "#minecraft:planks", S: "#forge:stone" }).stage('crushing');
    //ballistics 
    //steamgun
    //basicfirearm
    //basicelcity
    e.recipes.create.mechanical_crafting('createaddition:alternator', [
        "  A  ",
        " ISI ",
        "ISRSI",
        " ICI "
    ], { C: "createaddition:capacitor", I: "#forge:plates/iron", R: "#forge:rods/iron", S: "createaddition:copper_spool", A: "create:andesite_alloy" }).stage('basicelcity');
    e.recipes.create.mechanical_crafting('createaddition:electric_motor', [
        "  A  ",
        " BSB ",
        "BSRSB",
        " BCB "
    ], { A: "create:andesite_alloy", C: "createaddition:capacitor", B: "#forge:plates/brass", R: "#forge:rods/iron", S: "createaddition:copper_spool" }).stage('basicelcity');
    e.recipes.create.mechanical_crafting('createaddition:tesla_coil', [
        "SSS",
        " A ",
        "CBC",
        "PEP"
    ], { A: "create:andesite_alloy", C: "createaddition:capacitor", P: "#forge:plates/brass", B: "create:brass_casing", E: "create:electron_tube", S: "createaddition:copper_spool" }).stage('basicelcity');

    //heresy


    e.shaped('create:pulse_repeater', [
        "RCT",
        "SSS"
    ], {
        R: '#forge:dusts/redstone',
        C: '#forge:plates/brass',
        S: '#forge:stone',
        T: 'minecraft:redstone_torch'
    }).stage('heresy')

    e.shapeless('create:repackager', [
        'create:packager'
    ]).stage('heresy')

    e.shapeless('create:packager', [
        'create:repackager'
    ]).stage('heresy')

    e.shaped('create:package_frogport', [
        "B",
        "A",
        "C"
    ], {
        A: 'create:item_vault',
        B: '#forge:slimeballs',
        C: 'create:andesite_alloy'
    }).stage('heresy')

    e.shapeless('create:item_hatch', [
        'create:andesite_alloy',
        'minecraft:iron_trapdoor'
    ]).stage('heresy')

    e.shapeless('create:stock_link', [
        'create:stock_link'
    ]).stage('heresy')

    e.shaped('create:stock_link', [
        "C",
        "B"
    ], {
        B: 'create:item_vault',
        C: 'create:transmitter'
    }).stage('heresy')

    e.shapeless('create:stock_ticker', [
        'create:stock_ticker'
    ]).stage('heresy')

    e.shaped('create:stock_ticker', [
        "C",
        "A",
        "B"
    ], {
        A: 'create:stock_link',
        B: '#forge:ingots/gold',
        C: '#forge:glass'
    }).stage('heresy')

    e.shaped('create:redstone_requester', [
        "C",
        "A",
        "B"
    ], {
        A: 'create:stock_link',
        B: '#forge:ingots/iron',
        C: '#forge:dusts/redstone'
    }).stage('heresy')

    e.shapeless('create:redstone_requester', [
        'create:redstone_requester'
    ]).stage('heresy')

    e.shapeless('create:factory_gauge', [
        'create:factory_gauge'
    ]).stage('heresy')

    e.shapeless('2x create:factory_gauge', [
        'create:stock_link',
        'create:precision_mechanism'
    ]).stage('heresy')

    e.recipes.create.mechanical_crafting('createendertransmission:energy_transmitter', [
        "OOSOO",
        "OMPMO",
        "OMEMO",
        "OMPMO",
        "OOSOO"
    ], {
        S: 'create:shaft',
        O: 'minecraft:obsidian',
        P: 'create:precision_mechanism',
        E: 'minecraft:ender_eye',
        M: 'minecraft:ender_pearl'
    }).stage('heresy')

    e.recipes.create.mechanical_crafting('createendertransmission:fluid_transmitter', [
        "OOSOO",
        "OMPMO",
        "OMEMO",
        "OMPMO",
        "OOSOO"
    ], {
        S: 'create:mechanical_pump',
        O: 'minecraft:obsidian',
        P: 'create:precision_mechanism',
        E: 'minecraft:ender_eye',
        M: 'minecraft:ender_pearl'
    }).stage('heresy')

    e.recipes.create.mechanical_crafting('createendertransmission:item_transmitter', [
        "OOSOO",
        "OMPMO",
        "OMEMO",
        "OMPMO",
        "OOSOO"
    ], {
        S: 'create:chute',
        O: 'minecraft:obsidian',
        P: 'create:precision_mechanism',
        E: 'minecraft:ender_eye',
        M: 'minecraft:ender_pearl'
    }).stage('heresy')

    e.shaped('createendertransmission:chunk_loader', [
        "###",
        "#D#",
        "###"
    ], {
        '#': 'minecraft:obsidian',
        D: 'minecraft:beacon'
    }).stage('heresy')

    // 粉碎 soul_sand，2% 概率获得 dried_parasite_skin
    e.recipes.create.crushing([
        Item.of('fallout:dried_parasite_skin').withChance(0.02)
    ], 'minecraft:soul_sand')

    // 粉碎 netherite_scrap，15% 概率获得 dried_parasite_skin
    e.recipes.create.crushing([
        Item.of('fallout:dried_parasite_skin').withChance(0.15)
    ], 'minecraft:netherite_scrap')

    e.recipes.create.crushing([
        Item.of('minecraft:coal'),
        Item.of('minecraft:coal').withChance(0.5),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12),
        Item.of('mekanism:dust_sulfur').withChance(0.50)
    ], '#forge:ores/coal')

    e.recipes.create.crushing([
        Item.of('10x minecraft:lapis_lazuli'),
        Item.of('minecraft:lapis_lazuli').withChance(0.5),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12),
        Item.of('mekanism:dust_sulfur').withChance(0.50)
    ], '#forge:ores/lapis')

    e.recipes.create.crushing([
        Item.of('2x minecraft:quartz'),
        Item.of('minecraft:quartz').withChance(0.5),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:netherrack').withChance(0.12),
        Item.of('mekanism:dust_sulfur').withChance(0.50)
    ], '#forge:ores/quartz')

    e.recipes.create.crushing([
        Item.of('4x minecraft:blaze_powder'),
        Item.of('mekanism:dust_sulfur').withChance(1.0)
    ], '#forge:rods/blaze')

    e.recipes.create.crushing([
        Item.of('3x create:cinder_flour'),
        Item.of('3x create:cinder_flour').withChance(0.5),
        Item.of('mekanism:dust_sulfur').withChance(0.05)
    ], 'minecraft:netherrack')

    e.recipes.create.crushing([
        Item.of('minecraft:sand'),
        Item.of('immersiveengineering:dust_saltpeter').withChance(0.5)
    ], '#forge:sandstone/colorless')

    e.recipes.create.crushing([
        Item.of('minecraft:red_sand'),
        Item.of('immersiveengineering:dust_saltpeter').withChance(0.5)
    ], '#forge:sandstone/red')

    e.recipes.create.milling([
        Item.of('8x kaleidoscope_cookery:rice'),
        Item.of('kaleidoscope_cookery:wild_rice'),
        Item.of('farmersdelight:straw').withChance(0.5)
    ], 'farmersdelight:rice_panicle')
    //序列组装
    //手枪弹头
    // 使用黄铜板切割成手枪弹头
    e.recipes.create.cutting('10x fallout:pistol_bullet_tip', [
        '#forge:plates/brass'
    ])

    // 使用钢锭切割成步枪弹头
    e.recipes.create.cutting('24x fallout:rifle_bullet_tip', [
        '#forge:ingots/steel'
    ])

    // 使用钢锭切割成狙击弹头
    e.recipes.create.cutting('24x fallout:sniper_bullet_tip', [
        '#forge:ingots/steel'
    ])

    // 使用铅锭切割成霰弹枪弹头
    e.recipes.create.cutting('24x fallout:shotgun_bullet_tip', [
        '#forge:ingots/lead'
    ])
    //弹壳
    const inc_case = '#forge:plates/brass'
    e.recipes.create.sequenced_assembly([
        'fallout:brass_case'
    ], inc_case, [
        e.recipes.create.deploying(inc_case, [inc_case, 'minecraft:gunpowder'])
    ]).transitionalItem(inc_case).loops(1).stage('ballistics');
    // 手枪子弹
    const inc_pistol = 'fallout:brass_case'
    e.recipes.create.sequenced_assembly([
        Item.of('tacz:ammo', 6, '{AmmoId:"cyber_armorer:bullet_pistol"}')
    ], inc_pistol, [
        e.recipes.create.deploying(inc_pistol, [inc_pistol, 'fallout:pistol_bullet_tip'])
    ]).transitionalItem(inc_pistol).loops(1).stage('ballistics');

    // 步枪子弹
    const inc_rifle = 'fallout:brass_case'
    e.recipes.create.sequenced_assembly([
        Item.of('tacz:ammo', 4, '{AmmoId:"cyber_armorer:bullet_rifle"}')
    ], inc_rifle, [
        e.recipes.create.deploying(inc_rifle, [inc_rifle, 'fallout:rifle_bullet_tip'])
    ]).transitionalItem(inc_rifle).loops(1).stage('ballistics');

    e.recipes.create.sequenced_assembly([
        '4x superbwarfare:rifle_ammo'
    ], inc_rifle, [
        e.recipes.create.deploying(inc_case, [inc_case, 'minecraft:gunpowder']),
        e.recipes.create.deploying(inc_rifle, [inc_rifle, 'fallout:rifle_bullet_tip'])
    ]).transitionalItem(inc_rifle).loops(1).stage('t1vehicle');

    // 狙击子弹
    const inc_sniper = 'fallout:brass_case'
    e.recipes.create.sequenced_assembly([
        Item.of('tacz:ammo', 1, '{AmmoId:"cyber_armorer:bullet_sniper"}')
    ], inc_sniper, [
        e.recipes.create.deploying(inc_sniper, [inc_sniper, 'fallout:sniper_bullet_tip'])
    ]).transitionalItem(inc_sniper).loops(1).stage('ballistics');


    e.recipes.create.sequenced_assembly([
        'superbwarfare:heavy_ammo'
    ], inc_sniper, [
        e.recipes.create.deploying(inc_case, [inc_case, 'minecraft:gunpowder']),
        e.recipes.create.deploying(inc_sniper, [inc_sniper, 'fallout:sniper_bullet_tip'])
    ]).transitionalItem(inc_sniper).loops(1).stage('t1vehicle');

    e.recipes.create.sequenced_assembly([
        '4x superbwarfare:small_shell'
    ], inc_sniper, [
        e.recipes.create.deploying(inc_sniper, [inc_sniper, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(inc_sniper, [inc_sniper, 'superbwarfare:fusee'])
    ]).transitionalItem(inc_sniper).loops(1).stage('t1vehicle');

    // 霰弹 (Buckshot)
    const inc_buckshot = 'fallout:brass_case'
    e.recipes.create.sequenced_assembly([
        Item.of('tacz:ammo', 4, '{AmmoId:"cyber_armorer:bullet_buckshot"}')
    ], inc_buckshot, [
        e.recipes.create.deploying(inc_buckshot, [inc_buckshot, 'fallout:shotgun_bullet_tip'])
    ]).transitionalItem(inc_buckshot).loops(1).stage('ballistics');
    //机炮炮弹

    e.recipes.create.deploying(inc_sniper, [inc_sniper, 'fallout:sniper_bullet_tip'])
    //穿甲弹
    const inc_ap = 'superbwarfare:grain'
    e.recipes.create.sequenced_assembly([
        'superbwarfare:ap_5_inches'
    ], inc_ap, [
        e.recipes.create.deploying(inc_ap, [inc_ap, 'superbwarfare:ap_head']),
        e.recipes.create.deploying(inc_ap, [inc_ap, 'superbwarfare:fusee'])
    ]).transitionalItem(inc_ap).loops(1).stage('t2vehicle');

    const inc_he = 'superbwarfare:grain'
    e.recipes.create.sequenced_assembly(
        ['superbwarfare:he_5_inches'],
        inc_he,
        [
            e.recipes.create.deploying(inc_he, [inc_he, 'superbwarfare:he_head']),
            e.recipes.create.deploying(inc_he, [inc_he, 'superbwarfare:fusee'])
        ]
    ).transitionalItem(inc_he).loops(1).stage('t2vehicle');


    const inc_gs = 'superbwarfare:grain'
    e.recipes.create.sequenced_assembly(
        ['superbwarfare:gs_5_inches'],
        inc_gs,
        [
            e.recipes.create.deploying(inc_gs, [inc_gs, 'superbwarfare:gs_head']),
            e.recipes.create.deploying(inc_gs, [inc_gs, 'superbwarfare:fusee'])
        ]
    ).transitionalItem(inc_gs).loops(1).stage('t2vehicle');

    const inc_cm = 'superbwarfare:grain'
    e.recipes.create.sequenced_assembly(
        ['superbwarfare:mg_5_inches'],
        inc_cm,
        [
            e.recipes.create.deploying(inc_cm, [inc_cm, 'superbwarfare:mg_head']),
            e.recipes.create.deploying(inc_cm, [inc_cm, 'superbwarfare:fusee'])
        ]
    ).transitionalItem(inc_cm).loops(1).stage('t2vehicle');

    //火箭弹
    const rocket_ap = 'superbwarfare:missile_engine'
    e.recipes.create.sequenced_assembly([
        '3x superbwarfare:medium_rocket_ap'
    ], rocket_ap, [
        e.recipes.create.deploying(rocket_ap, [rocket_ap, 'superbwarfare:ap_head']),
        e.recipes.create.deploying(rocket_ap, [rocket_ap, 'superbwarfare:fusee'])
    ]).transitionalItem(rocket_ap).loops(1).stage('t2vehicle');

    const rocket_he = 'superbwarfare:missile_engine'
    e.recipes.create.sequenced_assembly([
        '3x superbwarfare:medium_rocket_he'
    ], rocket_he, [
        e.recipes.create.deploying(rocket_he, [rocket_he, 'superbwarfare:he_head']),
        e.recipes.create.deploying(rocket_he, [rocket_he, 'superbwarfare:fusee'])
    ]).transitionalItem(rocket_he).loops(1).stage('t2vehicle');

    const rocket_cm = 'superbwarfare:missile_engine'
    e.recipes.create.sequenced_assembly([
        '3x superbwarfare:medium_rocket_cm'
    ], rocket_cm, [
        e.recipes.create.deploying(rocket_cm, [rocket_cm, 'superbwarfare:cm_cmad']),
        e.recipes.create.deploying(rocket_cm, [rocket_cm, 'superbwarfare:fusee'])
    ]).transitionalItem(rocket_cm).loops(1).stage('t2vehicle');
    //航弹
    const m500kg = 'immersiveengineering:chute_steel'
    e.recipes.create.sequenced_assembly([
        'superbwarfare:medium_aerial_bomb'
    ], m500kg, [
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:high_energy_explosives']),
        e.recipes.create.deploying(m500kg, [m500kg, 'superbwarfare:fusee'])
    ]).transitionalItem(m500kg).loops(1).stage('t3vehicle');
    //tow
    const tow = 'immersiveengineering:wirecoil_redstone'
    e.recipes.create.sequenced_assembly([
        '2x superbwarfare:wire_guide_missile'
    ], tow, [
        e.recipes.create.deploying(tow, [tow, 'superbwarfare:missile_engine']),
        e.recipes.create.deploying(tow, [tow, 'superbwarfare:he_head']),
        e.recipes.create.deploying(tow, [tow, 'superbwarfare:seeker'])
    ]).transitionalItem(tow).loops(1).stage('t3vehicle');
    //小牛

        const agm = 'superbwarfare:missile_engine'
    e.recipes.create.sequenced_assembly([
        '2x superbwarfare:agm'
    ], agm, [
        e.recipes.create.deploying(agm, [agm, 'mekanism:advanced_control_circuit']),
        e.recipes.create.deploying(agm, [agm, 'superbwarfare:he_head']),
        e.recipes.create.deploying(agm, [agm, 'superbwarfare:seeker']),
        e.recipes.create.deploying(agm, [agm, 'mekanism:laser'])
    ]).transitionalItem(agm).loops(1).stage('t3vehicle');


    e.recipes.create.sequenced_assembly(
        // 输出物品及概率(这里的概率更偏向于占比),
        // 占比越高输出该物品的概率越高
        // 数组内的第一个物品为主要输出物品
        // 其他输出物品则为“废料”
        [
            Item.of("immersiveengineering:ingot_steel").withChance(0.95),
            Item.of("minecraft:iron_ingot").withChance(0.05),
            Item.of("minecraft:iron_nugget").withChance(0.02)
        ],
        // 输入物品
        "fallout:pig_iron_ingot",
        // 参与机器--按顺序加工
        [
            // 参与机器--机械手
            e.recipes.create.pressing("fallout:pig_iron_ingot", "fallout:pig_iron_ingot"),
            // 参与机器--切石机
            e.recipes.create.pressing("fallout:pig_iron_ingot", "fallout:pig_iron_ingot"),
            // 参与机器--注液器
            e.recipes.create.pressing("fallout:pig_iron_ingot", "fallout:pig_iron_ingot"),
            // 参与机器--压片
            e.recipes.create.pressing("fallout:pig_iron_ingot", "fallout:pig_iron_ingot"),
        ]
    )
        // 中间件--加工成的半成品物品
        .transitionalItem("fallout:pig_iron_ingot")
        // 循环次数--如果不写默认为5次
        .loops(4)
        .stage('steel');
})