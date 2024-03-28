ItemEvents.tooltip(tooltip => {
    //Microminers
    tooltip.add('kubejs:microminer_t1', '§oHarvests Titanium and other light metals from asteroids in the microverse.')
    tooltip.add('kubejs:microminer_t2', '§oHarvests Tungsten and other heavy metals from asteroids in the microverse.')
    tooltip.add('kubejs:microminer_t3', '§oHarvests ultra hot metals and gems from Nether microverses.')
    tooltip.add('kubejs:microminer_t4', '§oHarvests ultra cold materials from the deepest parts of empty space.')
    tooltip.add('kubejs:microminer_t5', '§oHarvests strange materials from End microverses.')
    tooltip.add('kubejs:microminer_t6', '§oHarvests extremely rare materials from every concievable reality.')
    tooltip.add('kubejs:microminer_t7', '§oHunts Wyrms and End Dragons from the microverse')
    tooltip.add('kubejs:microminer_t7', '§oand returns with parts from their carapaces.')
    tooltip.add('kubejs:microminer_t8', '§oHunts inconcievable monstrosities from beyond the End')
    tooltip.add('kubejs:microminer_t8', '§oand returns with bizzare trinkets.')
    tooltip.add('kubejs:microminer_t9', '§oCollapses microverse stars and harvests their delicious neutronium cores.')
    tooltip.add('kubejs:microminer_t10', '§oCollapses an entire microverse and harvests it whole.')
    tooltip.add('kubejs:microminer_t10', '§oTry to aim for uninhabited ones.')

    //Microminer Components
    tooltip.add('universal_navigator', '§9See You Later, navigator!')


    //Endgame Items
    tooltip.add('ultimate_gem', '§eRecipe is shapeless.')

    //DML Matters
    tooltip.add('hostilenetworks:overworld_prediction', '§7Experience per item: 10')
    tooltip.add('hostilenetworks:nether_prediction', '§7Experience per item: 20')
    tooltip.add('hostilenetworks:end_prediction', '§7Experience per item: 25')

    //Debug Laser
    tooltip.add('kubejs:debug_laser', '§fYou need to be a §4D§ee§9v §fto use this')

    //Conduits
    tooltip.add('enderio:conductive_conduit', '§7Max Output 512 RF/t')
    tooltip.add('enderio:energetic_conduit', '§7Max Output 2,048 RF/t')
    tooltip.add('enderio:vibrant_conduit', '§7Max Output 8,192 RF/t')
    tooltip.add('enderio:endsteel_conduit', '§7Max Output 32,768 RF/t')
    tooltip.add('enderio:lumium_conduit', '§7Max Output 131,072 RF/t')
    tooltip.add('enderio:signalum_conduit', '§7Max Output 524,288 RF/t')
    tooltip.add('enderio:enderium_conduit', '§7Max Output 2,097,152 RF/t')
    tooltip.add('enderio:draconium_conduit', '§7Max Output 8,388,608 RF/t')
    tooltip.add('enderio:draconic_superconductor_conduit', '§7Max Output 134,217,728 RF/t')

    tooltip.add("thermal:device_rock_gen", "§7Must be placed next to lava and water to produce cobblestone.")
    tooltip.add("thermal:device_water_gen", "§7Must be placed next to two water source blocks to work.")

    tooltip.add(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_4', 'thermal:upgrade_augment_3', 'thermal:dynamo_output_augment'], '§aDo not take the items from EMI! Use the crafting recipe to get the correct NBT data.')

    /*
    tooltip.addAdvanced('kubejs:dev_tool', (item, advanced, text) => {
		text[0] = rainbowify('The Holy Pickaxe', Math.round(Client.lastNanoTime/100000000))
        text[1] = "§9Leclo§fwndu§c93150§f's §6Tool";
    })
    */

    // Backpacks, this extra bit of code will made it so that this line will be the first line displayed after the item name (if curios didn't exist lol)
    tooltip.addAdvanced(/simplybackpacks:/, (item, advanced, text) => {
        text.add(1, [Text.red('Deprecated, switch out for a sophisticated backpack.').bold()])
    })

    tooltip.addAdvanced(['gtceu:creative_energy', 'gtceu:creative_tank', 'gtceu:creative_chest'], (item, adv, text) => {
        text.remove(3);
        text.remove(2);
        text.remove(1);
        text.add(Text.join(Text.translatable('gtceu.creative_tooltip.1'), rainbowify(Text.translatable('gtceu.creative_tooltip.2').getString(), Math.round(Client.lastNanoTime / 100000000)), Text.translatable('gtceu.creative_tooltip.3')))
    });
})