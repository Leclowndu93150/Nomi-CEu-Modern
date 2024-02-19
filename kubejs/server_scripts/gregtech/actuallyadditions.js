let reconstructedItems = [
    ['minecraft:redstone', 'gtceu:restonia_gem', 'restonia'],
    ['minecraft:iron_ingot', 'gtceu:enori_gem', 'enori'],
    ['minecraft:coal', 'gtceu:void_gem', 'void'],
    ['minecraft:lapis_lazuli', 'gtceu:palis_gem', 'palis'],
    ['minecraft:diamond', 'gtceu:diamatine_gem', 'diamatine'],
    ['minecraft:emerald', 'gtceu:emeradic_gem', 'emeradic']
]


ServerEvents.recipes(event => {
    reconstructedItems.forEach(itemPair => {
        event.recipes.gtceu.atomic_reconstruction(itemPair[2])
            .itemInputs(itemPair[0])
            .itemOutputs(itemPair[1])
            .duration(20)
            .EUt(128)
    })

            event.recipes.gtceu.empowerment("restonia")
            .itemInputs("gtceu:restonia_block", "gtceu:red_alloy_ingot", "gtceu:almandine_gem", Item.of('gtceu:glass_vial', '{Fluid:{Amount:1000,FluidName:"gtceu:sulfuric_acid"}}'), "extendedcrafting:the_ultimate_component")
            .itemOutputs("gtceu:restonia_empowered_block")
            .duration(200)
            .EUt(128)

            event.recipes.gtceu.empowerment("diamatine")
            .itemInputs("gtceu:diamatine_block", "extendedcrafting:ender_star", "extendedcrafting:crystaltine_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:nitrogen_dioxide"}}'), "extendedcrafting:crystaltine_component")
            .itemOutputs("gtceu:diamatine_empowered_block")
            .duration(200)
            .EUt(128)

            event.recipes.gtceu.empowerment("emeradic")
            .itemInputs("gtceu:emeradic_block", "kubejs:stabilized_uranium", "gtceu:vibrant_alloy_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:argon"}}').strongNBT(), "extendedcrafting:ultimate_component")
            .itemOutputs("gtceu:emeradic_empowered_block")
            .duration(200)
            .EUt(128)

            event.recipes.gtceu.empowerment("enori")
            .itemInputs("gtceu:enori_block", "gtceu:apatite_gem", "gtceu:end_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:helium"}}').strongNBT(), "extendedcrafting:basic_component")
            .itemOutputs("gtceu:enori_empowered_block")
            .duration(200)
            .EUt(128)     
            
            event.recipes.gtceu.empowerment("palis")
            .itemInputs("gtceu:palis_block", "gtceu:sapphire_gem", "minecraft:bedrock", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), "extendedcrafting:elite_component")    
            .itemOutputs("gtceu:palis_empowered_block")
            .duration(200)
            .EUt(128)

            event.recipes.gtceu.empowerment("void")
            .itemInputs("gtceu:void_block", "gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:oil"}}').strongNBT(), "extendedcrafting:advanced_component")
            .itemOutputs("gtceu:void_empowered_block")
            .duration(200)
            .EUt(128)

            event.shaped(
                'kubejs:empowerer_casing', [
                    'AHA',
                    'AEA',
                    'AWA'
                ], {
                    A: 'gtceu:aluminium_plate',
                    E: 'gtceu:enori_block',
                    H: '#forge:tools/hammers',
                    W: '#forge:tools/wrenches',
                })

                event.shaped(
                    'gtceu:empowerment', [
                        'TVT',
                        'VEV',
                        'TVT'
                    ], {
                        T: 'gtceu:tungsten_carbide_plate',
                        V: 'gtceu:vibrant_alloy_plate',
                        E: 'kubejs:empowerer_casing'
                    })
                
})