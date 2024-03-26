JEIEvents.hideItems(event => {
    const excludedItems = ['draconicevolution:dislocation_inhibitor', 'draconicevolution:draconium_chest', 'draconicevolution:generator', 'draconicevolution:dislocator_pedestal', 'draconicevolution:creative_op_capacitor', 'draconicevolution:particle_generator', 'draconicevolution:grinder', 'draconicevolution:flux_gate', 'draconicevolution:reactor_prt_rotor_full', 'draconicevolution:fluid_gate', 'draconicevolution:crafting_core', 'draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_crafting_injector', 'draconicevolution:awakened_crafting_injector', 'draconicevolution:chaotic_crafting_injector', 'draconicevolution:energy_core', 'draconicevolution:energy_core_stabilizer', 'draconicevolution:energy_pylon', 'draconicevolution:reactor_core', 'draconicevolution:reactor_stabilizer', 'draconicevolution:infused_obsidian', 'draconicevolution:draconium_core', 'draconicevolution:wyvern_core', 'draconicevolution:awakened_core', 'draconicevolution:chaotic_core', 'draconicevolution:wyvern_energy_core', 'draconicevolution:draconic_energy_core', 'draconicevolution:dragon_heart', 'draconicevolution:chaos_shard', 'draconicevolution:large_chaos_frag', 'draconicevolution:medium_chaos_frag', 'draconicevolution:small_chaos_frag', 'draconicevolution:reactor_prt_stab_frame', 'draconicevolution:reactor_prt_in_rotor', 'draconicevolution:reactor_prt_out_rotor', 'draconicevolution:reactor_prt_focus_ring', 'draconicevolution:magnet', 'draconicevolution:advanced_magnet', Item.of('draconicevolution:dislocator', '{Damage:0}'), 'draconicevolution:advanced_dislocator', 'draconicevolution:wyvern_capacitor', 'draconicevolution:draconic_capacitor', 'draconicevolution:creative_capacitor']
    const regexPattern = new RegExp(`^(?!(${excludedItems.join('|')})$)draconicevolution:`, 'i')

    event.hide(regexPattern)
})

// EMI Hacky Fix
let manualUnification = ['hammerlib:gears/netherite', 'hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'draconicevolution:draconium_ingot', 'draconicevolution:draconium_nugget', 'draconicevolution:draconium_dust', 'draconicevolution:awakened_draconium_ingot', 'draconicevolution:awakened_draconium_nugget', 'draconicevolution:awakened_draconium_dust', 'hammerlib:gears/stone', 'hammerlib:gears/wooden', 'gtceu:neutronium_ingot', 'gtceu:neutronium_nugget']
let UnificationExcludedItems = ['nuclearcraft:hard_carbon_ingot', 'nuclearcraft:ferroboron_ingot', 'nuclearcraft:tough_alloy_ingot']
let unificationPattern = new RegExp(`^(?!(${UnificationExcludedItems.join('|')})).*(nuclearcraft|thermal|enderio):(.*(_block|_plate|_ingot|_nugget|_gear|_dust))`, 'i')

JEIEvents.hideItems(event => {
    event.hide(unificationPattern)
    event.hide(manualUnification)
})