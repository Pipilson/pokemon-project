import { useState } from 'react'
import Box from '../PokeBox'
import ChangeSprites from '../ChangeSprites'
import dex from '../Pokedex'

  const R_Exclusives =
  [
    dex.Ekans,
    dex.Arbok,
    dex.Growlithe, 
    dex.Arcanine,
    dex.Oddish,
    dex.Gloom,
    dex.Vileplume,
    dex.Mankey,
    dex.Primeape,
    dex.Scyther,
    dex.Electabuzz
  ]

  const B_Exclusives =
  [
    dex.Sandshrew, 
    dex.Sandslash, 
    dex.Vulpix, 
    dex.Ninetales, 
    dex.Bellsprout, 
    dex.Weepinbell, 
    dex.Victreebel, 
    dex.Meowth, 
    dex.Persian, 
    dex.Pinsir, 
    dex.Magmar
  ]

function RB()
{
  const [version, setVersion] = useState<"duo" | "third">("duo")
  const game = version == "duo" ? "rb" : "y"

  return (
    <div id='main'>
      <ChangeSprites version={version} setVersion={setVersion}></ChangeSprites>
        <div>
          {R_Exclusives.map((poke, index) => (<Box key={`red-${poke.num}-${index}`} dex='rb^' exclusiveTo='red' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
        <div>
          {B_Exclusives.map((poke, index) => (<Box key={`blue-${poke.num}-${index}`} dex='rb^' exclusiveTo='blue' gen={1} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
    </div>
  )
}

export default RB