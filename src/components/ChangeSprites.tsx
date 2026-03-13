type ChangeSpritesProps =
{
    version: "rb" | "y"
    setVersion: React.Dispatch<React.SetStateAction<"rb" | "y">>
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
        setVersion(version == "rb" ? "y" : "rb")
    }

  return (
    <>
        <button style={styleButton} onClick={toggleVersion}>{version == "rb" ? "Yellow" : "Red/Blue"}<br></br>Sprites</button>
    </>
  )
}

export default ChangeSprites