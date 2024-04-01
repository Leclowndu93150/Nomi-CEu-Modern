PlayerEvents.loggedIn(event => {
    if (FTBQuests.getServerDataFromPlayer(event.player.UUID).isCompleted('319FB8E210480B5A')) {
        event.player.stages.add('beforelv')
    }


    if (event.player.stages.has('beforelv')) {
        global.current_tier = "beforelv"
    }

})

PlayerEvents.loggedIn(event => {
    if (global.current_tier === "beforelv") {
        global.name = "Stage: Before LV"
    } else {
        global.name = "Stage: " + current_tier
    }

    SDRP.setState(`Gregifying their World`, global.name, `${global.current_tier}`)
})