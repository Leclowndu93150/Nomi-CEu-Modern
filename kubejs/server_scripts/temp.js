ServerEvents.recipes(event => {

    // Need some kind of teleportation, this mod will do for now
    event.remove({ output: 'waystones:warp_stone' })
    event.recipes.gtceu.autoclave("warp_stone")
        .itemInputs(["minecraft:chorus_flower"])
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs('waystones:warp_stone')
        .duration(320)
        .EUt(32)

    event.remove({ output: "thermal:device_water_gen" })
    event.shaped(
            "thermal:device_water_gen", [
                'BBB',
                'BCB',
                'BBB'
            ], {
                B: "enderio:fused_quartz",
                C: "watercondenser:watercondenser"
            }
        )

	event.remove( {id:"gtceu:smelting/smelt_raw_coal_ore_to_ingot"})
	event.smelting( "2x minecraft:coal", "gtceu:raw_coal" ).id("gtceu:smelting/smelt_raw_coal_ore_to_ingot")
	event.remove( {id:"gtceu:blasting/smelt_raw_coal_ore_to_ingot"})
	event.blasting( "2x minecraft:coal", "gtceu:raw_coal" ).id("gtceu:blasting/smelt_raw_coal_ore_to_ingot")

	event.remove( {id:"gtceu:smelting/smelt_raw_redstone_ore_to_ingot"})
	event.smelting( "6x minecraft:redstone", "gtceu:raw_redstone" ).id("gtceu:smelting/smelt_raw_redstone_ore_to_ingot")
	event.remove( {id:"gtceu:blasting/smelt_raw_redstone_ore_to_ingot"})
	event.blasting( "6x minecraft:redstone", "gtceu:raw_redstone" ).id("gtceu:blasting/smelt_raw_redstone_ore_to_ingot")

	event.remove( {id:"gtceu:smelting/smelt_raw_cassiterite_ore_to_ingot"})
	event.smelting( "2x gtceu:tin_ingot", "gtceu:raw_cassiterite" ).id("gtceu:smelting/smelt_raw_cassiterite_ore_to_ingot")
	event.remove( {id:"gtceu:blasting/smelt_raw_cassiterite_ore_to_ingot"})
	event.blasting( "2x gtceu:tin_ingot", "gtceu:raw_cassiterite" ).id("gtceu:blasting/smelt_raw_cassiterite_ore_to_ingot")

	event.remove( {id:"gtceu:smelting/smelt_raw_cassiterite_sand_ore_to_ingot"})
	event.smelting( "2x gtceu:tin_ingot", "gtceu:raw_cassiterite_sand" ).id("gtceu:smelting/smelt_raw_cassiterite_sand_ore_to_ingot")
	event.remove( {id:"gtceu:blasting/smelt_raw_cassiterite_sand_ore_to_ingot"})
	event.blasting( "2x gtceu:tin_ingot", "gtceu:raw_cassiterite_sand" ).id("gtceu:blasting/smelt_raw_cassiterite_sand_ore_to_ingot")


    // temp iron chest > sophisticated barrel recipe

    var ironchest = [
        ['ironchest:copper_chest', 'sophisticatedstorage:copper_barrel'],
        ['ironchest:iron_chest', 'sophisticatedstorage:iron_barrel'],
        ['ironchest:gold_chest', 'sophisticatedstorage:gold_barrel'],
        ['ironchest:diamond_chest', 'sophisticatedstorage:diamond_barrel'],
        ['ironchest:crystal_chest', 'sophisticatedstorage:diamond_barrel'],
        ['ironchest:obsidian_chest', 'sophisticatedstorage:diamond_barrel'],
    ]
    ironchest.forEach(material => {
        event.remove({ output: material[0] })
        event.shapeless(material[1], [material[0]])
    })


    //temp because rubber wood drawers someday?
    event.shaped(
        "storagedrawers:oak_full_drawers_1", [
            'PPP',
            ' C ',
            'PPP'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests"
        }
    )
    event.shaped(
        "2x storagedrawers:oak_full_drawers_2", [
            'PCP',
            'PPP',
            'PCP'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests"
        }
    )
    event.shaped(
        "4x storagedrawers:oak_full_drawers_4", [
            'CPC',
            'PPP',
            'CPC'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests"
        }
    )

   //temp blanket remove for this patch
   event.remove({ output: /nuclearcraft/ })

    // Backpack
    var backpacks = [
        ['simplybackpacks:commonbackpack', 'sophisticatedbackpacks:backpack'],
        ['simplybackpacks:uncommonbackpack','sophisticatedbackpacks:iron_backpack'],
        ['simplybackpacks:rarebackpack','sophisticatedbackpacks:gold_backpack'],
        ['simplybackpacks:epicbackpack','sophisticatedbackpacks:diamond_backpack'],
        ['simplybackpacks:ultimatebackpack','sophisticatedbackpacks:netherite_backpack'],
    ]
    backpacks.forEach(material => {
        event.remove({ output: material[0] })
        event.shapeless(material[1], [material[0]])
    })

})

