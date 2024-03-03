ServerEvents.recipes(event => {
    // Ender Pearls
    event.recipes.gtceu.alloy_smelter("pulsating_ender_pearl")
        .itemInputs("minecraft:diamond", "kubejs:pulsating_dust")
        .itemOutputs("minecraft:ender_pearl")
        .duration(300)
        .EUt(16)

    // May as well remove ender dust usage while we're at it
    event.remove({ input: "miniutilities:ender_dust" })

    var plantMaterial = ["#minecraft:leaves", "#minecraft:saplings", "minecraft:vine"]
    plantMaterial.forEach(ballIngredient => {
        event.shaped(
            "gtceu:plant_ball", [
                'AAA',
                'A A',
                'AAA'
            ], {
                A: ballIngredient
            }
        )
    });

    // Hand-crushing
    event.shapeless("minecraft:gravel", ["minecraft:cobblestone", "#forge:tools/mortars"])
    event.shapeless("minecraft:sand", ["minecraft:gravel", "#forge:tools/hammers"])
    event.shapeless("kubejs:dust", ["minecraft:sand", "#forge:tools/hammers"])

    // EIO Solar
    event.remove({ output: "enderio:photovoltaic_plate" })
    event.recipes.gtceu.alloy_smelter("photovoltaic_plate")
        .itemInputs("2x enderio:photovoltaic_composite", "gtceu:electrical_steel_plate")
        .itemOutputs("enderio:photovoltaic_plate")
        .duration(180)
        .EUt(16)

    // Solar composite
    event.remove({ output: "enderio:photovoltaic_composite" })
    event.shapeless("3x enderio:photovoltaic_composite", ["gtceu:lapis_dust", "gtceu:coal_dust", "gtceu:silicon_dust"])


    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    event.recipes.gtceu.chemical_reactor('phenolic_board')
        .itemInputs('gtceu:resin_circuit_board')
        .inputFluids('gtceu:phenol 100')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(100)
        .EUt(8)


    //phenol

    event.recipes.gtceu.pyrolyse_oven('phenol_coal')
        .itemInputs('16x minecraft:coal')
        .inputFluids('systeams:steam 4000')
        .itemOutputs('20x gtceu:coke_gem')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    event.recipes.gtceu.pyrolyse_oven('phenol_coal_dust')
        .itemInputs('16x gtceu:coal_dust')
        .inputFluids('systeams:steam 4000')
        .itemOutputs('20x gtceu:coke_dust')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)
})