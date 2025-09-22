ServerEvents.recipes(e => {

  const materials = ['brass'];

  materials.forEach(material => {
      // 工具
      e.shaped(`fallout:${material}_pickaxe`, ['III', ' S ', ' S '], { I: `create:${material}_ingot`, S: 'minecraft:stick' });
      e.shaped(`fallout:${material}_axe`, ['II ', 'IS ', ' S '], { I: `create:${material}_ingot`, S: 'minecraft:stick' });
      e.shaped(`fallout:${material}_shovel`, [' I ', ' S ', ' S '], { I: `create:${material}_ingot`, S: 'minecraft:stick' });
      e.shaped(`fallout:${material}_hoe`, ['II ', ' S ', ' S '], { I: `create:${material}_ingot`, S: 'minecraft:stick' });
      e.shaped(`fallout:${material}_sword`, [' I ', ' I ', ' S '], { I: `create:${material}_ingot`, S: 'minecraft:stick' });
      e.shaped(`fallout:${material}_paxel`, ['APO', ' I ', ' I '], { A: `create:${material}_axe`,P: `fallout:${material}_pickaxe`,O: `fallout:${material}_shovel`, I: 'minecraft:iron_ingot' });
    });
  e.shaped(`fallout:black_steel_paxel`, ['APO', ' I ', ' I '], { A: 'cataclysm:black_steel_axe',P: 'cataclysm:black_steel_pickaxe',O: 'cataclysm:black_steel_shovel', I: 'minecraft:iron_ingot' });
    //史诗金属制品
  const legendMetal=[
    'mithril','orichalcum'
  ]
  legendMetal.forEach(metal=>{
    e.smithing(`fallout:${metal}_pickaxe`,'minecraft:diamond_pickaxe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_axe`,'minecraft:diamond_axe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_shovel`,'minecraft:diamond_shovel',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_hoe`,'minecraft:diamond_hoe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_sword`,'minecraft:diamond_sword',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(
      `fallout:${metal}_paxel`,
      'mekanismtools:diamond_paxel',
      `fallout:${metal}_ingot`,
      'minecraft:netherite_upgrade_smithing_template'
    );
  });
  //彩钢制品
  const colorMetal=[
    'blue_steel','red_steel'
  ]
  colorMetal.forEach(metal=>{
    e.smithing(`fallout:${metal}_pickaxe`,'cataclysm:black_steel_pickaxe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template' 
    );
    e.smithing(`fallout:${metal}_axe`,'cataclysm:black_steel_axe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'      
    );
    e.smithing(`fallout:${metal}_shovel`,'cataclysm:black_steel_shovel',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'      
    );
    e.smithing(`fallout:${metal}_hoe`,'cataclysm:black_steel_hoe',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_sword`,'cataclysm:black_steel_sword',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
    e.smithing(`fallout:${metal}_paxel`,'fallout:black_steel_paxel',
      `fallout:${metal}_ingot`,'minecraft:netherite_upgrade_smithing_template'
    );
  });
  });

