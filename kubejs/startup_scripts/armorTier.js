ItemEvents.armorTierRegistry(event => {
    event.add('fallout:mithril', tier => {
        tier.durabilityMultiplier = 64 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [7, 9, 11, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/mithril'
        tier.toughness = 6.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0

    });

    event.add('fallout:orichalcum', tier => {
        tier.durabilityMultiplier = 64 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [7, 9, 12, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/orichalcum'
        tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:red_steel', tier => {
        tier.durabilityMultiplier = 64 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [6, 9, 10, 7] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/red_steel'
        tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:blue_steel', tier => {
        tier.durabilityMultiplier = 64 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [6, 9, 10, 7] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/blue_steel'
        tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:black_steel', tier => {
        tier.durabilityMultiplier = 64 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [5, 7, 8, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/black_steel'
        tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:brass', tier => {
        tier.durabilityMultiplier = 20 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 8
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/brass'
        tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:copper', tier => {
        tier.durabilityMultiplier = 40 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [2, 4, 5, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 6
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/copper'
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:jokey1', tier => {
        tier.durabilityMultiplier = 40 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 6
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/copper'
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:jokey2', tier => {
        tier.durabilityMultiplier = 40 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [3, 6, 7, 4] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 6
        tier.toughness = 1.0
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/copper'
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:jokey3', tier => {
        tier.durabilityMultiplier = 40 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [4, 7, 8, 5] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 6
        tier.toughness = 3.0
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/copper'
        tier.knockbackResistance = 0.0
    });

    event.add('fallout:jokey4', tier => {
        tier.durabilityMultiplier = 40 // Each slot will be multiply_baseied with [13, 15, 16, 11]
        tier.slotProtections = [7, 9, 12, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 6
        tier.toughness = 4.0
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/copper'
        tier.knockbackResistance = 0.0
    });
})
