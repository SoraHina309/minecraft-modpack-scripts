EntityEvents.hurt(event => {
    const damager = event.source.actual;
    if (!damager || !damager.isPlayer()) return;

    const mainHandItem = damager.mainHandItem;

    // T1 武器（低级材质）
    const t1_validWeapons = [
        'fallout:wooden_halberd',
        'fallout:stone_halberd',
        'fallout:lead_halberd',
        'fallout:aluminum_halberd',
        'fallout:gold_halberd',
        'fallout:silver_halberd',
        'fallout:copper_halberd',
        'fallout:brass_halberd',
        'fallout:wooden_longsword',
        'fallout:stone_longsword',
        'fallout:lead_longsword',
        'fallout:aluminum_longsword',
        'fallout:gold_longsword',
        'fallout:silver_longsword',
        'fallout:copper_longsword',
        'fallout:brass_longsword',
        'fallout:wooden_longknife',
        'fallout:stone_longknife',
        'fallout:lead_longknife',
        'fallout:aluminum_longknife',
        'fallout:gold_longknife',
        'fallout:silver_longknife',
        'fallout:copper_longknife',
        'fallout:brass_longknife'
    ];

    // T2 武器（镍、青铜、铁、钢、铀、康铜、琥珀金）
    const t2_validWeapons = [
        'fallout:nickel_halberd',
        'fallout:bronze_halberd',
        'fallout:iron_halberd',
        'fallout:steel_halberd', // 修正 steeln → steel
        'fallout:uranium_halberd',
        'fallout:constantan_halberd',
        'fallout:electrum_halberd',
        'fallout:nickel_longsword',
        'fallout:bronze_longsword',
        'fallout:iron_longsword',
        'fallout:steel_longsword',
        'fallout:uranium_longsword',
        'fallout:constantan_longsword',
        'fallout:electrum_longsword',
        'fallout:nickel_longknife',
        'fallout:bronze_longknife',
        'fallout:iron_longknife',
        'fallout:steel_longknife',
        'fallout:uranium_longknife',
        'fallout:constantan_longknife',
        'fallout:electrum_longknife'
    ];

    // T3 武器（钻石、黑钢、蓝钢、红钢）
    const t3_validWeapons = [
        'fallout:diamond_halberd',
        'fallout:black_steel_halberd',
        'fallout:blue_steel_halberd',
        'fallout:red_steel_halberd',
        'fallout:diamond_longsword',
        'fallout:black_steel_longsword',
        'fallout:blue_steel_longsword',
        'fallout:red_steel_longsword',
        'fallout:diamond_longknife',
        'fallout:black_steel_longknife',
        'fallout:blue_steel_longknife',
        'fallout:red_steel_longknife',
        "iceandfire:troll_weapon_trunk_frost",
        "iceandfire:troll_weapon_column_forest",
        "iceandfire:troll_weapon_column",
        "iceandfire:troll_weapon_column_frost",
        "iceandfire:troll_weapon_hammer",
        "iceandfire:troll_weapon_trunk",
        "alexsmobs:skelewag_sword",
        "cataclysm:athame",
        "iceandfire:myrmex_jungle_sword",
        "iceandfire:myrmex_desert_sword",
        "cataclysm:khopesh",
        "alexscaves:frostmint_spear",
        "cataclysm:coral_spear",
        "alexscaves:ortholance",
        "cataclysm:coral_bardiche",
        "irons_spellbooks:magehunter",
        "irons_spellbooks:spellbreaker",
        "irons_spellbooks:amethyst_rapier",
        "alexscaves:primitive_club",
        "iceandfire:hippogryph_sword",
        "irons_spellbooks:keeper_flamberge",
        "iceandfire:dragonbone_sword",
        "cataclysm:infernal_forge",
        "illager_additions:master_katana",
        "trials:mace",
        "illager_additions:royal_guard_spear",
        "illager_additions:spear",
        "iceandfire:dragonbone_sword_lightning",
        "iceandfire:dragonbone_sword_fire",
        "iceandfire:dragonbone_sword_ice",
        "iceandfire:ghost_sword"
    ];

    // T4 武器（黑曜石钢、秘银、山铜、下界合金）
    const t4_validWeapons = [
        'fallout:ingot_refined_obsidian_halberd',
        'fallout:mithril_halberd',
        'fallout:orichalcum_halberd',
        'fallout:netherite_halberd',
        'fallout:warden_halberd',
        'fallout:ingot_refined_obsidian_longsword',
        'fallout:mithril_longsword',
        'fallout:orichalcum_longsword',
        'fallout:netherite_longsword',
        'fallout:warden_longsword',
        'fallout:ingot_refined_obsidian_longknife',
        'fallout:mithril_longknife',
        'fallout:orichalcum_longknife',
        'fallout:netherite_longknife',
        'fallout:warden_longknife',
        "iceandfire:dragonsteel_ice_sword",
        "iceandfire:dragonsteel_fire_sword",
        "iceandfire:dragonsteel_lightning_sword",
        "iceandfire:dragonsteel_ice_axe",
        "iceandfire:dragonsteel_fire_axe",
        "iceandfire:dragonsteel_lightning_axe",
        "fallout:joker_hammer",
        "mowziesmobs:wrought_axe"
    ];


    // T5 武器（传奇级怪物掉落）
    const t5_validWeapons = [
        "majruszsdifficulty:wither_sword",
        "cataclysm:the_incinerator",
        "cataclysm:soul_render",
        "cataclysm:meat_shredder",
        "cataclysm:gauntlet_of_bulwark",
        "cataclysm:gauntlet_of_guard",
        "cataclysm:the_annihilator",
        "cataclysm:void_forge",
        "cataclysm:ancient_spear",
        "alexscaves:extinction_spear",
        "majruszsdifficulty:enderium_sword",
        "majruszsdifficulty:enderium_axe",
        "majruszsdifficulty:enderium_axe",
        "cataclysm:cursed_bow",
        "cataclysm:the_immolator",
        "majruszsdifficulty:enderium_axe",
        "cataclysm:astrape",
        "cataclysm:ceraunus",
        "cataclysm:laser_gatling",
        "cataclysm:wither_assault_shoulder_weapon",
        "cataclysm:gauntlet_of_maelstrom",
        "fallout:reinbow_joker_hammer",
        "cataclysm:tidal_claws",
        "witherstormmod:eye_of_the_storm",
        "witherstormmod:formidi_blade",
        "witherstormmod:command_block_sword",
        "witherstormmod:command_block_pickaxe",
        "witherstormmod:command_block_axe",
        "witherstormmod:command_block_shovel",
        "witherstormmod:command_block_hoe",
        "witherstormmod:iron_command_block_sword",
        "witherstormmod:iron_command_block_pickaxe",
        "witherstormmod:iron_command_block_axe",
        "witherstormmod:iron_command_block_shovel",
        "witherstormmod:iron_command_block_hoe",
        "witherstormmod:stone_command_block_sword",
        "witherstormmod:stone_command_block_pickaxe",
        "witherstormmod:stone_command_block_axe",
        "witherstormmod:stone_command_block_shovel",
        "witherstormmod:stone_command_block_hoe",
        "witherstormmod:wooden_command_block_sword",
        "witherstormmod:wooden_command_block_pickaxe",
        "witherstormmod:wooden_command_block_axe",
        "witherstormmod:wooden_command_block_shovel",
        "witherstormmod:wooden_command_block_hoe",
        "witherstormmod:gold_command_block_sword",
        "witherstormmod:gold_command_block_pickaxe",
        "witherstormmod:gold_command_block_axe",
        "witherstormmod:gold_command_block_shovel",
        "witherstormmod:gold_command_block_hoe",
        "fallout:command_joker_hammer",
        "mekaweapons:mekatana"
    ];

    const gunWeapons = [
        "tacz:modern_kinetic_gun"
    ];

    // 检查武器类型并应用不同效果
    if (t1_validWeapons.includes(mainHandItem.id)) {
        // T1 武器：15% 概率触发破甲（3秒，等级2）
        if (Math.random() < 0.15) {
            event.entity.potionEffects.add('irons_spellbooks:rend', 60, 2, true, false);
        }
        if (Math.random() < 0.30) {
            event.entity.potionEffects.add('majruszsdifficulty:bleeding', 400, 0, false, false);
        }
    }
    else if (t2_validWeapons.includes(mainHandItem.id)) {
        // T2 武器：25% 概率触发破甲（6秒，等级4）
        if (Math.random() < 0.25) {
            event.entity.potionEffects.add('irons_spellbooks:rend', 120, 4, true, false);
        }
        if (Math.random() < 0.34) {
            event.entity.potionEffects.add('majruszsdifficulty:bleeding', 400, 0, false, false);
        }
    }
    else if (t3_validWeapons.includes(mainHandItem.id)) {
        // T3 武器：45% 概率触发破甲（9秒，等级8）
        if (Math.random() < 0.45) {
            event.entity.potionEffects.add('irons_spellbooks:rend', 180, 8, true, false);
        }
        if (Math.random() < 0.40) {
            event.entity.potionEffects.add('majruszsdifficulty:bleeding', 400, 0, false, false);
        }
    }
    else if (t4_validWeapons.includes(mainHandItem.id)) {
        // T4 武器：65% 概率触发破甲（12秒，等级12）
        if (Math.random() < 0.65) {
            event.entity.potionEffects.add('irons_spellbooks:rend', 240, 12, true, false);
        }
        if (Math.random() < 0.45) {
            event.entity.potionEffects.add('alexsmobs:exsanguination', 400, 0, false, false);
        }
        if (Math.random() < 0.35) {
            event.entity.potionEffects.add('cataclysm:blazing_brand', 240, 2, true, false);
        }
    }
    else if (t5_validWeapons.includes(mainHandItem.id)) {
        // T5 武器：65% 概率触发破甲（12秒，等级12）
        if (Math.random() < 0.65) {
            event.entity.potionEffects.add('irons_spellbooks:rend', 240, 12, true, false);
        }
        if (Math.random() < 0.35) {
            event.entity.potionEffects.add('cataclysm:blazing_brand', 240, 3, true, false);
        }
        if (Math.random() < 0.45) {
            event.entity.potionEffects.add('alexsmobs:exsanguination', 400, 1, false, false);
        }
    }
    else if (gunWeapons.includes(mainHandItem.id)) {
        if (Math.random() < 0.30) {
            event.entity.potionEffects.add('champions:wound', 400, 0, true, false);
        }
        if (Math.random() < 0.05) {
            event.entity.potionEffects.add('alexsmobs:exsanguination', 400, 1, false, false);
        }
    }
    else {
        return; // 非指定武器不触发
    }
});