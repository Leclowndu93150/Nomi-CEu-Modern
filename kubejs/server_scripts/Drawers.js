ServerEvents.recipes(event => {
    event.remove({ id: "functionalstorage:storage_controller" })

    event.shaped(
        "functionalstorage:compacting_drawer", [
        'III',
        'PDP',
        'III'
    ], {
        I: "gtceu:iron_plate",
        P: "gtceu:lv_electric_piston",
        D: "#functionalstorage:drawer"
    }
    ).id('functionalstorage:compacting_drawer')
    event.shaped(
        "functionalstorage:simple_compacting_drawer", [
        'III',
        'IDP',
        'III'
    ], {
        I: "gtceu:iron_plate",
        P: "gtceu:lv_electric_piston",
        D: "#functionalstorage:drawer"
    }
    ).id('functionalstorage:simple_compacting_drawer')
    event.shaped(
        "functionalstorage:controller_extension", [
        'III',
        'CDC',
        'IGI'
    ], {
        I: "gtceu:iron_plate",
        C: "#gtceu:circuits/lv",
        D: "#functionalstorage:drawer",
        G: "#forge:storage_blocks/gold"
    }
    ).id('functionalstorage:controller_extension')
    event.shaped(
        "functionalstorage:armory_cabinet", [
        'ICI',
        'PDP',
        'III'
    ], {
        I: "gtceu:iron_plate",
        C: "#gtceu:circuits/hv",
        D: "#functionalstorage:drawer",
        P: "gtceu:hv_electric_piston"
    }
    ).id('functionalstorage:armory_cabinet')
    event.shaped(
        "functionalstorage:ender_drawer", [
        'III',
        'DED',
        'III'
    ], {
        I: "gtceu:iron_plate",
        P: "gtceu:lv_electric_piston",
        E: "enderchests:ender_chest",
        D: "#functionalstorage:drawer"
    }
    ).id('functionalstorage:ender_drawer')

    const controllerCore = ["#forge:storage_blocks/diamond", "#forge:storage_blocks/emerald"]
    controllerCore.forEach(coreBlock => {
        event.shaped(
            'functionalstorage:storage_controller', [
            'III',
            'CDC',
            'IEI'
        ], {
            I: "gtceu:iron_plate",
            C: "#gtceu:circuits/lv",
            D: "#functionalstorage:drawer",
            E: coreBlock
        })
    })

    const miscframing = ["storage_controller", "simple_compacting_drawer", "controller_extension"]
    miscframing.forEach(Block => {
        event.shaped(
            'functionalstorage:framed_' + Block, [
            'III',
            'IBI',
            'III'
        ], {
            I: 'minecraft:iron_nugget',
            B: 'functionalstorage:' + Block 
        }).id('functionalstorage:framed_' + Block)
    })

// Framed Compacting Drawer has a nonstandard ID for some reason
event.shaped(
    'functionalstorage:compacting_framed_drawer', [
    'III',
    'IBI',
    'III'
], {
    I: 'minecraft:iron_nugget',
    B: 'functionalstorage:compacting_drawer'
}).id('functionalstorage:compacting_framed_drawer')

event.shaped(
    'functionalstorage:collector_upgrade', [
    'SRS',
    'SVS',
    'SRS'
], {
    S: 'minecraft:stone',
    V: 'enderio:vacuum_chest',
    R: 'minecraft:redstone'
}).id('functionalstorage:collector_upgrade')

event.shaped(
    'functionalstorage:netherite_upgrade', [
    'EBE',
    'CDC',
    'EBE'
], {
    E: 'minecraft:emerald',
    B: 'minecraft:emerald_block',
    C: '#forge:chests/wooden',
    D: 'functionalstorage:diamond_upgrade'
}).id('functionalstorage:netherite_upgrade')

event.replaceInput({ id: /functionalstorage:fluid/ }, 'minecraft:bucket', 'gtceu:lv_super_tank')

})