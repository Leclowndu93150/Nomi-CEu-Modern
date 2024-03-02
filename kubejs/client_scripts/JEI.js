// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {
    //Hides useless items
    event.hide(['ae2:vibration_chamber', 'hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper'])

    //i really hate these kind of mods
    event.hide('ironfurnaces:million_furnace')
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_spooky', 'ironfurnaces:item_xmas', 'ironfurnaces:item_copy', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //dml
    event.hide(['hostilenetworks:twilight_prediction'])

    //Extended Crafting
    event.hide([Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')])
    event.hide(['extendedcrafting:enhanced_ender_catalyst', 'extendedcrafting:enhanced_redstone_catalyst', 'extendedcrafting:enhanced_redstone_component', 'extendedcrafting:enhanced_ender_component', 'extendedcrafting:ender_component', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot_block', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_ingot', 'extendedcrafting:enhanced_ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:ender_star_block', 'extendedcrafting:ender_star', 'extendedcrafting:flux_star_block', 'extendedcrafting:flux_star', 'extendedcrafting:frame', 'extendedcrafting:basic_table', 'extendedcrafting:basic_auto_table', 'extendedcrafting:compressor', 'extendedcrafting:ender_alternator', 'extendedcrafting:ender_crafter', 'extendedcrafting:auto_ender_crafter', 'extendedcrafting:flux_alternator', 'extendedcrafting:flux_crafter', 'extendedcrafting:auto_flux_crafter', 'extendedcrafting:black_iron_slate', 'extendedcrafting:ender_catalyst'])
    event.hide(['extendedcrafting:black_iron_nugget', 'extendedcrafting:redstone_nugget', 'extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:ender_nugget', 'extendedcrafting:enhanced_ender_nugget'])
        //Avaritia
    event.hide(['avaritia:emerald_singularity', 'avaritia:netherite_singularity', 'avaritia:diamond_singularity', 'avaritia:quartz_singularity', 'avaritia:copper_singularity', 'avaritia:redstone_singularity', 'avaritia:lapis_singularity', 'avaritia:gold_singularity', 'avaritia:iron_singularity', 'avaritia:amethyst_singularity'])

    //Thermal
    event.hide(['thermal:dynamo_gourmand', 'thermal:dynamo_disenchantment', 'thermal:dynamo_lapidary', 'systeams:numismatic_boiler', 'systeams:magmatic_boiler', 'systeams:compression_boiler', 'systeams:gourmand_boiler', 'systeams:lapidary_boiler', 'systeams:disenchantment_boiler'])

    //EnderIO
    event.hide(['enderio:energy_conduit', 'enderio:plant_matter_green', 'enderio:plant_matter_brown', 'enderio:clayed_glowstone', 'enderio:flour', 'enderio:organic_green_dye', 'enderio:organic_brown_dye', 'enderio:industrial_insulation_block'])

    //EnderIO (grinding balls) haha grind my balls -clown
    event.hide(['enderio:soularium_grinding_ball', 'enderio:conductive_alloy_grinding_ball', 'enderio:pulsating_alloy_grinding_ball', 'enderio:redstone_alloy_grinding_ball', 'enderio:energetic_alloy_grinding_ball', 'enderio:vibrant_alloy_grinding_ball', 'enderio:copper_alloy_grinding_ball', 'enderio:dark_steel_grinding_ball', 'enderio:end_steel_grinding_ball'])

    //GT Steam Age
    var gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']

    gtMachines.forEach(machine => {
        event.hide(['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine])
    })

    //TelePastries
    event.hide(['telepastries:lost_city_cake', 'telepastries:custom_cake2', 'telepastries:custom_cake3', 'telepastries:twilight_cake'])

    //Jetpacks
    event.hide([Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(), Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:Fluxed"}').strongNBT(), 'ironjetpacks:capacitor', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])
    event.hide(['ironjetpacks:basic_coil', 'ironjetpacks:advanced_coil', 'ironjetpacks:elite_coil', 'ironjetpacks:ultimate_coil'])

    event.hide([/antiblocksrechiseled:.*?pressure_plate\S*/g, /antiblocksrechiseled:.*?button\S*/g, /antiblocksrechiseled:.*?stair\S*/g, /antiblocksrechiseled:.*?slab\S*/g, /antiblocksrechiseled:.*?border\b/g, /antiblocksrechiseled:.*?wool\S*/g])

    event.hide('chiselandbits:block_bit')
    event.hide(/ae2:facade/)

    //AA
    event.hide(['gtceu:flawless_palis_empowered_gem', 'gtceu:flawless_diamatine_empowered_gem', 'gtceu:flawless_emeradic_empowered_gem', 'gtceu:restonia_empowered_rod', 'gtceu:enori_empowered_rod', 'gtceu:void_empowered_rod', 'gtceu:palis_empowered_rod', 'gtceu:diamatine_empowered_rod', 'gtceu:emeradic_empowered_rod', 'gtceu:restonia_empowered_perfect', 'gtceu:enori_empowered_perfect', 'gtceu:void_empowered_perfect', 'gtceu:palis_empowered_perfect', 'gtceu:diamatine_empowered_perfect', 'gtceu:emeradic_empowered_perfect', 'gtceu:exquisite_restonia_empowered_gem', 'gtceu:exquisite_enori_empowered_gem', 'gtceu:exquisite_void_empowered_gem', 'gtceu:exquisite_palis_empowered_gem', 'gtceu:exquisite_diamatine_empowered_gem', 'gtceu:exquisite_emeradic_empowered_gem', 'gtceu:restonia_empowered_dust', 'gtceu:enori_empowered_dust', 'gtceu:void_empowered_dust', 'gtceu:palis_empowered_dust', 'gtceu:diamatine_empowered_dust', 'gtceu:emeradic_empowered_dust', 'gtceu:tiny_restonia_empowered_dust', 'gtceu:tiny_enori_empowered_dust', 'gtceu:tiny_void_empowered_dust', 'gtceu:tiny_palis_empowered_dust', 'gtceu:tiny_diamatine_empowered_dust', 'gtceu:tiny_emeradic_empowered_dust', 'gtceu:flawless_restonia_empowered_gem', 'gtceu:flawless_enori_empowered_gem', 'gtceu:flawless_void_empowered_gem'])
    event.hide(['gtceu:small_emeradic_empowered_dust', 'gtceu:small_diamatine_empowered_dust', 'gtceu:small_palis_empowered_dust', 'gtceu:small_void_empowered_dust', 'gtceu:small_enori_empowered_dust', 'gtceu:small_restonia_empowered_dust'])
    event.hide(['gtceu:diamatine_perfect', 'gtceu:exquisite_diamatine_gem', 'gtceu:diamatine_dust', 'gtceu:tiny_diamatine_dust', 'gtceu:flawless_diamatine_gem', 'gtceu:diamatine_rod', 'gtceu:diamatine_plate', 'gtceu:small_diamatine_dust', 'gtceu:void_perfect', 'gtceu:exquisite_void_gem', 'gtceu:void_dust', 'gtceu:tiny_void_dust', 'gtceu:flawless_void_gem', 'gtceu:void_rod', 'gtceu:void_plate', 'gtceu:small_void_dust', 'gtceu:emeradic_perfect', 'gtceu:exquisite_emeradic_gem', 'gtceu:emeradic_dust', 'gtceu:tiny_emeradic_dust', 'gtceu:flawless_emeradic_gem', 'gtceu:emeradic_rod', 'gtceu:emeradic_plate', 'gtceu:small_emeradic_dust', 'gtceu:enori_perfect', 'gtceu:exquisite_enori_gem', 'gtceu:enori_dust', 'gtceu:tiny_enori_dust', 'gtceu:flawless_enori_gem', 'gtceu:enori_rod', 'gtceu:enori_plate', 'gtceu:small_enori_dust'])
    event.hide(['gtceu:restonia_perfect', 'gtceu:exquisite_restonia_gem', 'gtceu:restonia_dust', 'gtceu:tiny_restonia_dust', 'gtceu:flawless_restonia_gem', 'gtceu:restonia_rod', 'gtceu:restonia_plate', 'gtceu:small_restonia_dust', 'gtceu:palis_perfect', 'gtceu:exquisite_palis_gem', 'gtceu:palis_dust', 'gtceu:tiny_palis_dust', 'gtceu:flawless_palis_gem', 'gtceu:palis_rod', 'gtceu:palis_plate', 'gtceu:small_palis_dust'])


    //NuclearCraft

    event.hide(['nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'])
    event.hide(['nuclearcraft:nitrogen_collector', 'nuclearcraft:compact_nitrogen_collector', 'nuclearcraft:lava_collector', 'nuclearcraft:dense_nitrogen_collector', 'nuclearcraft:compact_helium_collector', 'nuclearcraft:helium_collector', 'nuclearcraft:dense_helium_collector'])
    event.hide(['nuclearcraft:magnesium_deepslate_ore', 'nuclearcraft:thorium_deepslate_ore', 'nuclearcraft:uranium_deepslate_ore', 'nuclearcraft:magnesium_ore', 'nuclearcraft:boron_deepslate_ore', 'nuclearcraft:cobalt_ore', 'nuclearcraft:platinum_deepslate_ore', 'nuclearcraft:silver_deepslate_ore', 'nuclearcraft:lead_ore', 'nuclearcraft:lithium_ore', 'nuclearcraft:thorium_ore', 'nuclearcraft:tin_ore', 'nuclearcraft:cobalt_deepslate_ore', 'nuclearcraft:silver_ore', 'nuclearcraft:uranium_ore', 'nuclearcraft:zinc_ore', 'nuclearcraft:boron_ore', 'nuclearcraft:lithium_deepslate_ore'])
    event.hide(['nuclearcraft:foursmore', 'nuclearcraft:evenmoresmore', 'nuclearcraft:moresmore', 'nuclearcraft:smore'])


		//thermal items that already exist in Gregtech
		event.hide(['thermal:raw_tin', 'thermal:raw_lead', 'thermal:raw_silver', 'thermal:raw_nickel'])
		event.hide(['thermal:ruby', 'thermal:sapphire', 'thermal:apatite', 'thermal:cinnabar'])
		event.hide(['thermal:tin_ingot', 'thermal:lead_ingot', 'thermal:silver_ingot', 'thermal:nickel_ingot', 'thermal:bronze_ingot', 'thermal:electrum_ingot', 'thermal:invar_ingot', 'thermal:signalum_ingot', 'thermal:lumium_ingot', 'thermal:enderium_ingot'])
		event.hide(['thermal:tin_nugget', 'thermal:lead_nugget', 'thermal:silver_nugget', 'thermal:nickel_nugget', 'thermal:bronze_nugget', 'thermal:electrum_nugget', 'thermal:invar_nugget', 'thermal:copper_nugget', 'thermal:signalum_nugget', 'thermal:lumium_nugget', 'thermal:enderium_nugget'])
		event.hide(['thermal:tin_plate', 'thermal:lead_plate', 'thermal:silver_plate', 'thermal:nickel_plate', 'thermal:bronze_plate', 'thermal:electrum_plate', 'thermal:invar_plate', 'thermal:iron_plate', 'thermal:gold_plate', 'thermal:copper_plate', 'thermal:signalum_plate', 'thermal:lumium_plate', 'thermal:enderium_plate'])
		event.hide(['thermal:bronze_gear', 'thermal:electrum_gear', 'thermal:invar_gear', 'thermal:iron_gear', 'thermal:diamond_gear', 'thermal:signalum_gear', 'thermal:lumium_gear', 'thermal:enderium_gear'])
		event.hide(['thermal:tin_dust', 'thermal:lead_dust', 'thermal:silver_dust', 'thermal:nickel_dust', 'thermal:bronze_dust', 'thermal:electrum_dust', 'thermal:invar_dust', 'thermal:signalum_dust', 'thermal:lumium_dust', 'thermal:enderium_dust'])
		event.hide(['thermal:ruby_dust', 'thermal:sapphire_dust', 'thermal:apatite_dust', 'thermal:cinnabar_dust', 'thermal:sulfur_dust', 'thermal:iron_dust', 'thermal:gold_dust', 'thermal:copper_dust', 'thermal:lapis_dust', 'thermal:diamond_dust', 'thermal:emerald_dust'])

		event.hide([/thermal:.*_ore/])
		event.hide(['thermal:raw_tin_block', 'thermal:raw_lead_block', 'thermal:raw_silver_block', 'thermal:raw_nickel_block'])
		event.hide(['thermal:tin_block', 'thermal:lead_block', 'thermal:silver_block', 'thermal:nickel_block', 'thermal:bronze_block', 'thermal:electrum_block', 'thermal:invar_block', 'thermal:signalum_block', 'thermal:lumium_block', 'thermal:enderium_block'])
		event.hide(['thermal:apatite_block', 'thermal:cinnabar_block', 'thermal:ruby_block', 'thermal:sapphire_block', 'thermal:charcoal_block'])
})

JEIEvents.removeCategories(event => {
    event.remove(['thermal:gourmand_fuel', 'thermal:disenchantement_fuel', 'thermal:lapidary_fuel'])
    event.remove(['enderio:alloy_smelting', 'thermal:furnace'])
    event.remove(['nuclearcraft:supercooler', 'nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'])
})

/*JEIEvents.groupEntries(event => {

    const useNbt = ['chiselsandbits:block_bit']

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:jei_groups/${namespace}/${path}`, item.name, item)
    })


})*/


JEIEvents.addItems(event => {
    event.add('ae2:facade')
})