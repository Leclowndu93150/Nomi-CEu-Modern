//Microminers
StartupEvents.registry('item', event => {

    event.create('microminer_t1').displayName("\u00A7eSteel Plated Micro Miner [Tier One]").maxStackSize(16)
    event.create('microminer_t2').displayName("\u00A7eTitanium Plated Micro Miner [Tier Two]").maxStackSize(16)
    event.create('microminer_t3').displayName("\u00A7eTungsten Carbide Plated Micro Miner [Tier Three]").maxStackSize(16)
    event.create('microminer_t4').displayName("\u00A7eSignalum Plated Micro Miner [Tier Four]").maxStackSize(16)
    event.create('microminer_t5').displayName("\u00A7bIridium Plated Micro Miner [Tier Five]").maxStackSize(16)
    event.create('microminer_t6').displayName("\u00A7bEnderium Plated Micro Miner [Tier Six]").maxStackSize(16)
    event.create('microminer_t7').displayName("\u00A7bDraconium Plated Micro Dragon Hunter [Tier Seven]").maxStackSize(16)
    event.create('microminer_t8').displayName("\u00A7dCrystal Matrix Plated Micro Leviathan Slayer [Tier Eight]").maxStackSize(16)
    event.create('microminer_t9').displayName("\u00A7dEternium Plated Micro Sun Eater [Tier Nine]").maxStackSize(16)
    event.create('microminer_t10').displayName("\u00A7dNeutronium Plated Micro Universe Harvester [Tier Ten]").maxStackSize(16)

    //Microminer Components

    event.create('basic_mining_laser').displayName("\u00A7eBasic Mining Laser")
    event.create('supercharged_laser_array').displayName("\u00A7eSupercharged Laser Array")
    event.create('basic_micro_miner_guidance_system').displayName("\u00A7eBasic Micro Miner Guidance System")
    event.create('advanced_micro_miner_guidance_system').displayName("\u00A7eAdvanced Micro Miner Guidance System")
    event.create('reinforced_mining_laser').displayName("\u00A7bReinforced Mining Laser")
    event.create('warp_engine').displayName("\u00A7dWarp Engine")
    event.create('universal_navigator').displayName("\u00A7dUniversal Navigator")
    event.create('quantum_fluxed_eternium_heavy_plating').displayName("\u00A7dQuantum Fluxed Eternium Heavy Plating")
    event.create('quantumflux').displayName("\u00A7dQuantum Flux")
    event.create('gemsensor').displayName("Gemstone Sensor")

    //Nomi Coins
    event.create('nomipenny').displayName("Nomipenny [1]")
    event.create('nominickel').displayName("\u00A7eNominickel [5]")
    event.create('nomiquarter').displayName("\u00A7bNomiquarter [25]")
    event.create('nomidollar').displayName("\u00A7dNomidollar [100]")

    //widgets
    event.create('woodenwidget').displayName("Wooden Widget")
    event.create('woodwidgetleft').displayName("Wooden Widget Left Part")
    event.create('woodwidgetright').displayName("Wooden Widget Right Part")
    event.create('stonewidget').displayName("Stone Widget")
    event.create('stonewidgetup').displayName("Stone Widget Up Side")
    event.create('stonewidgetdown').displayName("Stone Widget Down Side")
    event.create('alloywidget').displayName("Alloy Widget")
    event.create('enderwidget').displayName("Ender Widget")

    //Space Items.  
    event.create('radiationlayer').displayName("Radiaton Layer")
    event.create('pressurelayer').displayName("Pressure Layer")
    event.create('thermalcloth').displayName("Thermal Cloth")
    event.create('unpreparedspacehelmet').displayName("Unprepared Space Helmet")
    event.create('unpreparedspacechestpiece').displayName("Unprepared Space Chestpiece")
    event.create('unpreparedspaceleggings').displayName("Unprepared Space Leggings")
    event.create('unpreparedspaceboots').displayName("Unprepared Space Boots")

    //Data
    event.create('lairofthechaosguardiandata').displayName("\u00A7dLair Of The Chaos Guardian Data")
    event.create('stellarcreationdata').displayName("\u00A7bStellar Creation Data")
    event.create('universecreationdata').displayName("\u00A7dUniverse Creation Data")
    event.create('impossiblerealmdata').displayName("\u00A7bImpossible Realm Data")
    event.create('witherrealmdata').displayName("\u00A7dWither Realm Data")
    event.create('dragonlairdata').displayName("\u00A7dDragon Lair Data")

    //Solidified Items
    event.create('solidifiedargon').displayName("Solidified Argon")
    event.create('solidifiedchlorine').displayName("Solidified Chlorine")
    event.create('solidifiedfluorine').displayName("Solidified Fluorine")
    event.create('solidifiedhelium').displayName("Solidified Helium")
    event.create('solidifiedhydrogen').displayName("Solidified Hydrogen")
    event.create('solidifiedkrypton').displayName("Solidified Krypton")
    event.create('solidifiedmercury').displayName("Solidified Mercury")
    event.create('solidifiedneon').displayName("Solidified Neon")
    event.create('solidifiednitrogen').displayName("Solidified Nitrogen")
    event.create('solidifiedoxygen').displayName("Solidified Oxygen")
    event.create('solidifiedradon').displayName("Solidified Radon")
    event.create('solidifiedxenon').displayName("Solidified Xenon")

    //Stabilized Items
    event.create('stabilizedeinsteinium').displayName("\u00A7dStabilized Einsteinium")
    event.create('stabilizedberkelium').displayName("Stabilized Berkelium")
    event.create('stabilizedneptunium').displayName("Stabilized Neptunium")
    event.create('stabilizedplutonium').displayName("Stabilized Plutonium")
    event.create('stabilizeduranium').displayName("Stabilized Uranium")
    event.create('stabilizedcurium').displayName("Stabilized Curium")
    event.create('stabilizedcalifornium').displayName("Stabilized Californium")
    event.create('stabilizedamericium').displayName("Stabilized Americium")

    //End Game Items
    event.create('heartofauniverse').displayName("\u00A7dHeart Of A Universe")
    event.create('creativeportabletankmold').displayName("Creative Quantum Tank Data")
    event.create('exoticmaterialscatalyst').displayName("Exotic Materials Catalyst")
    event.create('eternalcatalyst').displayName("Eternal Catalyst")
    event.create('ultimate_gem').displayName("\u00A7dUltimate Gem").glow(true)

    //Misc Items
    event.create('grainsofinnocence').displayName("Grains of Innocence")
    event.create('radiumsalt').displayName("Radium Salt").rarity('Epic')
    event.create('moondust').displayName("Moon Dust")
        //public static ItemBase REDSTONE_ARMOR_PLATE;
        //public static ItemBase CARBON_ARMOR_PLATE;
        //public static ItemBase LAPIS_ARMOR_PLATE;
        //TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create('compressedoctadiccapacitor').displayName("Compressed Octadic Capacitor")
    event.create('doublecompressedoctadiccapacitor').displayName("Double Compressed Octadic Capacitor")
        // Core and North are part of the Crafting Nether Star mod.
    event.create('netherstarnorth').displayName("Nether Star North Tip")
    event.create('netherstarsouth').displayName("Nether Star South Tip")
    event.create('netherstareast').displayName("Nether Star East Tip")
    event.create('netherstarwest').displayName("Nether Star West Tip")
    event.create('netherstarcenter').displayName("Nether Star Center")
        // Hydrogen is part of Solidified Items section.
    event.create('densehydrogen').displayName("Dense Hydrogen").rarity('Uncommon')
    event.create('ultradensehydrogen').displayName("Ultra Dense Hydrogen").rarity('Rare')

    //TODO: Add Hand Framing Tool
})


Platform.mods.kubejs.name = "Nomi Labs"