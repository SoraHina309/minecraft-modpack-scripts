// WorldgenEvents.add(event => {
//     const { anchors } = event;

//     event.addDungeonRoom(room => {
//         room.id = 'my_mod:custom_room'; // 设置自定义房间的ID
//         room.biomes = ['minecraft:plains']; // 限制房间生成的生物群系
        
//         // 定义房间的生成条件
//         room.height = {
//             min: anchors.aboveBottom(10), // 离世界底部10层
//             max: anchors.belowTop(20)    // 离世界顶部20层
//         };

//         // 定义房间的内容
//         room.addBlock('minecraft:stone_bricks', { x: 0, y: 0, z: 0 });
//         room.addBlock('minecraft:chest', { x: 1, y: 0, z: 1 }, { loot: 'my_mod:custom_loot' });
        
//         // 添加一些特性
//         room.lightLevel = 10; // 设置房间的光照等级
//         room.spawnRate = 1; // 设置房间生成概率
//     });
// });
