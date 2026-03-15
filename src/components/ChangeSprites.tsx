type ChangeSpritesProps =
{
    //version: "rb" | "y"
    version: "frlg" | "e"
    setVersion: React.Dispatch<React.SetStateAction<"frlg" | "e">>
}

function ChangeSprites({version, setVersion}: ChangeSpritesProps)
{
    const styleButton: React.CSSProperties =
    {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "120px",
        height: "120px"
    }

    function toggleVersion()
    {
        setVersion(version == "frlg" ? "e" : "frlg")
    }

  return (
    <>
        <button style={styleButton} onClick={toggleVersion}>{version == "frlg" ? "Yellow" : "Red/Blue"}<br></br>Sprites</button>
    </>
  )
}

export default ChangeSprites