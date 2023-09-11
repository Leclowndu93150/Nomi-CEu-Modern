ItemEvents.modification(event => {
    event.modify('minecraft:sugar_cane', item => item.burnTime = 300)
})