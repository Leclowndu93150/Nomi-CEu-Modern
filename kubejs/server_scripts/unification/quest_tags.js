ServerEvents.tags('item', event => {
    //Input Hatches
    event.add('nomi:input_hatch', 'gtceu:ulv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:lv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:mv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:hv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:ev_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:iv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:luv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:zpm_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:uv_input_hatch')
    event.add('nomi:input_hatch', 'gtceu:uhv_input_hatch')

    //Output Hatches
    event.add('nomi:output_hatch', 'gtceu:ulv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:lv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:mv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:hv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:ev_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:iv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:luv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:zpm_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:uv_output_hatch')
    event.add('nomi:output_hatch', 'gtceu:uhv_output_hatch')

    //Input buses
    event.add('nomi:input_bus', 'gtceu:ulv_input_bus')
    event.add('nomi:input_bus', 'gtceu:lv_input_bus')
    event.add('nomi:input_bus', 'gtceu:mv_input_bus')
    event.add('nomi:input_bus', 'gtceu:hv_input_bus')
    event.add('nomi:input_bus', 'gtceu:ev_input_bus')
    event.add('nomi:input_bus', 'gtceu:iv_input_bus')
    event.add('nomi:input_bus', 'gtceu:luv_input_bus')
    event.add('nomi:input_bus', 'gtceu:zpm_input_bus')
    event.add('nomi:input_bus', 'gtceu:uv_input_bus')
    event.add('nomi:input_bus', 'gtceu:uhv_input_bus')

    //Output busses
    event.add('nomi:output_bus', 'gtceu:ulv_output_bus')
    event.add('nomi:output_bus', 'gtceu:lv_output_bus')
    event.add('nomi:output_bus', 'gtceu:mv_output_bus')
    event.add('nomi:output_bus', 'gtceu:hv_output_bus')
    event.add('nomi:output_bus', 'gtceu:ev_output_bus')
    event.add('nomi:output_bus', 'gtceu:iv_output_bus')
    event.add('nomi:output_bus', 'gtceu:luv_output_bus')
    event.add('nomi:output_bus', 'gtceu:zpm_output_bus')
    event.add('nomi:output_bus', 'gtceu:uv_output_bus')
    event.add('nomi:output_bus', 'gtceu:uhv_output_bus')

	//'nomi_quest:backpack'
	const bps = event.get('curios:back').getObjectIds()
	const isOwnedByTheBackpackMod = Ingredient.of(/.*sophisticatedbackpacks.*/)
	bps.forEach(myBP => {
		if (isOwnedByTheBackpackMod.test(myBP))
			event.add('nomi_quest:backpack', myBP);
	})
})
