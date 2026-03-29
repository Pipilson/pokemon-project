import Box from '../PokeBox'
import dex from '../Pokedex'

const ndex =
[
  //#region GEN 1
  [dex.Bulbasaur,
  dex.Ivysaur,
  dex.Venusaur,
  dex.Charmander,
  dex.Charmeleon,
  dex.Charizard,
  dex.Squirtle,
  dex.Wartortle,
  dex.Blastoise,
  dex.Caterpie,
  dex.Metapod,
  dex.Butterfree,
  dex.Weedle,
  dex.Kakuna,
  dex.Beedrill,
  dex.Pidgey,
  dex.Pidgeotto,
  dex.Pidgeot,
  dex.Rattata,
  dex.Raticate,
  dex.Spearow,
  dex.Fearow],
  [dex.Ekans,
  dex.Arbok],
  [dex.Pikachu,
  dex.Raichu],
  [dex.Sandshrew, 
  dex.Sandslash], 
  [dex.Nidoran_F,
  dex.Nidorina,
  dex.Nidoqueen,
  dex.Nidoran_M,
  dex.Nidorino,
  dex.Nidoking,
  dex.Clefairy,
  dex.Clefable],
  [dex.Vulpix, 
  dex.Ninetales], 
  [dex.Jigglypuff,
  dex.Wigglytuff,
  dex.Zubat,
  dex.Golbat],
  [dex.Oddish,
  dex.Gloom,
  dex.Vileplume],
  [dex.Paras,
  dex.Parasect,
  dex.Venonat,
  dex.Venomoth,
  dex.Diglett,
  dex.Dugtrio,
  dex.Meowth,
  dex.Persian],
  [dex.Psyduck,
  dex.Golduck],
  [dex.Mankey,
  dex.Primeape],
  [dex.Growlithe, 
  dex.Arcanine],
  [dex.Poliwag,
  dex.Poliwhirl,
  dex.Poliwrath,
  dex.Abra,
  dex.Kadabra,
  dex.Alakazam,
  dex.Machop,
  dex.Machoke,
  dex.Machamp],
  [dex.Bellsprout, 
  dex.Weepinbell, 
  dex.Victreebel], 
  [dex.Tentacool,
  dex.Tentacruel,
  dex.Geodude,
  dex.Graveler,
  dex.Golem,
  dex.Ponyta,
  dex.Rapidash],
  [dex.Slowpoke, 
  dex.Slowbro],
  [dex.Magnemite,
  dex.Magneton,
  dex.Farfetch_d,
  dex.Doduo,
  dex.Dodrio,
  dex.Seel,
  dex.Dewgong,
  dex.Grimer,
  dex.Muk],
  [dex.Shellder,
  dex.Cloyster],
  [dex.Gastly,
  dex.Haunter,
  dex.Gengar,
  dex.Onix,
  dex.Drowzee,
  dex.Hypno,
  dex.Krabby,
  dex.Kingler,
  dex.Voltorb,
  dex.Electrode,
  dex.Exeggcute,
  dex.Exeggutor,
  dex.Cubone,
  dex.Marowak,
  dex.Hitmonlee,
  dex.Hitmonchan,
  dex.Lickitung,
  dex.Koffing,
  dex.Weezing,
  dex.Rhyhorn,
  dex.Rhydon,
  dex.Chansey,
  dex.Tangela,
  dex.Kangaskhan,
  dex.Horsea,
  dex.Seadra,
  dex.Goldeen,
  dex.Seaking],
  [dex.Staryu,
  dex.Starmie],
  [dex.Mr_Mime],
  [dex.Scyther],
  [dex.Jynx],
  [dex.Electabuzz],
  [dex.Magmar,
  dex.Pinsir],
  [dex.Tauros,
  dex.Magikarp,
  dex.Gyarados,
  dex.Lapras,
  dex.Ditto,
  dex.Eevee,
  dex.Vaporeon,
  dex.Jolteon,
  dex.Flareon,
  dex.Porygon,
  dex.Omanyte,
  dex.Omastar,
  dex.Kabuto,
  dex.Kabutops,
  dex.Aerodactyl,
  dex.Snorlax,
  dex.Articuno,
  dex.Zapdos,
  dex.Moltres,
  dex.Dratini,
  dex.Dragonair,
  dex.Dragonite,
  dex.Mewtwo,
  //#endregion
  //#region GEN 2
  dex.Sentret,
  dex.Furret,
  dex.Ledyba,
  dex.Ledian,
  dex.Spinarak,
  dex.Ariados,
  dex.Crobat,
  dex.Pichu,
  dex.Cleffa,
  dex.Igglybuff,
  dex.Togepi,
  dex.Togetic,
  dex.Natu,
  dex.Xatu],
  [dex.Bellossom],
  [dex.Marill,
  dex.Azumarill],
  [dex.Politoed,
  dex.Hoppip,
  dex.Skiploom,
  dex.Jumpluff,
  dex.Yanma],
  [dex.Wooper,
  dex.Quagsire,
  dex.Murkrow],
  [dex.Slowking,
  dex.Misdreavus],
  [dex.Unown,
  dex.Wobbuffet,
  dex.Dunsparce,
  dex.Steelix],
  [dex.Qwilfish,
  dex.Scizor],
  [dex.Heracross],
  [dex.Sneasel],
  [dex.Slugma,
  dex.Magcargo,
  dex.Swinub,
  dex.Piloswine],
  [dex.Remoraid,
  dex.Octillery],
  [dex.Delibird],
  [dex.Mantine],
  [dex.Skarmory],
  [dex.Kingdra,
  dex.Phanpy,
  dex.Donphan,
  dex.Porygon2,
  dex.Tyrogue,
  dex.Hitmontop,
  dex.Smoochum],
  [dex.Elekid],
  [dex.Magby],
  [dex.Blissey,
  dex.Raikou,
  dex.Entei,
  dex.Suicune,
  dex.Lavitar,
  dex.Pupitar,
  dex.Tyranitar,
  dex.Lugia,
  dex.Ho_Oh],
  //#endregion
  //#region GEN 3
  [dex.Azurill],
  [dex.Wynaut,
  dex.Deoxys]
  //#endregion
]

function FRLG_dex()
{
  return (
    <div id='main'>
        <div>
          {ndex[0].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[1].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[2].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[3].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[4].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[5].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[6].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[7].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[8].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[9].map((poke, index)  => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[10].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[11].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[12].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[13].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[14].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[15].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[16].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[17].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[18].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[19].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[20].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[21].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[22].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[23].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[24].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[25].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[26].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[27].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[28].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[29].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[30].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[31].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[32].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[33].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[34].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[35].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[36].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[37].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[38].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[39].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[40].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[41].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='firered'   gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[42].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[43].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[44].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[45].map((poke, index) => (<Box key={`frlg-${poke.num}-${index}`} dex='frlg' exclusiveTo='gen3_r'    gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
    </div>
  )
}
export default FRLG_dex