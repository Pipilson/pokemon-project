type ChangeSpritesProps =
{
    version: "duo" | "third" | "secret"
    //version: "frlg" | "e"
    setVersion: React.Dispatch<React.SetStateAction<"duo" | "third" | "secret">>
}

function ChangeSprites({version, setVersion}: ChangeSpritesProps)
{
    const styleButtonMain: React.CSSProperties =
    {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "120px",
        height: "120px"
    }

    const styleButtonSecret: React.CSSProperties =
    {
        position: "fixed",
        bottom: "20px",
        left: "20px",
        width: "120px",
        height: "120px",
        opacity: "0"
    }

    function toggleVersion()
    {
        setVersion(version == "duo" ? "third" : "duo")
    }

    function secretVersion()
    {
        setVersion("secret")
    }

  return (
    <>
        <button style={styleButtonMain} onClick={toggleVersion}>Toggle<br></br>Sprites</button>
        <button style={styleButtonSecret} onClick={secretVersion}>Toggl<br></br>Sprite</button>
    </>
  )
}

export default ChangeSprites