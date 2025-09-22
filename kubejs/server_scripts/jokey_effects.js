EntityEvents.hurt(event => {
    const damager = event.source.actual;
    if (!damager || !damager.isPlayer()) return;

    const mainHandItem = damager.mainHandItem;
    const helmet = damager.headArmorItem;


    const t1joker_validWeapons = [
        "trials:breachr"
    ];

    const t2joker_validWeapons = [
        "fallout:joker_hammer",
        "cataclysm:infernal_forge"
    ];

    const t3joker_validWeapons = [
        "fallout:reinbow_joker_hammer",
        "fallout:reinbow_joker_hammer",
        "cataclysm:void_forge"
    ];


    if (t1joker_validWeapons.includes(mainHandItem.id)) {
        event.entity.playSound('minecraft:block.note_block.bit', 1.0, 1.8);    // 高音 “叮”
        event.entity.playSound('minecraft:block.bell.use', 1.0, 0.6);           // 低频“咚”
        event.entity.playSound('minecraft:block.note_block.pling', 0.8, 1.2);   // 电子弹跳
        event.entity.playSound('minecraft:entity.ghast.scream', 0.4, 1.0);      // 滑稽尖叫
        if (Math.random() < 0.1) {

            event.entity.potionEffects.add('cataclysm:stun', 120, 0, true, true);

        }

        if (Math.random() < 0.02) {
            event.entity.potionEffects.add('alexscaves:stunned', 240, 0, true, true);
        }
    }
    else if (t2joker_validWeapons.includes(mainHandItem.id)) {
        event.entity.playSound('minecraft:block.note_block.bit', 1.0, 1.8);    // 高音 “叮”
        event.entity.playSound('minecraft:block.bell.use', 1.0, 0.6);           // 低频“咚”
        event.entity.playSound('minecraft:block.note_block.pling', 0.8, 1.2);   // 电子弹跳
        event.entity.playSound('minecraft:entity.ghast.scream', 0.4, 1.0);      // 滑稽尖叫
        if (Math.random() < 0.15) {
            event.entity.potionEffects.add('cataclysm:stun', 180, 0, true, true);
        }
        if (Math.random() < 0.05) {
            event.entity.potionEffects.add('alexscaves:stunned', 240, 0, true, true);
        }
    }
    else if (t3joker_validWeapons.includes(mainHandItem.id)) {
        event.entity.playSound('minecraft:block.note_block.bit', 1.0, 1.8);    // 高音 “叮”
        event.entity.playSound('minecraft:block.bell.use', 1.0, 0.6);           // 低频“咚”
        event.entity.playSound('minecraft:block.note_block.pling', 0.8, 1.2);   // 电子弹跳
        event.entity.playSound('minecraft:entity.ghast.scream', 0.4, 1.0);      // 滑稽尖叫
        if (Math.random() < 0.25) {
            event.entity.potionEffects.add('cataclysm:stun', 240, 0, true, true);
        }
        if (Math.random() < 0.1) {
            event.entity.potionEffects.add('alexscaves:stunned', 240, 0, true, true);
        }
    }
    else {
        return; // 非指定武器不触发
    }
});