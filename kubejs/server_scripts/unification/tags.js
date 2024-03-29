ServerEvents.tags('item', event => {
    event.add('ae2:all_fluix', 'gtceu:fluix_gem')
    event.add('forge:singularities/ultimate', 'kubejs:mote_of_omnium')
    event.add('forge:singularities/ultimate', 'extendedcrafting:ultimate_singularity')
    event.add('forge:ingots/electrum_flux', 'redstone_arsenal:flux_ingot')
    event.add('forge:dusts/electrum_flux', 'redstone_arsenal:flux_dust')
    event.add('forge:nuggets/electrum_flux', 'redstone_arsenal:flux_nugget')
    event.add('forge:gears/electrum_flux', 'redstone_arsenal:flux_gear')
    event.removeAllTagsFrom('ae2:certus_quartz_crystal')
    event.remove('forge:ingots/aluminum', 'nuclearcraft:aluminum_ingot')
    event.add('forge:ingots/aluminium', 'nuclearcraft:aluminum_ingot')

	// can't replace tags in recipes so we just add the tag to the item instead
	event.add('forge:ingots/redstone_alloy', 'gtceu:red_alloy_ingot')
	event.add('forge:ingots/copper_alloy', 'gtceu:electrical_steel_ingot')

	event.remove('forge:gears/wood', 'enderio:wood_gear')
	event.remove('forge:gears/stone', 'enderio:stone_gear')
	event.remove('forge:gears/iron', 'enderio:iron_gear')
	event.remove('forge:gears/dark_steel', 'enderio:dark_bimetal_gear')

	// endgame mats
	// neutronium
    event.add('forge:ingots/neutronium', 'avaritia:neutronium_ingot')
    event.add('forge:nuggets/neutronium', 'avaritia:neutronium_nugget')
    event.add('forge:tiny_dusts/neutronium', 'avaritia:pile_of_neutrons')
    event.add('forge:storage_blocks/neutronium', 'avaritia:neutronium_block')
	// crystal matrix
	event.add('forge:ingots/crystal_matrix', 'avaritia:crystal_matrix_ingot')
	event.add('forge:storage_blocks/crystal_matrix', 'avaritia:crystal_matrix_block')
	event.add('forge:plates/crystal_matrix', 'kubejs:crystal_matrix_plate')
	// omnium
    event.add('forge:ingots/the_ultimate', 'kubejs:omnium_ingot') // this sucks!
    event.add('forge:ingots/omnium', 'kubejs:omnium_ingot')
	// HACK: remove extreme crafting tags
	event.add('forge:nuggets/omnium', 'extendedcrafting:the_ultimate_nugget')
	event.add('forge:storage_blocks/omnium', 'extendedcrafting:the_ultimate_block')
	// infinity
	event.add('forge:ingots/infinity', 'avaritia:infinity_ingot')
	event.add('forge:storage_blocks/infinity', 'avaritia:infinity_block')
	event.add('forge:plates/infinity', 'kubejs:infinity_plate')

	// generic unification
    event.add('forge:storage_blocks', ['avaritia:neutronium_block', 'avaritia:crystal_matrix_block', 'avaritia:infinity_block'])
    event.add('forge:nuggets', ['extendedcrafting:the_ultimate_nugget', 'avaritia:neutronium_nugget'])
	event.add('forge:plates', ['kubejs:crystal_matrix_plate', 'kubejs:infinity_plate'])
})

ServerEvents.tags('block', event => {
    // snad
    const compacted_sand = ['kubejs:compressed_sand', 'kubejs:double_compressed_sand', 'kubejs:compressed_red_sand', 'kubejs:double_compressed_red_sand'];
    event.add('minecraft:dead_bush_may_place_on', compacted_sand);
    event.add('minecraft:bamboo_plantable_on', compacted_sand);
    event.add('minecraft:azalea_grows_on', compacted_sand);
    event.add('framedblocks:camo_sustain_plant', compacted_sand);
})

ServerEvents.tags('fluid', event => {

})

let manualUnification = ['hammerlib:gears/netherite', 'hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'draconicevolution:draconium_ingot', 'draconicevolution:draconium_nugget', 'draconicevolution:draconium_dust', 'draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_nugget', 'draconicevolution:awakened_draconium_dust', 'hammerlib:gears/stone', 'hammerlib:gears/wooden', 'gtceu:neutronium_ingot', 'gtceu:neutronium_nugget']
let UnificationExcludedItems = ['nuclearcraft:hard_carbon_ingot', 'nuclearcraft:ferroboron_ingot', 'nuclearcraft:tough_alloy_ingot', 'enderio:wood_gear', 'enderio:stone_gear', 'enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear', 'enderio:dark_bimetal_gear']
let unificationPattern = new RegExp(`^(?!(${UnificationExcludedItems.join('|')})).*(nuclearcraft|thermal|enderio):(.*(_block|_plate|_ingot|_nugget|_gear|_dust))`, 'i')

//EMI Hacky Fix   MODS TO FIX: DRACONIC EVOLUTION, THERMAL SERIES, GTCEU NEUTRONIUM, NUCLEARCRAFT
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(unificationPattern)
    event.removeAllTagsFrom(manualUnification)
})

ServerEvents.recipes(event => {
    event.remove({ output: unificationPattern })
    event.remove({ output: manualUnification })
})










// Hacky Drac Reactor stuff
// This will be removed when it becomes a proper post tank multi in favor of just including the injectors in it's recipe or something
ServerEvents.tags('item', event => {
    event.add('nomi:basic_injector_tier', 'draconicevolution:basic_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:basic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:wyvern_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:awakened_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('nomi:awakened_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('nomi:chaotic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
})