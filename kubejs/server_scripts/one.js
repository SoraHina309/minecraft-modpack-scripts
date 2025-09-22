ServerEvents.highPriorityData(event => {
  event.addJson("oei:replacements/raw_materials.json", [
    {
      "matchItems":
        [
          "#forge:raw_materials/silver"
        ],
      "resultItems": "immersiveengineering:raw_silver"
    },
    {
      "matchItems":
        [
          "iceandfire:raw_silver"
        ],
      "resultItems": "immersiveengineering:raw_silver"
    },
    {
      "matchItems":
        [
          "#forge:raw_materials/lead"
        ],
      "resultItems": "immersiveengineering:raw_lead"
    },
    {
      "matchItems":
        [
          "#forge:raw_materials/uranium"
        ],
      "resultItems": "immersiveengineering:raw_uranium"
    }
  ]);
  event.addJson("oei:replacements/storage_blocks.json", [
    {
      "matchItems":
        [
          "immersiveengineering:raw_block_uranium"
        ],
      "resultItems": "mekanism:block_raw_uranium"
    },
    {
      "matchItems":
        [
          "immersiveengineering:raw_block_lead"
        ],
      "resultItems": "mekanism:block_raw_lead"
    },
    {
      "matchItems":
        [
          "mekanism:block_steel",
          "superbwarfare:steel_block"
        ],
      "resultItems": "immersiveengineering:storage_steel"
    },
    {
      "matchItems":
        [
          "mekanism:block_uranium"
        ],
      "resultItems": "immersiveengineering:storage_uranium"
    },
    {
      "matchItems":
        [
          "immersiveengineering:storage_lead",
          "superbwarfare:lead_block"
        ],
      "resultItems": "mekanism:block_lead"
    }
  ]);
  event.addJson("oei:replacements/ingots.json", [
    {
      "matchItems":
        [
          "#forge:ingots/lead"
        ],
      "resultItems": "mekanism:ingot_lead"
    },
    {
      "matchItems":
        [
          "#forge:ingots/uranium"
        ],
      "resultItems": "mekanism:ingot_uranium"
    },
    {
      "matchItems":
        [
          "#forge:ingots/silver"
        ],
      "resultItems": "immersiveengineering:ingot_silver"
    },
    {
      "matchItems":
        [
          "#forge:ingots/steel"
        ],
      "resultItems": "immersiveengineering:ingot_steel"
    },
    {
      "matchItems":
        [
          "#forge:ingots/electrum"
        ],
      "resultItems": "immersiveengineering:ingot_electrum"
    }
  ]);
  event.addJson("oei:replacements/nuggets.json", [
    {
      "matchItems":
        [
          "#forge:nuggets/lead"
        ],
      "resultItems": "mekanism:nugget_lead"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/uranium"
        ],
      "resultItems": "mekanism:nugget_uranium"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/silver"
        ],
      "resultItems": "immersiveengineering:nugget_silver"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/steel"
        ],
      "resultItems": "immersiveengineering:nugget_steel"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/electrum"
        ],
      "resultItems": "immersiveengineering:nugget_electrum"
    },
    {
      "matchItems":
        [
          "iceandfire:copper_nugget"
        ],
      "resultItems": "create:copper_nugget"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/copper"
        ],
      "resultItems": "create:copper_nugget"
    }
  ]);
  event.addJson("oei:replacements/plates.json", [
    {
      "matchItems":
        [
          "#forge:plates/copper"
        ],
      "resultItems": "create:copper_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/iron"
        ],
      "resultItems": "create:iron_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/gold"
        ],
      "resultItems": "create:golden_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/electrum"
        ],
      "resultItems": "immersiveengineering:plate_electrum"
    }
  ]);
  event.addJson("oei:replacements/wires.json", [
    {
      "matchItems":
        [
          "#forge:wires/copper"
        ],
      "resultItems": "immersiveengineering:wire_copper"
    },
    {
      "matchItems":
        [
          "#forge:wires/electrum"
        ],
      "resultItems": "immersiveengineering:wire_electrum"
    }
  ]);
  event.addJson("oei:replacements/rods.json", [
    {
      "matchItems":
        [
          "#forge:rods/iron"
        ],
      "resultItems": "immersiveengineering:stick_iron"
    }
  ]);
  event.addJson("oei:replacements/dusts.json", [
    {
      "matchItems": [
        "#forge:dusts/copper"
      ],
      "resultItems": "mekanism:dust_copper"
    },
    {
      "matchItems": [
        "#forge:dusts/iron"
      ],
      "resultItems": "mekanism:dust_iron"
    },
    {
      "matchItems": [
        "#forge:dusts/steel"
      ],
      "resultItems": "mekanism:dust_steel"
    },
    {
      "matchItems": [
        "#forge:dusts/lead"
      ],
      "resultItems": "mekanism:dust_lead"
    },
    {
      "matchItems": [
        "#forge:dusts/uranium"
      ],
      "resultItems": "mekanism:dust_uranium"
    },
    {
      "matchItems": [
        "#forge:dusts/diamond"
      ],
      "resultItems": "mekanism:dust_diamond"
    },
    {
      "matchItems": [
        "#forge:dusts/gold"
      ],
      "resultItems": "mekanism:dust_gold"
    },
    {
      "matchItems": [
        "alexscaves:sulfur_dust"
      ],
      "matchItems": [
        "immersiveengineering:dust_sulfur"
      ],
      "resultItems": "mekanism:dust_sulfur"
    }
  ]);
  event.addJson("oei:replacements/fd_kc.json", [
    {
      "matchItems": [
        "farmersdelight:rice"
      ],
      "resultItems": "kaleidoscope_cookery:rice"
    },
    {
      "matchItems": [
        "farmersdelight:cooked_rice"
      ],
      "resultItems": "kaleidoscope_cookery:cooked_rice"
    },
    {
      "matchItems": [
        "kaleidoscope_cookery:rice_panicle"
      ],
      "resultItems": "farmersdelight:rice_panicle"
    },
    {
      "matchItems": [
        "farmersdelight:tomato_seeds"
      ],
      "resultItems": "kaleidoscope_cookery:tomato_seed"
    },
    {
      "matchItems": [
        "farmersdelight:tomato"
      ],
      "resultItems": "kaleidoscope_cookery:tomato"
    },
    {
      "matchItems": [
        "kaleidoscope_cookery:stove"
      ],
      "resultItems": "farmersdelight:stove"
    },
    {
      "matchItems": [
        "farmersdelight:fried_egg"
      ],
      "resultItems": "kaleidoscope_cookery:fried_egg"
    },
    {
      "matchItems": [
        "farmersdelight:mutton_chops"
      ],
      "resultItems": "kaleidoscope_cookery:cooked_lamb_chops"
    },
    {
      "matchItems": [
        "farmersdelight:cooked_mutton_chops"
      ],
      "resultItems": "kaleidoscope_cookery:raw_lamb_chops"
    },
    {
      "matchItems": [
        "farmersdelight:fried_rice"
      ],
      "resultItems": "kaleidoscope_cookery:delicious_egg_fried_rice"
    },
    {
      "matchItems": [
        "farmersdelight:cooked_mutton_chops"
      ],
      "resultItems": "kaleidoscope_cookery:raw_lamb_chops"
    },
    {
      "matchItems": [
        "farmersdelight:melon_juice"
      ],
      "resultItems": "legendarysurvivaloverhaul:melon_juice"
    },
    {
      "matchItems": [
        "farmersdelight:apple_cider"
      ],
      "resultItems": "legendarysurvivaloverhaul:apple_juice"
    }
  ]);
  event.addJson("oei:replacements/circuit.json", [
    {
      "matchItems": [
        "superbwarfare:ancient_cpu"
      ],
      "resultItems": "mekanism:basic_control_circuit"
    }
  ]);
  event.addJson("oei:replacements/tools.json", [
    {
      "matchItems": [
        "alexscaves:hazmat_mask"
      ],
      "resultItems": "mekanism:hazmat_mask"
    },
    {
      "matchItems": [
        "alexscaves:hazmat_chestplate"
      ],
      "resultItems": "mekanism:hazmat_gown"
    },
    {
      "matchItems": [
        "alexscaves:hazmat_leggings"
      ],
      "resultItems": "mekanism:hazmat_pants"
    },
    {
      "matchItems": [
        "alexscaves:hazmat_boots"
      ],
      "resultItems": "mekanism:hazmat_boots"
    },
    {
      "matchItems": [
        "immersiveengineering:armor_steel_helmet"
      ],
      "resultItems": "mekanismtools:steel_helmet"
    },
    {
      "matchItems": [
        "immersiveengineering:armor_steel_chestplate"
      ],
      "resultItems": "mekanismtools:steel_chestplate"
    },
    {
      "matchItems": [
        "immersiveengineering:armor_steel_leggings"
      ],
      "resultItems": "mekanismtools:steel_leggings"
    },
    {
      "matchItems": [
        "immersiveengineering:armor_steel_boots"
      ],
      "resultItems": "mekanismtools:steel_boots"
    },
    {
      "matchItems": [
        "iceandfire:armor_copper_metal_helmet"
      ],
      "resultItems": "fallout:copper_helmet"
    },
    {
      "matchItems": [
        "iceandfire:armor_copper_metal_chestplate"
      ],
      "resultItems": "fallout:copper_chestplate"
    },
    {
      "matchItems": [
        "iceandfire:armor_copper_metal_leggings"
      ],
      "resultItems": "fallout:copper_leggings"
    },
    {
      "matchItems": [
        "iceandfire:armor_copper_metal_boots"
      ],
      "resultItems": "fallout:copper_boots"
    },
    // 工具部分
    {
      "matchItems": [
        "immersiveengineering:pickaxe_steel"
      ],
      "resultItems": "mekanismtools:steel_pickaxe"
    },
    {
      "matchItems": [
        "immersiveengineering:shovel_steel"
      ],
      "resultItems": "mekanismtools:steel_shovel"
    },
    {
      "matchItems": [
        "immersiveengineering:axe_steel"
      ],
      "resultItems": "mekanismtools:steel_axe"
    },
    {
      "matchItems": [
        "immersiveengineering:hoe_steel"
      ],
      "resultItems": "mekanismtools:steel_hoe"
    },
    {
      "matchItems": [
        "immersiveengineering:sword_steel"
      ],
      "resultItems": "mekanismtools:steel_sword"
    },
    {
      "matchItems": [
        "iceandfire:copper_pickaxe"
      ],
      "resultItems": "fallout:copper_pickaxe"
    },
    {
      "matchItems": [
        "iceandfire:copper_shovel"
      ],
      "resultItems": "fallout:copper_shovel"
    },
    {
      "matchItems": [
        "iceandfire:copper_axe"
      ],
      "resultItems": "fallout:copper_axe"
    },
    {
      "matchItems": [
        "iceandfire:copper_hoe"
      ],
      "resultItems": "fallout:copper_hoe"
    },
    {
      "matchItems": [
        "iceandfire:copper_sword"
      ],
      "resultItems": "fallout:copper_sword"
    }
  ]);
  event.addJson("oei:replacements/ammo.json", [
    {
      "matchItems": [
        "#superbwarfare:blueprint/common",
        "superbwarfare:handgun_ammo_box"
      ],
      "resultItems": "fallout:steel_parts"
    },
    {
      "matchItems": [
        "#superbwarfare:blueprint/rare",
        "superbwarfare:rifle_ammo_box",
        "superbwarfare:shotgun_ammo_box"
      ],
      "resultItems": "fallout:black_steel_parts"
    },
    {
      "matchItems": [
        "#superbwarfare:blueprint/epic",
        "superbwarfare:sniper_ammo_box"
      ],
      "resultItems": "fallout:mithril_parts"
    },
    {
      "matchItems": [
        "superbwarfare:sentinel_blueprint",
        "superbwarfare:minigun_blueprint",
        "superbwarfare:mp_5_blueprint",
        "superbwarfare:ntw_20_blueprint",
        "superbwarfare:aa_12_blueprint",
        "superbwarfare:aurelia_sceptre_blueprint",
        "superbwarfare:secondary_cataclysm_blueprint",
        "superbwarfare:javelin_blueprint"
      ],
      "resultItems": "fallout:redblue_steel_parts"
    },
  ]);
});