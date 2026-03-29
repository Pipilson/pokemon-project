import { useState } from 'react'
import Box from '../PokeBox'
import dex from '../Pokedex'
import ChangeSprites from '../ChangeSprites'

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
  dex.Butterfree],
  [dex.Weedle,
  dex.Kakuna,
  dex.Beedrill],
  [dex.Pidgey,
  dex.Pidgeotto,
  dex.Pidgeot,
  dex.Rattata,
  dex.Raticate,
  dex.Spearow,
  dex.Fearow],
  [dex.Ekans,
  dex.Arbok],
  [dex.Pikachu],
  [dex.Raichu],
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
  dex.Dugtrio],
  [dex.Meowth,
  dex.Persian],
  [dex.Psyduck,
  dex.Golduck],
  [dex.Mankey,
  dex.Primeape,
  dex.Growlithe, 
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
  dex.Rapidash,
  dex.Slowpoke, 
  dex.Slowbro,
  dex.Magnemite,
  dex.Magneton,
  dex.Farfetch_d,
  dex.Doduo,
  dex.Dodrio,
  dex.Seel,
  dex.Dewgong,
  dex.Grimer,
  dex.Muk,
  dex.Shellder,
  dex.Cloyster,
  dex.Gastly,
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
  dex.Lickitung],
  [dex.Koffing,
  dex.Weezing],
  [dex.Rhyhorn,
  dex.Rhydon,
  dex.Chansey,
  dex.Tangela,
  dex.Kangaskhan,
  dex.Horsea,
  dex.Seadra,
  dex.Goldeen,
  dex.Seaking,
  dex.Staryu,
  dex.Starmie,
  dex.Mr_Mime],
  [dex.Scyther],
  [dex.Jynx],
  [dex.Electabuzz],
  [dex.Magmar],
  [dex.Pinsir],
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
  dex.Mewtwo]
  //#endregion
]

function RBY_dex()
{
  const [version, setVersion] = useState<"duo" | "third" | "secret">("duo")
  const gameMap =
  {
    duo: "rb",
    third: "y",
    secret: "pip"
  }
  
  const game = gameMap[version]

  return (
    <div id='main'>
        <ChangeSprites version={version} setVersion={setVersion}></ChangeSprites>
        <div>
          {ndex[0].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[1].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_rb' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[2].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[3].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='red'     gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[4].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[5].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_rb' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[6].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_by' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[7].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[8].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_by' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[9].map((poke, index)  => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[10].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_ry' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[11].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[12].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='blue'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[13].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[14].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_ry' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[15].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[16].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_by' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[17].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[18].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_rb' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[19].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[20].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_ry' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[21].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_rb' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[22].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='red'     gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[23].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='blue'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[24].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1_ry' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
          {ndex[25].map((poke, index) => (<Box key={`rby-${poke.num}-${index}`} dex='rby' exclusiveTo='gen1'    gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
    </div>
  )
}
export default RBY_dex