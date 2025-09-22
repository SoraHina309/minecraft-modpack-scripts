ItemEvents.modification(event => {
    event.modify('minecraft:writable_book', item => {
        item.maxDamage = 100; // 设置耐久为100
    });

    event.modify('irons_spellbooks:spellbreaker', item => {
        item.addAttribute('forge:entity_reach', '98591EF6-97B1-4584-AE82-61A8CC85CF73', 'entity_reach', 0.25, 'addition');
    });

    event.modify('irons_spellbooks:amethyst_rapier', item => {
        item.addAttribute('forge:entity_reach', '18591EF6-97B1-4584-AE82-61A8CC85CF74', 'entity_reach', 0.25, 'addition');
    });

    event.modify('irons_spellbooks:keeper_flamberge', item => {
        item.addAttribute('forge:entity_reach', '28591EF6-97B1-4584-AE82-61A8CC85CF75', 'entity_reach', 0.25, 'addition');
    });

    event.modify('illager_additions:master_katana', item => {
        item.addAttribute('forge:entity_reach', '38591EF6-97B1-4584-AE82-61A8CC85CF76', 'entity_reach', 0.25, 'addition');
    });

    event.modify('iceandfire:troll_weapon_trunk_frost', item => {
        item.addAttribute('forge:entity_reach', '48591EF6-97B1-4584-AE82-61A8CC85CF77', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:dragonsteel_ice_axe', item => {
        item.addAttribute('forge:entity_reach', '58591EF6-97B1-4584-AE82-61A8CC85CF78', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonsteel_fire_axe', item => {
        item.addAttribute('forge:entity_reach', '68591EF6-97B1-4584-AE82-61A8CC85CF79', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonsteel_lightning_axe', item => {
        item.addAttribute('forge:entity_reach', '78591EF6-97B1-4584-AE82-61A8CC85CF80', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonsteel_ice_sword', item => {
        item.addAttribute('forge:entity_reach', '88591EF6-97B1-4584-AE82-61A8CC85CF81', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonsteel_fire_sword', item => {
        item.addAttribute('forge:entity_reach', '98591EF6-97B1-4584-AE82-61A8CC85CF82', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonsteel_lightning_sword', item => {
        item.addAttribute('forge:entity_reach', 'A8591EF6-97B1-4584-AE82-61A8CC85CF83', 'entity_reach', 0.75, 'addition');
    });

    event.modify('iceandfire:dragonbone_sword', item => {
        item.addAttribute('forge:entity_reach', 'B8591EF6-97B1-4584-AE82-61A8CC85CF84', 'entity_reach', 1.5, 'addition');
    });

    event.modify('iceandfire:dragonbone_sword_lightning', item => {
        item.addAttribute('forge:entity_reach', 'C8591EF6-97B1-4584-AE82-61A8CC85CF85', 'entity_reach', 1.5, 'addition');
    });

    event.modify('iceandfire:dragonbone_sword_fire', item => {
        item.addAttribute('forge:entity_reach', 'D8591EF6-97B1-4584-AE82-61A8CC85CF86', 'entity_reach', 1.5, 'addition');
    });

    event.modify('iceandfire:dragonbone_sword_ice', item => {
        item.addAttribute('forge:entity_reach', 'E8591EF6-97B1-4584-AE82-61A8CC85CF87', 'entity_reach', 1.5, 'addition');
    });

    event.modify('illager_additions:royal_guard_spear', item => {
        item.addAttribute('forge:entity_reach', 'F8591EF6-97B1-4584-AE82-61A8CC85CF88', 'entity_reach', 1.75, 'addition');
    });

    event.modify('illager_additions:spear', item => {
        item.addAttribute('forge:entity_reach', '09591EF6-97B1-4584-AE82-61A8CC85CF89', 'entity_reach', 2, 'addition');
    });

    event.modify('iceandfire:troll_weapon_column_forest', item => {
        item.addAttribute('forge:entity_reach', '19591EF6-97B1-4584-AE82-61A8CC85CF90', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:troll_weapon_column', item => {
        item.addAttribute('forge:entity_reach', '29591EF6-97B1-4584-AE82-61A8CC85CF91', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:troll_weapon_column_frost', item => {
        item.addAttribute('forge:entity_reach', '39591EF6-97B1-4584-AE82-61A8CC85CF92', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:troll_weapon_hammer', item => {
        item.addAttribute('forge:entity_reach', '49591EF6-97B1-4584-AE82-61A8CC85CF93', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:troll_weapon_trunk', item => {
        item.addAttribute('forge:entity_reach', '59591EF6-97B1-4584-AE82-61A8CC85CF94', 'entity_reach', 3, 'addition');
    });

    event.modify('iceandfire:troll_weapon_axe', item => {
        item.addAttribute('forge:entity_reach', '69591EF6-97B1-4584-AE82-61A8CC85CF95', 'entity_reach', 3, 'addition');
    });

    // 下界合金装备（恒温 + 护甲值调整）
    event.modify('minecraft:netherite_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDC4", "thermal_resistance", 1.5, "addition");
    });

    event.modify('minecraft:netherite_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDC5", "thermal_resistance", 2, "addition");
    });

    event.modify('minecraft:netherite_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDC6", "thermal_resistance", 2, "addition");
    });

    event.modify('minecraft:netherite_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 7;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDC7", "thermal_resistance", 1.5, "addition");
    });

        event.modify('majruszsdifficulty:enderium_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-FCE770C7DDC4", "thermal_resistance", 1.5, "addition");
    });

    event.modify('majruszsdifficulty:enderium_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-FCE770C7DDC5", "thermal_resistance", 2, "addition");
    });

    event.modify('majruszsdifficulty:enderium_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-FCE770C7DDC6", "thermal_resistance", 2, "addition");
    });

    event.modify('majruszsdifficulty:enderium_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 7;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-FCE770C7DDC7", "thermal_resistance", 1.5, "addition");
    });

    // 歼灭守护者装备（恒温 + 法力加成）
    event.modify('deeperdarker:warden_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDC8", "thermal_resistance", 1.5, "addition");
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 250, "addition");
    });

    event.modify('deeperdarker:warden_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA0", "thermal_resistance", 2, "addition");
        item.addAttribute("irons_spellbooks:eldritch_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.5, "multiply_base");
    });

    event.modify('deeperdarker:warden_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA2", "thermal_resistance", 2, "addition");
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA3", "thermal_resistance", 0.35, "multiply_base");
    });

    event.modify('deeperdarker:warden_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 7;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA4", "thermal_resistance", 1.5, "addition");
        item.addAttribute("irons_spellbooks:eldritch_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.25, "multiply_base");
    });

    // 慌歌龙装备（恒温 + 耐久调整）
    event.modify('alexscaves_torpedoes:tectonic_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA6", "thermal_resistance", 1.5, "addition");
    });

    event.modify('alexscaves_torpedoes:tectonic_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 15;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA7", "thermal_resistance", 2, "addition");
    });

    event.modify('alexscaves_torpedoes:tectonic_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 14;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA8", "thermal_resistance", 2, "addition");
    });

    event.modify('alexscaves_torpedoes:tectonic_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.maxDamage = 4048;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "F02880DE-6D96-4B17-8C05-ECE770C7DDA9", "thermal_resistance", 1.5, "addition");
    });
    // 给灾变护甲添加恒温（不修改防具值）
    // 灾变头盔
    event.modify('iceandfire:dragonsteel_ice_helmet', item => {
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 250, "addition");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc1", "thermal_resistance", 1.5, "addition");
    });
    event.modify('iceandfire:dragonsteel_lightning_helmet', item => {
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 250, "addition");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc2", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:ignitium_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 275, "addition");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc3", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:cursium_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 275, "addition");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc4", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:bone_reptile_helmet', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc5", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:monstrous_helm', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 8;
        item.addAttribute("irons_spellbooks:max_mana", "F02880DE-6D96-4B17-8C05-ECE770C7DDC9", "thermal_resistance", 250, "addition");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddc6", "thermal_resistance", 1.5, "addition");
    });

    // 灾变胸甲（含鞘翅）
    event.modify('iceandfire:dragonsteel_fire_chestplate', item => {
        item.addAttribute("irons_spellbooks:fire_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.45, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd1", "thermal_resistance", 2, "addition");
    });
    event.modify('iceandfire:dragonsteel_ice_chestplate', item => {
        item.addAttribute("irons_spellbooks:ice_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.45, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd2", "thermal_resistance", 2, "addition");
    });
    event.modify('iceandfire:dragonsteel_lightning_chestplate', item => {
        item.addAttribute("irons_spellbooks:lightning_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.45, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd3", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:ignitium_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("irons_spellbooks:fire_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.75, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd4", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:ignitium_elytra_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("irons_spellbooks:fire_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.75, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd5", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:cursium_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("irons_spellbooks:eldritch_spell_power", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.75, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd6", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:bone_reptile_chestplate', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 12;
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddd7", "thermal_resistance", 2, "addition");
    });

    // 灾变护腿
    event.modify('iceandfire:dragonsteel_fire_leggings', item => {
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7dde1", "thermal_resistance", 2, "addition");
    });
    event.modify('iceandfire:dragonsteel_ice_leggings', item => {
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7dde2", "thermal_resistance", 2, "addition");
    });
    event.modify('iceandfire:dragonsteel_lightning_leggings', item => {
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7dde3", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:ignitium_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.25, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7dde4", "thermal_resistance", 2, "addition");
    });
    event.modify('cataclysm:cursium_leggings', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 10;
        item.addAttribute("irons_spellbooks:mana_regen", "F02880DE-6D96-4B17-8C05-ECE770C7DDA5", "thermal_resistance", 0.25, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7dde5", "thermal_resistance", 2, "addition");
    });

    // 灾变靴子
    event.modify('iceandfire:dragonsteel_fire_boots', item => {
        item.addAttribute("irons_spellbooks:fire_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddf1", "thermal_resistance", 1.5, "addition");
    });
    event.modify('iceandfire:dragonsteel_ice_boots', item => {
        item.addAttribute("irons_spellbooks:ice_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddf2", "thermal_resistance", 1.5, "addition");
    });
    event.modify('iceandfire:dragonsteel_lightning_boots', item => {
        item.addAttribute("irons_spellbooks:lightning_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.15, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddf2", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:ignitium_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 7;
        item.addAttribute("irons_spellbooks:fire_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.45, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddf3", "thermal_resistance", 1.5, "addition");
    });
    event.modify('cataclysm:cursium_boots', item => {
        item.armorToughness = 6.0;
        item.armorProtection = 7;
        item.addAttribute("irons_spellbooks:eldritch_magic_resist", "F02880DE-6D96-4B17-8C05-ECE770C7DDA1", "thermal_resistance", 0.45, "multiply_base");
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", "f02880de-6d96-4b17-8c05-ebe770c7ddf4", "thermal_resistance", 1.5, "addition");
    });
});

EntityJSEvents.attributes(event => {
    // 将 medievalorigins:summon_wither_skeleton 的生命值设为 100
    event.modify('medievalorigins:summon_wither_skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 150);
    });

    // 将 minecraft:warden 的生命值设为 50
    event.modify('minecraft:warden', attribute => {
        attribute.add("minecraft:generic.max_health", 50);
    });
    event.modify('witherstormmod:withered_symbiont', attribute => {
        attribute.add("minecraft:generic.max_health", 45);
    });
    event.modify('minecraft:wither', attribute => {
        attribute.add("minecraft:generic.max_health", 175);
    });
    event.modify('cataclysm:netherite_monstrosity', attribute => {
        attribute.add("minecraft:generic.max_health", 399);
    });
    event.modify('majruszsdifficulty:cerberus', attribute => {
        attribute.add("minecraft:generic.max_health", 75);
    });



});
