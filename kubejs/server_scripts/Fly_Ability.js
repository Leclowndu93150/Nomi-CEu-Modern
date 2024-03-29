
/**
 * @private
 * @param {Internal.PlayerEventJS} ev
 */
const glitchArmorCallback = (ev) => {
	const { player } = ev;
    const glitchArmorEquipped = player.headArmorItem === 'kubejs:glitch_infused_helmet' &&
        player.chestArmorItem === 'kubejs:glitch_infused_chestplate' &&
        player.legsArmorItem === 'kubejs:glitch_infused_leggings' &&
        player.feetArmorItem === 'kubejs:glitch_infused_boots'

    if (!player.abilities.mayfly && (glitchArmorEquipped || player.isCreative())) {
        player.abilities.mayfly = true
        player.onUpdateAbilities()
		return;
    }
	if (player.abilities.mayfly && !glitchArmorEquipped && !player.isCreative()) {
        player.abilities.mayfly = false
        player.abilities.flying = false
        player.onUpdateAbilities()
    }
}
// Notice: this wont update if you swap gamemode, you have to move glitch armor around your inventory!
PlayerEvents.inventoryChanged('kubejs:glitch_infused_helmet', glitchArmorCallback);
PlayerEvents.inventoryChanged('kubejs:glitch_infused_chestplate', glitchArmorCallback);
PlayerEvents.inventoryChanged('kubejs:glitch_infused_leggings', glitchArmorCallback);
PlayerEvents.inventoryChanged('kubejs:glitch_infused_boots', glitchArmorCallback);
PlayerEvents.respawned(glitchArmorCallback); // if the armor has an enchant that keeps it
PlayerEvents.loggedIn(glitchArmorCallback);
