ServerEvents.recipes(e => {
  const armors = ['black_steel','brass'];

  armors.forEach(armor => {
    // 盔甲
    e.shaped(`fallout:${armor}_helmet`, ['III', 'I I'], { I: `#forge:ingots/${armor}`});
    e.shaped(`fallout:${armor}_chestplate`, ['I I', 'III', 'III'], { I: `#forge:ingots/${armor}`});
    e.shaped(`fallout:${armor}_leggings`, ['III', 'I I', 'I I'], { I: `#forge:ingots/${armor}`});
    e.shaped(`fallout:${armor}_boots`, ['I I', 'I I'], { I: `#forge:ingots/${armor}`});
  });
  //史诗金属制品
  const legendMetal=[
    'mithril','orichalcum'
  ]
  legendMetal.forEach(metal=>{
    e.smithing(`fallout:${metal}_helmet`,'minecraft:netherite_helmet',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_chestplate`,'minecraft:netherite_chestplate',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_leggings`,'minecraft:netherite_leggings',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_boots`,'minecraft:netherite_boots',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
  });
  //彩钢制品
  const colorMetal=[
    'blue_steel','red_steel'
  ]
  colorMetal.forEach(metal=>{
    e.smithing(`fallout:${metal}_helmet`,'fallout:black_steel_helmet',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template' 
    );
    e.smithing(`fallout:${metal}_chestplate`,'fallout:black_steel_chestplate',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'      
    );
    e.smithing(`fallout:${metal}_leggings`,'fallout:black_steel_leggings',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'      
    );
    e.smithing(`fallout:${metal}_boots`,'fallout:black_steel_boots',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'      
    );
  });
});