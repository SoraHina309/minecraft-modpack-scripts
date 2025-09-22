StartupEvents.registry("block", (e) => {

    e.create("fallout:deepslate_mithril_ore", "basic")//深层秘银矿石
        .translationKey("block.fallout.deepslate_mithril_ore")
        .stoneSoundType() // 声音类型
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)

    e.create("fallout:deepslate_orichalcum_ore", "basic")//深层山铜矿石
        .translationKey("block.fallout.deepslate_orichalcum_ore")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)

        e.create("fallout:black_steel_block", "basic")//黑钢块
        .translationKey("block.fallout.black_steel_block")
        .stoneSoundType() // 声音类型
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)

        e.create("fallout:red_steel_block", "basic")//红钢块
        .translationKey("block.fallout.red_steel_block")
        .stoneSoundType() // 声音类型
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)

    e.create("fallout:blue_steel_block", "basic")//蓝钢块
        .translationKey("block.fallout.blue_steel_block")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)
        
        e.create("fallout:mithril_block", "basic")//秘银块
        .translationKey("block.fallout.mithril_block")
        .stoneSoundType() // 声音类型
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)

    e.create("fallout:orichalcum_block", "basic")//山铜块
        .translationKey("block.fallout.orichalcum_block")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_diamond_tool")  // 挖掘等级
        .requiresTool(true)    

        e.create("fallout:stepper_block", "basic")//光刻机外壳
        .translationKey("block.fallout.stepper_block")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)    

        e.create("fallout:stepper_energy_input_port", "cardinal")//光刻机能量输入端口
        .translationKey("block.fallout.stepper_energy_input_port")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)    

        e.create("fallout:stepper_fluid_input_port", "cardinal")//光刻机流体输入端口
        .translationKey("block.fallout.stepper_fluid_input_port")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)    

        e.create("fallout:stepper_core", "cardinal")//光刻机核心
        .translationKey("block.fallout.stepper_core")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)    

        e.create("fallout:steam_research", "cardinal")//研究台
        .translationKey("block.fallout.steam_research")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultCutout() 
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/axe") // 工具类型
        .tagBlock("minecraft:needs_wooden_tool")  // 挖掘等级
        .requiresTool(true)


        e.create("fallout:power_research", "cardinal")//研究终端
        .translationKey("block.fallout.power_research")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultCutout() 
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)

        e.create("fallout:atom_research", "cardinal")//研究方尖碑
        .translationKey("block.fallout.atom_research")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultTranslucent()
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)

        e.create("fallout:steam_investigate", "cardinal")//调查台
        .translationKey("block.fallout.steam_investigate")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultCutout() 
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/axe") // 工具类型
        .tagBlock("minecraft:needs_wooden_tool")  // 挖掘等级
        .requiresTool(true)


        e.create("fallout:power_investigate", "cardinal")//调查终端
        .translationKey("block.fallout.power_investigate")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultCutout() 
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)

        e.create("fallout:atom_investigate", "cardinal")//调查方尖碑
        .translationKey("block.fallout.atom_investigate")
        .stoneSoundType() // 声音类型   
        .hardness(6) // 硬度
        .defaultTranslucent()
        .resistance(6000) // 方块的耐爆炸性
        .tagBlock("minecraft:mineable/pickaxe") // 工具类型
        .tagBlock("minecraft:needs_iron_tool")  // 挖掘等级
        .requiresTool(true)

})
