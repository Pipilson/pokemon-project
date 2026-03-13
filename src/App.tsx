import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import PokeBox from './components/PokeBox'
import ChangeSprites from './components/ChangeSprites'

function App() {

  const [version, setVersion] = useState<"rb" | "y">("rb")

  const redExclusives =
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
    {num: 126, alt: "Magmar"}]

  return (
    <>
      <ChangeSprites version={version} setVersion={setVersion}></ChangeSprites>
      <div id='main'>
        <div>
          {redExclusives.map((poke) => (<PokeBox exclusiveTo='red' pokeNum={poke.num} alt={poke.alt} version={version}></PokeBox>))}
        </div>
        <div>
          {blueExclusives.map((poke) => (<PokeBox exclusiveTo='blue' pokeNum={poke.num} alt={poke.alt} version={version}></PokeBox>))}
        </div>
      </div>
    </>
  )
}

export default App
