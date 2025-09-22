StartupEvents.registry("item", e => {
  
  e.create("fallout:wildcat")
    .translationKey("item.fallout.wildcat")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(250)
    .tag("curios:belt")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:radioactive_warding_bag")
    .translationKey("item.fallout.radioactive_warding_bag")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(250)
    .tag("curios:belt")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:un_armor_bounce")
    .translationKey("item.fallout.un_armor_bounce")
    .unstackable()
    .rarity("rare")
    .maxDamage(250)
    .tag("curios:body")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("tacz:tacz.bullet_resistance", "44de9fb0-0091-4b17-80a6-c3f3b7045301", 0.4, "multiply_base")
        .addAttribute("minecraft:generic.armor", "96a24acf-2d0b-4464-9538-cb22e3122e5a", 8, "addition")
        .addAttribute("minecraft:generic.armor_toughness", "4bed7075-56c3-468b-8ead-d126676ffd9b", 2, "addition")
        .addAttribute("legendarysurvivaloverhaul:cold_resistance", "6bceabc4-a5af-43c8-807b-48aabe165655", 1, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:military_armor_bounce")
    .translationKey("item.fallout.military_armor_bounce")
    .unstackable()
    .rarity("epic")
    .maxDamage(250)
    .tag("curios:body")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("tacz:tacz.bullet_resistance", "8c563fe5-be01-4232-aa6a-38a309f7d27f", 0.60, "multiply_base")
        .addAttribute("minecraft:generic.armor", "02357d66-8e7b-4cbd-828a-199674f4f295", 10, "addition")
        .addAttribute("minecraft:generic.armor_toughness", "ce35b8a1-2b36-4f9c-a265-c0a49fd3a1b7", 4, "addition")
        .addAttribute("legendarysurvivaloverhaul:cold_resistance", "4ddbfecb-1023-4b70-8351-767706a1b2b4", 2, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:heavy_armor_bounce")
    .translationKey("item.fallout.heavy_armor_bounce")
    .unstackable()
    .rarity("epic")
    .maxDamage(250)
    .tag("curios:body")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("tacz:tacz.bullet_resistance", "8726115f-8e94-475b-bd85-c65364229d15", 0.75, "multiply_base")
        .addAttribute("minecraft:generic.armor", "12fde79f-e482-4ddb-9cc6-28d21b7bb370", 12, "addition")
        .addAttribute("minecraft:generic.armor_toughness", "cce01f09-9577-4650-8bdf-d7754d2608dc", 5, "addition")
        .addAttribute("legendarysurvivaloverhaul:cold_resistance", "4423bdfc-7a18-450f-8ffa-623d71794dd4", 3, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );


  e.create("fallout:parasite_skin")
    .translationKey("item.fallout.parasite_skin")
    .unstackable()
    .rarity("rare")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "edd275b1-f953-4e3d-93a0-297f8eb4a665", -6, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:parasitic_skin")
    .translationKey("item.fallout.parasitic_skin")
    .unstackable()
    .rarity("epic")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "f366eaea-c516-4975-9ce2-234b5b68f0cd", 30, "addition")
        .addAttribute("minecraft:generic.attack_damage", "41a746b2-dc79-4e48-a7fa-00a98726c533", 15, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  e.create("fallout:forbidden_fruit")
    .translationKey("item.fallout.forbidden_fruit")
    .glow(true)
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "67d72b6e-4eb9-46e4-aec9-91aad89b55b1", 60, "addition")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  // 冠军之魂·融毁
  e.create("fallout:champion_destruction")
    .translationKey("item.fallout.champion_destruction")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "64614ac3-274c-4b39-9be3-13d3b8366b43", 10, "addition")
        .addAttribute("minecraft:generic.attack_damage", "d2767c48-b68c-42be-90ed-ecf40e2c424c", 15, "addition")
        .addAttribute("irons_spellbooks:spell_power", "a8ca1677-6562-4c50-80e9-e22b4e16a91d", 0.15, "multiply_total")
        .addAttribute("gunsmithlib:bullet_damage", "a65caf66-01cd-457e-9672-2f5595cb2b4d", 1, "multiply_total")
        .addAttribute("irons_spellbooks:spell_resist", "d87a985d-638d-47de-b5db-f5c280e26ab2", -15, "multiply_total")
        .addAttribute("tacz:tacz.bullet_resistance", "7572579a-65b0-4da6-8a98-08f19d3af6f9", -15, "multiply_total")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  // 冠军之魂·急速
  e.create("fallout:champion_haste")
    .translationKey("item.fallout.champion_haste")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "a5f000a1-f1bd-42fe-9972-e01ab803e15f", 10, "addition")
        .addAttribute("minecraft:generic.movement_speed", "7598a064-f278-44fe-996e-17ee913a9190", 0.4, "multiply_base")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  // 冠军之魂·抑制
  e.create("fallout:champion_suppression")
    .translationKey("item.fallout.champion_suppression")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "755d90a0-729b-4eb6-bca1-c5efdaa8f832", 10, "addition")
        .addAttribute("minecraft:generic.armor", "264b7875-9a16-4056-8eee-514fd3e59b0e", 15, "addition")
        .addAttribute("minecraft:generic.armor_toughness", "e28fcf58-4210-4680-bc2d-4f5c03179258", 10, "addition")
        .addAttribute("irons_spellbooks:spell_resist", "fb418a03-0da0-49f3-8a5f-965634b3773f", 0.5, "multiply_total")
        .addAttribute("minecraft:generic.attack_damage", "b28f0003-5a9e-48c8-8d4c-bcf77ae27f55", -0.5, "multiply_total")
        .addAttribute("irons_spellbooks:spell_power", "3a52f0ee-f982-4768-a995-ec7f4a80d7d1", -0.5, "multiply_total")
        .addAttribute("gunsmithlib:bullet_damage", "1ef5cdb4-fb34-4d79-bbce-d25f4d4878ce", -0.5, "multiply_total")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  // 冠军之魂·活力
  e.create("fallout:champion_vitality")
    .translationKey("item.fallout.champion_vitality")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.max_health", "ce5db9ad-0e89-413d-b05c-e26654d544ed", 80, "addition")
        .addAttribute("minecraft:generic.armor", "87c4b4c5-967a-4144-a6ea-2fb0b22adfa2", -0.9, "multiply_total")
        .addAttribute("minecraft:generic.armor_toughness", "12517145-76dc-4561-80ff-1ec0e1f46f5a", -0.9, "multiply_total")
        .canEquip(() => true)
        .canUnequip(() => true)
    );

  // 冠军之魂·统御
  e.create("fallout:champion_domination")
    .translationKey("item.fallout.champion_domination")
    .unstackable()
    .rarity("uncommon")
    .maxDamage(500)
    .tag("curios:origin")
    .attachCuriosCapability(
      CuriosJSCapabilityBuilder.create()
        .addAttribute("minecraft:generic.attack_damage", "6bb1cf66-4938-4a8c-9406-ba7cd9745863", 15, "addition")
        .addAttribute("irons_spellbooks:spell_power", "3eab7353-2c73-4b02-885a-8e009056660e", 0.15, "multiply_total")
        .addAttribute("gunsmithlib:bullet_damage", "b53cde73-6ed3-4d82-8611-6d055b47fb22", 1, "multiply_total")
        .addAttribute("minecraft:generic.movement_speed", "01ca4485-3d72-4970-8ae6-e6e69a71e296", 0.4, "multiply_base")
        .addAttribute("minecraft:generic.max_health", "f73ac957-ad53-48b2-80dc-98e69e916c5b", 80, "addition")
        .addAttribute("minecraft:generic.armor", "4121c2b2-e4c3-4c53-ac3b-8216de0ba330", 12, "addition")
        .addAttribute("minecraft:generic.armor_toughness", "b82b0d3f-67e1-4168-9017-99a45fa93012", 8, "addition")
        .addAttribute("irons_spellbooks:spell_resist", "39e51b19-5369-497d-83a9-16ad0c827f96", 0.4, "multiply_total")
        .canEquip(() => true)
        .canUnequip(() => true)
    );
});
