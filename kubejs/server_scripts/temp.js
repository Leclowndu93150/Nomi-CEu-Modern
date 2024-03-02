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
        })

//Temporary until GTCEUModern devs fix their mod
//We can't use rei hide since it'll prevent the entire tag from showing up in certain machine recipes
ServerEvents.tags('item', event => {
	//thermal items that already exist in Gregtech
	event.removeAllTagsFrom(['thermal:raw_tin', 'thermal:raw_lead', 'thermal:raw_silver', 'thermal:raw_nickel'])
	event.removeAllTagsFrom(['thermal:ruby', 'thermal:sapphire', 'thermal:apatite', 'thermal:cinnabar'])
	event.removeAllTagsFrom(['thermal:tin_ingot', 'thermal:lead_ingot', 'thermal:silver_ingot', 'thermal:nickel_ingot', 'thermal:bronze_ingot', 'thermal:electrum_ingot', 'thermal:invar_ingot', 'thermal:signalum_ingot', 'thermal:lumium_ingot', 'thermal:enderium_ingot'])
	event.removeAllTagsFrom(['thermal:tin_nugget', 'thermal:lead_nugget', 'thermal:silver_nugget', 'thermal:nickel_nugget', 'thermal:bronze_nugget', 'thermal:electrum_nugget', 'thermal:invar_nugget', 'thermal:copper_nugget', 'thermal:signalum_nugget', 'thermal:lumium_nugget', 'thermal:enderium_nugget'])
	event.removeAllTagsFrom(['thermal:tin_plate', 'thermal:lead_plate', 'thermal:silver_plate', 'thermal:nickel_plate', 'thermal:bronze_plate', 'thermal:electrum_plate', 'thermal:invar_plate', 'thermal:iron_plate', 'thermal:gold_plate', 'thermal:copper_plate', 'thermal:signalum_plate', 'thermal:lumium_plate', 'thermal:enderium_plate'])
	event.removeAllTagsFrom(['thermal:bronze_gear', 'thermal:electrum_gear', 'thermal:invar_gear', 'thermal:iron_gear', 'thermal:diamond_gear', 'thermal:signalum_gear', 'thermal:lumium_gear', 'thermal:enderium_gear'])
	event.removeAllTagsFrom(['thermal:tin_dust', 'thermal:lead_dust', 'thermal:silver_dust', 'thermal:nickel_dust', 'thermal:bronze_dust', 'thermal:electrum_dust', 'thermal:invar_dust', 'thermal:signalum_dust', 'thermal:lumium_dust', 'thermal:enderium_dust'])
	event.removeAllTagsFrom(['thermal:ruby_dust', 'thermal:sapphire_dust', 'thermal:apatite_dust', 'thermal:cinnabar_dust', 'thermal:sulfur_dust', 'thermal:iron_dust', 'thermal:gold_dust', 'thermal:copper_dust', 'thermal:lapis_dust', 'thermal:diamond_dust', 'thermal:emerald_dust'])

	event.removeAllTagsFrom([/thermal:.*_ore/])
	event.removeAllTagsFrom(['thermal:raw_tin_block', 'thermal:raw_lead_block', 'thermal:raw_silver_block', 'thermal:raw_nickel_block'])
	event.removeAllTagsFrom(['thermal:tin_block', 'thermal:lead_block', 'thermal:silver_block', 'thermal:nickel_block', 'thermal:bronze_block', 'thermal:electrum_block', 'thermal:invar_block', 'thermal:signalum_block', 'thermal:lumium_block', 'thermal:enderium_block'])
	event.removeAllTagsFrom(['thermal:apatite_block', 'thermal:cinnabar_block', 'thermal:ruby_block', 'thermal:sapphire_block', 'thermal:charcoal_block'])
})