import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import PokeBox from './components/PokeBox'
import ChangeSprites from './components/ChangeSprites'

function App() {

  //const [version, setVersion] = useState<"rb" | "y">("rb")
  const [version, setVersion] = useState<"frlg" | "e">("frlg")

  /*const redExclusives =
   [{num: 23, alt: "Ekans"},
    {num: 24, alt: "Arbok"},
    {num: 58, alt: "Growlithe"}, 
    {num: 59, alt: "Arcanine"},
    {num: 43, alt: "Oddish"},
    {num: 44, alt: "Gloom"},
    {num: 45, alt: "Vileplume"},
    {num: 56, alt: "Mankey"},
    {num: 57, alt: "Primeape"},
    {num: 123, alt: "Scyther"},
    {num: 125, alt: "Electabuzz"}]

  const blueExclusives =
   [{num: 27, alt: "Sandshrew"}, 
    {num: 28, alt: "Sandslash"}, 
    {num: 37, alt: "Vulpix"}, 
    {num: 38, alt: "Ninetales"}, 
    {num: 69, alt: "Bellsprout"}, 
    {num: 70, alt: "Weepinbell"}, 
    {num: 71, alt: "Victreebel"}, 
    {num: 52, alt: "Meowth"}, 
    {num: 53, alt: "Persian"}, 
    {num: 127, alt: "Pinsir"}, 
    {num: 126, alt: "Magmar"}]*/

  const fireredExclusives =
   [{num: 23, alt: "Ekans"},
    {num: 24, alt: "Arbok"},
    {num: 58, alt: "Growlithe"}, 
    {num: 59, alt: "Arcanine"},
    {num: 43, alt: "Oddish"},
    {num: 44, alt: "Gloom"},
    {num: 45, alt: "Vileplume"},
    {num: 182, alt: "Bellossom"},
    {num: 54, alt: "Psyduck"},
    {num: 55, alt: "Golduck"},
    {num: 0, alt: ""},
    {num: 90, alt: "Shellder"},
    {num: 91, alt: "Cloyster"},
    {num: 123, alt: "Scyther"},
    {num: 212, alt: "Scizor"},
    {num: 239, alt: "Elekid"},
    {num: 125, alt: "Electabuzz"},
    {num: 0, alt:""},
    {num: 194, alt: "Wooper"},
    {num: 195, alt: "Quagsire"},
    {num: 198, alt: "Murkrow"},
    {num: 211, alt: "Qwilfish"},
    {num: 0, alt: ""},
    {num: 225, alt: "Delibird"},
    {num: 227, alt: "Skarmory"}]

  const leafgreenExclusives =
   [{num: 27, alt: "Sandshrew"}, 
    {num: 28, alt: "Sandslash"}, 
    {num: 37, alt: "Vulpix"}, 
    {num: 38, alt: "Ninetales"}, 
    {num: 69, alt: "Bellsprout"}, 
    {num: 70, alt: "Weepinbell"}, 
    {num: 71, alt: "Victreebel"}, 
    {num: 0, alt: ""},
    {num: 79, alt: "Slowpoke"}, 
    {num: 80, alt: "Slowbro"},
    {num: 199, alt: "Slowking"},
    {num: 120, alt: "Staryu"},
    {num: 121, alt: "Starmie"},
    {num: 127, alt: "Pinsir"},
    {num: 0, alt: ""},
    {num: 240, alt: "Magby"},
    {num: 126, alt: "Magmar"},
    {num: 298, alt: "Azurill"},
    {num: 183, alt: "Marill"},
    {num: 184, alt: "Azumarill"},
    {num: 200, alt: "Misdreavus"},
    {num: 223, alt: "Remoraid"},
    {num: 224, alt: "Octillery"},
    {num: 215, alt: "Sneasel"},
    {num: 226, alt: "Mantine"}]

  return (
    <>
      {/* <ChangeSprites version={version} setVersion={setVersion}></ChangeSprites> */}
      <div id='main'>
        <div>
          {fireredExclusives.map((poke) => (<PokeBox exclusiveTo='firered' pokeNum={poke.num} alt={poke.alt} version={version}></PokeBox>))}
        </div>
        <div>
          {leafgreenExclusives.map((poke) => (<PokeBox exclusiveTo='leafgreen' pokeNum={poke.num} alt={poke.alt} version={version}></PokeBox>))}
        </div>
      </div>
    </>
  )
}

export default App
