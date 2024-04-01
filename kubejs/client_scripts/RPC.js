// this event is clientside
sdrp.dimension_change(event => {
	const name = capitalize(event.level.dimension.path);
	SDRP.setState(`In ${name}`, name, "creative") // this only updates on client tick
})
