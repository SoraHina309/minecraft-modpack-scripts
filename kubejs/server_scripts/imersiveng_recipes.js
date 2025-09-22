ServerEvents.recipes(e => {

  e.custom({
    "type": "immersiveengineering:refinery",
    "catalyst": { "tag": "forge:plates/copper" },
    "energy": 120,
    "input0": { "amount": 8, "tag": "hajimi:ethene" },
    "result": { "amount": 8, "fluid": "immersiveengineering:acetaldehyde" }
  })

  e.custom({
    "type": "immersivepetroleum:distillation",
    "energy": 1024,
    "input": { "amount": 10, "tag": "forge:naphtha_cracked" },
    "results": [
      { "amount": 6, "fluid": "mekanism:ethene" },
      { "amount": 2, "fluid": "immersivepetroleum:propylene" },
      { "amount": 2, "fluid": "immersivepetroleum:benzene" }
    ],
    "time": 1
  })

  e.custom({
    "type": "immersiveengineering:crusher",
    "energy": 6000,
    "input": { "tag": "forge:ores/coal" },
    "result": { "base_ingredient": { "item": "minecraft:coal" }, "count": 4 },
    "secondaries": [
      {
        "chance": 0.30,
        "conditions": [
          {
            "type": "forge:not",
            "value": { "type": "forge:tag_empty", "tag": "forge:dusts/sulfur" }
          }
        ],
        "output": { "tag": "forge:dusts/sulfur", "count": 3 }
      }
    ]
  })

  e.custom({
    "type": "immersiveengineering:crusher",
    "energy": 6000,
    "input": { "tag": "forge:ores/lapis" },
    "result": { "base_ingredient": { "item": "minecraft:lapis_lazuli" }, "count": 9 },
    "secondaries": [
      {
        "chance": 0.40,
        "conditions": [
          {
            "type": "forge:not",
            "value": { "type": "forge:tag_empty", "tag": "forge:dusts/sulfur" }
          }
        ],
        "output": { "tag": "forge:dusts/sulfur", "count": 3 }
      }
    ]
  })


  e.custom({
    "type": "immersiveengineering:crusher",
    "energy": 6000,
    "input": { "tag": "forge:ores/quartz" },
    "result": { "base_ingredient": { "item": "minecraft:quartz" }, "count": 3 },
    "secondaries": [
      {
        "chance": 0.50,
        "conditions": [
          {
            "type": "forge:not",
            "value": { "type": "forge:tag_empty", "tag": "forge:dusts/sulfur" }
          }
        ],
        "output": { "tag": "forge:dusts/sulfur"}
      }
    ]
  })


  e.custom({
    "type": "immersiveengineering:crusher",
    "energy": 1600,
    "input": { "tag": "forge:rods/blaze" },
    "result": { "item": "minecraft:blaze_powder", "count": 4 },
    "secondaries": [
      {
        "chance": 1.0,
        "output": { "tag": "forge:dusts/sulfur"}
      }
    ]
  })

  e.custom({
    "type": "immersiveengineering:crusher",
    "energy": 1600,
    "input": { "item": "minecraft:netherrack" },
    "result": { "item": "create:cinder_flour", "count": 3 },
    "secondaries": [
      {
        "chance": 0.05,
        "output": { "tag": "forge:dusts/sulfur"}
      }
    ]
  })

  //engineer
  e.shaped('immersiveengineering:hammer', [
    " if",
    " si",
    "s  "
  ], { f: "#forge:string", i: "#forge:ingots/iron", s: "#forge:rods/wooden" }).stage('engineer');
  e.shapeless('immersiveengineering:manual', ["minecraft:book", "minecraft:lever"]).stage('engineer');
  e.shaped('immersiveengineering:wirecutter', [
    "si",
    " s"
  ], { i: "#forge:ingots/iron", s: "#forge:rods/wooden" }).stage('engineer');
  e.shaped('immersiveengineering:screwdriver', [
    " i",
    "s "
  ], { i: "#forge:rods/iron", s: "#forge:rods/wooden" }).stage('engineer');
  e.shaped('immersiveengineering:component_steel', [
    "i i",
    " c ",
    "i i"
  ], { c: "#forge:ingots/copper", i: "#forge:plates/steel" }).stage('engineer');
  e.shaped('immersiveengineering:component_iron', [
    "i i",
    " c ",
    "i i"
  ], { c: "#forge:ingots/copper", i: "#forge:plates/iron" }).stage('engineer');
  e.shaped('4x immersiveengineering:wirecoil_copper', [
    " w ",
    "wsw",
    " w "
  ], { s: "#forge:rods/wooden", w: "#forge:wires/copper" }).stage('engineer');
  e.shaped('immersiveengineering:connector_lv', [
    " i ",
    "cic",
    "cic"
  ], { c: "#immersiveengineering:connector_insulator", i: "#forge:ingots/copper" }).stage('engineer');
  e.shaped('8x immersiveengineering:connector_lv_relay', [
    " i ",
    "cic"
  ], { c: "immersiveengineering:connector_insulator", i: "#forge:ingots/copper" }).stage('engineer');
  e.shaped('immersiveengineering:capacitor_lv', [
    "waw",
    "fef",
    "waw"
  ], { a: "forge:plates/lead", e: "immersiveengineering:redstone_acid_bucket", f: "#forge:ingots/iron", w: "#forge:treated_wood" }).stage('engineer');
  //adalloy
  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "tag": "mekanism:tin" },
    "itemInput": { "amount": 3, "ingredient": { "tag": "forge:ingots/copper" } },
    "output": { "item": "mekanism:ingot_bronze", "count": 4 }
  }).stage("adalloy");
  e.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.35,
    "ingredient": { "item": "mekanism:dust_bronze" },
    "result": { "count": 1, "item": "mekanism:ingot_bronze" }
  }).stage("adalloy");
  e.custom({
    "type": "minecraft:blasting",
    "category": "misc",
    "cookingtime": 100,
    "experience": 0.35,
    "ingredient": { "item": "mekanism:dust_bronze" },
    "result": { "count": 1, "item": "mekanism:ingot_bronze" }
  }).stage("adalloy");
  e.shapeless("mekanism:block_bronze", ["9x mekanism:ingot_bronze"]).stage("adalloy");
  e.shapeless("9x mekanism:ingot_bronze", ["mekanism:block_bronze"]).stage("adalloy");

  e.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.35,
    "ingredient": { "item": "immersiveengineering:dust_constantan" },
    "result": { "count": 1, "item": "immersiveengineering:ingot_constantan" }
  }).stage("adalloy");
  e.custom({
    "type": "minecraft:blasting",
    "category": "misc",
    "cookingtime": 100,
    "experience": 0.35,
    "ingredient": { "item": "immersiveengineering:dust_constantan" },
    "result": { "count": 1, "item": "immersiveengineering:ingot_constantan" }
  }).stage("adalloy");
  e.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:ingots/nickel" },
      { "tag": "forge:ingots/copper" }
    ],
    "results": [
      { "item": "immersiveengineering:ingot_constantan", "count": 2 }
    ],
    "heatRequirement": "heated"
  }).stage("adalloy");
  e.shapeless("immersiveengineering:storage_constantan", ["9x immersiveengineering:ingot_constantan"]).stage("adalloy");
  e.shaped("immersiveengineering:ingot_constantan", [
    "PPP",
    "PPP",
    "PPP"
  ], { P: '#forge:nuggets/constantan' }).stage("adalloy");
  e.custom({
    "type": "immersiveengineering:alloy",
    "input0": { "tag": "forge:ingots/nickel" },
    "input1": { "tag": "forge:ingots/copper" },
    "result": {
      "base_ingredient": { "tag": "forge:ingots/constantan" },
      "count": 2
    },
    "time": 200
  }).stage("adalloy");

  e.custom({
    "type": "minecraft:smelting",
    "category": "misc",
    "cookingtime": 200,
    "experience": 0.35,
    "ingredient": { "item": "immersiveengineering:dust_electrum" },
    "result": { "count": 1, "item": "immersiveengineering:ingot_electrum" }
  }).stage("adalloy");


  e.custom({
    "type": "minecraft:blasting",
    "category": "misc",
    "cookingtime": 100,
    "experience": 0.35,
    "ingredient": { "item": "immersiveengineering:dust_electrum" },
    "result": { "count": 1, "item": "immersiveengineering:ingot_electrum" }
  }).stage("adalloy");


  e.custom({
    "type": "create:mixing",
    "ingredients": [
      { "tag": "forge:ingots/gold" },
      { "tag": "forge:ingots/silver" }
    ],
    "results": [
      { "item": "immersiveengineering:ingot_electrum", "count": 2 }
    ],
    "heatRequirement": "heated"
  }).stage("adalloy");


  e.shapeless("immersiveengineering:storage_electrum", ["9x immersiveengineering:ingot_electrum"]).stage("adalloy");


  e.shaped("immersiveengineering:ingot_electrum", [
    "PPP",
    "PPP",
    "PPP"
  ], {
    P: "#forge:nuggets/electrum"
  }).stage("adalloy");


  e.custom({
    "type": "immersiveengineering:alloy",
    "input0": { "tag": "forge:ingots/gold" },
    "input1": { "tag": "forge:ingots/silver" },
    "result": {
      "base_ingredient": { "tag": "forge:ingots/electrum" },
      "count": 2
    },
    "time": 200
  }).stage("adalloy");

  e.custom({
    "type": "create:item_application",
    "ingredients": [
      { "tag": "forge:sandstone" },
      { "item": "minecraft:brick" }
    ],
    "results": [
      { "item": "immersiveengineering:alloybrick" }
    ]
  }).stage("adalloy");
  e.shaped("immersiveengineering:alloybrick", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_alloybrick"
  }).stage("adalloy");
  e.shaped("6x immersiveengineering:slab_alloybrick", [
    "sss"
  ], {
    s: "immersiveengineering:alloybrick"
  }).stage("adalloy");
  e.shaped("2x immersiveengineering:alloybrick", [
    "sb",
    "bs"
  ], {
    s: "#forge:sandstone",
    b: "#forge:ingots/brick"
  }).stage("adalloy");

  //coking
  e.shaped("immersiveengineering:cokebrick", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_cokebrick"
  }).stage("coking");
  e.shaped("6x immersiveengineering:slab_cokebrick", [
    "sss"
  ], {
    s: "immersiveengineering:cokebrick"
  }).stage("coking");
  e.shaped("3x immersiveengineering:cokebrick", [
    "csc",
    "sms",
    "csc"
  ], {
    c: "#forge:clay",
    s: "#forge:ingots/brick",
    m: "#forge:sandstone"
  }).stage("coking");
  e.shaped("4x immersiveengineering:stairs_treated_wood_horizontal", [
    "s  ",
    "ss ",
    "sss"
  ], {
    s: "immersiveengineering:treated_wood_horizontal"
  }).stage("coking");
  e.shapeless("immersiveengineering:treated_wood_horizontal", [
    "immersiveengineering:treated_wood_packaged"
  ]).stage("coking");
  e.shaped("immersiveengineering:treated_wood_horizontal", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_treated_wood_horizontal"
  }).stage("coking");
  e.shaped("6x immersiveengineering:slab_treated_wood_horizontal", [
    "sss"
  ], {
    s: "immersiveengineering:treated_wood_horizontal"
  }).stage("coking");
  e.custom({
    "type": "immersiveengineering:shaped_fluid",
    "pattern": [
      "www",
      "wbw",
      "www"
    ],
    "key": {
      w: { "tag": "minecraft:planks" },
      b: {
        "type": "immersiveengineering:fluid",
        "amount": 1000,
        "tag": "forge:creosote"
      }
    },
    "result": {
      "item": "immersiveengineering:treated_wood_horizontal",
      "count": 8
    }
  }).stage("coking");
  e.custom({
    "type": "create:filling",
    "ingredients": [
      { "tag": "minecraft:planks" },
      { "fluid": "immersiveengineering:creosote", "amount": 125 }
    ],
    "results": [
      { "item": "immersiveengineering:treated_wood_horizontal" }
    ]
  }).stage("coking");
  e.shapeless("immersiveengineering:treated_wood_vertical", [
    "immersiveengineering:treated_wood_horizontal"
  ]).stage("coking");
  e.custom({
    "type": "immersiveengineering:sawmill",
    "energy": 800,
    "input": { "item": "immersiveengineering:treated_wood_horizontal" },
    "result": { "item": "immersiveengineering:slab_treated_wood_horizontal", "count": 2 },
    "secondaries": [
      {
        "output": { "tag": "forge:dusts/wood" },
        "stripping": false
      }
    ]
  }).stage("coking");
  e.custom({
    "type": "immersiveengineering:sawmill",
    "energy": 1600,
    "input": { "item": "immersiveengineering:stairs_treated_wood_horizontal" },
    "result": { "item": "immersiveengineering:treated_wood_horizontal" },
    "secondaries": [
      {
        "output": { "tag": "forge:dusts/wood" },
        "stripping": false
      }
    ]
  }).stage("coking");

  //basicsteel


  e.shaped("3x immersiveengineering:blastbrick", [
    "csc",
    "sms",
    "csc"
  ], {
    c: "#forge:ingots/nether_brick",
    s: "#forge:ingots/brick",
    m: "minecraft:magma_block"
  }).stage("basicsteel");

  e.shaped("immersiveengineering:blastbrick", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_blastbrick"
  }).stage("basicsteel");

  e.shaped("6x immersiveengineering:slab_blastbrick", [
    "sss"
  ], {
    s: "immersiveengineering:blastbrick"
  }).stage("basicsteel");

  e.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      tag: "forge:ingots/iron"
    },
    result: {
      tag: "forge:ingots/steel"
    },
    slag: {
      tag: "forge:slag"
    },
    time: 1200
  }).stage("basicsteel");

  e.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      tag: "forge:storage_blocks/iron"
    },
    result: {
      tag: "forge:storage_blocks/steel"
    },
    slag: {
      base_ingredient: {
        tag: "forge:slag"
      },
      count: 9
    },
    time: 10800
  }).stage("basicsteel");

  e.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: "fallout:raw_mithril"
    },
    result: {
      item: "fallout:mithril_ingot"
    },
    slag: {
      base_ingredient: {
        tag: "forge:slag"
      },
      count: 1
    },
    time: 3600  // Reduced to 1/3 of original 10800
  }).stage("basicsteel");

  e.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: "fallout:raw_orichalcum"
    },
    result: {
      item: "fallout:orichalcum_ingot"
    },
    slag: {
      base_ingredient: {
        tag: "forge:slag"
      },
      count: 1
    },
    time: 3600  // Reduced to 1/3 of original 10800
  }).stage("basicsteel");

  //standards
  e.shaped("6x immersiveengineering:steel_scaffolding_standard", [
    "iii",
    " s ",
    "s s"
  ], {
    i: "#forge:ingots/steel",
    s: "#forge:rods/steel"
  }).stage("standards");

  e.shaped("6x immersiveengineering:slab_steel_scaffolding_standard", [
    "sss"
  ], {
    s: "immersiveengineering:steel_scaffolding_standard"
  }).stage("standards");

  e.shaped("immersiveengineering:steel_scaffolding_standard", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_steel_scaffolding_standard"
  }).stage("standards");

  e.shapeless("immersiveengineering:steel_scaffolding_standard", [
    "immersiveengineering:steel_scaffolding_wooden_top"
  ]).stage("standards");

  e.shapeless("immersiveengineering:steel_scaffolding_grate_top", [
    "immersiveengineering:steel_scaffolding_standard"
  ]).stage("standards");

  e.shaped("4x immersiveengineering:stairs_steel_scaffolding_standard", [
    "s  ",
    "ss ",
    "sss"
  ], {
    s: "immersiveengineering:steel_scaffolding_standard"
  }).stage("standards");
  e.shaped("4x immersiveengineering:rs_engineering", [
    "iri",
    "rcr",
    "iri"
  ], {
    c: "#forge:ingots/copper",
    i: "#forge:sheetmetals/iron",
    r: "#forge:dusts/redstone"
  }).stage("standards");
  e.shaped("4x immersiveengineering:heavy_engineering", [
    "igi",
    "geg",
    "igi"
  ], {
    e: "#forge:ingots/electrum",
    g: "immersiveengineering:component_steel",
    i: "#forge:sheetmetals/steel"
  }).stage("standards");
  e.shaped("4x immersiveengineering:light_engineering", [
    "igi",
    "gcg",
    "igi"
  ], {
    c: "#forge:ingots/copper",
    g: "immersiveengineering:component_iron",
    i: "#forge:sheetmetals/iron"
  }).stage("standards");
  e.shaped("immersiveengineering:electromagnet", [
    "pcp",
    "wiw",
    "pwp"
  ], {
    c: "immersiveengineering:component_electronic",
    i: "#forge:ingots/iron",
    p: "#forge:rods/steel",
    w: "immersiveengineering:wirecoil_copper"
  }).stage("standards");
  e.shaped("4x immersiveengineering:generator", [
    "ici",
    "cgc",
    "ici"
  ], {
    c: "immersiveengineering:coil_mv",
    g: "immersiveengineering:component_iron",
    i: "#forge:sheetmetals/steel"
  }).stage("standards");
  e.shaped("4x immersiveengineering:radiator", [
    "ici",
    "cbc",
    "ici"
  ], {
    b: { "type": "immersiveengineering:fluid", "amount": 1000, "tag": "minecraft:water" },
    c: "#forge:plates/constantan",
    i: "#forge:sheetmetals/steel"
  }).stage("standards");

  //adengineer
  e.shaped("4x immersiveengineering:connector_mv", [
    " i ",
    "cic",
    "cic"
  ], {
    c: "immersiveengineering:connector_insulator",
    i: "#forge:ingots/electrum"
  }).stage("adengineer");
  e.shaped("8x immersiveengineering:connector_mv_relay", [
    " i ",
    "cic"
  ], {
    c: "immersiveengineering:connector_insulator",
    i: "#forge:ingots/electrum"
  }).stage("adengineer");
  e.shaped("immersiveengineering:capacitor_mv", [
    "waw",
    "fef",
    "wcw"
  ], {
    a: "#forge:plates/nickel",
    c: "#forge:plates/iron",
    e: { "type": "immersiveengineering:fluid", "amount": 1000, "tag": "forge:redstone_acid" },
    f: "#forge:ingots/steel",
    w: "#forge:treated_wood"
  }).stage("adengineer");
  e.shaped("immersiveengineering:transformer", [
    "lm",
    "eb",
    "ii"
  ], {
    i: "#forge:ingots/iron",
    l: "immersiveengineering:connector_lv",
    m: "immersiveengineering:connector_mv"
  }).stage("adengineer");

  //seengineer
  e.shaped("4x immersiveengineering:connector_hv", [
    " i ",
    "cic",
    "cic"
  ], {
    c: "immersiveengineering:connector_insulator",
    i: "#forge:ingots/aluminum"
  }).stage("seengineer");
  e.shaped("8x immersiveengineering:connector_hv_relay", [
    " i ",
    "cic",
    "cic"
  ], {
    c: [{ "item": "immersiveengineering:insulating_glass" }, { "item": "immersiveengineering:slag_glass" }],
    i: "#forge:ingots/aluminum"
  }).stage("seengineer");
  e.shaped("immersiveengineering:capacitor_hv", [
    "waw",
    "fef",
    "wcw"
  ], {
    a: "#forge:plates/aluminum",
    c: "#forge:ingots/hop_graphite",
    e: { "type": "immersiveengineering:fluid", "amount": 1000, "tag": "forge:redstone_acid" },
    f: "#forge:ingots/steel",
    w: "#forge:treated_wood"
  }).stage("seengineer");
  e.shaped("immersiveengineering:transformer_hv", [
    "mh",
    "eb",
    "ii"
  ], {
    b: "immersiveengineering:coil_hv",
    e: "immersiveengineering:component_electronic",
    h: "immersiveengineering:connector_hv",
    i: "#forge:ingots/iron",
    m: "immersiveengineering:connector_mv"
  }).stage("seengineer");

  //adpipe
  e.shaped("immersiveengineering:fluid_pump", [
    " i ",
    "ici",
    "ppp"
  ], {
    c: "immersiveengineering:component_iron",
    i: "#forge:plates/iron",
    p: "immersiveengineering:fluid_pipe"
  }).stage("adpipe");
  e.shaped("8x immersiveengineering:fluid_pipe", [
    "ppp",
    "   ",
    "ppp"
  ], {
    p: "#forge:plates/iron"
  }).stage("adpipe");
  e.shaped("immersiveengineering:metal_barrel", [
    "sss",
    "w w",
    "www"
  ], {
    s: "immersiveengineering:slab_sheetmetal_iron",
    w: "#forge:sheetmetals/iron"
  }).stage("adpipe");
  e.shaped("immersiveengineering:fluid_placer", [
    "ibi",
    "b b",
    "ibi"
  ], {
    b: "minecraft:iron_bars",
    i: "#forge:plates/iron"
  }).stage("adpipe");
  e.shaped("immersiveengineering:fluid_sorter", [
    "wrw",
    "ici",
    "wbw"
  ], {
    b: "immersiveengineering:fluid_pipe",
    c: "immersiveengineering:component_iron",
    i: "#forge:ingots/iron",
    r: "#forge:dusts/redstone",
    w: "#forge:treated_wood"
  }).stage("adpipe");

  //sesail
  e.shaped("8x immersiveengineering:conveyor_basic", [
    "lll",
    "iri"
  ], {
    i: "#forge:ingots/iron",
    l: "#forge:leather",
    r: "#forge:dusts/redstone"
  }).stage("sesail");
  e.shaped("immersiveengineering:conveyor_dropper", [
    "c",
    "t"
  ], {
    c: "immersiveengineering:conveyor_basic",
    t: "minecraft:iron_trapdoor"
  }).stage("sesail");
  e.shaped("3x immersiveengineering:conveyor_splitter", [
    "cic",
    " c "
  ], {
    c: "immersiveengineering:conveyor_basic",
    i: "#forge:ingots/iron"
  }).stage("sesail");
  e.shaped("immersiveengineering:conveyor_extract", [
    "ws",
    "mc"
  ], {
    c: "immersiveengineering:conveyor_basic",
    m: "immersiveengineering:component_iron",
    s: "immersiveengineering:strip_curtain",
    w: "#forge:treated_wood"
  }).stage("sesail");
  e.shaped("3x immersiveengineering:conveyor_vertical", [
    "ci",
    "c ",
    "ci"
  ], {
    c: "immersiveengineering:conveyor_basic",
    i: "#forge:ingots/iron"
  }).stage("sesail");
  e.shaped("immersiveengineering:conveyor_redstone", [
    "c",
    "r"
  ], {
    c: "immersiveengineering:conveyor_basic",
    r: "minecraft:redstone_torch"
  }).stage("sesail");
  e.shaped("immersiveengineering:item_batcher", [
    "wrw",
    "ici",
    "wpw"
  ], {
    c: "immersiveengineering:component_iron",
    i: "#forge:ingots/iron",
    p: "immersiveengineering:component_electronic",
    r: "#forge:dusts/redstone",
    w: "#forge:treated_wood"
  }).stage("sesail");
  e.shaped("immersiveengineering:sorter", [
    "wrw",
    "ici",
    "wbw"
  ], {
    b: "immersiveengineering:conveyor_basic",
    c: "immersiveengineering:component_iron",
    i: "#forge:ingots/iron",
    r: "#forge:dusts/redstone",
    w: "#forge:treated_wood"
  }).stage("sesail");


  //adballistics


  //adfirearm


  //workbench
  e.shaped("immersiveengineering:workbench", [
    "iss",
    "c f"
  ], {
    c: "immersiveengineering:craftingtable",
    f: "immersiveengineering:treated_fence",
    i: "#forge:ingots/iron",
    s: "#forge:treated_wood_slab"
  }).stage("workbench");
  e.shaped("immersiveengineering:maintenance_kit", [
    "sc ",
    "fff"
  ], {
    c: "immersiveengineering:wirecutter",
    f: "#forge:fabric_hemp",
    s: "immersiveengineering:screwdriver"
  }).stage("workbench");
  e.shaped("immersiveengineering:buzzsaw", [
    "  g",
    "rhg",
    "r  "
  ], {
    g: "immersiveengineering:wooden_grip",
    h: "immersiveengineering:heavy_engineering",
    r: "#forge:rods/steel"
  }).stage("workbench");
  e.shaped("immersiveengineering:revolver", [
    " hg",
    " dc",
    "b  "
  ], {
    b: "immersiveengineering:gunpart_barrel",
    c: "immersiveengineering:component_steel",
    d: "immersiveengineering:gunpart_drum",
    g: "immersiveengineering:wooden_grip",
    h: "immersiveengineering:gunpart_hammer"
  }).stage("workbench");
  e.shaped("immersiveengineering:chemthrower", [
    " tg",
    " hg",
    "pb "
  ], {
    b: "minecraft:bucket",
    g: "immersiveengineering:wooden_grip",
    h: "immersiveengineering:heavy_engineering",
    p: "immersiveengineering:fluid_pipe",
    t: "immersiveengineering:toolupgrade_drill_waterproof"
  }).stage("workbench");
  e.shaped("immersiveengineering:railgun", [
    " vg",
    "icp",
    "ci "
  ], {
    c: "immersiveengineering:coil_mv",
    g: "immersiveengineering:wooden_grip",
    i: "#forge:ingots/steel",
    p: "immersiveengineering:component_electronic_adv",
    v: "immersiveengineering:capacitor_hv"
  }).stage("workbench");
  e.shaped("immersiveengineering:survey_tools", [
    "cbh",
    "fff"
  ], {
    b: "minecraft:glass_bottle",
    c: "minecraft:writable_book",
    f: "#forge:fabric_hemp",
    h: "immersiveengineering:hammer"
  }).stage("workbench");
  e.shaped("immersiveengineering:drill", [
    "  g",
    " hg",
    "c  "
  ], {
    c: "immersiveengineering:component_iron",
    g: "immersiveengineering:wooden_grip",
    h: "immersiveengineering:heavy_engineering"
  }).stage("workbench");
  e.shaped("immersiveengineering:powerpack", [
    "srs",
    "clc",
    "wrw"
  ], {
    c: "immersiveengineering:connector_lv",
    l: "#forge:leather",
    r: "#forge:rods/steel",
    s: "#forge:rods/treated_wood",
    w: "immersiveengineering:wirecoil_copper_ins"
  }).stage("workbench");


  //workfirearm


  //adworkbench


  //seworkbench


  //elitesoldiers


  //adsteel
  e.custom({
    "type": "create:item_application",
    "ingredients": [
      { "item": "immersiveengineering:blastbrick" },
      { "tag": "forge:plates/steel" }
    ],
    "results": [
      { "item": "immersiveengineering:blastbrick_reinforced" }
    ]
  }).stage("adsteel");

  e.shapeless("immersiveengineering:blastbrick_reinforced", [
    "immersiveengineering:blastbrick",
    "#forge:plates/steel"
  ]).stage("adsteel");

  e.shaped("immersiveengineering:blastbrick_reinforced", [
    "s",
    "s"
  ], {
    s: "immersiveengineering:slab_blastbrick_reinforced"
  }).stage("adsteel");

  e.shaped("6x immersiveengineering:slab_blastbrick_reinforced", [
    "sss"
  ], {
    s: "immersiveengineering:blastbrick_reinforced"
  }).stage("adsteel");

  e.shaped("immersiveengineering:blastfurnace_preheater", [
    "ss",
    "ss",
    "ph"
  ], {
    h: "immersiveengineering:furnace_heater",
    p: "immersiveengineering:fluid_pipe",
    s: "forge:sheetmetals/iron"
  }).stage("adsteel");


  //sentry
  e.shaped("immersiveengineering:tesla_coil", [
    "iii",
    " l ",
    "ehc"
  ], {
    c: "immersiveengineering:component_iron",
    e: "immersiveengineering:component_electronic_adv",
    h: "immersiveengineering:capacitor_hv",
    i: "#forge:plates/aluminum",
    l: "immersiveengineering:coil_mv"
  }).stage("sentry");
  e.shaped("immersiveengineering:turret_gun", [
    " s ",
    " gc",
    "bte"
  ], {
    b: "immersiveengineering:toolupgrade_revolver_magazine",
    c: "immersiveengineering:component_electronic_adv",
    e: "immersiveengineering:rs_engineering",
    g: "immersiveengineering:revolver",
    s: "immersiveengineering:toolupgrade_railgun_scope",
    t: "immersiveengineering:turntable"
  }).stage("sentry");
  e.shaped("immersiveengineering:turret_chem", [
    " s ",
    " gc",
    "bte"
  ], {
    b: "immersiveengineering:metal_barrel",
    c: "immersiveengineering:component_electronic_adv",
    e: "immersiveengineering:rs_engineering",
    g: "immersiveengineering:chemthrower",
    s: "immersiveengineering:toolupgrade_railgun_scope",
    t: "immersiveengineering:turntable"
  }).stage("sentry");


  //grinding


  //cultivation
  e.shaped("immersiveengineering:cloche", [
    "geg",
    "g g",
    "wcw"
  ], {
    c: "immersiveengineering:component_iron",
    e: "immersiveengineering:light_bulb",
    g: "#forge:glass",
    w: "#forge:treated_wood"
  }).stage("cultivation");


  //biodiesel
  e.shaped("immersiveengineering:sample_drill", [
    "sfs",
    "sfs",
    "lfl"
  ], {
    s: "immersiveengineering:steel_scaffolding_standard",
    l: "immersiveengineering:light_engineering",
    f: 'immersiveengineering:steel_fence'
  }).stage("biodiesel");
  //geological


  //oil
  e.shaped("immersivepetroleum:seismic_survey", [
    "sgh",
    "sgs",
    "ili"
  ], {
    s: "immersiveengineering:steel_scaffolding_standard",
    l: "immersiveengineering:light_engineering",
    h: 'immersiveengineering:gunpart_hammer',
    g: 'immersiveengineering:gunpart_barrel',
    i: "immersiveengineering:component_iron"
  }).stage("oil");
  //petroleum


  //electronics
  e.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": { "amount": 250, "tag": "forge:phenolic_resin" },
    "input": { "item": "immersiveengineering:mold_plate" },
    "results": [{ "item": "immersiveengineering:plate_duroplast" }, { "item": "immersiveengineering:mold_plate" }]
  }).stage("electronics");
  e.custom({
    "type": "immersiveengineering:bottling_machine",
    "fluid": { "amount": 250, "tag": "forge:phenolic_resin" },
    "input": { "item": "immersiveengineering:mold_plate" },
    "results": [{ "item": "immersiveengineering:plate_duroplast" }, { "item": "immersiveengineering:mold_plate" }]
  }).stage("electronics");
  e.shaped("immersiveengineering:circuit_table", [
    "sst",
    "c e"
  ], {
    c: "immersiveengineering:craftingtable",
    e: "immersiveengineering:light_engineering",
    s: "#forge:treated_wood_slab",
    t: "immersiveengineering:screwdriver"
  }).stage("electronics");

  //press

  // circuit
  e.shaped('4x fallout:stepper_block', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'ae2:fluix_crystal', B: 'immersiveengineering:heavy_engineering'
  }).stage('circuit');

  e.shaped('mbd2:stepper_fluid_input_port', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'fallout:stepper_block', B: 'immersiveengineering:fluid_pump'
  }).stage('circuit');

  e.shaped('mbd2:stepper_energy_input_port', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'fallout:stepper_block', B: 'immersiveengineering:capacitor_hv'
  }).stage('circuit');

  e.shaped('fallout:stepper_core', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'fallout:stepper_block', B: 'immersiveengineering:logic_circuit'
  }).stage('circuit');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [{ 'tag': 'forge:dusts/hop_graphite' }],
    "energy": 25600,
    "input": { "base_ingredient": { "tag": "forge:gems/certus_quartz" }, "count": 8 },
    "results": [{ "item": "fallout:silicon_boule" }],
    "secondaries": [{ "chance": 0.5, "output": { "item": "fallout:silicon_boule" } }],
    "time": 100
  }).stage('circuit');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [{ 'tag': 'forge:ingots/orichalcum' }],
    "energy": 25600,
    "input": { "base_ingredient": { "tag": "forge:gems/certus_quartz" }, "count": 8 },
    "results": [{ "item": "fallout:orichalcum_boule" }],
    "secondaries": [{ "chance": 0.5, "output": { "item": "fallout:orichalcum_boule" } }],
    "time": 100
  }).stage('circuit');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [{ 'tag': 'forge:ingots/mithril' }],
    "energy": 25600,
    "input": { "base_ingredient": { "tag": "forge:gems/certus_quartz" }, "count": 8 },
    "results": [{ "item": "fallout:mithril_boule" }],
    "secondaries": [{ "chance": 0.5, "output": { "item": "fallout:mithril_boule" } }],
    "time": 100
  }).stage('circuit');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [{ "tag": "forge:ingots/steel" }],
    "energy": 25600,
    "input": { "tag": "forge:ingots/tungsten" },
    "results": [{ "base_ingredient": { "item": "cataclysm:black_steel_ingot" } }],
    "secondaries": [{ "chance": 0.75, "output": { "item": "cataclysm:black_steel_nugget" } }],
    "time": 100
  }).stage('sesteel');

    e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [{ "tag": "forge:ingots/netherite" }],
    "energy": 25600,
    "input": { "tag": "forge:storage_blocks/tungsten" },
    "results": [{ "base_ingredient": { "item": "superbwarfare:cemented_carbide_ingot" } }],
    "secondaries": [{ "chance": 1.00, "output": { "item": "minecraft:netherite_scrap" } }],
    "time": 100
  }).stage('t2vehicle');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "energy": 25600,
    "input": { "item": "fallout:raw_mithril" },
    "results": [{ "base_ingredient": { "item": 'fallout:mithril_ingot' } }],
    "secondaries": [{ "chance": 0.5, "output": { "item": "immersiveengineering:nugget_silver" }, "count": 3 }],
    "time": 100
  }).stage('sesteel');

  e.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [],
    "input": { "base_ingredient": { "item": 'fallout:raw_orichalcum' } },
    "energy": 25600,
    "results": [{ "item": "fallout:orichalcum_ingot" }],
    "secondaries": [{ "chance": 0.5, "output": { "item": "immersiveengineering:nugget_copper" }, "count": 3 }],
    "time": 100
  }).stage('sesteel');

  e.custom({
    "type": "immersiveengineering:metal_press",
    "energy": 2400,
    "input": { "tag": "forge:ingots/black_steel" },
    "mold": "immersiveengineering:mold_plate",
    "result": { "tag": "forge:plates/black_steel" },
    "time": 100
  }).stage('press');

    e.custom({
    "type": "immersiveengineering:metal_press",
    "energy": 2400,
    "input": { "item": "cataclysm:black_steel_block" },
    "mold": "immersiveengineering:mold_plate",
    "result": { "item": "superbwarfare:ap_head" },
    "time": 100
  }).stage('press');

  e.shapeless('cataclysm:black_steel_ingot',['9x cataclysm:black_steel_nugget']);

  // e.custom({
  //   type: 'anvil:enchant', 
  //   input: { item: 'immersiveengineering:graphite_electrode' },
  //   addition: { item: 'minecraft:enchanted_book', nbt: '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}' },
  //   result: { item: "immersiveengineering:graphite_electrode", nbt: '{Enchantments:[{id:"minecraft:unbreaking",lvl:1s}]}' },
  //   cost: 5
  // }
  // );

  // // 耐久 II
  // e.custom(
  //   "immersiveengineering:graphite_electrode",
  //   Item.of("minecraft:enchanted_book").enchant("minecraft:unbreaking", 2),
  //   Item.of("immersiveengineering:graphite_electrode").enchant("minecraft:unbreaking", 2)
  // );

  // // 耐久 III
  // e.custom(
  //   "immersiveengineering:graphite_electrode",
  //   Item.of("minecraft:enchanted_book").enchant("minecraft:unbreaking", 3),
  //   Item.of("immersiveengineering:graphite_electrode").enchant("minecraft:unbreaking", 3)
  // );

});

