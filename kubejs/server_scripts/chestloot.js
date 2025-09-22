LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.CHEST ...
        .randomChance(1)
        .addLoot(
          LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.75)),
          LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.25)),
          LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.25)),
          LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.25)),
        );
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:spawner").addLoot(
        /**
         * Creates a LootEntry with 50% chance of dropping a stick.
         */
        LootEntry.of('legendarysurvivaloverhaul:heart_fragment',2),
        LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.5)),
        LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c) => c.randomChance(0.5)),
    );
});
    LootJS.modifiers((event)=>{
        event
        .addLootTypeModifier(LootType.CHEST)// or multiple LootType.BLOcK，LootType.CHEST...
        .anyDimension("lostcities:lostcity")
        .addLoot(1,[
            LootEntry.of("fallout:nato_vehicle_voucher_iii").when((c)=> c.randomChance(0.12)),
            LootEntry.of('fallout:nato_vehicle_voucher_iV').when((c)=> c.randomChance(0.11)),
            LootEntry.of('fallout:nato_vehicle_voucher_V').when((c)=> c.randomChance(0.10)),
            LootEntry.of('fallout:nato_vehicle_voucher_Vi').when((c)=> c.randomChance(0.09)),
            LootEntry.of('fallout:nato_vehicle_voucher_Vii').when((c)=> c.randomChance(0.08)),
            LootEntry.of('fallout:nato_vehicle_voucher_Viii').when((c)=> c.randomChance(0.07)),
            LootEntry.of('fallout:nato_vehicle_voucher_ix').when((c)=>c.randomChance(0.06)),
            LootEntry.of('fallout:nato_vehicle_voucher_x').when((c)=> c.randomChance(0.02)),
            LootEntry.of('fallout:nato_vehicle_voucher_xi').when((c)=>c.randomChance(0.01))
        ]);
    });
    LootJS.modifiers((event)=>{
        event
        .addLootTypeModifier(LootType.CHEST)//or multiple LootType.BLOCK,LootType.CHEST ..
        .anyDimension("lostcities:lostcity")
        .addLoot(1,[
            LootEntry.of('fallout:cis_vehicle_voucher_iv').when((c)=> c.randomChance(0.11)),
            LootEntry.of('fallout:cis_vehicle_voucher_V').when((c)=>c.randomChance(0.10)),
            LootEntry.of('fallout:cis_vehicle_voucher_Vi').when((c)=> c.randomChance(0.09)),
            LootEntry.of('fallout:cis_vehicle_voucher_Vii').when((c)=> c.randomChance(0.08)),
            LootEntry.of('fallout:cis_vehicle_voucher_Viii').when((c)=>c.randomChance(0.07)),
            // LootEntry.of("legendarysurvivaloverhaul:heart_fragment").when((c)=>c.randomChance(0.25)),
    ]);
});
LootJS.modifiers((event) => {
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot("minecraft:flint")
    .removeLoot(ItemFilter.WEAPON)
    .removeLoot("#forge:seeds")
    .removeLoot("#forge:rope")
    .removeLoot('#tombstone:magic_scrolls')
    .removeLoot('tombstone:magic_scroll')
    .removeLoot('minecraft:gunpowder')
    .removeLoot('minecraft:diamond_horse_armor')
    .removeLoot('minecraft:golden_horse_armor')
    .removeLoot('minecraft:iron_horse_armor')
    .removeLoot('minecraft:leather_horse_armor')
    .removeLoot(ItemFilter.ARMOR)
    .removeLoot(ItemFilter.FOOD)
    .removeLoot("#forge:bones")
    .removeLoot("#forge:grain")
    .removeLoot("minecraft:dead_bush")
    .removeLoot("minecraft:cactus")
    .removeLoot('tombstone:familiar_receptacle')
    .removeLoot('superbwarfare:rpg_rocket_standard')
    .removeLoot('touhou_little_maid:power_point')
    .removeLoot("minecraft:string")
    .removeLoot('#forge:records')
    .removeLoot('minecraft:name_tag')
    .removeLoot('minecraft:redstone')
    .removeLoot('minecraft:brick')
    .removeLoot('minecraft:lead')
    .removeLoot('#forge:crops')
    .removeLoot('minecraft:saddle')
    .removeLoot('#forge:leather')
    .removeLoot('minecraft:clay_ball')
    .removeLoot('#quark:shards')
    .removeLoot('minecraft:glass_bottle')
    .removeLoot('minecraft:sugar')
});
LootJS.modifiers((event) => {
    event
    .addLootTypeModifier(LootType.CHEST).anyDimension("lostcities:lostcity")
    .addWeightedLoot([5,20],[
          LootEntry.of('cataclysm:black_steel_ingot').withChance(60),
          LootEntry.of('mekanism:alloy_infused').withChance(80),
          LootEntry.of('mekanism:alloy_reinforced').withChance(40),
          LootEntry.of('mekanism:alloy_atomic').withChance(10),
          LootEntry.of('mekanism:basic_control_circuit').withChance(80),
          LootEntry.of('mekanism:advanced_control_circuit').withChance(40),
          LootEntry.of('mekanism:elite_control_circuit').withChance(10),
          LootEntry.of('mekanism:ultimate_control_circuit').withChance(5),
          LootEntry.of('minecraft:ancient_debris').withChance(15),
          LootEntry.of('superbwarfare:wire_guide_missile').withChance(10),
          LootEntry.of('superbwarfare:agm').withChance(10),
          LootEntry.of('superbwarfare:he_5_inches').withChance(25),
          LootEntry.of('superbwarfare:ap_5_inches').withChance(25),
          LootEntry.of('superbwarfare:medium_aerial_bomb').withChance(25),
          LootEntry.of('superbwarfare:small_rocket').withChance(30),
          Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}').withChance(30),
          LootEntry.of('superbwarfare:rgo_grenade').withChance(40),
          LootEntry.of('superbwarfare:mortar_shell').withChance(40),
          LootEntry.of('superbwarfare:hand_grenade').withChance(40),
          Item.of('tacz:ammo', '{AmmoId:"tacz:40mm"}').withChance(40),
          Item.of('tacz:ammo', 8, '{AmmoId:"cyber_armorer:bullet_sniper"}').withChance(40),
          Item.of('tacz:ammo', 12, '{AmmoId:"cyber_armorer:bullet_buckshot"}').withChance(40),
          Item.of('tacz:ammo', 24, '{AmmoId:"cyber_armorer:bullet_rifle"}').withChance(40),
          Item.of('tacz:ammo', 30, '{AmmoId:"cyber_armorer:bullet_pistol"}').withChance(40)
        ]);
});