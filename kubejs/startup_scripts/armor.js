StartupEvents.registry("item", e => {
    e.create("fallout:mithril_helmet", "helmet")//秘银头盔
        .translationKey("item.fallout.mithril_helmet")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1.5, "addition")

        .tier('fallout:mithril')
        .rarity("uncommon");

    e.create("fallout:mithril_chestplate", "chestplate")//秘银胸甲
        .translationKey("item.fallout.mithril_chestplate")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 2, "addition")
        .modifyAttribute("irons_spellbooks:cooldown_reduction", "01d362b5-5d68-4256-8d63-a40a959263e3", 0.6, "multiply_base")
        .tier('fallout:mithril')
        .rarity("uncommon");

    e.create("fallout:mithril_leggings", "leggings")//秘银护腿
        .translationKey("item.fallout.mithril_leggings")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 2, "addition")
        .modifyAttribute("irons_spellbooks:spell_power", "7506b026-d810-4966-a8b8-154786cb8f27", 0.6, "multiply_base")
        .tier('fallout:mithril')
        .rarity("uncommon");



    e.create("fallout:mithril_boots", "boots")//秘银靴子
        .translationKey("item.fallout.mithril_boots")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1.5, "addition")
        .modifyAttribute("irons_spellbooks:max_mana", "489d569a-fde3-4b9c-8b0b-18471cbb610b", 240, "addition")
        .tier('fallout:mithril')
        .rarity("uncommon");

    e.create("fallout:blue_steel_helmet", "helmet")//蓝钢头盔
        .translationKey("item.fallout.blue_steel_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "f2c5daa3-1cb9-4872-b197-6ac190164cda", 1, "addition")
        .tier('fallout:blue_steel')
        .rarity("rare");

    e.create("fallout:blue_steel_chestplate", "chestplate")//蓝钢胸甲
        .translationKey("item.fallout.blue_steel_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "f2c5daa3-1cb9-4872-b197-6ac190164cda", 2, "addition")
        .tier('fallout:blue_steel')
        .rarity("rare");

    e.create("fallout:blue_steel_leggings", "leggings")//蓝钢护腿
        .translationKey("item.fallout.blue_steel_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "f2c5daa3-1cb9-4872-b197-6ac190164cda", 1.5, "addition")
        .tier('fallout:blue_steel')
        .rarity("rare");

    e.create("fallout:blue_steel_boots", "boots")//蓝钢靴子
        .translationKey("item.fallout.blue_steel_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "f2c5daa3-1cb9-4872-b197-6ac190164cda", 1.5, "addition")
        .tier('fallout:blue_steel')
        .rarity("rare");



    e.create("fallout:red_steel_helmet", "helmet")//红钢头盔
        .translationKey("item.fallout.red_steel_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1, "addition")
        .tier('fallout:red_steel')
        .rarity("rare");

    e.create("fallout:red_steel_chestplate", "chestplate")//红钢胸甲
        .translationKey("item.fallout.red_steel_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 2, "addition")
        .tier('fallout:red_steel')
        .rarity("rare");

    e.create("fallout:red_steel_leggings", "leggings")//红钢护腿
        .translationKey("item.fallout.red_steel_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1.5, "addition")
        .tier('fallout:red_steel')
        .rarity("rare");

    e.create("fallout:red_steel_boots", "boots")//红钢靴子
        .translationKey("item.fallout.red_steel_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1.5, "addition")
        .tier('fallout:red_steel')
        .rarity("rare");

    e.create("fallout:black_steel_helmet", "helmet")//黑钢头盔
        .translationKey("item.fallout.black_steel_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 0.5, "addition")
        .tier('fallout:black_steel')
        .rarity("rare");



    e.create("fallout:black_steel_chestplate", "chestplate")//黑钢胸甲
        .translationKey("item.fallout.black_steel_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1.5, "addition")
        .tier('fallout:black_steel')
        .rarity("rare");

    e.create("fallout:black_steel_leggings", "leggings")//黑钢护腿
        .translationKey("item.fallout.black_steel_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1, "addition")
        .tier('fallout:black_steel')
        .rarity("rare");

    e.create("fallout:black_steel_boots", "boots")//黑钢靴子
        .translationKey("item.fallout.black_steel_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "89cdf65a-9c35-4210-becf-e55a10d65d60", 1, "addition")
        .tier('fallout:black_steel')
        .rarity("rare");

    e.create("fallout:orichalcum_helmet", "helmet")//山铜头盔
        .translationKey("item.fallout.orichalcum_helmet")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1.5, "addition")
        .modifyAttribute("irons_spellbooks:spell_power", "7506b026-d810-4966-a8b8-154786cb8f27", 0.76, "multiply_base")
        .tier('fallout:orichalcum')
        .rarity("uncommon");

    e.create("fallout:orichalcum_chestplate", "chestplate")//山铜胸甲
        .translationKey("item.fallout.orichalcum_chestplate")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 2, "addition")
        .modifyAttribute("irons_spellbooks:max_mana", "489d569a-fde3-4b9c-8b0b-18471cbb610b", 250, "addition")
        .tier('fallout:orichalcum')
        .rarity("uncommon");

    e.create("fallout:orichalcum_leggings", "leggings")//山铜护腿
        .translationKey("item.fallout.orichalcum_leggings")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1, "addition")
        .tier('fallout:orichalcum')
        .rarity("uncommon");

    e.create("fallout:orichalcum_boots", "boots")//山铜靴子
        .translationKey("item.fallout.orichalcum_boots")
        .fireResistant(true)
        .modifyAttribute("minecraft:generic.knockback_resistance", "574fe04f-0ac9-430d-929d-ab33c6e5cde2", 0.15, "multiply_base")
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1.5, "addition")
        .tier('fallout:orichalcum')
        .rarity("uncommon");



    e.create("fallout:brass_helmet", "helmet")//黄铜头盔
        .translationKey("item.fallout.brass_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .tier('fallout:brass')
        .rarity("uncommon");

    e.create("fallout:brass_chestplate", "chestplate")//黄铜胸甲
        .translationKey("item.fallout.brass_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 1, "addition")
        .tier('fallout:brass')
        .rarity("uncommon");

    e.create("fallout:brass_leggings", "leggings")//黄铜护腿
        .translationKey("item.fallout.brass_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 1, "addition")
        .tier('fallout:brass')
        .rarity("uncommon");

    e.create("fallout:brass_boots", "boots")//黄铜靴子
        .translationKey("item.fallout.brass_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .tier('fallout:brass')
        .rarity("uncommon");

    e.create("fallout:copper_helmet", "helmet")//铜头盔
        .translationKey("item.fallout.copper_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "e4a7209b-7ef8-4ad9-854e-22edc7aab346", 0.5, "addition")
        .tier('fallout:copper')
        .rarity("uncommon");

    e.create("fallout:copper_chestplate", "chestplate")//铜胸甲
        .translationKey("item.fallout.copper_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "e4a7209b-7ef8-4ad9-854e-22edc7aab346", 1, "addition")
        .tier('fallout:copper')
        .rarity("uncommon");

    e.create("fallout:copper_leggings", "leggings")//铜护腿
        .translationKey("item.fallout.copper_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "e4a7209b-7ef8-4ad9-854e-22edc7aab346", 1, "addition")
        .tier('fallout:copper')
        .rarity("uncommon");

    e.create("fallout:copper_boots", "boots")//铜靴子
        .translationKey("item.fallout.copper_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "e4a7209b-7ef8-4ad9-854e-22edc7aab346", 0.5, "addition")
        .tier('fallout:copper')
        .rarity("uncommon");

    // jokey1_helmet 不添加负面效果，只保留热抗性
    // jokey1 - 褪色系列
    e.create("fallout:jokey1_helmet", "helmet") // 褪色假面
        .translationKey("item.fallout.jokey1_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey1')
        .rarity("uncommon");

    e.create("fallout:jokey1_chestplate", "chestplate") // 褪色演出服
        .translationKey("item.fallout.jokey1_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey1')
        .rarity("uncommon");

    e.create("fallout:jokey1_leggings", "leggings") // 褪色演出裤
        .translationKey("item.fallout.jokey1_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey1')
        .rarity("uncommon");

    e.create("fallout:jokey1_boots", "boots") // 褪色演出靴
        .translationKey("item.fallout.jokey1_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey1')
        .rarity("uncommon");

    // jokey2 - 欢欣系列
    e.create("fallout:jokey2_helmet", "helmet") // 欢欣假面
        .translationKey("item.fallout.jokey2_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey2')
        .rarity("rare");

    e.create("fallout:jokey2_chestplate", "chestplate") // 欢欣演出服
        .translationKey("item.fallout.jokey2_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey2')
        .rarity("rare");

    e.create("fallout:jokey2_leggings", "leggings") // 欢欣演出裤
        .translationKey("item.fallout.jokey2_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey2')
        .rarity("rare");

    e.create("fallout:jokey2_boots", "boots") // 欢欣演出靴
        .translationKey("item.fallout.jokey2_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey2')
        .rarity("rare");

    // jokey3 - 欢愉系列
    e.create("fallout:jokey3_helmet", "helmet") // 欢愉假面
        .translationKey("item.fallout.jokey3_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:cold_resistance", "f2c5daa3-1cb9-4872-b197-6ac190164cda", 1.5, "addition")
        .tier('fallout:jokey3')
        .rarity("epic");

    e.create("fallout:jokey3_chestplate", "chestplate") // 欢愉演出服
        .translationKey("item.fallout.jokey3_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey3')
        .rarity("epic");

    e.create("fallout:jokey3_leggings", "leggings") // 欢愉演出裤
        .translationKey("item.fallout.jokey3_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey3')
        .rarity("epic");

    e.create("fallout:jokey3_boots", "boots") // 欢愉演出靴
        .translationKey("item.fallout.jokey3_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:heat_resistance", "11880ea0-02d6-4321-9432-85847ac14f6c", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey3')
        .rarity("epic");

    // jokey4 - 狂欢系列
    e.create("fallout:jokey4_helmet", "helmet") // 狂欢假面
        .translationKey("item.fallout.jokey4_helmet")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1, "addition")
        .maxDamage(0)
        .tier('fallout:jokey4')
        .rarity("uncommon");

    e.create("fallout:jokey4_chestplate", "chestplate") // 狂欢演出服
        .translationKey("item.fallout.jokey4_chestplate")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 2, "addition")
        .maxDamage(0)
        .tier('fallout:jokey4')
        .rarity("uncommon");

    e.create("fallout:jokey4_leggings", "leggings") // 狂欢演出裤
        .translationKey("item.fallout.jokey4_leggings")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 1.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey4')
        .rarity("uncommon");

    e.create("fallout:jokey4_boots", "boots") // 狂欢演出靴
        .translationKey("item.fallout.jokey4_boots")
        .fireResistant(true)
        .modifyAttribute("legendarysurvivaloverhaul:thermal_resistance", "5c4b675e-1766-4aef-89a2-86b9c63fe8ad", 0.5, "addition")
        .maxDamage(0)
        .tier('fallout:jokey4')
        .rarity("uncommon");
});
