ServerEvents.recipes(e => {//以下是移除配方分区
  //以下是mek配方分区

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "alexscaves:raw_scarlet_neodymium" } },
    "output": { "amount": 10, "infuse_type": "kubejs:scarlet_neodymium" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "alexscaves:raw_azure_neodymium" } },
    "output": { "amount": 10, "infuse_type": "kubejs:azure_neodymium" }
  }).stage("bsamt");

    e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:dust_scarlet_neodymium" } },
    "output": { "amount": 10, "infuse_type": "kubejs:scarlet_neodymium" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:dust_azure_neodymium" } },
    "output": { "amount": 10, "infuse_type": "kubejs:azure_neodymium" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:enriched_azure_neodymium" } },
    "output": { "amount": 80, "infuse_type": "kubejs:azure_neodymium" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:enriched_scarlet_neodymium" } },
    "output": { "amount": 80, "infuse_type": "kubejs:scarlet_neodymium" }
  }).stage("bsamt");

    e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:enriched_tungsten" } },
    "output": { "amount": 80, "infuse_type": "kubejs:tungsten" }
  }).stage("bsamt");

  // e.custom({
  //   "type": "mekanism:infusion_conversion",
  //   "input": { "ingredient": { "item": "fallout:enriched_aluminum" } },
  //   "output": { "amount": 80, "infuse_type": "kubejs:aluminum" }
  // }).stage("bsamt");

    e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "item": "fallout:enriched_nickel" } },
    "output": { "amount": 80, "infuse_type": "kubejs:nickel" }
  }).stage("bsamt");


  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:ingots/blue_steel" } },
    "output": { "amount": 10, "infuse_type": "kubejs:blue_steel" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:nuggets/blue_steel" } },
    "output": { "amount": 1, "infuse_type": "kubejs:blue_steel" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:plates/blue_steel" } },
    "output": { "amount": 5, "infuse_type": "kubejs:blue_steel" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:dusts/blue_steel" } },
    "output": { "amount": 10, "infuse_type": "kubejs:blue_steel" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:ingots/nickel" } },
    "output": { "amount": 10, "infuse_type": "kubejs:nickel" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:nuggets/nickel" } },
    "output": { "amount": 1, "infuse_type": "kubejs:nickel" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:plates/nickel" } },
    "output": { "amount": 5, "infuse_type": "kubejs:nickel" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:dusts/nickel" } },
    "output": { "amount": 10, "infuse_type": "kubejs:nickel" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:silicon" } },
    "output": { "amount": 10, "infuse_type": "kubejs:silicon" }
  }).stage("alloyinfused");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:ingots/tungsten" } },
    "output": { "amount": 20, "infuse_type": "kubejs:tungsten" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:infusion_conversion",
    "input": { "ingredient": { "tag": "forge:dusts/tungsten" } },
    "output": { "amount": 20, "infuse_type": "kubejs:tungsten" }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 20, "tag": "mekanism:redstone" },
    "itemInput": { "ingredient": { "tag": "forge:silicon" } },
    "output": { "item": "mekanism:basic_control_circuit", "count": 1 }
  }).stage("alloyinfused");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 20, "tag": "mekanism:redstone" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/constantan" } },
    "output": { "item": "mekanism:alloy_infused", "count": 2 }
  }).stage("alloyinfused");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 20, "infuse_type": "kubejs:tungsten" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/steel" } },
    "output": { "item": "cataclysm:black_steel_ingot", "count": 1 }
  }).stage("bsamt");

    e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 80, "infuse_type": "kubejs:tungsten" },
    "itemInput": { "ingredient": { "tag": "minecraft:netherite_ingot" } },
    "output": { "item": "superbwarfare:cemented_carbide_ingot", "count": 2 }
  }).stage("bsamt");


  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "infuse_type": "kubejs:scarlet_neodymium" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/black_steel" } },
    "output": { "item": "fallout:red_steel_ingot", "count": 1 }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "infuse_type": "kubejs:nickel" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/copper" } },
    "output": { "item": "immersiveengineering:ingot_constantan", "count": 2 }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "infuse_type": "kubejs:azure_neodymium" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/black_steel" } },
    "output": { "item": "fallout:blue_steel_ingot", "count": 1 }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 40, "infuse_type": "mekanism:redstone" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/aluminum" } },
    "output": { "item": "immersiveengineering:wirecoil_redstone", "count": 8 }
  }).stage("bsamt");

  e.custom({
    "type": "mekanism:crushing",
    "input": { "ingredient": { "tag": "forge:ingots/red_steel" } },
    "output": { "item": "fallout:red_steel_dust" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:crushing",
    "input": { "ingredient": { "tag": "forge:ingots/blue_steel" } },
    "output": { "item": "fallout:blue_steel_dust" }
  }).stage("blredfused");

  e.custom({
    "type": "mekanism:enriching",
    "input": { "ingredient": { "tag": "forge:gems/certus_quartz" } },
    "output": { "count": 1, 'item': "ae2:silicon" }
  }).stage("alloyinfused");



  // ============================================================
  // Mithril 处理流程
  // ============================================================

  // 溶解
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 3, ingredient: { item: "fallout:raw_mithril" } }, output: { amount: 2000, chemicalType: "slurry", slurry: "kubejs:dirty_mithril" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "fallout:deepslate_mithril_ore" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_mithril" } }).stage("teamt")

  // 清洗
  e.recipes.mekanism.washing(Fluid.of("minecraft:water", 5), { slurry: "kubejs:dirty_mithril", amount: 1 }, { slurry: "kubejs:clean_mithril", amount: 1 }).stage("teamt")

  // 结晶
  e.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: "kubejs:clean_mithril" }, output: { item: "fallout:crystal_mithril" } }).stage("teamt")

  // 压射
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:crystal_mithril" } }, output: { item: "fallout:shard_mithril" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:deepslate_mithril_ore" } }, output: { count: 4, item: "fallout:shard_mithril" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { amount: 3, ingredient: { item: "fallout:raw_mithril" } }, output: { count: 8, item: "fallout:shard_mithril" } }).stage("elamt")

  // 提纯
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:deepslate_mithril_ore" } }, output: { count: 3, item: "fallout:clump_mithril" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:raw_mithril" } }, output: { count: 2, item: "fallout:clump_mithril" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:shard_mithril" } }, output: { item: "fallout:clump_mithril" } }).stage("elamt")

  // 粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:clump_mithril" } }, output: { item: "fallout:dirty_dust_mithril" } }).stage("bsamt")

  // 富集
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:dirty_dust_mithril" } }, output: { item: "fallout:dust_mithril" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:mithril_ingot" } }, output: { item: "fallout:dust_mithril" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:deepslate_mithril_ore" } }, output: { count: 2, item: "fallout:dust_mithril" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { amount: 3, ingredient: { item: "fallout:raw_mithril" } }, output: { count: 4, item: "fallout:dust_mithril" } }).stage("bsamt")

  // 熔炼
  e.custom({ type: "minecraft:blasting", cookingtime: 100, experience: 0.5, ingredient: { item: "fallout:raw_mithril" }, result: "fallout:mithril_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:smelting", cookingtime: 200, experience: 0.5, ingredient: { item: "fallout:raw_mithril" }, result: "fallout:mithril_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:blasting", cookingtime: 100, experience: 0.5, ingredient: { item: "fallout:dust_mithril" }, result: "fallout:mithril_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:smelting", cookingtime: 200, experience: 0.5, ingredient: { item: "fallout:dust_mithril" }, result: "fallout:mithril_ingot" }).stage("bsamt")


  // ============================================================
  // Orichalcum 处理流程
  // ============================================================

  // 溶解
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 3, ingredient: { item: "fallout:raw_orichalcum" } }, output: { amount: 2000, chemicalType: "slurry", slurry: "kubejs:dirty_orichalcum" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "fallout:deepslate_orichalcum_ore" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_orichalcum" } }).stage("teamt")

  // 清洗
  e.recipes.mekanism.washing(Fluid.of("minecraft:water", 5), { slurry: "kubejs:dirty_orichalcum", amount: 1 }, { slurry: "kubejs:clean_orichalcum", amount: 1 }).stage("teamt")

  // 结晶
  e.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: "kubejs:clean_orichalcum" }, output: { item: "fallout:crystal_orichalcum" } }).stage("teamt")

  // 压射
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:crystal_orichalcum" } }, output: { item: "fallout:shard_orichalcum" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:deepslate_orichalcum_ore" } }, output: { count: 4, item: "fallout:shard_orichalcum" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { amount: 3, ingredient: { item: "fallout:raw_orichalcum" } }, output: { count: 8, item: "fallout:shard_orichalcum" } }).stage("elamt")

  // 提纯
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:deepslate_orichalcum_ore" } }, output: { count: 3, item: "fallout:clump_orichalcum" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:raw_orichalcum" } }, output: { count: 2, item: "fallout:clump_orichalcum" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:shard_orichalcum" } }, output: { item: "fallout:clump_orichalcum" } }).stage("elamt")

  // 粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:clump_orichalcum" } }, output: { item: "fallout:dirty_dust_orichalcum" } }).stage("bsamt")

  // 富集
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:dirty_dust_orichalcum" } }, output: { item: "fallout:dust_orichalcum" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:orichalcum_ingot" } }, output: { item: "fallout:dust_orichalcum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:deepslate_orichalcum_ore" } }, output: { count: 2, item: "fallout:dust_orichalcum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { amount: 3, ingredient: { item: "fallout:raw_orichalcum" } }, output: { count: 4, item: "fallout:dust_orichalcum" } }).stage("bsamt")

  // 熔炼
  e.custom({ type: "minecraft:blasting", cookingtime: 100, experience: 0.5, ingredient: { item: "fallout:raw_orichalcum" }, result: "fallout:orichalcum_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:smelting", cookingtime: 200, experience: 0.5, ingredient: { item: "fallout:raw_orichalcum" }, result: "fallout:orichalcum_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:blasting", cookingtime: 100, experience: 0.5, ingredient: { item: "fallout:dust_orichalcum" }, result: "fallout:orichalcum_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:smelting", cookingtime: 200, experience: 0.5, ingredient: { item: "fallout:dust_orichalcum" }, result: "fallout:orichalcum_ingot" }).stage("bsamt")


  // ============================================================
  // Tungsten 处理流程
  // ============================================================

  // 溶解
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 3, ingredient: { item: "superbwarfare:scheelite" } }, output: { amount: 2000, chemicalType: "slurry", slurry: "kubejs:dirty_tungsten" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "superbwarfare:scheelite_ore" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_tungsten" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "superbwarfare:deepslate_scheelite_ore" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_tungsten" } }).stage("teamt")

  // 清洗
  e.recipes.mekanism.washing(Fluid.of("minecraft:water", 5), { slurry: "kubejs:dirty_tungsten", amount: 1 }, { slurry: "kubejs:clean_tungsten", amount: 1 }).stage("teamt")

  // 结晶
  e.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: "kubejs:clean_tungsten" }, output: { item: "fallout:crystal_tungsten" } }).stage("teamt")

  // 压射
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:crystal_tungsten" } }, output: { item: "fallout:shard_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "superbwarfare:scheelite_ore" } }, output: { count: 4, item: "fallout:shard_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "superbwarfare:deepslate_scheelite_ore" } }, output: { count: 4, item: "fallout:shard_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { amount: 3, ingredient: { item: "superbwarfare:scheelite" } }, output: { count: 8, item: "fallout:shard_tungsten" } }).stage("elamt")

  // 提纯
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "superbwarfare:scheelite_ore" } }, output: { count: 3, item: "fallout:clump_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "superbwarfare:deepslate_scheelite_ore" } }, output: { count: 3, item: "fallout:clump_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "superbwarfare:scheelite" } }, output: { count: 2, item: "fallout:clump_tungsten" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:shard_tungsten" } }, output: { item: "fallout:clump_tungsten" } }).stage("elamt")

  // 粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:clump_tungsten" } }, output: { item: "fallout:dirty_dust_tungsten" } }).stage("bsamt")

  // 富集
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "superbwarfare:tungsten_powder" } }, output: { item: "fallout:enriched_tungsten" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:dirty_dust_tungsten" } }, output: { item: "superbwarfare:tungsten_powder" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "superbwarfare:tungsten_ingot" } }, output: { item: "superbwarfare:tungsten_powder" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "superbwarfare:scheelite_ore" } }, output: { count: 2, item: "superbwarfare:tungsten_powder" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "superbwarfare:deepslate_scheelite_ore" } }, output: { count: 2, item: "superbwarfare:tungsten_powder" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { amount: 3, ingredient: { item: "superbwarfare:scheelite" } }, output: { count: 4, item: "superbwarfare:tungsten_powder" } }).stage("bsamt")

  // 熔炼
  e.custom({ type: "minecraft:blasting", cookingtime: 100, experience: 0.5, ingredient: { item: "superbwarfare:tungsten_powder" }, result: "superbwarfare:tungsten_ingot" }).stage("bsamt")
  e.custom({ type: "minecraft:smelting", cookingtime: 200, experience: 0.5, ingredient: { item: "superbwarfare:tungsten_powder" }, result: "superbwarfare:tungsten_ingot" }).stage("bsamt")


  // ============================================================
  // Aluminum 处理流程
  // ============================================================

  // 溶解
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 3, ingredient: { item: "immersiveengineering:raw_aluminum" } }, output: { amount: 2000, chemicalType: "slurry", slurry: "kubejs:dirty_aluminum" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "immersiveengineering:ore_aluminum" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_aluminum" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "immersiveengineering:deepslate_ore_aluminum" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_aluminum" } }).stage("teamt")

  // 清洗
  e.recipes.mekanism.washing(Fluid.of("minecraft:water", 5), { slurry: "kubejs:dirty_aluminum", amount: 1 }, { slurry: "kubejs:clean_aluminum", amount: 1 }).stage("teamt")

  // 结晶
  e.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: "kubejs:clean_aluminum" }, output: { item: "fallout:crystal_aluminum" } }).stage("teamt")

  // 压射
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:crystal_aluminum" } }, output: { item: "fallout:shard_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "immersiveengineering:ore_aluminum" } }, output: { count: 4, item: "fallout:shard_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "immersiveengineering:deepslate_ore_aluminum" } }, output: { count: 4, item: "fallout:shard_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { amount: 3, ingredient: { item: "immersiveengineering:raw_aluminum" } }, output: { count: 8, item: "fallout:shard_aluminum" } }).stage("elamt")

  // 提纯
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:ore_aluminum" } }, output: { count: 3, item: "fallout:clump_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:deepslate_ore_aluminum" } }, output: { count: 3, item: "fallout:clump_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:raw_aluminum" } }, output: { count: 2, item: "fallout:clump_aluminum" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:shard_aluminum" } }, output: { item: "fallout:clump_aluminum" } }).stage("elamt")

  // 粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:clump_aluminum" } }, output: { item: "fallout:dirty_dust_aluminum" } }).stage("bsamt")


  // 富集
  // e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "immersiveengineering:dust_aluminum" } }, output: { item: "fallout:enriched_aluminum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:dirty_dust_aluminum" } }, output: { item: "immersiveengineering:dust_aluminum" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "immersiveengineering:ingot_aluminum" } }, output: { item: "immersiveengineering:dust_aluminum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "immersiveengineering:ore_aluminum" } }, output: { count: 2, item: "immersiveengineering:dust_aluminum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "immersiveengineering:deepslate_ore_aluminum" } }, output: { count: 2, item: "immersiveengineering:dust_aluminum" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { amount: 3, ingredient: { item: "immersiveengineering:raw_aluminum" } }, output: { count: 4, item: "immersiveengineering:dust_aluminum" } }).stage("bsamt")




  // ============================================================
  // Nickel 处理流程
  // ============================================================

  // 溶解
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 3, ingredient: { item: "immersiveengineering:raw_nickel" } }, output: { amount: 2000, chemicalType: "slurry", slurry: "kubejs:dirty_nickel" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "immersiveengineering:ore_nickel" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_nickel" } }).stage("teamt")
  e.custom({ type: "mekanism:dissolution", gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, itemInput: { amount: 1, ingredient: { item: "immersiveengineering:deepslate_ore_nickel" } }, output: { amount: 1000, chemicalType: "slurry", slurry: "kubejs:dirty_nickel" } }).stage("teamt")

  // 清洗
  e.recipes.mekanism.washing(Fluid.of("minecraft:water", 5), { slurry: "kubejs:dirty_nickel", amount: 1 }, { slurry: "kubejs:clean_nickel", amount: 1 }).stage("teamt")

  // 结晶
  e.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: "kubejs:clean_nickel" }, output: { item: "fallout:crystal_nickel" } }).stage("teamt")

  // 压射
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "fallout:crystal_nickel" } }, output: { item: "fallout:shard_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "immersiveengineering:ore_nickel" } }, output: { count: 4, item: "fallout:shard_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { ingredient: { item: "immersiveengineering:deepslate_ore_nickel" } }, output: { count: 4, item: "fallout:shard_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:injecting", chemicalInput: { amount: 1, gas: "mekanism:hydrogen_chloride" }, itemInput: { amount: 3, ingredient: { item: "immersiveengineering:raw_nickel" } }, output: { count: 8, item: "fallout:shard_nickel" } }).stage("elamt")

  // 提纯
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:ore_nickel" } }, output: { count: 3, item: "fallout:clump_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:deepslate_ore_nickel" } }, output: { count: 3, item: "fallout:clump_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "immersiveengineering:raw_nickel" } }, output: { count: 2, item: "fallout:clump_nickel" } }).stage("elamt")
  e.custom({ type: "mekanism:purifying", chemicalInput: { amount: 1, gas: "mekanism:oxygen" }, itemInput: { ingredient: { item: "fallout:shard_nickel" } }, output: { item: "fallout:clump_nickel" } }).stage("elamt")

  // 粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:clump_nickel" } }, output: { item: "fallout:dirty_dust_nickel" } }).stage("bsamt")

  // 富集
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "immersiveengineering:dust_nickel" } }, output: { item: "fallout:enriched_nickel" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "fallout:dirty_dust_nickel" } }, output: { item: "immersiveengineering:dust_nickel" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "immersiveengineering:ingot_nickel" } }, output: { item: "immersiveengineering:dust_nickel" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "immersiveengineering:ore_nickel" } }, output: { count: 2, item: "immersiveengineering:dust_nickel" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { ingredient: { item: "immersiveengineering:deepslate_ore_nickel" } }, output: { count: 2, item: "immersiveengineering:dust_nickel" } }).stage("bsamt")
  e.custom({ type: "mekanism:enriching", input: { amount: 3, ingredient: { item: "immersiveengineering:raw_nickel" } }, output: { count: 4, item: "immersiveengineering:dust_nickel" } }).stage("bsamt")


  // ============================================================
  // neodymium 处理流程
  // ============================================================
  //粉碎
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "alexscaves:raw_azure_neodymium" } }, output: { item: "fallout:dust_azure_neodymium" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "alexscaves:raw_scarlet_neodymium" } }, output: { item: "fallout:dust_scarlet_neodymium" } }).stage("bsamt")
  //富集
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:dust_azure_neodymium" } }, output: { item: "fallout:enriched_azure_neodymium" } }).stage("bsamt")
  e.custom({ type: "mekanism:crushing", input: { ingredient: { item: "fallout:dust_scarlet_neodymium" } }, output: { item: "fallout:enriched_scarlet_neodymium" } }).stage("bsamt")


  // e.recipes.mekanism.crystallizing(
  //   "fallout:crystal_orichalcum",
  //   {slurry:"kubejs:clean_orichalcum",amount:200}
  // );


  // e.shaped(
  //   Item.of('mekanism:enrichment_chamber', 1),
  //   [
  //       'RBR',
  //       'PSP',
  //       'RBR'
  //   ],
  //   {
  //       R: 'minecraft:redstone',
  //       B: 'mekanism:basic_control_circuit', 
  //       P: 'immersiveengineering:plate_steel', 
  //       S: 'mekanism:steel_casing'
  //   }
  // );
  // e.shaped(
  //   Item.of('mekanism:basic_tier_installer', 1),
  //   [
  //       'RBR',
  //       'PSP',
  //       'RBR'
  //   ],
  //   {
  //       R: 'immersiveengineering:wirecoil_redstone',
  //       B: 'mekanism:basic_control_circuit', 
  //       P: 'fallout:black_steel_sheet', 
  //       S: {'tag':'minecraft:planks'}
  //   }
  // );
  const installers_and_energy_cubes = [
    "mekanism:basic_tier_installer", "mekanism:advanced_tier_installer", "mekanism:elite_tier_installer", "mekanism:ultimate_tier_installer",
    "mekanism:basic_energy_cube", "mekanism:advanced_energy_cube", "mekanism:elite_energy_cube", "mekanism:ultimate_energy_cube",
  ];


  const materials = [
    ["immersiveengineering:wirecoil_redstone", "forge:circuits/basic", "forge:plates/black_steel"],
    ["mekanism:alloys/infused", "forge:circuits/advanced", "forge:plates/red_steel"],
    ["mekanism:alloys/reinforced", "forge:circuits/elite", "forge:plates/blue_steel"],
    ["mekanism:alloys/atomic", "forge:circuits/ultimate", "forge:plates/legend"],

    ["immersiveengineering:wirecoil_redstone", "forge:batteries", "forge:plates/black_steel", "mekanism:steel_casing"],
    ["mekanism:alloys/infused", "forge:circuits/advanced", "forge:plates/red_steel", "mekanism:basic_energy_cube"],
    ["mekanism:alloys/reinforced", "forge:circuits/elite", "forge:plates/blue_steel", "mekanism:advanced_energy_cube"],
    ["mekanism:alloys/atomic", "forge:circuits/ultimate", "forge:plates/legend", "mekanism:elite_energy_cube"],

  ];
  e.shaped(
    Item.of(`mekanism:basic_tier_installer`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'item': `${materials[0][0]}` },
      B: { 'tag': `${materials[0][1]}` },
      P: { 'tag': `${materials[0][2]}` },
      S: { 'tag': 'minecraft:planks' }
    }
  ).stage("bsfacroy");
  e.shaped(
    Item.of(`mekanism:advanced_tier_installer`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[1][0]}` },
      B: { 'tag': `${materials[1][1]}` },
      P: { 'tag': `${materials[1][2]}` },
      S: { 'tag': 'minecraft:planks' }
    }
  ).stage("alfacroy");
  e.shaped(
    Item.of(`mekanism:elite_tier_installer`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[2][0]}` },
      B: { 'tag': `${materials[2][1]}` },
      P: { 'tag': `${materials[2][2]}` },
      S: { 'tag': 'minecraft:planks' }
    }
  ).stage("elfacroy");
  e.shaped(
    Item.of(`mekanism:ultimate_tier_installer`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[3][0]}` },
      B: { 'tag': `${materials[3][1]}` },
      P: { 'tag': `${materials[3][2]}` },
      S: { 'tag': 'minecraft:planks' }
    }
  ).stage("tefacroy");

  e.shaped(
    Item.of(`mekanism:basic_energy_cube`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'item': `${materials[4][0]}` },
      B: { 'tag': `${materials[4][1]}` },
      P: { 'tag': `${materials[4][2]}` },
      S: { 'item': `${materials[4][3]}` }
    }
  );
  e.shaped(
    Item.of(`mekanism:advanced_energy_cube`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[5][0]}` },
      B: { 'tag': `${materials[5][1]}` },
      P: { 'tag': `${materials[5][2]}` },
      S: { 'item': `${materials[5][3]}` }
    }
  );
  e.shaped(
    Item.of(`mekanism:elite_energy_cube`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[6][0]}` },
      B: { 'tag': `${materials[6][1]}` },
      P: { 'tag': `${materials[6][2]}` },
      S: { 'item': `${materials[6][3]}` }
    }
  );
  e.shaped(
    Item.of(`mekanism:ultimate_energy_cube`, 1),
    [
      'RBR',
      'PSP',
      'RBR'
    ],
    {
      R: { 'tag': `${materials[7][0]}` },
      B: { 'tag': `${materials[7][1]}` },
      P: { 'tag': `${materials[7][2]}` },
      S: { 'item': `${materials[7][3]}` }
    }
  );




  const metal1 = [
    'iron', 'brass', 'copper', 'golden',
    'blue_steel', 'orichalcum', 'mithril', 'black_steel', 'tin', 'red_steel', 'bronze',
    'aluminum', 'lead', 'silver', 'nickel', 'constantan', 'steel', 'electrum', 'uranium',
  ];

  const createMetals = ['brass', 'copper'];
  const falloutMetals = ['blue_steel', 'orichalcum', 'mithril', 'red_steel'];
  const immersiveMetals = ['aluminum', 'lead', 'silver', 'nickel', 'constantan', 'steel', 'electrum', 'uranium'];
  const kubejsMetals = ['tin', 'bronze'];

  metal1.forEach(metal => {
    if (metal === 'golden') {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": "forge:ingots/gold" } },
        "mainOutput": { "count": 1, "item": "create:golden_sheet" },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": "minecraft:gold_nugget", "count": 1 }
      });
    } else if (metal === 'iron') {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": "forge:ingots/iron" } },
        "mainOutput": { "count": 1, "item": "create:iron_sheet" },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": "minecraft:iron_nugget", "count": 1 }
      });
    } else if (createMetals.includes(metal)) {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": `forge:ingots/${metal}` } },
        "mainOutput": { "count": 1, "item": `create:${metal}_sheet` },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": `create:${metal}_nugget`, "count": 1 }
      });
    } else if (falloutMetals.includes(metal)) {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": `forge:ingots/${metal}` } },
        "mainOutput": { "count": 1, "item": `fallout:${metal}_sheet` },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": `fallout:${metal}_nugget`, "count": 1 }
      });
    } else if (immersiveMetals.includes(metal)) {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": `forge:ingots/${metal}` } },
        "mainOutput": { "count": 1, "item": `immersiveengineering:plate_${metal}` },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": `immersiveengineering:nugget_${metal}`, "count": 1 }
      });
    } else if (kubejsMetals.includes(metal)) {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": `forge:ingots/${metal}` } },
        "mainOutput": { "count": 1, "item": `fallout:${metal}_sheet` },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": `mekanism:nugget_${metal}`, "count": 1 }
      });
    } else if (metal === 'black_steel') {
      e.custom({
        "type": "mekanism:sawing",
        "input": { "ingredient": { "tag": `forge:ingots/black_steel` } },
        "mainOutput": { "count": 1, "item": `fallout:black_steel_sheet` },
        "secondaryChance": 0.5,
        "secondaryOutput": { "item": 'cataclysm:black_steel_nugget', "count": 1 }
      });
    };
  });
  //mekanism
  e.shaped("mekanism:steel_casing", [
    "SGS",
    "GOG",
    "SGS"
  ], {
    G: "mekanism:structural_glass",
    S: "#forge:ingots/black_steel",
    O: "#forge:ingots/osmium",
  }).stage("mekanism");

  e.shaped("mekanism:metallurgic_infuser", [
    "IFI",
    "ROR",
    "IFI"
  ], {
    F: "minecraft:furnace",
    I: "immersiveengineering:plate_steel",
    O: "#forge:ingots/osmium",
    R: "#forge:dusts/redstone"
  }).stage("mekanism");
  e.shaped("8x mekanism:basic_mechanical_pipe", [
    "SFS"
  ], {
    F: "minecraft:bucket",
    S: "#forge:ingots/steel",
  }).stage("mekanism");
  e.shaped("mekanism:dictionary", [
    "C",
    "B"
  ], {
    B: "minecraft:book",
    C: "#forge:circuits/basic",
  }).stage("mekanism");
  e.shaped("8x mekanism:basic_universal_cable", [
    "SFS"
  ], {
    F: "#forge:dusts/redstone",
    S: "#forge:ingots/steel",
  }).stage("mekanism");
  e.shaped("8x mekanism:basic_pressurized_tube", [
    "SFS"
  ], {
    F: "#forge:glass/silica",
    S: "#forge:ingots/steel",
  }).stage("mekanism");
  e.shaped("8x mekanism:basic_thermodynamic_conductor", [
    "SFS"
  ], {
    F: "#forge:ingots/copper",
    S: "#forge:ingots/steel",
  }).stage("mekanism");
  e.shaped("8x mekanism:basic_logistical_transporter", [
    "SFS"
  ], {
    F: "#forge:circuits/basic",
    S: "#forge:ingots/steel",
  }).stage("mekanism");
  e.shaped("mekanism:basic_chemical_tank", [
    "AOA",
    "O O",
    "AOA"
  ], {
    A: "#mekanism:alloys/basic",
    O: "#forge:ingots/osmium"
  }).stage("mekanism");
  e.shaped("mekanism:basic_fluid_tank", [
    "AOA",
    "O O",
    "AOA"
  ], {
    A: "#mekanism:alloys/basic",
    O: "#forge:ingots/iron"
  }).stage("mekanism");
  //alloyinfused
  e.shaped("mekanism:advanced_control_circuit", [
    "SFS"
  ], {
    F: "#forge:circuits/basic",
    S: "#mekanism:alloys/infused",
  }).stage("alloyinfused");
  //bsamt
  e.shaped("mekanism:crusher", [
    "RCR",
    "BXB",
    "RCR"
  ], {
    B: "minecraft:lava_bucket",
    C: "#forge:circuits/basic",
    R: "#forge:dusts/redstone",
    X: "mekanism:steel_casing"
  }).stage("bsamt");
  e.shaped("mekanism:enrichment_chamber", [
    "RCR",
    "BXB",
    "RCR"
  ], {
    B: "#mekanism:alloys/basic",
    C: "#forge:circuits/basic",
    R: "immersiveengineering:plate_steel",
    X: "mekanism:steel_casing"
  }).stage("bsamt");
  e.shaped("mekanism:energized_smelter", [
    "RCR",
    "BXB",
    "RCR"
  ], {
    B: "#mekanism:alloys/basic",
    C: "#forge:circuits/basic",
    R: "#forge:glass/silica",
    X: "mekanism:steel_casing"
  }).stage("bsamt");
  e.shaped("mekanism:rotary_condensentrator", [
    "GCG",
    "TEA",
    "GCG"
  ], {
    A: "mekanism:basic_fluid_tank",
    C: "#forge:circuits/basic",
    E: "mekanism:energy_tablet",
    G: "#forge:glass/silica",
    T: "mekanism:basic_chemical_tank"
  }).stage("bsamt");
  e.shaped("mekanism:nutritional_liquifier", [
    "RCR",
    "BXB",
    "RCR"
  ], {
    B: "minecraft:bowl",
    C: "#forge:circuits/basic",
    R: "#forge:dusts/redstone",
    X: "mekanism:steel_casing"
  }).stage("bsamt");
  e.shaped("mekanism:canteen", [
    " I ",
    "IBI",
    " I "
  ], {
    B: "minecraft:bowl",
    I: "#forge:ingots/tin",
    E: "mekanism:energy_tablet",
    G: "#forge:glass/silica",
    T: "mekanism:basic_chemical_tank"
  }).stage("bsamt");
  e.shaped("mekanism:pigment_extractor", [
    "RCR",
    "BXB",
    "RCR"
  ], {
    B: "minecraft:flint",
    R: "#forge:dusts/redstone",
    X: "mekanism:steel_casing",
    C: "#forge:circuits/basic"
  }).stage("bsamt");
  e.shaped("mekanism:resistive_heater", [
    "IRI",
    "RXR",
    "IEI"
  ], {
    E: "mekanism:energy_tablet",
    R: "#forge:dusts/redstone",
    X: "mekanism:steel_casing",
    I: "#forge:ingots/tin"
  }).stage("bsamt");
  e.shaped("mekanism:seismic_vibrator", [
    "IBI",
    "CXC",
    "III"
  ], {
    B: "#forge:gems/lapis",
    X: "mekanism:steel_casing",
    I: "#forge:ingots/tin",
    C: "#forge:circuits/basic"
  }).stage("bsamt");
  e.shaped("mekanism:electric_pump", [
    " B ",
    "AXA",
    "OOO"
  ], {
    B: "minecraft:bucket",
    X: "mekanism:steel_casing",
    A: "#mekanism:alloys/infused",
    O: "#forge:ingots/osmium"
  }).stage("bsamt");
  e.shaped("mekanism:fluidic_plenisher", [
    "III",
    "CPC",
    "III"
  ], {
    P: "mekanism:electric_pump",
    I: "#forge:ingots/tin",
    C: "#forge:circuits/basic"
  }).stage("bsamt");

  //bsfacroy see basic_tier_installer
  //bsts
  e.shaped("8x mekanism:advanced_mechanical_pipe", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/infused",
    P: "mekanism:basic_mechanical_pipe",
  }).stage("bsts");
  e.shaped("8x mekanism:advanced_universal_cable", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/infused",
    P: "mekanism:basic_universal_cable",
  }).stage("bsts");
  e.shaped("8x mekanism:advanced_pressurized_tube", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/infused",
    P: "mekanism:basic_pressurized_tube",
  }).stage("bsts");
  e.shaped("8x mekanism:advanced_thermodynamic_conductor", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/infused",
    P: "mekanism:basic_thermodynamic_conductor",
  }).stage("bsts");
  e.shaped("8x mekanism:advanced_logistical_transporter", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/infused",
    P: "mekanism:basic_logistical_transporter",
  }).stage("bsts");
  e.shaped("mekanism:advanced_chemical_tank", [
    "AOA",
    "OPO",
    "AOA"
  ], {
    A: "#mekanism:alloys/infused",
    O: "#forge:ingots/osmium",
    P: "mekanism:basic_chemical_tank",
  }).stage("bsts");
  e.shaped("mekanism:advanced_fluid_tank", [
    "AIA",
    "IPI",
    "AIA"
  ], {
    A: "#mekanism:alloys/infused",
    I: "#forge:ingots/iron",
    P: "mekanism:basic_fluid_tank",
  }).stage("bsts");
  //bspower
  e.shaped("mekanismgenerators:heat_generator", [
    "III",
    "WOW",
    "CFC"
  ], {
    C: "#forge:ingots/copper",
    F: "minecraft:furnace",
    I: "immersiveengineering:plate_steel",
    O: "#forge:ingots/osmium",
    W: "#minecraft:planks"
  }).stage("bspower");
  e.shaped("mekanismgenerators:solar_generator", [
    "BBB",
    "AIA",
    "OEO"
  ], {
    B: "mekanismgenerators:solar_panel",
    A: "#mekanism:alloys/infused",
    E: "mekanism:energy_tablet",
    I: "immersiveengineering:plate_steel",
    O: "#forge:ingots/osmium"
  }).stage("bspower");
  e.shaped("mekanismgenerators:advanced_solar_generator", [
    "PAP",
    "PAP",
    "III"
  ], {
    P: "mekanismgenerators:solar_generator",
    A: "#mekanism:alloys/infused",
    I: "immersiveengineering:plate_steel",
  }).stage("bspower");
  //alequip
  e.shaped("mekanism:network_reader", [
    " G ",
    "AEA",
    " S "
  ], {
    A: "#mekanism:alloys/infused",
    E: "mekanism:energy_tablet",
    G: "#forge:glass/silica",
    S: "#forge:ingots/steel"
  }).stage("alequip");
  e.shaped("mekanism:configurator", [
    " I ",
    "AEA",
    " B "
  ], {
    B: "#forge:rods/wooden",
    A: "#mekanism:alloys/infused",
    E: "mekanism:energy_tablet",
    I: "#forge:gems/lapis"
  }).stage("alequip");
  e.shaped("mekanism:free_runners", [
    "C C",
    "A A",
    "E E"
  ], {
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    E: "mekanism:energy_tablet"
  }).stage("alequip");
  e.shaped("mekanism:free_runners_armored", [
    " S ",
    "BPB",
    "I I"
  ], {
    B: "#forge:dusts/diamond",
    I: "#forge:ingots/bronze",
    P: "mekanism:free_runners",
    S: "#forge:storage_blocks/steel"
  }).stage("alequip");
  e.shaped("mekanism:jetpack", [
    "SCS",
    "ITI",
    " I "
  ], {
    C: "#forge:circuits/basic",
    I: "#forge:ingots/tin",
    S: "#forge:ingots/steel",
    T: "mekanism:basic_chemical_tank"
  }).stage("alequip");
  e.shaped("mekanism:jetpack_armored", [
    "B B",
    "ISI",
    " P "
  ], {
    B: "#forge:dusts/diamond",
    I: "#forge:ingots/bronze",
    P: "mekanism:jetpack",
    S: "#forge:storage_blocks/steel"
  }).stage("alequip");
  e.shaped("mekanism:scuba_tank", [
    " C ",
    "ATA",
    "SSS"
  ], {
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    S: "#forge:ingots/steel",
    T: "mekanism:basic_chemical_tank"
  }).stage("alequip");
  e.shaped("mekanism:flamethrower", [
    "III",
    "ITS",
    "BCB"
  ], {
    B: "#forge:ingots/bronze",
    C: "#forge:circuits/advanced",
    I: "#forge:ingots/tin",
    S: "minecraft:flint_and_steel",
    T: "mekanism:basic_chemical_tank"
  }).stage("alequip");
  e.shaped("mekanism:electric_bow", [
    "BA ",
    "B E",
    "BA "
  ], {
    B: "#forge:string",
    A: "#mekanism:alloys/infused",
    E: "mekanism:energy_tablet"
  }).stage("alequip");
  e.shaped("mekanism:scuba_mask", [
    " S ",
    "GCG",
    "S S"
  ], {
    C: "#forge:circuits/basic",
    G: "#forge:glass/silica",
    S: "#forge:ingots/steel"
  }).stage("alequip");
  //alamt
  e.shaped("mekanism:formulaic_assemblicator", [
    "SPS",
    "CXC",
    "SBS"
  ], {
    B: "#forge:chests/wooden",
    C: "#forge:circuits/basic",
    P: "minecraft:crafting_table",
    S: "#forge:ingots/steel"
  }).stage("alamt");
  e.shaped("mekanism:electrolytic_separator", [
    "IRI",
    "ABA",
    "IRI"
  ], {
    B: "mekanism:electrolytic_core",
    A: "#mekanism:alloys/infused",
    I: "immersiveengineering:plate_steel",
    R: "#forge:dusts/redstone"
  }).stage("alamt");
  e.shaped("mekanism:personal_chest", [
    "SGS",
    "PCP",
    "SSS"
  ], {
    C: "#forge:circuits/basic",
    G: "#forge:glass/silica",
    P: "#forge:chests/wooden",
    S: "#forge:ingots/steel"
  }).stage("alamt");
  e.shaped("mekanism:electrolytic_core", [
    "AOA",
    "IAB",
    "AOA"
  ], {
    B: "#forge:dusts/gold",
    A: "#mekanism:alloys/infused",
    I: "#forge:dusts/iron",
    O: "#forge:dusts/osmium"
  }).stage("alamt");
  e.shaped("mekanism:precision_sawmill", [
    "ICI",
    "AXA",
    "ICI"
  ], {
    C: "#forge:circuits/basic",
    A: "#mekanism:alloys/infused",
    I: "immersiveengineering:plate_steel",
    X: "mekanism:steel_casing"
  }).stage("alamt");
  e.shaped("mekanism:pressurized_reaction_chamber", [
    "SAS",
    "CPC",
    "TBT"
  ], {
    B: "mekanism:dynamic_tank",
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    P: "mekanism:enrichment_chamber",
    S: "#forge:ingots/steel",
    T: "mekanism:basic_chemical_tank"
  }).stage("alamt");
  e.shaped("mekanism:chemical_infuser", [
    "ACA",
    "TXT",
    "ACA"
  ], {
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    T: "mekanism:basic_chemical_tank",
    X: "mekanism:steel_casing"
  }).stage("alamt");
  e.shaped("mekanism:chemical_oxidizer", [
    "ACA",
    "PBT",
    "ACA"
  ], {
    B: "mekanism:dynamic_tank",
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    T: "mekanism:basic_chemical_tank",
    P: "#mekanism:personal_storage"
  }).stage("alamt");
  e.shaped("mekanism:osmium_compressor", [
    "ACA",
    "BXB",
    "ACA"
  ], {
    B: "minecraft:bucket",
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    X: "mekanism:steel_casing"
  }).stage("alamt");
  e.shaped("mekanism:fuelwood_heater", [
    "SCS",
    "BXB",
    "SSS"
  ], {
    B: "minecraft:furnace",
    S: "#forge:ingots/steel",
    C: "#forge:circuits/basic",
    X: "mekanism:steel_casing"
  }).stage("alamt");
  e.shaped("mekanism:oredictionificator", [
    "SGS",
    "CPC",
    "SBS"
  ], {
    B: "#forge:chests/wooden",
    S: "#forge:ingots/steel",
    C: "#forge:circuits/basic",
    G: "#forge:glass_panes",
    P: "mekanism:dictionary"
  }).stage("alamt");

  //alfactory see advanced_tier_installer
  //alpower
  e.shaped("mekanismgenerators:bio_generator", [
    "RAR",
    "BCB",
    "IAI"
  ], {
    B: "#forge:fuels/bio",
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/basic",
    I: "immersiveengineering:plate_steel",
    R: "#forge:dusts/redstone"
  }).stage("alpower");
  e.shaped("mekanismgenerators:gas_burning_generator", [
    "OAO",
    "XCX",
    "OAO"
  ], {
    A: "#mekanism:alloys/infused",
    C: "mekanism:electrolytic_core",
    O: "#forge:ingots/osmium",
    X: "mekanism:steel_casing"
  }).stage("alpower");
  //distillation
  e.shaped("mekanism:thermal_evaporation_controller", [
    "CGC",
    "ABA",
    "AAA"
  ], {
    A: "mekanism:thermal_evaporation_block",
    B: "minecraft:bucket",
    C: "#forge:circuits/advanced",
    G: "#forge:glass_panes"
  }).stage("distillation");
  e.shaped("mekanism:thermal_evaporation_valve", [
    " B ",
    "BCB",
    " B "
  ], {
    B: "mekanism:thermal_evaporation_block",
    C: "#forge:circuits/advanced",
  }).stage("distillation");
  e.shaped("4x mekanism:thermal_evaporation_block", [
    " S ",
    "SIS",
    " S "
  ], {
    S: "#forge:ingots/steel",
    I: "#forge:ingots/copper"
  }).stage("distillation");
  e.shaped("16x mekanism:structural_glass", [
    " S ",
    "SGS",
    " S "
  ], {
    S: "#forge:ingots/steel",
    G: "#forge:glass/silica"
  }).stage("distillation");
  e.shaped("16x mekanismgenerators:reactor_glass", [
    "SIS",
    "IGI",
    "SIS"
  ], {
    G: "#forge:glass/silica",
    I: "#forge:ingots/lead",
    S: "mekanism:enriched_iron"
  }).stage("distillation");
  //eliteinfused
  e.shaped("mekanism:elite_control_circuit", [
    "ACA"
  ], {
    C: "#forge:circuits/advanced",
    A: "#mekanism:alloys/reinforced",
  }).stage("eliteinfused");
  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "infuse_type": "mekanism:diamond" },
    "itemInput": { "ingredient": { "tag": "mekanism:alloys/infused" } },
    "output": { "item": "mekanism:alloy_reinforced" }
  }).stage("eliteinfused");
  //elts
  e.shaped("8x mekanism:elite_mechanical_pipe", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/reinforced",
    P: "mekanism:advanced_mechanical_pipe",
  }).stage("elts");
  e.shaped("8x mekanism:elite_universal_cable", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/reinforced",
    P: "mekanism:advanced_universal_cable",
  }).stage("elts");
  e.shaped("8x mekanism:elite_pressurized_tube", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/reinforced",
    P: "mekanism:advanced_pressurized_tube",
  }).stage("elts");
  e.shaped("8x mekanism:elite_thermodynamic_conductor", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/reinforced",
    P: "mekanism:advanced_thermodynamic_conductor",
  }).stage("elts");
  e.shaped("8x mekanism:elite_logistical_transporter", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/reinforced",
    P: "mekanism:advanced_logistical_transporter",
  }).stage("elts");
  e.shaped("mekanism:elite_chemical_tank", [
    "AOA",
    "OPO",
    "AOA"
  ], {
    A: "#mekanism:alloys/reinforced",
    O: "#forge:ingots/osmium",
    P: "mekanism:advanced_chemical_tank",
  }).stage("elts");
  e.shaped("mekanism:elite_fluid_tank", [
    "AIA",
    "IPI",
    "AIA"
  ], {
    A: "#mekanism:alloys/reinforced",
    I: "#forge:ingots/iron",
    P: "mekanism:advanced_fluid_tank",
  }).stage("elts");
  //blredfused see infused recipe
  //boiler
  e.shaped("4x mekanism:boiler_casing", [
    " S ",
    "SIS",
    " S "
  ], {
    S: "#forge:ingots/steel",
    I: "#forge:ingots/iron",
  }).stage("boiler");
  e.shaped("2x mekanism:boiler_valve", [
    " B ",
    "BCB",
    " B "
  ], {
    B: "mekanism:boiler_casing",
    C: "#forge:circuits/advanced",
  }).stage("boiler");
  e.shaped("mekanism:pressure_disperser", [
    "SBS",
    "BAB",
    "SBS"
  ], {
    B: "minecraft:iron_bars",
    A: "#mekanism:alloys/infused",
    S: "#forge:ingots/steel"
  }).stage("boiler");
  e.shaped("mekanism:superheating_element", [
    "AIA",
    "IXI",
    "AIA"
  ], {
    I: "#forge:ingots/copper",
    A: "#mekanism:alloys/basic",
    X: "mekanism:steel_casing"
  }).stage("boiler");
  //elamt
  e.shaped("mekanism:chemical_injection_chamber", [
    "ACA",
    "IBI",
    "ACA"
  ], {
    B: "mekanism:purification_chamber",
    I: "#forge:ingots/gold",
    A: "#mekanism:alloys/reinforced",
    C: "#forge:circuits/elite"
  }).stage("elamt");
  e.shaped("mekanism:purification_chamber", [
    "ACA",
    "OPO",
    "ACA"
  ], {
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/advanced",
    O: "#forge:ingots/osmium",
    P: "mekanism:enrichment_chamber"
  }).stage("elamt");
  e.shaped("mekanism:combiner", [
    "ACA",
    "BXB",
    "ACA"
  ], {
    A: "#mekanism:alloys/reinforced",
    C: "#forge:circuits/elite",
    X: "mekanism:steel_casing",
    B: "#forge:cobblestone/normal"
  }).stage("elamt");
  e.shaped("mekanism:laser", [
    "AE ",
    "AXB",
    "AE "
  ], {
    B: "#forge:gems/diamond",
    A: "#mekanism:alloys/reinforced",
    X: "mekanism:steel_casing",
    E: "mekanism:energy_tablet"
  }).stage("elamt");
  e.shaped("mekanism:laser_tractor_beam", [
    "P",
    "B"
  ], {
    B: "mekanism:laser_amplifier",
    P: "#mekanism:personal_storage"
  }).stage("elamt");
  e.shaped("mekanism:laser_amplifier", [
    "SSS",
    "SEB",
    "SSS"
  ], {
    B: "#forge:gems/diamond",
    E: "mekanism:basic_energy_cube",
    S: "#forge:ingots/steel"
  }).stage("elamt");
  //elfacroy see elit factory
  //obsidian
  e.custom({
    "type": "mekanism:compressing",
    "chemicalInput": { "amount": 1, "gas": "mekanism:osmium" },
    "itemInput": { "ingredient": { "tag": "forge:dusts/refined_obsidian" } },
    "output": { "item": "mekanism:ingot_refined_obsidian" }
  }).stage("obsidian");
  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 10, "infuse_type": "kubejs:blue_steel" },
    "itemInput": { "ingredient": { "tag": "forge:dusts/red_steel" } },
    "output": { "item": "mekanism:dust_refined_obsidian", "count": 1 }
  }).stage("obsidian");
  e.custom({
    "type": "mekanism:crushing",
    "input": { "ingredient": { "tag": "forge:ingots/refined_obsidian" } },
    "output": { "item": "mekanism:dust_refined_obsidian" }
  }).stage("obsidian");
  e.shapeless("9x mekanism:ingot_refined_obsidian",
    ["#forge:storage_blocks/refined_obsidian"]).stage("obsidian");
  e.shapeless("mekanism:ingot_refined_obsidian",
    ["9x mekanism:nugget_refined_obsidian"]).stage("obsidian");
  e.shapeless("mekanism:block_refined_obsidian",
    ["9x mekanism:ingot_refined_obsidian"]).stage("obsidian");
  //teinfused
  e.shaped("mekanism:ultimate_control_circuit", [
    "ACA"
  ], {
    A: "#mekanism:alloys/atomic",
    C: "#forge:circuits/elite"
  }).stage("teinfused");
  e.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 40, "tag": "mekanism:refined_obsidian" },
    "itemInput": { "ingredient": { "tag": "mekanism:alloys/reinforced" } },
    "output": { "item": "mekanism:alloy_atomic" }
  }).stage("teinfused");
  //elequip
  e.shaped("mekanism:atomic_disassembler", [
    "AEA",
    "ABA",
    " I "
  ], {
    B: "#mekanism:alloys/atomic",
    A: "#mekanism:alloys/infused",
    E: "mekanism:energy_tablet",
    I: "#forge:ingots/refined_obsidian"
  }).stage("elequip");
  e.shaped("mekanism:robit", [
    " S ",
    "EAE",
    "IPI"
  ], {
    S: "#forge:ingots/steel",
    A: "#mekanism:alloys/atomic",
    E: "mekanism:energy_tablet",
    P: "#mekanism:personal_storage",
    I: "#forge:ingots/refined_obsidian"
  }).stage("elequip");
  //tets
  e.shaped("8x mekanism:ultimate_mechanical_pipe", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/atomic",
    P: "mekanism:elite_mechanical_pipe",
  }).stage("tets");
  e.shaped("8x mekanism:ultimate_universal_cable", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/atomic",
    P: "mekanism:elite_universal_cable",
  }).stage("tets");
  e.shaped("8x mekanism:ultimate_pressurized_tube", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/atomic",
    P: "mekanism:elite_pressurized_tube",
  }).stage("tets");
  e.shaped("8x mekanism:ultimate_thermodynamic_conductor", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/atomic",
    P: "mekanism:elite_thermodynamic_conductor",
  }).stage("tets");
  e.shaped("8x mekanism:ultimate_logistical_transporter", [
    "PPP",
    "PAP",
    "PPP"
  ], {
    A: "#mekanism:alloys/atomic",
    P: "mekanism:elite_logistical_transporter",
  }).stage("tets");
  e.shaped("mekanism:ultimate_chemical_tank", [
    "AOA",
    "OPO",
    "AOA"
  ], {
    A: "#mekanism:alloys/atomic",
    O: "#forge:ingots/osmium",
    P: "mekanism:elite_chemical_tank",
  }).stage("tets");
  e.shaped("mekanism:ultimate_fluid_tank", [
    "AIA",
    "IPI",
    "AIA"
  ], {
    A: "#mekanism:alloys/atomic",
    I: "#forge:ingots/iron",
    P: "mekanism:elite_fluid_tank",
  }).stage("tets");
  //transmit
  e.shaped("mekanism:portable_qio_dashboard", [
    "AAA",
    "ABA",
    "ATA"
  ], {
    A: "#forge:pellets/polonium",
    B: "mekanism:qio_dashboard",
    T: "mekanism:teleportation_core",
  }).stage("transmit");
  e.shaped("mekanism:qio_dashboard", [
    "IAI",
    "AGA",
    "ITI"
  ], {
    A: "#forge:pellets/polonium",
    G: "#forge:glass_panes",
    I: "#forge:ingots/lead",
    T: "mekanism:teleportation_core"
  }).stage("transmit");
  e.shaped("mekanism:teleporter", [
    "CXC",
    "XTX",
    "CXC"
  ], {
    C: "#forge:circuits/basic",
    X: "mekanism:steel_casing",
    T: "mekanism:teleportation_core"
  }).stage("transmit");
  e.shaped("mekanism:portable_teleporter", [
    " E ",
    "CTC",
    " E "
  ], {
    C: "#forge:circuits/basic",
    E: "mekanism:energy_tablet",
    T: "mekanism:teleportation_core"
  }).stage("transmit");
  e.shaped("mekanism:teleporter_frame", [
    "III",
    "IGI",
    "III"
  ], {
    G: "#forge:ingots/refined_glowstone",
    I: "#forge:ingots/refined_obsidian"
  }).stage("transmit");
  e.shaped("mekanism:quantum_entangloporter", [
    "ICI",
    "ATA",
    "ICI"
  ], {
    A: "#mekanism:alloys/atomic",
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/refined_obsidian",
    T: "mekanism:teleportation_core"
  }).stage("transmit");
  e.shaped("mekanism:teleportation_core", [
    "BAB",
    "IDI",
    "BAB"
  ], {
    A: "#mekanism:alloys/atomic",
    B: "#forge:gems/lapis",
    I: "#forge:ingots/gold",
    D: "#forge:gems/diamond"
  }).stage("transmit");
  e.shaped("mekanism:dimensional_stabilizer", [
    "ICI",
    "ADA",
    "ICI"
  ], {
    A: "#mekanism:alloys/atomic",
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/refined_obsidian",
    D: "#forge:gems/diamond"
  }).stage("transmit");
  //teamt
  e.shaped("mekanism:chemical_dissolution_chamber", [
    "ITI",
    "CXC",
    "ITI"
  ], {
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/refined_obsidian",
    T: "mekanism:basic_chemical_tank",
    X: "mekanism:steel_casing"
  }).stage("teamt");
  e.shaped("mekanism:chemical_washer", [
    "IBI",
    "CXC",
    "ITI"
  ], {
    B: "mekanism:basic_fluid_tank",
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/refined_obsidian",
    T: "mekanism:basic_chemical_tank",
    X: "mekanism:steel_casing"
  }).stage("teamt");
  e.shaped("mekanism:chemical_crystallizer", [
    "IAI",
    "CXC",
    "IAI"
  ], {
    A: "#forge:gems/fluorite",
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/refined_obsidian",
    X: "mekanism:steel_casing"
  }).stage("teamt");
  e.shaped("mekanism:isotopic_centrifuge", [
    "III",
    "CTC",
    "III"
  ], {
    C: "#forge:circuits/ultimate",
    I: "#forge:ingots/lead",
    T: "mekanism:basic_chemical_tank"
  }).stage("teamt");
  //nuclear
  e.shaped("4x mekanismgenerators:fission_reactor_casing", [
    " I ",
    "IXI",
    " I "
  ], {
    I: "#forge:ingots/lead",
    X: "mekanism:steel_casing"
  }).stage("nuclear");
  e.shaped("mekanismgenerators:control_rod_assembly", [
    "ICI",
    "SIS",
    "SIS"
  ], {
    C: "#forge:circuits/elite",
    I: "#forge:ingots/lead",
    S: "#forge:ingots/steel"
  }).stage("nuclear");
  e.shaped("mekanismgenerators:fission_reactor_logic_adapter", [
    " R ",
    "RFR",
    " R "
  ], {
    F: "mekanismgenerators:fission_reactor_casing",
    R: "#forge:dusts/redstone"
  }).stage("nuclear");
  e.shaped("mekanismgenerators:fission_fuel_assembly", [
    "ISI",
    "ITI",
    "ISI"
  ], {
    T: "mekanism:basic_chemical_tank",
    I: "#forge:ingots/lead",
    S: "#forge:ingots/steel"
  }).stage("nuclear");
  e.shaped("4x mekanismgenerators:fission_reactor_port", [
    " F ",
    "FCF",
    " F "
  ], {
    C: "#forge:circuits/elite",
    F: "mekanismgenerators:fission_reactor_casing"
  }).stage("nuclear");
  e.shaped("mekanism:solar_neutron_activator", [
    "ABA",
    "CXC",
    "III"
  ], {
    B: "mekanism:hdpe_sheet",
    A: "#mekanism:alloys/reinforced",
    C: "#forge:circuits/elite",
    I: "#forge:ingots/bronze",
    X: "mekanism:steel_casing"
  }).stage("nuclear");
  e.shaped('2x alexscaves:fissile_core', [
    "ABA",
    "BCB",
    "ABA"
  ], {
    A: "mekanism:uranium_hexafluoride_bucket",
    B: "mekanism:ultimate_universal_cable",
    C: "mekanism:ultimate_chemical_tank"

  }).replaceIngredient('mekanism:uranium_hexafluoride_bucket', 'minecraft:bucket').stage("nuclear");
  //nuclear_pro
  e.shaped("mekanism:geiger_counter", [
    " I ",
    "ICI",
    " I "
  ], {
    I: "#forge:ingots/lead",
    C: "#forge:circuits/basic"
  }).stage("nuclear_pro");
  e.shaped("mekanism:dosimeter", [
    " I ",
    "IRI",
    " I "
  ], {
    I: "#forge:ingots/lead",
    R: "#forge:dusts/redstone"
  }).stage("nuclear_pro");
  e.shaped("mekanism:hazmat_gown", [
    "IDI",
    "III",
    "III"
  ], {
    I: "#forge:ingots/lead",
    D: "#forge:dyes/orange"
  }).stage("nuclear_pro");
  e.shaped("mekanism:hazmat_pants", [
    "III",
    "IDI",
    "I I"
  ], {
    I: "#forge:ingots/lead",
    D: "#forge:dyes/orange"
  }).stage("nuclear_pro");
  e.shaped("mekanism:hazmat_boots", [
    "I I",
    "IDI"
  ], {
    I: "#forge:ingots/lead",
    D: "#forge:dyes/orange"
  }).stage("nuclear_pro");
  //tefacroy see ultimate factory
  //turbine
  e.shaped("4x mekanismgenerators:turbine_vent", [
    " A ",
    "ABA",
    " A "
  ], {
    A: "mekanismgenerators:turbine_casing",
    B: "minecraft:iron_bars"
  }).stage("boiler");
  e.shaped("mekanismgenerators:saturating_condenser", [
    "SIS",
    "IBI",
    "SIS"
  ], {
    I: "#forge:ingots/tin",
    S: "#forge:ingots/steel",
    B: "minecraft:bucket"
  }).stage("boiler");
  e.shaped("2x mekanismgenerators:turbine_valve", [
    " A ",
    "ACA",
    " A "
  ], {
    A: "mekanismgenerators:turbine_casing",
    C: "#forge:circuits/advanced"
  }).stage("boiler");
  e.shaped("4x mekanismgenerators:turbine_casing", [
    " S ",
    "SOS",
    " S "
  ], {
    S: "#forge:ingots/steel",
    O: "#forge:ingots/osmium",
  }).stage("boiler");
  e.shaped("mekanismgenerators:electromagnetic_coil", [
    "SIS",
    "IEI",
    "SIS"
  ], {
    I: "#forge:ingots/gold",
    S: "#forge:ingots/steel",
    E: "mekanism:energy_tablet"
  }).stage("boiler");
  e.shaped("mekanismgenerators:rotational_complex", [
    "SAS",
    "CAC",
    "SAS"
  ], {
    S: "#forge:ingots/steel",
    A: "#mekanism:alloys/infused",
    C: "#forge:circuits/advanced"
  }).stage("boiler");
  e.shaped("mekanismgenerators:turbine_rotor", [
    "SAS",
    "SAS",
    "SAS"
  ], {
    A: "#mekanism:alloys/infused",
    S: "#forge:ingots/steel"
  }).stage("boiler");
  //fusion
  e.shaped("mekanismgenerators:fusion_reactor_logic_adapter", [
    " R ",
    "RFR",
    " R "
  ], {
    R: "#forge:dusts/redstone",
    F: "mekanismgenerators:fusion_reactor_frame"
  }).stage("fusion");
  e.shaped("mekanismgenerators:fusion_reactor_controller", [
    "CGC",
    "FTF",
    "FFF"
  ], {
    C: "#forge:circuits/ultimate",
    G: "#forge:glass_panes",
    F: "mekanismgenerators:fusion_reactor_frame",
    T: "mekanism:basic_chemical_tank"
  }).stage("fusion");
  e.shaped("2x mekanismgenerators:laser_focus_matrix", [
    " G ",
    "GRG",
    " G "
  ], {
    R: "#forge:dusts/redstone",
    G: "mekanismgenerators:reactor_glass"
  }).stage("fusion");
  e.shaped("2x mekanismgenerators:fusion_reactor_port", [
    " F ",
    "FCF",
    " F "
  ], {
    F: "mekanismgenerators:fusion_reactor_frame",
    C: "#forge:circuits/ultimate"
  }).stage("fusion");
  e.shaped("4x mekanismgenerators:fusion_reactor_frame", [
    "ABA",
    "BXB",
    "ABA"
  ], {
    B: "#forge:pellets/polonium",
    A: "#forge:alloys/ultimate",
    X: "mekanism:steel_casing"
  }).stage("fusion");
  //mekarmor
  e.shaped("mekanism:meka_tool", [
    "COC",
    "PBP",
    "AEA"
  ], {
    B: "mekanism:atomic_disassembler",
    A: "mekanism:pellet_polonium",
    C: "#forge:circuits/ultimate",
    E: "mekanism:basic_induction_cell",
    P: "mekanism:hdpe_sheet",
    O: "mekanism:configurator"
  }).stage("mekarmor");
  e.shaped("mekanism:modification_station", [
    "PWP",
    "CXC",
    "PAP"
  ], {
    A: "#forge:pellets/polonium",
    C: "#forge:circuits/ultimate",
    W: "#forge:chests/wooden",
    P: "mekanism:hdpe_sheet",
    X: "mekanism:steel_casing"
  }).stage("mekarmor");
  e.shaped("mekanism:mekasuit_helmet", [
    "PCP",
    "PBP",
    "AEA"
  ], {
    B: "minecraft:netherite_helmet",
    A: "#forge:pellets/polonium",
    C: "#forge:circuits/ultimate",
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell"
  }).stage("mekarmor");
  e.shaped("mekanism:mekasuit_bodyarmor", [
    "PCP",
    "PBP",
    "AEA"
  ], {
    B: "minecraft:netherite_chestplate",
    A: "#forge:pellets/polonium",
    C: "#forge:circuits/ultimate",
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell"
  }).stage("mekarmor");
  e.shaped("mekanism:mekasuit_pants", [
    "PCP",
    "PBP",
    "AEA"
  ], {
    B: "minecraft:netherite_leggings",
    A: "#forge:pellets/polonium",
    C: "#forge:circuits/ultimate",
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell"
  }).stage("mekarmor");
  e.shaped("mekanism:mekasuit_boots", [
    "PCP",
    "PBP",
    "AEA"
  ], {
    B: "minecraft:netherite_boots",
    A: "#forge:pellets/polonium",
    C: "#forge:circuits/ultimate",
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell"
  }).stage("mekarmor");
  e.shaped("mekaweapons:mekatana", [
    "CKC",
    "HSH",
    "PEP"
  ], {
    C: "#forge:circuits/ultimate",
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell",
    K: "mekaweapons:katana_blade",
    H: "mekanism:hdpe_sheet",
    S: "#forge:ingots/steel"
  }).stage("mekarmor");
  e.shaped("mekaweapons:mekabow", [
    "PBP",
    "IEI",
    "OSO"
  ], {
    P: "mekanism:hdpe_sheet",
    E: "mekanism:basic_induction_cell",
    S: "mekaweapons:bow_limb",
    B: "mekaweapons:bow_riser",
    I: "#forge:ingots/steel",
    O: "#forge:ingots/refined_obsidian"
  }).stage("mekarmor");
  //antimatter
  e.shaped("mekanism:sps_port", [
    " B ",
    "BCB",
    " B "
  ], {
    B: "mekanism:sps_casing",
    C: "#forge:circuits/ultimate"
  }).stage("antimatter");
  e.shaped("mekanism:sps_casing", [
    "PAP",
    "ABA",
    "PAP"
  ], {
    P: "mekanism:hdpe_sheet",
    B: "#forge:pellets/plutonium",
    A: "#forge:pellets/polonium",
  }).stage("antimatter");
  e.shaped("mekanism:antiprotonic_nucleosynthesizer", [
    "BCB",
    "AXA",
    "BCB"
  ], {
    C: "#forge:circuits/ultimate",
    B: "mekanism:alloy_atomic",
    A: "#forge:pellets/antimatter",
    X: "mekanism:steel_casing"
  }).stage("antimatter");
  e.shaped("mekanism:qio_drive_array", [
    "IGI",
    "CBC",
    "ITI"
  ], {
    C: "#forge:circuits/ultimate",
    B: "#mekanism:personal_storage",
    G: "#forge:glass_panes",
    I: "#forge:pellets/polonium",
    T: "mekanism:teleportation_core"
  }).stage("antimatter");
  e.shaped("mekanism:qio_exporter", [
    "ITI",
    "ACA",
    " B "
  ], {
    C: "#forge:circuits/ultimate",
    B: "minecraft:piston",
    A: "#forge:pellets/polonium",
    I: "forge:ingots/lead",
    T: "mekanism:teleportation_core"
  }).stage("antimatter");
  e.shaped("mekanism:qio_importer", [
    "ITI",
    "ACA",
    " B "
  ], {
    C: "#forge:circuits/ultimate",
    B: "minecraft:sticky_piston",
    A: "#forge:pellets/polonium",
    I: "forge:ingots/lead",
    T: "mekanism:teleportation_core"
  }).stage("antimatter");
  e.shaped("mekanism:digital_miner", [
    "ACA",
    "SRS",
    "TXT"
  ], {
    C: "#forge:circuits/basic",
    R: "mekanism:robit",
    A: "#mekanism:alloys/atomic",
    S: "mekanism:logistical_sorter",
    T: "mekanism:teleportation_core",
    X: "mekanism:steel_casing"
  }).stage("antimatter");



});


