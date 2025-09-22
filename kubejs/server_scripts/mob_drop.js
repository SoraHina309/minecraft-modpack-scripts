EntityEvents.death(event => {
    const entity = event.entity; // 获取死亡实体
    const source = event.source; // 获取伤害来源
    const killer = source.actual; // 获取杀死实体的真正来源

    // 确保击杀者是玩家
    if (killer && killer.isPlayer()) {
        const player = killer; // 转换为玩家对象
        const maxHealth = entity.getAttribute('minecraft:generic.max_health').baseValue; // 获取被杀实体的生命值上限

        const ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity'); // 加载ItemEntity类

        // 检查生命值条件并掉落相应的物品
let dropItem = null;
        if (maxHealth >= 101 && maxHealth < 200) {
            dropItem = Item.of('fallout:champion_fragment');
        } else if (maxHealth >= 200 && maxHealth <400) {
            dropItem = Item.of('fallout:champion_chunk_fragments');
        } else if (maxHealth >= 400) {
            dropItem = Item.of('fallout:champion_complete_fragments');
        }

        // 在实体位置生成掉落物
        if (dropItem) {
            const itemEntity = new ItemEntity(entity.level, entity.x, entity.y, entity.z, dropItem);
            entity.level.addFreshEntity(itemEntity); // 将掉落物加入世界
        }
    }
});


LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.CHEST ...
        .replaceLoot(
          "minecraft:gunpowder",
          LootEntry.of('fallout:blackpowder').when((c) => c.randomChance(0.5)),
          true
        );
});
LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.CHEST ...
        .replaceLoot(
          "minecraft:gunpowder",
          LootEntry.of('quark:gunpowder_sack').when((c) => c.randomChance(0.3)),
          true
        );
});

//biomeSpawns Server Script
EntityJSEvents.biomeSpawns(event => {
    //event.removeSpawn('dungeonsmobs:wavewhisperer', ['#minecraft:is_overworld']);
    //event.removeSpawn('friendsandfoes:mauler', ['#minecraft:is_overworld']);
    //event.removeSpawn('friendsandfoes:wildfire', ['#minecraft:the_nether']);
    //event.removeSpawn('friendsandfoes:crab', ['#minecraft:is_overworld']);
    //event.removeSpawn('friendsandfoes:rascal', ['#minecraft:is_overworld']);
    // alexsmobs
    //event.removeSpawn('alexsmobs:cockroach', ['minecraft:is_overworld']);
    //event.removeSpawn('alexsmobs:tarantula_hawk', ['minecraft:is_overworld']);
    //event.removeSpawn('alexsmobs:crimson_mosquito', ['minecraft:the_nether']);
    //event.removeSpawn('alexsmobs:warped_mosco', ['minecraft:the_nether']);
    //event.removeSpawn('alexsmobs:fly', ['minecraft:is_overworld']);
    //event.removeSpawn('alexsmobs:centipede_head', ['minecraft:is_overworld']);
    //event.removeSpawn('alexsmobs:centipede_body', ['minecraft:is_overworld']);
    //event.removeSpawn('alexsmobs:leafcutter_ant', ['minecraft:is_overworld']);
    // iceandfire
    //event.removeSpawn('iceandfire:myrmex_worker', ['minecraft:is_overworld']);
    //event.removeSpawn('iceandfire:myrmex_soldier', ['minecraft:is_overworld']);
    //event.removeSpawn('iceandfire:myrmex_sentinel', ['minecraft:is_overworld']);
    //event.removeSpawn('iceandfire:myrmex_royal', ['minecraft:is_overworld']);
    //event.removeSpawn('iceandfire:myrmex_queen', ['minecraft:is_overworld']);
    // alexscaves
    //event.removeSpawn('alexscaves:gammaroach', ['minecraft:is_overworld']);
});
