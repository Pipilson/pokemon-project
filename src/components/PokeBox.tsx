import { useState } from "react"

type PokeBoxProps =
{
  exclusiveTo: "gen1" | "gen1_rb" | "gen1_ry" | "gen1_by" | "gen2" | "gen3" | "gen3_r" | "red" | "blue" | "gold" | "silver" | "firered" | "leafgreen",
  //version: "rb" | "y" | "gs" | "c" | "frlg" | "pip",
  version: string,
  gen: number,
  pokeNum?: number,
  alt?: string,
  dex: string
}

function PokeBox({exclusiveTo, pokeNum=0, alt="", version, gen, dex}: PokeBoxProps)
{
  const [caught, setCaught] = useState(() =>
    {
      const saved = localStorage.getItem(`caught-${dex}-${pokeNum}`)
      return saved == "true"
    })

  const colors =
  {
    red:       "rgb(218,  57,  20)",
    blue:      "rgb( 46,  80, 216)",
    yellow:    "rgb(255, 215,  51)",
    gold:      "rgb(218, 165,  32)",
    silver:    "rgb(192, 192, 192)",
    firered:   "rgb(241,  92,   1)",
    leafgreen: "rgb(159, 220,   0)"
  }

  const games =
  {
    gen1: gradient(colors.red, colors.blue, colors.yellow),
    gen1_rb: gradient(colors.red, colors.blue),
    gen1_ry: gradient(colors.red, colors.yellow),
    gen1_by: gradient(colors.blue, colors.yellow),
    gen2: gradient(colors.gold, colors.silver),
    gen3: gradient(colors.firered, colors.leafgreen),
    gen3_r: gradient(colors.firered, colors.leafgreen),
    red: colors.red,
    blue: colors.blue,
    yellow: colors.yellow,
    gold: colors.gold,
    silver: colors.silver,
    firered: colors.firered,
    leafgreen: colors.leafgreen,

  }

  function gradient(c1: string, c2: string, c3?: string)
  {
    if(c3)
    {
      return `linear-gradient(to bottom right, ${c1} 0%, ${c1} 36%, ${c3} 36%, ${c3} 64%, ${c2} 64%, ${c2} 100%`
    }

    return `linear-gradient(to bottom right, ${c1} 0%, ${c1} 50%, ${c2} 50%, ${c2} 0%`
  }

  const { fixSize, extraSize } = renderSprite(exclusiveTo) //128 //16 //8

  const divStyle: React.CSSProperties =
  {
    width: `${fixSize + extraSize}px`,
    height: `${fixSize + extraSize}px`,
    background: games[exclusiveTo]
  }

  const imgStyle: React.CSSProperties =
  {
    width: `${fixSize}px`,
    height: `${fixSize}px`,
    margin: `${extraSize/2}px`,
    filter: caught ? "brightness(100%)" : "brightness(50%)",
  }

  function toggleCaught()
  {
    setCaught(!caught)
    localStorage.setItem(`caught-${dex}-${pokeNum}`, String(!caught))
  }

  const num = pokeNum.toString().padStart(3, "0")
  const generation = `gen${gen}`

  return (
    <div style={divStyle} onClick={toggleCaught}>
      <img style={imgStyle} alt={alt} src={`https://raw.githubusercontent.com/Pipilson/pokemon-db/refs/heads/main/img/${generation}/${version}/${num}.png`}></img>
    </div>
  )
}

function renderSprite(exclusiveTo: "gen1" | "gen1_rb" | "gen1_ry" | "gen1_by" | "gen2" | "gen3" | "gen3_r" | "red" | "blue" | "gold" | "silver" | "firered" | "leafgreen")
{
  let ogSize
  let fixSize
  let extraSize = 0

  switch(exclusiveTo)
  {
    case "gen1":
    case "gen1_rb":
    case "gen1_ry":
    case "gen1_by":
    case "gen2":
    case "red":
    case "blue":
    case "gold":
    case "silver":
      ogSize = 56,
      fixSize = ogSize * 2
      extraSize = 16
      break
    case "gen3":
    case "gen3_r":
    case "firered":
    case "leafgreen":
      ogSize = 64,
      fixSize = ogSize * 2
      break
    default:
      ogSize = 56
      fixSize = ogSize
      break
  }

  return { fixSize, extraSize }
}

export default PokeBox