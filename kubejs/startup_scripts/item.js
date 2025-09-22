StartupEvents.registry("item", e => {

    e.create("fallout:nato_vehicle_voucher_iii") // 北约载具兑换凭证 III
        .translationKey("item.fallout.nato_vehicle_voucher_iii")
        .unstackable()
        .rarity("common");

    e.create("fallout:nato_vehicle_voucher_iv") // 北约载具兑换凭证 IV
        .translationKey("item.fallout.nato_vehicle_voucher_iv")
        .unstackable()
        .rarity("common");

    e.create("fallout:nato_vehicle_voucher_v") // 北约载具兑换凭证 V
        .translationKey("item.fallout.nato_vehicle_voucher_v")
        .unstackable()
        .rarity("rare");

    e.create("fallout:nato_vehicle_voucher_vi") // 北约载具兑换凭证 VI
        .translationKey("item.fallout.nato_vehicle_voucher_vi")
        .unstackable()
        .rarity("rare");

    e.create("fallout:nato_vehicle_voucher_vii") // 北约载具兑换凭证 VII
        .translationKey("item.fallout.nato_vehicle_voucher_vii")
        .unstackable()
        .rarity("rare");

    e.create("fallout:nato_vehicle_voucher_viii") // 北约载具兑换凭证 VIII
        .translationKey("item.fallout.nato_vehicle_voucher_viii")
        .unstackable()
        .rarity("epic");

    e.create("fallout:nato_vehicle_voucher_ix") // 北约载具兑换凭证 IX
        .translationKey("item.fallout.nato_vehicle_voucher_ix")
        .unstackable()
        .rarity("epic");

    e.create("fallout:nato_vehicle_voucher_x") // 北约载具兑换凭证 X
        .translationKey("item.fallout.nato_vehicle_voucher_x")
        .unstackable()
        .rarity("epic");

    e.create("fallout:nato_vehicle_voucher_xi") // 北约载具兑换凭证 XI
        .translationKey("item.fallout.nato_vehicle_voucher_xi")
        .unstackable()
        .rarity("epic");

    e.create("fallout:cis_vehicle_voucher_iv") // 独联体载具兑换凭证 IV
        .translationKey("item.fallout.cis_vehicle_voucher_iv")
        .unstackable()
        .rarity("common");

    e.create("fallout:cis_vehicle_voucher_v") // 独联体载具兑换凭证 V
        .translationKey("item.fallout.cis_vehicle_voucher_v")
        .unstackable()
        .rarity("rare");

    e.create("fallout:cis_vehicle_voucher_vi") // 独联体载具兑换凭证 VI
        .translationKey("item.fallout.cis_vehicle_voucher_vi")
        .unstackable()
        .rarity("rare");

    e.create("fallout:cis_vehicle_voucher_vii") // 独联体载具兑换凭证 VII
        .translationKey("item.fallout.cis_vehicle_voucher_vii")
        .unstackable()
        .rarity("rare");

    e.create("fallout:cis_vehicle_voucher_viii") // 独联体载具兑换凭证 VIII
        .translationKey("item.fallout.cis_vehicle_voucher_viii")
        .unstackable()
        .rarity("epic");

    e.create("fallout:floppy") // 科研软盘
        .translationKey("item.fallout.floppy")
        .maxDamage(500)
        .unstackable()
        .rarity("rare");

    e.create("fallout:ssd") // 科研硬盘
        .translationKey("item.fallout.ssd")
        .maxDamage(2000)
        .unstackable()
        .rarity("epic");

    e.create("fallout:magnifier") // 放大镜
        .translationKey("item.fallout.magnifier")
        .maxDamage(100)
        .unstackable()
        .rarity("common");

    e.create("fallout:petri_dish") // 培养皿
        .translationKey("item.fallout.petri_dish")
        .maxDamage(500)
        .unstackable()
        .rarity("rare");

    e.create("fallout:clone_cabin") // 克隆舱
        .translationKey("item.fallout.clone_cabin")
        .maxDamage(2000)
        .unstackable()
        .rarity("epic");

    e.create("fallout:steam")//蒸汽研究点
        .maxStackSize(64)
        .translationKey("item.fallout.steam")
        .rarity("rare");

    e.create("fallout:power")//电气研究点
        .maxStackSize(64)
        .translationKey("item.fallout.power")
        .rarity("epic");

    e.create("fallout:atom")//原子研究点
        .maxStackSize(64)
        .translationKey("item.fallout.atom")
        .rarity("uncommon");

    e.create("fallout:primordial")//原初调查点
        .maxStackSize(64)
        .translationKey("item.fallout.primordial")
        .rarity("rare");

    e.create("fallout:adaptation")//适应调查点
        .maxStackSize(64)
        .translationKey("item.fallout.adaptation")
        .rarity("epic");

    e.create("fallout:assimilation")//同化调查点
        .maxStackSize(64)
        .translationKey("item.fallout.assimilation")
        .rarity("uncommon");

    e.create("fallout:ancient_fruit_juice")
        .maxStackSize(64)
        .glow(true)
        .translationKey("item.fallout.assimilation")
        .useAnimation("drink") // 喝的动画和音效
        .food(foodBuilder => {
            foodBuilder
                .alwaysEdible()
        })

// 黄铜弹壳
e.create("fallout:brass_case")
    .maxStackSize(64)
    .translationKey("item.fallout.brass_case")
    .rarity("common")

// 手枪弹头
e.create("fallout:pistol_bullet_tip")
    .maxStackSize(64)
    .translationKey("item.fallout.pistol_bullet_tip")
    .rarity("common")

// 步枪弹头
e.create("fallout:rifle_bullet_tip")
    .maxStackSize(64)
    .translationKey("item.fallout.rifle_bullet_tip")
    .rarity("common")

// 狙击弹头
e.create("fallout:sniper_bullet_tip")
    .maxStackSize(64)
    .translationKey("item.fallout.sniper_bullet_tip")
    .rarity("common")

// 霰弹弹头
e.create("fallout:shotgun_bullet_tip")
    .maxStackSize(64)
    .translationKey("item.fallout.shotgun_bullet_tip")
    .rarity("common")


    e.create("fallout:blackpowder")//强韧胸腔(普通样本)
        .maxStackSize(64)
        .translationKey("item.fallout.blackpowder")
        .rarity("common");

    e.create("fallout:champion_fragment")//强韧胸腔(普通样本)
        .maxStackSize(64)
        .translationKey("item.fallout.champion_fragment")
        .rarity("common");

    e.create("fallout:champion_chunk_fragments")//扭曲大脑(高级样本)
        .maxStackSize(1)
        .translationKey("item.fallout.champion_chunk_fragments")
        .rarity("rare");

    e.create("fallout:champion_complete_fragments")//晶化细胞(史诗样本)
        .maxStackSize(1)
        .translationKey("item.fallout.champion_complete_fragments")
        .rarity("epic");

    e.create("fallout:dried_parasite_skin")//凋零寄生虫
        .maxStackSize(1)
        .translationKey("item.fallout.dried_parasite_skin")
        .rarity("rare");

    e.create("fallout:emptiness_fruit")//悖论
        .glow(true)
        .maxStackSize(1)
        .translationKey("item.fallout.emptiness_fruit")
        .rarity("epic");

    e.create("fallout:un_full_bounce")//内含物品的UN战术背心
        .glow(true)
        .maxStackSize(1)
        .translationKey("item.fallout.un_full_bounce")
        .rarity("rare");

    //     e.create("fallout:black_steel_board")//黑钢插板
    //          .glow(true)
    //         .maxStackSize(1)
    //         .translationKey("item.fallout.black_steel_board")
    //         .rarity("rare");

    //      e.create("fallout:mithril_board")//秘银插板
    //          .glow(true)
    //        .maxStackSize(1)
    //        .translationKey("item.fallout.mithril_board")
    //        .rarity("epic");
    //   
    //      e.create("fallout:steel_pipe", "basic")//远古铁管
    //           .maxStackSize(16)
    //         .translationKey("item.fallout.steel_pipe")
    //         .rarity("common");

    //     e.create("fallout:light_bulb", "basic")//远古灯泡
    //         .maxStackSize(64)
    //         .translationKey("item.fallout.light_bulb")
    //         .rarity("common");

    //      e.create("fallout:large_glass_bottle", "basic")//远古啤酒瓶
    //          .maxStackSize(32)
    //          .translationKey("item.fallout.large_glass_bottle")
    //         .rarity("common");

    //      e.create("fallout:rusty_copper_wire", "basic")//远古铜线
    //           .maxStackSize(64)
    //         .translationKey("item.fallout.rusty_copper_wire")
    //          .rarity("common");

    //      e.create("fallout:glue", "basic")//远古胶水瓶
    //          .maxStackSize(16)
    //         .translationKey("item.fallout.glue")
    //         .rarity("common");

    //    e.create("fallout:can", "basic")//远古易拉罐
    //          .maxStackSize(32)
    //         .translationKey("item.fallout.can")
    //          .rarity("common");

    //      e.create("fallout:plastic_bottle", "basic")//远古塑料瓶
    //           .maxStackSize(32)
    //           .translationKey("item.fallout.plastic_bottle")
    //           .rarity("common");

    //     e.create("fallout:battery", "basic")//远古电池
    //           .maxStackSize(64)
    //           .translationKey("item.fallout.battery")
    //           .rarity("common");

    //      e.create("fallout:lead_acid_battery", "basic")//远古大电池
    //        .maxStackSize(1)
    //          .translationKey("item.fallout.lead_acid_battery")
    //          .rarity("rare");

    //      e.create("fallout:cleaning_agent", "basic")//远古大储罐
    //          .maxStackSize(1)
    //        .translationKey("item.fallout.cleaning_agent")
    //         .rarity("rare");

    //     e.create("fallout:fuse", "basic")//远古能量枢纽
    //         .maxStackSize(16)
    //         .translationKey("item.fallout.fuse")
    //         .rarity("rare");

    //       e.create("fallout:broken_phone", "basic")//远古废弃终端
    //          .maxStackSize(16)
    //          .translationKey("item.fallout.broken_phone")
    //        .rarity("rare");

    //      e.create("fallout:blueprint", "basic")//智能研究终端
    //         .maxStackSize(1)
    //         .translationKey("item.fallout.blueprint")
    //         .rarity("epic");

    e.create("fallout:paradise_base", "basic")//维度碎块
        .maxStackSize(64)
        .translationKey("item.fallout.paradise_base")
        .rarity("epic");

            e.create("fallout:paradise_book", "basic")//维度碎块
        .maxStackSize(1)
        .translationKey("item.fallout.paradise_book")
        .rarity("epic");

            e.create("fallout:paradise_able", "basic")//维度碎块
        .maxStackSize(64)
        .translationKey("item.fallout.paradise_able")
        .rarity("epic");

            e.create("fallout:paradise_crystal", "basic")//维度碎块
        .maxStackSize(64)
        .translationKey("item.fallout.paradise_crystal")
        .rarity("epic");

            e.create("fallout:paradise_power", "basic")//维度碎块
        .maxStackSize(64)
        .translationKey("item.fallout.paradise_power")
        .rarity("epic");

  e.create("fallout:shard_nickel", "basic") // 镍碎片
    .maxStackSize(64)
    .translationKey("item.fallout.shard_nickel")
    .rarity("epic")

  e.create("fallout:clump_nickel", "basic") // 镍碎块
    .maxStackSize(64)
    .translationKey("item.fallout.clump_nickel")
    .rarity("epic")

  e.create("fallout:crystal_nickel", "basic") // 镍结晶
    .maxStackSize(64)
    .translationKey("item.fallout.crystal_nickel")
    .rarity("epic")

  e.create("fallout:enriched_nickel", "basic") // 富集镍
    .maxStackSize(64)
    .translationKey("item.fallout.enriched_nickel")
    .rarity("epic")

  e.create("fallout:dirty_dust_nickel", "basic") // 污浊镍粉
    .maxStackSize(64)
    .translationKey("item.fallout.dirty_dust_nickel")
    .rarity("epic")

  e.create("fallout:shard_aluminum", "basic") // 铝碎片
    .maxStackSize(64)
    .translationKey("item.fallout.shard_aluminum")
    .rarity("epic")

  e.create("fallout:clump_aluminum", "basic") // 铝碎块
    .maxStackSize(64)
    .translationKey("item.fallout.clump_aluminum")
    .rarity("epic")

  e.create("fallout:crystal_aluminum", "basic") // 铝结晶
    .maxStackSize(64)
    .translationKey("item.fallout.crystal_aluminum")
    .rarity("epic")

  e.create("fallout:enriched_aluminum", "basic") // 富集铝
    .maxStackSize(64)
    .translationKey("item.fallout.enriched_aluminum")
    .rarity("epic")

  e.create("fallout:dirty_dust_aluminum", "basic") // 污浊铝粉
    .maxStackSize(64)
    .translationKey("item.fallout.dirty_dust_aluminum")
    .rarity("epic")

    e.create("fallout:shard_orichalcum", "basic")//山铜碎片
        .maxStackSize(64)
        .translationKey("item.fallout.shard_orichalcum")
        .rarity("epic");

    e.create("fallout:clump_orichalcum", "basic")//山铜碎块
        .maxStackSize(64)
        .translationKey("item.fallout.clump_orichalcum")
        .rarity("epic");

    e.create("fallout:crystal_orichalcum", "basic")//山铜结晶
        .maxStackSize(64)
        .translationKey("item.fallout.crystal_orichalcum")
        .rarity("epic");

    e.create("fallout:enriched_orichalcum", "basic")//富集山铜
        .maxStackSize(64)
        .translationKey("item.fallout.enriched_orichalcum")
        .rarity("epic");

    e.create("fallout:dust_orichalcum", "basic")//山铜粉
        .maxStackSize(64)
        .translationKey("item.fallout.dust_orichalcum")
        .rarity("epic");

    e.create("fallout:dirty_dust_orichalcum", "basic")//污浊山铜粉
        .maxStackSize(64)
        .translationKey("item.fallout.dirty_dust_orichalcum")
        .rarity("epic");

    e.create("fallout:orichalcum_ingot", "basic")//山铜锭
        .maxStackSize(64)
        .translationKey("item.fallout.orichalcum_ingot")
        .rarity("epic");

    e.create("fallout:red_steel_nugget", "basic")//红钢粒
        .maxStackSize(64)
        .translationKey("item.fallout.red_steel_nugget")
        .rarity("epic");

    e.create("fallout:red_steel_dust", "basic")//红钢粉
        .maxStackSize(64)
        .translationKey("item.fallout.red_steel_dust")
        .rarity("epic");

    e.create("fallout:red_steel_sheet", "basic")//红钢板
        .maxStackSize(64)
        .translationKey("item.fallout.red_steel_sheet")
        .rarity("epic");

    e.create("fallout:red_steel_ingot", "basic")//红钢锭
        .maxStackSize(64)
        .translationKey("item.fallout.red_steel_ingot")
        .rarity("epic");

    e.create("fallout:pig_iron_ingot", "basic")//生铁锭
        .maxStackSize(64)
        .translationKey("item.fallout.pig_iron_ingot")
        .rarity("common");

    e.create("fallout:blue_steel_nugget", "basic")//蓝钢粒
        .maxStackSize(64)
        .translationKey("item.fallout.blue_steel_nugget")
        .rarity("epic");

    e.create("fallout:blue_steel_dust", "basic")//蓝钢粉
        .maxStackSize(64)
        .translationKey("item.fallout.blue_steel_dust")
        .rarity("epic");

    e.create("fallout:blue_steel_sheet", "basic")//蓝钢板
        .maxStackSize(64)
        .translationKey("item.fallout.blue_steel_sheet")
        .rarity("epic");

            e.create("fallout:shard_tungsten", "basic") // 钨碎片
        .maxStackSize(64)
        .translationKey("item.fallout.shard_tungsten")
        .rarity("epic");

    e.create("fallout:clump_tungsten", "basic") // 钨碎块
        .maxStackSize(64)
        .translationKey("item.fallout.clump_tungsten")
        .rarity("epic");

    e.create("fallout:crystal_tungsten", "basic") // 钨结晶
        .maxStackSize(64)
        .translationKey("item.fallout.crystal_tungsten")
        .rarity("epic");

    e.create("fallout:enriched_tungsten", "basic") // 富集钨
        .maxStackSize(64)
        .translationKey("item.fallout.enriched_tungsten")
        .rarity("epic");

    e.create("fallout:dirty_dust_tungsten", "basic") // 污浊钨粉
        .maxStackSize(64)
        .translationKey("item.fallout.dirty_dust_tungsten")
        .rarity("epic");

    e.create("fallout:shard_mithril", "basic") // 秘银碎片
        .maxStackSize(64)
        .translationKey("item.fallout.shard_mithril")
        .rarity("epic");

    e.create("fallout:clump_mithril", "basic") // 秘银碎块
        .maxStackSize(64)
        .translationKey("item.fallout.clump_mithril")
        .rarity("epic");

    e.create("fallout:crystal_mithril", "basic") // 秘银结晶
        .maxStackSize(64)
        .translationKey("item.fallout.crystal_mithril")
        .rarity("epic");

    e.create("fallout:enriched_mithril", "basic") // 富集秘银
        .maxStackSize(64)
        .translationKey("item.fallout.enriched_mithril")
        .rarity("epic");

    e.create("fallout:dust_mithril", "basic") // 秘银粉
        .maxStackSize(64)
        .translationKey("item.fallout.dust_mithril")
        .rarity("epic");

    e.create("fallout:dirty_dust_mithril", "basic") // 污浊秘银粉
        .maxStackSize(64)
        .translationKey("item.fallout.dirty_dust_mithril")
        .rarity("epic");

    e.create("fallout:mithril_nugget", "basic")//秘银粒
        .maxStackSize(64)
        .translationKey("item.fallout.blue_steel_nugget")
        .rarity("epic");

    e.create("fallout:mithril_ingot", "basic")//秘银锭
        .maxStackSize(64)
        .translationKey("item.fallout.mithril_ingot")
        .rarity("epic");

    e.create("fallout:mithril_sheet", "basic")//秘银板
        .maxStackSize(64)
        .translationKey("item.fallout.mithril_sheet")
        .rarity("epic");

    e.create("fallout:blue_steel_ingot", "basic")//蓝钢锭
        .maxStackSize(64)
        .translationKey("item.fallout.blue_steel_ingot")
        .rarity("epic");

    e.create("fallout:orichalcum_nugget", "basic")//山铜粒
        .maxStackSize(64)
        .translationKey("item.fallout.orichalcum_nugget")
        .rarity("epic");

    e.create("fallout:orichalcum_sheet", "basic")//山铜板
        .maxStackSize(64)
        .translationKey("item.fallout.orichalcum_sheet")
        .rarity("epic");

    e.create("fallout:black_steel_dust", "basic")//黑钢粉
        .maxStackSize(64)
        .translationKey("item.fallout.black_steel_dust")
        .rarity("rare");

    e.create("fallout:black_steel_sheet", "basic")//黑钢板
        .maxStackSize(64)
        .translationKey("item.fallout.black_steel_sheet")
        .rarity("rare");

    e.create("fallout:raw_orichalcum", "basic")//粗山铜矿
        .maxStackSize(64)
        .translationKey("item.fallout.raw_orichalcum")
        .rarity("epic");

    e.create("fallout:raw_mithril", "basic")//粗秘银矿
        .maxStackSize(64)
        .translationKey("item.fallout.raw_mithril")
        .rarity("epic");

          e.create("fallout:enriched_azure_neodymium", "basic") // 富青钕
    .maxStackSize(64)
    .translationKey("item.fallout.enriched_azure_neodymium")
    .rarity("epic")

      e.create("fallout:enriched_scarlet_neodymium", "basic") // 富赤钕
    .maxStackSize(64)
    .translationKey("item.fallout.enriched_scarlet_neodymium")
    .rarity("epic")

              e.create("fallout:dust_azure_neodymium", "basic") // 青钕粉
    .maxStackSize(64)
    .translationKey("item.fallout.dust_azure_neodymium")
    .rarity("epic")

      e.create("fallout:dust_scarlet_neodymium", "basic") // 赤钕粉
    .maxStackSize(64)
    .translationKey("item.fallout.dust_scarlet_neodymium")
    .rarity("epic")

    e.create("fallout:silicon_boule", "basic")//单晶硅棒
        .maxStackSize(16)
        .translationKey("item.fallout.silicon_boule")
        .rarity("common");

    e.create("fallout:mithril_boule", "basic")//掺秘银硅棒
        .maxStackSize(16)
        .translationKey("item.fallout.silicon_boule")
        .rarity("uncommon");

    e.create("fallout:orichalcum_boule", "basic")//掺山铜硅棒
        .maxStackSize(16)
        .translationKey("item.fallout.silicon_boule")
        .rarity("uncommon");

    e.create("fallout:silicon_wafer", "basic")//硅晶圆
        .maxStackSize(8)
        .translationKey("item.fallout.silicon_wafer")
        .rarity("common");

    e.create("fallout:mithril_wafer", "basic")//秘银晶圆
        .maxStackSize(8)
        .translationKey("item.fallout.mithril_wafer")
        .rarity("uncommon");

    e.create("fallout:orichalcum_wafer", "basic")//山铜晶圆
        .maxStackSize(8)
        .translationKey("item.fallout.mithril_wafer")
        .rarity("uncommon");

    //    e.create("fallout:glass_dust", "basic")//玻璃粉
    //         .maxStackSize(64)
    //         .translationKey("item.fallout.glass_dust")
    //        .rarity("common");

    //       e.create("fallout:mithril_upgrade_smithing_template", "basic")//秘银锻造模板
    //         .maxStackSize(64)
    //         .translationKey("item.fallout.mithril_upgrade_smithing_template")
    //        .rarity("uncommon");

    //    e.create("fallout:orichalcum_upgrade_smithing_template", "basic")//山铜锻造模板
    //         .maxStackSize(64)
    //      .translationKey("item.fallout.orichalcum_upgrade_smithing_template")
    //       .rarity("uncommon");


    e.create("fallout:copper_parts", "basic")//优秀材料
        .maxStackSize(64)
        .translationKey("item.fallout.copper_parts")
        .rarity("common");

    e.create("fallout:steel_parts", "basic")//稀有材料
        .maxStackSize(64)
        .translationKey("item.fallout.steel_parts")
        .rarity("rare");

    e.create("fallout:mold_wafer", "basic")//废案
        .maxStackSize(64)
        .translationKey("item.fallout.mold_wafer")
        .rarity("rare");

    e.create("fallout:black_steel_parts", "basic")//史诗材料
        .maxStackSize(64)
        .translationKey("item.fallout.black_steel_parts")
        .rarity("epic");

    e.create("fallout:black_steel_parts_a", "basic")//史诗材料阿尔法
        .maxStackSize(64)
        .translationKey("item.fallout.black_steel_parts")
        .rarity("epic");

    e.create("fallout:black_steel_parts_b", "basic")//史诗材料贝塔
        .maxStackSize(64)
        .translationKey("item.fallout.black_steel_parts")
        .rarity("epic");

    e.create("fallout:mithril_parts", "basic")//传说材料
        .maxStackSize(64)
        .translationKey("item.fallout.mithril_parts")
        .rarity("uncommon");

    e.create("fallout:redblue_steel_parts", "basic")//悖论材料
        .maxStackSize(64)
        .translationKey("item.fallout.redblue_steel_parts")
        .rarity("uncommon");

    e.create("fallout:bronze_sheet", "basic")
        .maxStackSize(64)
        .translationKey("item.fallout.bronze_sheet")
        .rarity("common");

    e.create("fallout:tin_sheet", "basic")
        .maxStackSize(64)
        .translationKey("item.fallout.tin_sheet")
        .rarity("common");

    //     e.create("origins:shulk", "basic")
    //        .maxStackSize(64)
    //        .translationKey("item.origins.shulk")
    //        .rarity("common");

    //       e.create("origins:avian", "basic")
    //          .maxStackSize(64)
    //       .translationKey("item.origins.avian")
    //         .rarity("common");

    //     e.create("origins:feline", "basic")
    //        .maxStackSize(64)
    //         .translationKey("item.origins.feline")
    //        .rarity("common");
    //   
    //      e.create("origins:enderian", "basic")
    //         .maxStackSize(64)
    //          .translationKey("item.origins.enderian")
    //       .rarity("common");
});
