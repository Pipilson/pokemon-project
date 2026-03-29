import Box from '../PokeBox'
import dex from '../Pokedex'

  const FR_Exclusives =
  [
    dex.Ekans,
    dex.Arbok,
    dex.Growlithe,
    dex.Arcanine,
    dex.Oddish,
    dex.Gloom,
    dex.Vileplume,
    dex.Bellossom,
    dex.Psyduck,
    dex.Golduck,
    dex._,
    dex.Shellder,
    dex.Cloyster,
    dex.Scyther,
    dex.Scizor,
    dex.Elekid,
    dex.Electabuzz,
    dex._,
    dex.Wooper,
    dex.Quagsire,
    dex.Murkrow,
    dex.Qwilfish,
    dex._,
    dex.Delibird,
    dex.Skarmory
  ]

  const LG_Exclusives =
  [
    dex.Sandshrew, 
    dex.Sandslash, 
    dex.Vulpix, 
    dex.Ninetales, 
    dex.Bellsprout, 
    dex.Weepinbell, 
    dex.Victreebel, 
    dex._,
    dex.Slowpoke, 
    dex.Slowbro,
    dex.Slowking,
    dex.Staryu,
    dex.Starmie,
    dex.Pinsir,
    dex._,
    dex.Magby,
    dex.Magmar,
    dex.Azurill,
    dex.Marill,
    dex.Azumarill,
    dex.Misdreavus,
    dex.Remoraid,
    dex.Octillery,
    dex.Sneasel,
    dex.Mantine
  ]

function FRLG()
{
  return (
    <div id='main'>
        <div>
          {FR_Exclusives.map((poke, index) => (<Box key={`firered-${poke.num}-${index}`} dex='frlg^' exclusiveTo='firered' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
        <div>
          {LG_Exclusives.map((poke, index) => (<Box key={`leafgreen-${poke.num}-${index}`} dex='frlg^' exclusiveTo='leafgreen' gen={3} version="frlg" pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
    </div>
  )
}

export default FRLG