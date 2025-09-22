

  ItemEvents.rightClicked('fallout:un_full_bounce', event => {
  const { player, level, item } = event;

  // 检查是否在服务端执行
  if (level.isClientSide()) return;

  // 替换手上物品为 fallout:un_armor_bounce
  player.setItemInHand(event.hand, Item.of('fallout:un_armor_bounce'));

  // 构造奖励物品
  const gun = Item.of('tacz:modern_kinetic_gun', 
    '{AttachmentEXTENDED_MAG:{Count:1b,id:"minecraft:air"},GunCurrentAmmoCount:17, GunFireMode:"SEMI", GunId:"tacz:glock_17", HasBulletInBarrel:1b}'
  );

  const ammo = Item.of('tacz:ammo_box', 
    '{AmmoCount:180,AmmoId:"cyber_armorer:bullet_pistol",Level:0}'
  );

  // 给予玩家物品
  player.give(gun);
  player.give(ammo);

  // 可选提示
  player.tell('§a你从战术背带里取出了若干弹药与一把手枪');
});


ItemEvents.rightClicked('fallout:paradise_book', event => {
  event.server.runCommandSilent(`/tellraw @a [{"text":"不是乐园再造了人 而是人创造了乐园","color":"dark_red","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`)

})








