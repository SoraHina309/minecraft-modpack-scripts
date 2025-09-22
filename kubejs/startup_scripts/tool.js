StartupEvents.registry("item", e => {

    e.create("fallout:copper_pickaxe", "pickaxe")//铜稿
        .translationKey("item.fallout.copper_pickaxe")
        .fireResistant(true)
        .tier('iron')
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:firefighter_axe", "axe")//消防斧
        .translationKey("item.fallout.firefighter_axe")
        .fireResistant(true)
        .attackDamageBonus(4.5)
        .tier('iron')
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:copper_paxel", "pickaxe")//铜稿斧
        .translationKey("item.fallout.copper_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 4, "addition")
        .attackDamageBonus(2)
        .speedBaseline(-2.4)
        .fireResistant(true)
        .tier('iron')
        .maxDamage(600)
        .speed(6.0)
        .rarity("common");


    e.create("fallout:copper_axe", "axe")//铜斧
        .translationKey("item.fallout.copper_axe")
        .tier('iron')
        .attackDamageBonus(2)
        .fireResistant(true)
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:copper_hoe", "hoe")//铜锄
        .translationKey("item.fallout.copper_hoe")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:copper_shovel", "shovel")//铜铲
        .translationKey("item.fallout.copper_shovel")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:copper_sword", "sword")//铜剑
        .translationKey("item.fallout.copper_sword")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(150)
        .attackDamageBonus(1)
        .speedBaseline(-2.4)
        .rarity("common");

    e.create("fallout:brass_pickaxe", "pickaxe")//黄铜稿
        .translationKey("item.fallout.brass_pickaxe")
        .fireResistant(true)
        .tier('iron')
        .maxDamage(275)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:brass_paxel", "pickaxe")//黄铜稿斧
        .translationKey("item.fallout.brass_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 5, "addition")
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .fireResistant(true)
        .tier('iron')
        .maxDamage(1100)
        .speed(6.0)
        .rarity("common");


    e.create("fallout:brass_axe", "axe")//黄铜斧
        .translationKey("item.fallout.brass_axe")
        .tier('iron')
        .attackDamageBonus(2)
        .fireResistant(true)
        .maxDamage(275)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:brass_hoe", "hoe")//黄铜锄
        .translationKey("item.fallout.brass_hoe")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(275)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:brass_shovel", "shovel")//黄铜铲
        .translationKey("item.fallout.brass_shovel")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(150)
        .speed(6.0)
        .rarity("common");

    e.create("fallout:brass_sword", "sword")//黄铜剑
        .translationKey("item.fallout.brass_sword")
        .tier('iron')
        .fireResistant(true)
        .maxDamage(150)
        .attackDamageBonus(2)
        .speedBaseline(-2.4)
        .rarity("common");

    e.create("fallout:red_steel_pickaxe", "pickaxe")//红钢稿
        .translationKey("item.fallout.red_steel_pickaxe")
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .tier('netherite')
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:black_steel_paxel", "pickaxe")//黑钢稿斧
        .translationKey("item.fallout.black_steel_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 6, "addition")
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .fireResistant(false)
        .tier('diamond')
        .maxDamage(1577)
        .speed(6.0)
        .rarity("rare");

    e.create("fallout:red_steel_paxel", "pickaxe")//红钢稿斧
        .translationKey("item.fallout.red_steel_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 7, "addition")
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .fireResistant(false)
        .tier('netherite')
        .maxDamage(3122)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:red_steel_axe", "axe")//红钢斧
        .translationKey("item.fallout.red_steel_axe")
        .tier('netherite')
        .attackDamageBonus(3)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:red_steel_hoe", "hoe")//红钢锄
        .translationKey("item.fallout.red_steel_hoe")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:red_steel_shovel", "shovel")//红钢铲
        .translationKey("item.fallout.red_steel_shovel")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:red_steel_sword", "sword")//红钢剑
        .translationKey("item.fallout.red_steel_sword")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(4)
        .speedBaseline(-2.4)
        .rarity("epic");


    e.create("fallout:blue_steel_pickaxe", "pickaxe")//蓝钢稿
        .translationKey("item.fallout.blue_steel_pickaxe")
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .tier('netherite')
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:blue_steel_paxel", "pickaxe")//蓝钢稿斧
        .translationKey("item.fallout.blue_steel_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 7, "addition")
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .fireResistant(false)
        .tier('netherite')
        .maxDamage(3122)
        .speed(6.0)
        .rarity("epic");


    e.create("fallout:blue_steel_axe", "axe")//蓝钢斧
        .translationKey("item.fallout.blue_steel_axe")
        .tier('netherite')
        .attackDamageBonus(3)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:blue_steel_hoe", "hoe")//蓝钢锄
        .translationKey("item.fallout.blue_steel_hoe")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:blue_steel_shovel", "shovel")//蓝钢铲
        .translationKey("item.fallout.blue_steel_shovel")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .speed(6.0)
        .rarity("epic");

    e.create("fallout:blue_steel_sword", "sword")//蓝钢剑
        .translationKey("item.fallout.blue_steel_sword")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(4)
        .speedBaseline(-2.4)
        .rarity("epic");

    e.create("fallout:mithril_pickaxe", "pickaxe")//秘银稿
        .translationKey("item.fallout.mithril_pickaxe")
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .tier('netherite')
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:mithril_paxel", "pickaxe")//秘银稿斧
        .translationKey("item.fallout.mithril_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 8, "addition")
        .attackDamageBonus(4)
        .speedBaseline(-2.4)
        .fireResistant(false)
        .tier('netherite')
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:mithril_axe", "axe")//秘银斧
        .translationKey("item.fallout.mithril_axe")
        .tier('netherite')
        .attackDamageBonus(4)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:mithril_sword", "sword")//秘银剑
        .translationKey("item.fallout.mithril_sword")
        .tier('netherite')
        .attackDamageBonus(4)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:mithril_hoe", "hoe")//秘银锄
        .translationKey("item.fallout.mithril_hoe")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:mithril_shovel", "shovel")//秘银铲
        .translationKey("item.fallout.mithril_shovel")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:orichalcum_axe", "axe")//山铜斧
        .translationKey("item.fallout.orichalcum_axe")
        .tier('netherite')
        .attackDamageBonus(4)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");


    e.create("fallout:orichalcum_sword", "sword")//山铜剑
        .translationKey("item.fallout.orichalcum_sword")
        .tier('netherite')
        .attackDamageBonus(4)
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:orichalcum_hoe", "hoe")//山铜锄
        .translationKey("item.fallout.orichalcum")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:orichalcum_shovel", "shovel")//山铜铲
        .translationKey("item.fallout.orichalcum_shovel")
        .tier('netherite')
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:orichalcum_pickaxe", "pickaxe")//山铜稿
        .translationKey("item.fallout.orichalcum_pickaxe")
        .fireResistant(false)
        .attackDamageBonus(3)
        .speedBaseline(-2.4)
        .maxDamage(8196)
        .tier('netherite')
        .speed(6.0)
        .rarity("uncommon");

    e.create("fallout:orichalcum_paxel", "pickaxe")//山铜稿斧
        .translationKey("item.fallout.orichalcum_paxel")
        .modifyAttribute("additionalentityattributes:dig_speed", "8F3EBF14-8024-410C-B3C0-E3CADC305F72", 8, "addition")
        .attackDamageBonus(4)
        .speedBaseline(-2.4)
        .fireResistant(false)
        .tier('netherite')
        .maxDamage(8196)
        .speed(6.0)
        .rarity("uncommon");

})
