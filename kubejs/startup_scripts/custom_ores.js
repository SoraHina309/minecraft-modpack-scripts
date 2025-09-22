StartupEvents.registry("minecraft:worldgen/feature", event => {
    // 定义矿物生成特性
    event.create("custom:my_ore")
        .codec(
            IntProvider.CODEC.fieldOf("size"), // 定义矿脉大小
            BlockStateProvider.CODEC.fieldOf("target_block") // 定义目标块
        )
        .place(context => {
            let pos = context.origin();
            let config = context.config();

            // 动态生成矿物
            for (let i = 0; i < config.get(0).sample(context.random()); i++) {
                let blockPos = pos.offset(
                    context.random().nextInt(5) - 2,
                    context.random().nextInt(5) - 2,
                    context.random().nextInt(5) - 2
                );
                context.level().setBlock(blockPos, config.get(1).getState(context.random(), blockPos), 3);
            }
            return true;
        });
});

