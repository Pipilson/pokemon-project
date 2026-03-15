import { useState } from "react"

type PokeBoxProps =
{
  //exclusiveTo: "red" | "blue",
  exclusiveTo: "firered" | "leafgreen"
  pokeNum?: number,
  alt?: string,
  version: "frlg" | "e"
  //version: "rb" | "y"
}

function PokeBox({exclusiveTo, pokeNum=0, alt="", version}: PokeBoxProps)
{
  const [caught, setCaught] = useState(() =>
    {
      const saved = localStorage.getItem(`caught-${pokeNum}`)
      return saved == "true"
    })

  const games =
  {
    //red: "rgb(218, 57, 20)",
    //blue: "rgb(46, 80, 216)",
    firered: "rgb(241, 92, 1)",
    leafgreen: "rgb(159, 220, 0)"
  }

  const divStyle: React.CSSProperties =
  {
    //width: "120px", //original- 60px
    //height: "120px",
    width: "128px", //original- 64px
    height: "128px",
    background: games[exclusiveTo]
  }

  const imgStyle: React.CSSProperties =
  {
    //paddingTop: "2px",
    //width: "112px", //original- 56px
    //height: "112px",
    width: "128px",
    height: "128px",
    filter: caught ? "brightness(100%)" : "brightness(50%)",
    //opacity: caught ? 1 : 0.5
  }

  function toggleCaught()
  {
    setCaught(!caught)
    localStorage.setItem(`caught-${pokeNum}`, String(!caught))
  }

  const num = pokeNum.toString().padStart(3, "0")

  return (
    <div style={divStyle} onClick={toggleCaught}>
      <img style={imgStyle} alt={alt} src={`https://raw.githubusercontent.com/Pipilson/pokemon-db/refs/heads/main/img/gen3/${version}/${num}.png`}></img>
    </div>
  )
}

export default PokeBox