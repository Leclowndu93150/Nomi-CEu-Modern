FTBQuestsEvents.completed('319FB8E210480B5A', event => {
	SDRP.setState(`Just started nomifactory!`, event.player.username, 'creative')
})

PlayerEvents.loggedIn(event => {
	const name = capitalize(event.level.dimension.path);
	// i have no clue why tf is this working on the server
	SDRP.setState(`In ${name}`, name, "creative")
})