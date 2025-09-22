FeatureEvents.configured(event => {
    // 创建配置特性，定义矿物生成逻辑
    event.create("fallout:configured_orichalcum_ore")
        .type("minecraft:ore")
        .oreConfiguration(properties => {
            properties
                .size(3) // 每个矿脉的大小
                // .addTarget("#minecraft:stone_ore_replaceables", "fallout:deepslate_orichalcum_ore") // 替换石头生成矿石
                .addTarget("#minecraft:deepslate_ore_replaceables", "fallout:deepslate_orichalcum_ore");
        });
    event.create("fallout:configured_mithril_ore")
        .type("minecraft:ore")
        .oreConfiguration(properties => {
            properties
                .size(3) // Mithril 每个矿脉的大小
                // .addTarget("#minecraft:stone_ore_replaceables", "fallout:deepslate_mithril_ore") // 替换石头为 Mithril
                .addTarget("#minecraft:deepslate_ore_replaceables", "fallout:deepslate_mithril_ore"); // 替换深板岩为 Mithril
        });
});
FeatureEvents.placed(event => {
    let modifiers = event.getPlacementModifiers();

    // Orichalcum 放置特性
    event.create("fallout:placed_orichalcum_ore")
        .feature("fallout:configured_orichalcum_ore")
        .placement(
            modifiers.count(1), // 每区块生成 1 个矿脉
            modifiers.inSquare(),
            modifiers.heightRangeUniform(VerticalAnchor.aboveBottom(10), VerticalAnchor.aboveBottom(30)), // 高度范围 10-30
            modifiers.biomeFilter()
        );

    // Mithril 放置特性
    event.create("fallout:placed_mithril_ore")
        .feature("fallout:configured_mithril_ore")
        .placement(
            modifiers.count(1), // 每区块生成 1 个矿脉
            modifiers.inSquare(),
            modifiers.heightRangeUniform(VerticalAnchor.aboveBottom(20), VerticalAnchor.aboveBottom(40)), // 高度范围 20-40
            modifiers.biomeFilter()
        );
});

FeatureEvents.biomeModifier(event => {
    // 将矿石特性绑定到地下矿石生成阶段
    event.addFeatures("#minecraft:is_overworld", "fallout:placed_orichalcum_ore", "underground_ores");
    event.addFeatures("#minecraft:is_overworld", "fallout:placed_mithril_ore", "underground_ores");
});
// LootJS.modifiers(event => {
//     // 定义精准采集时的掉落
//     const dropOreBlock = LootEntry.of("fallout:deepslate_orichalcum_ore").when(c =>
//         c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
//     );

//     // 定义默认掉落（无精准采集时）
//     const dropRawOre = "fallout:raw_orichalcum";

//     // 应用替代掉落逻辑
//     event
//         .addBlockLootModifier("fallout:deepslate_orichalcum_ore")
//         .removeLoot(Ingredient.all) // 移除默认掉落
//         .addAlternativesLoot(dropOreBlock, dropRawOre); // 顺序很重要：优先精准采集
// });

LootJS.modifiers(event => {
    const ores = [
        {
            block: "fallout:deepslate_orichalcum_ore",
            raw: "fallout:raw_orichalcum"
        },
        {
            block: "fallout:deepslate_mithril_ore",
            raw: "fallout:raw_mithril"
        }
    ];

    ores.forEach(entry => {
        const block = entry.block;
        const raw = entry.raw;

        const dropSilk = LootEntry.of(block).when(c =>
            c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
        );

        event
            .addBlockLootModifier(block)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(dropSilk, raw);
    });
});
