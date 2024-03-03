ServerEvents.recipes(event => {
    //recipes to make oak drawers from rubber planks
    event.shaped(
        "storagedrawers:oak_full_drawers_1", [
            'PPP',
            ' C ',
            'PPP'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests",
        }
    )
    event.shaped(
        "storagedrawers:oak_full_drawers_2", [
            'PCP',
            'PPP',
            'PCP'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests",
        }
    )
    event.shaped(
        "storagedrawers:oak_full_drawers_4", [
            'CPC',
            'PPP',
            'CPC'
        ], {
            P: "gtceu:rubber_planks",
            C: "#balm:wooden_chests",
        }
    )
    // there is no rubber slabs for halfs 

    // Drawers
    event.remove({ output: "storagedrawers:obsidian_storage_upgrade" })
    event.remove({ output: "storagedrawers:compacting_drawers_3" })
    event.remove({ output: "storagedrawers:controller" })
    event.remove({ output: "storagedrawers:controller_slave" })
    event.shaped(
        "storagedrawers:obsidian_storage_upgrade", [
            'SSS',
            'CUC',
            'SSS'
        ], {
            S: "minecraft:stick",
            C: "minecraft:coal",
            U: "storagedrawers:upgrade_template"
        }
    )
    event.shaped(
        "storagedrawers:compacting_drawers_3", [
            'III',
            'PDP',
            'III'
        ], {
            I: "gtceu:iron_plate",
            P: "gtceu:lv_electric_piston",
            D: "#storagedrawers:drawers"
        }
    )

    var controllerCore = ["minecraft:diamond_block", "minecraft:emerald_block"]
    controllerCore.forEach(coreBlock => {
        event.shaped(
            "storagedrawers:controller", [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "gtceu:iron_plate",
                C: "#gtceu:circuits/lv",
                D: "#storagedrawers:drawers",
                E: coreBlock
            }
        )
    })
})