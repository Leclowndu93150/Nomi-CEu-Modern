ServerEvents.recipes(event => {

    // Base AE2
    // ME Controller
    event.remove({ id: 'ae2:network/blocks/controller' })
    event.shaped(
        Item.of('ae2:controller'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:fluix_plate',
            C: 'ae2:energy_acceptor'
        }
    )

    // Energy Acceptor
    event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:electrical_steel_plate',
            B: 'gtceu:fluix_plate',
            C: 'gtceu:lv_machine_hull'
        }
    )

    // ME Chest
    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.shaped(
        Item.of('ae2:chest'), [
            'ABA',
            'CDE',
            'FGF'
        ], {
            A: 'ae2:quartz_glass',
            B: '#ae2:illuminated_panel',
            C: 'gtceu:certus_quartz_plate',
            D: 'gtceu:aluminium_crate',
            E: 'gtceu:fluix_plate',
            F: 'gtceu:dark_steel_block',
            G: 'gtceu:nether_quartz_plate'
        }
    )

    // ME Drive
    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.shaped(
        Item.of('ae2:drive'), [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_emitter',
            C: '#gtceu:circuits/lv',
            D: 'ae2:chest',
            E: 'gtceu:mv_sensor'
        }
    )

    // Inscriber
    event.remove({ id: 'ae2:network/blocks/inscribers'})
    event.shaped(
        Item.of('ae2:inscriber'), [
            'ABA',
            'CDA',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:mv_electric_piston',
            C: 'gtceu:fluix_gem',
            D: 'gtceu:mv_machine_hull'
        }
    )

    // Patterns
    event.remove({ id: 'ae2:network/crafting/patterns_blank' })
    event.shaped(
        Item.of('ae2:blank_pattern', 8), [
            'AAA',
            'BCB',
            'BBB'
        ], {
            A: 'gtceu:fine_silver_wire',
            B: 'gtceu:polyethylene_plate',
            C: '#gtceu:circuits/hv'
        }
    )

    // Pattern Provider
    event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
    event.shaped(
        Item.of('ae2:pattern_provider'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_robot_arm',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Molecular Assembler
    event.remove({ id: 'ae2:network/crafting/molecular_assembler' })
    event.shaped(
        Item.of('ae2:molecular_assembler'), [
            'ABA',
            'CDE',
            'ABA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'ae2:quartz_glass',
            C: 'ae2:annihilation_core',
            D: 'avaritia:compressed_crafting_table',
            E: 'ae2:formation_core'
        }
    )

    // Interface
    event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
    event.shaped(
        Item.of('ae2:interface'), [
            'ABA',
            'CDE',
            'AAA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'gtceu:mv_conveyor_module',
            C: 'ae2:annihilation_core',
            D: 'gtceu:mv_machine_hull',
            E: 'ae2:formation_core'
        }
    )

    // Quantum Ring
    event.remove({ id: 'ae2:network/blocks/quantum_ring' })
    event.shaped(
        Item.of('ae2:quantum_ring'), [
            'ABA',
            'DCD',
            'ABA'
        ], {
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:calculation_processor',
            C: 'gtceu:quantum_star',
            D: 'ae2:engineering_processor'
        }
    )

    // Quantum Link Chamber
    event.remove({ id: 'ae2:network/blocks/quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:quartz_glass',
            B: 'ae2:fluix_pearl',
            C: 'gtceu:certus_quartz_plate'
        }
    )

    // Storage Cell Removal
    event.remove({ id: 'ae2:network/cells/item_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_2_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_16_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_128_cubed' })

    event.remove({ id: 'ae2:network/cells/view_cell' })

    // Storage Housing
    event.remove({ id: 'ae2:network/cells/item_cell_housing' })
    event.shaped(
        Item.of('ae2:item_cell_housing'), [
            'ABA',
            'B B',
            'ABA'
        ], {
            A: 'gtceu:fine_red_alloy_wire',
            B: 'gtceu:electrical_steel_plate'
        }
    )

    event.remove({ id: 'ae2:network/cells/fluid_cell_housing' })
    event.shaped(
        Item.of('ae2:fluid_cell_housing'), [
            'ABA',
            'B B',
            'ABA'
        ], {
            A: 'gtceu:fine_red_alloy_wire',
            B: 'gtceu:energetic_alloy_plate'
        }
    )

    // CPUs
    event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' })
    event.shaped(
        Item.of('ae2:crafting_unit'), [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'gtceu:aluminium_plate',
            B: 'ae2:calculation_processor',
            C: 'ae2:fluix_glass_cable',
            D: 'ae2:logic_processor'
        }
    )

    // Charger
    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
    event.shaped(
        Item.of('ae2:charger'), [
            'ABA',
            'A  ',
            'ABA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:certus_quartz_plate'
        }
    )

    // Charged Certus

    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'ae2:transform/certus_quartz_crystal' })
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
                "item": "gtceu:certus_quartz_gem"
            },
        "result": {
            "item": 'gtceu:charged_certus_quartz_gem'
        }
    })


    // Matter Condenser
    event.remove({ id: 'ae2:network/blocks/io_condenser' })
    event.shaped(
        Item.of('ae2:condenser'), [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:titanium_plate',
            B: 'gtceu:quantum_star'
        }
    )

    // Storage Component 1K
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part' })
    event.shaped(
        Item.of('ae2:cell_component_1k'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'gtceu:red_alloy_plate',
            C: '#gtceu:circuits/lv'
        }
    )

    // Storage Component 4K
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_4k_part' })
    event.shaped(
        Item.of('ae2:cell_component_4k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'ae2:cell_component_1k',
            C: '#gtceu:circuits/mv',
            D: 'ae2:calculation_processor'
        }
    )

    // Storage Component 16K
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part' })
    event.shaped(
        Item.of('ae2:cell_component_16k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:glass',
            B: 'ae2:cell_component_4k',
            C: '#gtceu:circuits/hv',
            D: 'ae2:engineering_processor'
        }
    )

    // Storage Component 64K
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part' })
    event.shaped(
        Item.of('ae2:cell_component_64k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:logic_processor',
            B: 'ae2:cell_component_16k',
            C: '#gtceu:circuits/ev',
            D: 'ae2:engineering_processor'
        }
    )

    // Storage Component 256K
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_256k_part' })
    event.shaped(
        Item.of('ae2:cell_component_256k'), [
            'ADA',
            'BCB',
            'ABA'
        ], {
            A: 'ae2:logic_processor',
            B: 'ae2:cell_component_64k',
            C: '#gtceu:circuits/iv',
            D: 'ae2:engineering_processor'
        }
    )

    // Wireless Receiver
    event.remove({ id: 'ae2:network/wireless_part' })
    event.shaped(
        Item.of('ae2:wireless_receiver'), [
            ' A ',
            'BCB',
            ' B '
        ], {
            A: 'gtceu:iv_emitter',
            B: 'gtceu:titanium_plate',
            C: 'ae2:fluix_pearl'
        }
    )

    // AE2 Cards
    event.remove({ id: 'ae2:materials/basiccard' })
    event.shaped(
        'ae2:basic_card', [
            'AB ',
            'ACB',
            'AB '
        ], {
            A: 'gtceu:fine_copper_wire',
            B: 'gtceu:iron_plate',
            C: 'ae2:calculation_processor'
        }
    )
		event.remove({ id: 'ae2:materials/advancedcard' })
    event.shaped(
        'ae2:advanced_card', [
            'AB ',
            'ACB',
            'AB '
        ], {
            A: 'gtceu:fine_aluminium_wire',
            B: 'gtceu:electrical_steel_plate',
            C: 'ae2:calculation_processor'
        }
    )
		event.remove({ id: 'ae2:tools/network_memory_card' })
    event.shapeless('ae2:memory_card', ['#gtceu:circuits/hv', 'ae2:basic_card'])



    //Level Emitter
    event.remove({ id: 'ae2:network/parts/level_emitter' })
    event.shapeless('ae2:level_emitter', ['minecraft:redstone_torch', 'gtceu:aluminium_plate', 'ae2:calculation_processor', '#forge:rods/stainless_steel'])

		//Energy level Emitter
    event.remove({ id: 'ae2:network/parts/energy_level_emitter' })
		event.shapeless('ae2:energy_level_emitter', ['ae2:level_emitter', '#forge:gems/certus_quartz'])


    // Network Tool (default recipe is fine)


    //TODO Big I/O (MAKE IN IV ASSEMBLY LINE)

    // Processors
		// We don't have to call recipe.remove since creating a new recipe with the same id removes the old recipe
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "gtceu:certus_quartz_gem"
            },
            "top": {
                "item": "ae2:calculation_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_calculation_processor"
        }
    }).id('ae2:inscriber/calculation_processor_print')
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "tag": "forge:plates/silicon"
            },
            "top": {
                "item": "ae2:silicon_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_silicon"
        }
    }).id('ae2:inscriber/silicon_print')
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_logic_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:logic_processor"
        }
    }).id('ae2:inscriber/logic_processor')
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_calculation_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:calculation_processor"
        }
    }).id('ae2:inscriber/calculation_processor')

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_engineering_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:engineering_processor"
        }
    }).id('ae2:inscriber/engineering_processor')

    //Storage bus
    event.remove({ id: 'ae2:network/parts/storage_bus' })
    event.shapeless('ae2:storage_bus', ['ae2:interface', 'gtceu:mv_electric_piston', 'gtceu:mv_electric_pump'])

    //busses
    event.remove({ id: 'ae2:network/parts/import_bus' })
    event.shaped(
        'ae2:export_bus', [
            ' A ',
            'DBD',
            ' C '
        ], {
            A: 'gtceu:mv_electric_pump',
            B: 'ae2:formation_core',
            C: 'gtceu:mv_electric_piston',
            D: 'gtceu:aluminium_plate'
        })
		event.remove({ id: 'ae2:network/parts/export_bus' })
    event.shaped(
        'ae2:import_bus', [
            ' A ',
            'DBD',
            ' C '
        ], {
            A: 'gtceu:mv_electric_pump',
            B: 'ae2:annihilation_core',
            C: 'gtceu:mv_electric_piston',
            D: 'gtceu:aluminium_plate'
        })

    //P2P
    event.remove({ id: 'ae2:network/parts/tunnels_me' })
    event.shaped(
        'ae2:me_p2p_tunnel', [
            ' A ',
            'ABA',
            'CCC'
        ], {
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:engineering_processor',
            C: 'gtceu:fluix_plate'
        })

    //cables

    event.remove({ id: 'ae2:network/parts/quartz_fiber_part' })
    event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_nether_quartz' })
    event.remove({ id: "ae2:network/cables/glass_fluix" })

    event.recipes.gtceu.wiremill('quartz_fiber')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:quartz_fiber')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('fluix_cable')
        .itemInputs(['gtceu:fluix_dust', 'ae2:quartz_fiber'])
        .itemOutputs('2x ae2:fluix_glass_cable')
        .duration(50)
        .EUt(16)

    // Fix Certus
    event.replaceInput(
        { type: 'ae2:item_tranformation' },
        'gtceu:certus_quartz_gem',
        'gtceu:charged_certus_quartz_gem'
    )
    

		// cable recipes
		event.remove({ id: "ae2:network/cables/covered_fluix" })
		event.remove({ id: "ae2qolrecipes:covered_cable/white_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/orange_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/magenta_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/light_blue_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/yellow_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/lime_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/pink_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/gray_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/light_gray_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/cyan_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/purple_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/blue_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/brown_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/green_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/red_covered_cable" })
		event.remove({ id: "ae2qolrecipes:covered_cable/black_covered_cable" })
		
		event.recipes.gtceu.assembler("fluix_covered_cable_rubber")
        .itemInputs("#ae2:glass_cable")
				.inputFluids('gtceu:rubber 144')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
		event.recipes.gtceu.assembler("fluix_covered_cable_silicone")
        .itemInputs("#ae2:glass_cable")
				.inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
		event.recipes.gtceu.assembler("fluix_covered_cable_styrene_butadiene")
        .itemInputs("#ae2:glass_cable")
				.inputFluids('gtceu:styrene_butadiene_rubber 36')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)

    // Presses
    function pressengrave(name, press, lens) {
        event.recipes.gtceu.laser_engraver(name)
            .itemInputs('gtceu:vanadium_steel_block')
            .notConsumable(lens)
            .itemOutputs(press)
            .duration(1600)
            .EUt(120)
    }


    pressengrave("engineering",'ae2:engineering_processor_press','#forge:lenses/red');
    pressengrave("calculation",'ae2:calculation_processor_press','#forge:lenses/blue');
    pressengrave("silicon", "ae2:silicon_press",'#forge:lenses/light_blue');
    pressengrave("logic", 'ae2:logic_processor_press','#forge:lenses/green');
    pressengrave("name", 'ae2:name_press','#forge:lenses/white');

    // ExtendedAE

    //Pattern Modifier (NAE2's Pattern Multitool)
    event.remove({ id: 'expatternprovider:pattern_modifier' })
    event.shapeless('expatternprovider:pattern_modifier', ['ae2:calculation_processor', 'ae2:blank_pattern', 'ae2:logic_processor'])

    //Extended Pattern Provider
    event.remove({ id: 'expatternprovider:epp' })
    event.recipes.gtceu.assembler("ex_pattern_provider")
        .itemInputs("4x ae2:pattern_provider", "4x ae2:capacity_card", "4x gtceu:aluminium_plate")
        .itemOutputs("expatternprovider:ex_pattern_provider")
        .duration(180)
        .circuit(2)
        .EUt(512)

		event.remove({ id: 'expatternprovider:epp_upgrade' })
		event.recipes.gtceu.assembler("ex_pattern_provider_upgrade")
				.itemInputs("3x ae2:pattern_provider", "4x ae2:capacity_card", "4x gtceu:aluminium_plate")
				.itemOutputs("expatternprovider:pattern_provider_upgrade")
				.duration(180)
				.circuit(1)
				.EUt(512)

    // Extended Interface

    event.remove({ id: 'expatternprovider:ei' })
    event.recipes.gtceu.assembler("ex_interface")
        .itemInputs("4x ae2:interface", "4x ae2:capacity_card", "4x gtceu:aluminium_plate")
        .itemOutputs("expatternprovider:ex_interface")
        .duration(180)
        .circuit(2)
        .EUt(512)

		event.remove({ id: 'expatternprovider:ei_upgrade' })
		event.recipes.gtceu.assembler("ex_interface_upgrade")
				.itemInputs("3x ae2:interface", "4x ae2:capacity_card", "4x gtceu:aluminium_plate")
				.itemOutputs("expatternprovider:interface_upgrade")
				.duration(180)
				.circuit(1)
				.EUt(512)

		event.remove({ id: 'expatternprovider:ex_molecular_assembler' })
		event.recipes.gtceu.assembler("expatternprovider:ex_molecular_assembler")
				.itemInputs("8x ae2:molecular_assembler", "8x gtceu:fluix_plate", "8x ae2:capacity_card")
				.itemOutputs("expatternprovider:ex_molecular_assembler")
				.duration(240)
				.EUt(1024)
    
    //Infinite Cobble/Water cell
    event.replaceInput({ id: 'expatternprovider:water_cell' }, 'minecraft:water_bucket', 'gtceu:infinite_water_cover')
    event.replaceInput({ id: 'expatternprovider:cobblestone_cell' }, 'minecraft:water_bucket', 'gtceu:infinite_water_cover')
    event.replaceInput({ id: 'expatternprovider:water_cell' }, 'minecraft:diamond', 'gtceu:diamond_plate')
    event.replaceInput({ id: 'expatternprovider:cobblestone_cell' }, 'minecraft:diamond', 'gtceu:diamond_plate')

    event.remove({ id: 'expatternprovider:ex_drive' })
    event.recipes.gtceu.assembler("expatternprovider:ex_drive")
        .itemInputs("2x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_drive")
        .duration(240)
        .EUt(1024)

    event.remove({ id: 'expatternprovider:ex_drive_upgrade' })
    event.recipes.gtceu.assembler('expatternprovider:drive_upgrade')
        .itemInputs("1x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs('expatternprovider:drive_upgrade')
        .duration(240)
        .EUt(1024)
    })