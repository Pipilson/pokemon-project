import { useState } from 'react'
import Box from '../PokeBox'
import ChangeSprites from '../ChangeSprites'
import dex from '../Pokedex'

  const G_Exclusives =
  [
    dex.Growlithe, 
    dex.Arcanine,
    dex.Mankey,
    dex.Primeape,
    dex.Spinarak,
    dex.Ariados,
    dex.Gligar,
    dex.Teddiursa,
    dex.Ursaring,
    dex.Mantine
  ]

  const S_Exclusives =
  [
    dex.Vulpix, 
    dex.Ninetales,
    dex.Meowth, 
    dex.Persian, 
    dex.Ledyba,
    dex.Ledian,
    dex.Skarmory,
    dex.Phanpy,
    dex.Donphan,
    dex.Delibird
  ]

function GS()
{
  const [version, setVersion] = useState<"duo" | "third" | "secret">("duo")
  const game = version == "duo" ? "gs" : "c"

  return (
    <div id='main'>
      <ChangeSprites version={version} setVersion={setVersion}></ChangeSprites>
        <div>
          {G_Exclusives.map((poke, index) => (<Box key={`gold-${poke.num}-${index}`} dex='gs^' exclusiveTo='gold' gen={2} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
        <div>
          {S_Exclusives.map((poke, index) => (<Box key={`silver-${poke.num}-${index}`} dex='gs^' exclusiveTo='silver' gen={2} version={game} pokeNum={poke.num} alt={poke.name}></Box>))}
        </div>
    </div>
  )
}

export default GS