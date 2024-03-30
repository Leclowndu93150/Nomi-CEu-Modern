//alloys go brrr - ima go insane :)

ServerEvents.recipes(event => {

    function getModName(str) {
        let a = str.split(":")[0];
        a = a.split(" ");
        if (a.length == 2) {
            return a[1];
        }
        if (a.length == 1) {
            return a[0];
        }
    }

    /**
     * @param {string} name name: The generated name will be {name}_{i}, where i is the iteration number (max 3)
     * @param {int} voltage 
     * @param {float} duration Duration: Input the seconds for the recipe
     * @param {string} ing1 ing1: First recipe Ingredient
     * @param {string} ing2 ing2: Second recipe Ingredient
     * @param {string} out out: The recipe output will remain constant
     */

    function alloy_smelter(name, voltage, duration, ing1, ing2, out) {
        let i = 0;
        let ing_list = [];
        let ing_list2 = [];
        if ((getModName(ing1) == "gtceu") && (ing1.split(":")[1].split("_")[ing1.split(":")[1].split("_").length - 1] == "ingot")) {
            ing_list = [ing1];
            let a = ing1.split(":")[0];
            let b = ing1.split(":")[1];
            b = b.split("_");
            b[b.length - 1] = "dust";
            b = b.join("_");
            ing_list.push((a + ":" + b));
        } else { ing_list = [ing1] }

        if ((getModName(ing2) == "gtceu") && (ing2.split(":")[1].split("_")[ing2.split(":")[1].split("_").length - 1] == "ingot")) {
            ing_list2 = [ing2];
            let a = ing2.split(":")[0];
            let b = ing2.split(":")[1];
            b = b.split("_");
            b[b.length - 1] = "dust";
            b = b.join("_");
            ing_list2.push((a + ":" + b));
        } else { ing_list2 = [ing2] }

        ing_list.forEach(ing1 => {
            ing_list2.forEach(ing2 => {
                i++;
                event.recipes.gtceu.alloy_smelter(name + "_" + i)
                    .itemInputs(ing1, ing2)
                    .itemOutputs(out)
                    .duration(duration * 20)
                    .EUt(voltage)
            })
        })
    }

    function alloy_smelter_simple(name, input, input2, voltage, duration, out) {
        event.recipes.gtceu.alloy_smelter(name)
            .itemInputs(input, input2)
            .itemOutputs(out)
            .duration(duration * 20)
            .EUt(voltage)
    }

    alloy_smelter("dark_steel", 16, 12, "gtceu:steel_ingot", "minecraft:obsidian", "gtceu:dark_steel_ingot");
    alloy_smelter("dark_steel_obs_dust", 16, 12, "gtceu:steel_ingot", "gtceu:obsidian_dust", "gtceu:dark_steel_ingot");
    alloy_smelter("conductive_iron", 16, 7.5, "minecraft:iron_ingot", "minecraft:redstone", "gtceu:conductive_alloy_ingot");
    alloy_smelter("conductive_iron_iron_dust", 16, 7.5, "gtceu:iron_dust", "minecraft:redstone", "gtceu:conductive_alloy_ingot");
    alloy_smelter("pulsating_iron", 16, 7.5, "minecraft:iron_ingot", "kubejs:pulsating_dust", "gtceu:pulsating_alloy_ingot");
    alloy_smelter("pulsating_iron_iron_dust", 16, 7.5, "gtceu:iron_dust", "kubejs:pulsating_dust", "gtceu:pulsating_alloy_ingot");
    alloy_smelter("red_alloy", 16, 2.5, "minecraft:copper_ingot", "4x minecraft:redstone_dust", "gtceu:red_alloy_ingot");
    alloy_smelter("red_alloy_annealed", 16, 2.5, "gtceu:annealed_copper_ingot", "4x minecraft:redstone", "gtceu:red_alloy_ingot");
    alloy_smelter("red_alloy_cu_dust", 16, 2.5, "gtceu:copper_dust", "4x minecraft:redstone", "gtceu:red_alloy_ingot");
    alloy_smelter("electrical_steel", 16, 6, "gtceu:steel_ingot", "gtceu:silicon_dust", "gtceu:electrical_steel_ingot");
    alloy_smelter("endsteel", 120, 15, "gtceu:dark_steel_ingot", "minecraft:end_stone", "gtceu:end_steel_ingot");
    alloy_smelter("endsteel_endstone_dust", 120, 15, "gtceu:dark_steel_ingot", "gtceu:endstone_dust", "gtceu:end_steel_ingot");
    alloy_smelter("ferroboron_alloy", 16, 15, "gtceu:steel_ingot", "gtceu:boron_dust", "2x nuclearcraft:ferroboron_ingot")
    alloy_smelter("tough_alloy", 16, 15, "nuclearcraft:ferroboron_ingot", "gtceu:lithium_dust", "2x nuclearcraft:tough_alloy_ingot");
    alloy_smelter("hard_carbon_alloy", 16, 15, "2x gtceu:steel_ingot", "minecraft:diamond", "2x nuclearcraft:hard_carbon_ingot");
    alloy_smelter("sunnarium", 400, 100, "kubejs:stabilized_plutonium", "kubejs:stabilized_curium", "gtceu:sunnarium_dust");
    alloy_smelter("fissionglass", 16, 2.5, "nuclearcraft:fission_reactor_casing", "minecraft:glass", 'nuclearcraft:fission_reactor_glass');
    //alloy_smelter("stellar_alloy", 2000, 10, "gtceu:end_steel_ingot", "8x enderio:infinity_dust", "enderio:stellar_alloy_ingot");

    event.remove({ id: "minecraft:nuclearcraft_ferroboron_plate" })
    event.remove({ id: "minecraft:nuclearcraft_ferroboron_dust" })
    event.remove({ id: "nuclearcraft:blast_ferroboron_dust" })
})


ServerEvents.recipes(event => {
    //Different Steel Recipe
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__black_steel" })
    event.remove({ id: "gtceu:mixer/black_steel" })
		event.recipes.gtceu.mixer("mixer_conductive_iron")
        .itemInputs('gtceu:iron_dust', 'minecraft:redstone')
        .itemOutputs('gtceu:conductive_alloy_dust')
        .duration(300)
        .EUt(7)
    event.recipes.gtceu.mixer("mixer_black_steel")
        .itemInputs('3x gtceu:steel_dust', '2x gtceu:black_bronze_dust', '2x gtceu:void_gem', '2x gtceu:coal_perfect')
        .itemOutputs('9x gtceu:black_steel_dust')
        .duration(200)
        .EUt(15)

    event.recipes.gtceu.mixer("vibrant_alloy_dust")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .itemOutputs('gtceu:vibrant_alloy_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("energetic_alloy_dust")
        .itemInputs('2x gtceu:gold_dust', 'minecraft:redstone', 'minecraft:glowstone_dust')
        .itemOutputs('2x gtceu:energetic_alloy_dust')
        .duration(200)
        .EUt(30)

        event.recipes.gtceu.mixer("glowstone_dust")
        .itemInputs('gtceu:tricalcium_phosphate_dust', 'gtceu:gold_dust')
        .itemOutputs('2x minecraft:glowstone_dust')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.mixer("mana_infused_dust")
        .itemInputs('kubejs:primal_mana', 'gtceu:titanium_dust')
        .itemOutputs('gtceu:mana_infused_metal_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("lumium_dust")
        .itemInputs('4x gtceu:tin_alloy_dust', '2x gtceu:sterling_silver_dust', '2x extendedcrafting:luminessence', 'kubejs:energized_clathrate')
        .itemOutputs('4x gtceu:lumium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.mixer("signalum_dust")
        .itemInputs('4x gtceu:annealed_copper_dust', '2x gtceu:ardite_dust', '2x gtceu:red_alloy_dust', 'kubejs:destabilized_clathrate')
        .itemOutputs('4x gtceu:signalum_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.mixer("rhodium_plated_palladium")
        .itemInputs('3x gtceu:palladium_dust', 'gtceu:rhodium_dust', '2x gtceu:lumium_dust')
        .itemOutputs('6x gtceu:rhodium_plated_palladium_dust')
        .duration(400)
        .EUt(7680)
        .circuit(1)

    event.recipes.gtceu.mixer("enderium_dust")
        .itemInputs('4x gtceu:lead_dust', '2x gtceu:platinum_dust', 'gtceu:blue_steel_dust', 'gtceu:osmium_dust', 'kubejs:resonant_clathrate')
        .itemOutputs('4x gtceu:enderium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 1000))
        .duration(300)
        .EUt(1920)

    event.recipes.gtceu.mixer("ardite_dust")
        .itemInputs('3x gtceu:red_steel_dust', 'minecraft:blaze_powder')
        .itemOutputs('4x gtceu:ardite_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("manyullyn_dust")
        .itemInputs('4x gtceu:ardite_dust', '4x gtceu:cobalt_dust', 'kubejs:primal_mana')
        .itemOutputs('4x gtceu:manyullyn_dust')
        .duration(400)
        .EUt(30)
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_blast_furnace("mana_infused_metal")
        .itemInputs('gtceu:mana_infused_metal_dust')
        .itemOutputs('gtceu:mana_infused_metal_ingot')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(400)
        .EUt(400)
        .blastFurnaceTemp(2141)
})

ServerEvents.recipes(event => {
	event.remove('gtceu:alloy_blast_smelter/red_alloy')
	event.recipes.gtceu.alloy_blast_smelter("red_alloy_fluid")
        .itemInputs('2x gtceu:copper_dust', '3x minecraft:redstone')
        .outputFluids(Fluid.of('gtceu:red_alloy', 288))
        .duration(75)
        .EUt(16)
        .circuit(5)
        .blastFurnaceTemp(1400)
	event.recipes.gtceu.alloy_blast_smelter("conductive_alloy_fluid")
        .itemInputs('gtceu:iron_dust', 'minecraft:redstone')
        .outputFluids(Fluid.of('gtceu:conductive_alloy', 144))
        .duration(225)
        .EUt(16)
        .circuit(2)
        .blastFurnaceTemp(1400)
    event.recipes.gtceu.alloy_blast_smelter("energetic_alloy_fluid")
        .itemInputs('2x gtceu:gold_dust', 'minecraft:redstone', 'minecraft:glowstone_dust')
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(1200)
        .EUt(120)
        .circuit(3)
        .blastFurnaceTemp(1250)

        event.recipes.gtceu.alloy_blast_smelter("energetic_alloy_fluid_gas")
        .itemInputs('2x gtceu:gold_dust', 'minecraft:redstone', 'minecraft:glowstone_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 4000))
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(600)
        .EUt(120)
        .circuit(13)
        .blastFurnaceTemp(1250)

    event.recipes.gtceu.alloy_blast_smelter("vibrant_alloy_fluid")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(900)
        .EUt(120)
        .circuit(2)
        .blastFurnaceTemp(1350)

    event.recipes.gtceu.alloy_blast_smelter("vibrant_alloy_fluid_gas")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 2000))
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(600)
        .EUt(120)
        .circuit(12)
        .blastFurnaceTemp(1350)

    event.recipes.gtceu.alloy_blast_smelter("dark_soularium_fluid")
        .itemInputs('gtceu:soularium_ingot', 'gtceu:dark_steel_ingot')
        .inputFluids(Fluid.of('gtceu:tritium', 1000))
        .outputFluids(Fluid.of('gtceu:dark_soularium', 144))
        .duration(1200)
        .EUt(32000)
        .blastFurnaceTemp(8600)
})
ServerEvents.recipes(event => {
    event.remove({ id: /thermal:[A-Za-z]+_dust_/ })
    event.remove({ id: /thermal:fire_charge/ })
})