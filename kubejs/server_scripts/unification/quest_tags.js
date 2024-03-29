ServerEvents.tags('item', event => {
    //Input Hatches
    event.add('nomi:input_hatch',  /.+:(?!steam)(?!me).{1,3}_input_hatch$/); // ($) we dont want to get output_hatch_hv
    //Output Hatches
    event.add('nomi:output_hatch',  /.+:(?!steam)(?!me).{1,3}_output_hatch$/); // nor do we want hv_energy_input_hatch
    //Input buses
    event.add('nomi:input_bus',  /.+:(?!steam)(?!me).{1,3}_input_bus/)
    //Output busses
    event.add('nomi:output_bus', /.+:(?!steam)(?!me).{1,3}_output_bus/)

	//'nomi_quest:backpack'
	const bps = event.get('curios:back').getObjectIds()
	const isOwnedByTheBackpackMod = Ingredient.of(/.*sophisticatedbackpacks.*/)
	bps.forEach(myBP => {
		if (isOwnedByTheBackpackMod.test(myBP))
			event.add('nomi_quest:backpack', myBP);
	})

	// Nomicoin, mostly cosmetic
	event.add('nomi:coins', ['kubejs:nomi_penny', 'kubejs:nomi_nickel', 'kubejs:nomi_quarter', 'kubejs:nomi_dollar'])
})
