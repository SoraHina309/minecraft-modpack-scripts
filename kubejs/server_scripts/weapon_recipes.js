ServerEvents.recipes(e => {
  const weapons = ['black_steel',
    'lead', 'aluminum', 'gold', 'silver', 'copper',
    'brass', 'bronze', 'constantan', 'electrum', 'iron', 'nickel', 'uranium', 'steel'
  ];

  weapons.forEach(weapon => {
    // 为每种材料定义武器配方
    e.shaped(`fallout:${weapon}_halberd`, ['II ', 'IA ', ' S '], {
      I: Ingredient.of(`#forge:ingots/${weapon}`),
      A: 'mekanismtools:bronze_axe',
      S: 'minecraft:stick'
    }).stage('heavy')

    e.shaped(`fallout:${weapon}_longsword`, ['  I', 'II ', 'SI '], {
      I: Ingredient.of(`#forge:ingots/${weapon}`),
      S: 'mekanismtools:bronze_sword'
    }).stage('heavy')

    e.shaped(`fallout:${weapon}_longknife`, ['  I', ' I ', 'S  '], {
      I: Ingredient.of(`#forge:ingots/${weapon}`),
      S: 'mekanismtools:bronze_sword'
    }).stage('heavy')
  });
  // 钻石武器配方
  e.shaped('fallout:diamond_halberd', ['II ', 'IA ', ' S '], {
    I: 'minecraft:diamond',
    A: 'mekanismtools:bronze_axe',
    S: 'minecraft:stick'
  }).stage('heavy')

  e.shaped('fallout:diamond_longsword', ['  I', 'II ', 'SI '], {
    I: 'minecraft:diamond',
    S: 'mekanismtools:bronze_sword'
  }).stage('heavy')

  e.shaped('fallout:diamond_longknife', ['  I', ' I ', 'S  '], {
    I: 'minecraft:diamond',
    S: 'mekanismtools:bronze_sword'
  }).stage('heavy')

  // 史诗金属制品
  const legendMetal = ['mithril', 'orichalcum'];
  legendMetal.forEach(metal => {
    e.smithing(`fallout:${metal}_halberd`, 'fallout:netherite_halberd',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longsword`, 'fallout:netherite_longsword',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longknife`, 'fallout:netherite_longknife',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');
  });

  // 下界合金制品（修正模板与材料位置）
  const netherite = ['netherite'];
  netherite.forEach(metal => {
    e.smithing(`fallout:${metal}_halberd`, 'fallout:diamond_halberd',
      'minecraft:netherite_upgrade_smithing_template', `minecraft:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longsword`, 'fallout:diamond_longsword',
      'minecraft:netherite_upgrade_smithing_template', `minecraft:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longknife`, 'fallout:diamond_longknife',
      'minecraft:netherite_upgrade_smithing_template', `minecraft:${metal}_ingot`
    ).stage('heavy');
  });

  // 幽匿制品（修正模板与材料位置）
  e.smithing(
    Item.of('fallout:warden_longknife', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:invisibility",index:0,level:6,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}'),
    'fallout:netherite_halberd',
    'deeperdarker:warden_upgrade_smithing_template', // 模板在左
    'deeperdarker:reinforced_echo_shard' // 材料在右
  ).stage('heavy');

  e.smithing(
    Item.of('fallout:warden_longsword', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:echoing_strikes",index:0,level:5,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}'),
    'fallout:netherite_longsword',
    'deeperdarker:warden_upgrade_smithing_template',
    'deeperdarker:reinforced_echo_shard'
  ).stage('heavy');

  e.smithing(
    Item.of('fallout:warden_longknife', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:invisibility",index:0,level:6,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}'),
    'fallout:netherite_longknife',
    'deeperdarker:warden_upgrade_smithing_template',
    'deeperdarker:reinforced_echo_shard'
  ).stage('heavy');

  // 彩钢制品（修正模板与材料位置）
  const colorMetal = ['blue_steel', 'red_steel'];
  colorMetal.forEach(metal => {
    e.smithing(`fallout:${metal}_halberd`, 'fallout:black_steel_halberd',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longsword`, 'fallout:black_steel_longsword',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');

    e.smithing(`fallout:${metal}_longknife`, 'fallout:black_steel_longknife',
      'minecraft:netherite_upgrade_smithing_template', `fallout:${metal}_ingot`
    ).stage('heavy');
  });
});
