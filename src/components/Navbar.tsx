import { Link } from "react-router-dom"
import React from "react"

type NavLink =
{
    path: string,
    label: string
}

const navLinks: NavLink[] =
[
    // { path: "/", label: "Home" },
    { path: "/rb", label: "Red/Blue" },
    { path: "/gs", label: "Gold/Silver" },
    // { path: "/rs", label: "Ruby/Sapphire" },
    { path: "/frlg", label: "FireRed/LeafGreen" },
    // { path: "/dp", label: "Diamond/Pearl" },
    // { path: "/hgss", label: "HeartGold/SoulSilver" },

]

function Navbar()
{
  return (
    <>
        <nav style={navStyle}>
            <ul style={ulStyle}>
                {navLinks.map((link) => (<li key={link.path} style={liStyle}><Link to={link.path} style={linkStyle}>{link.label}</Link></li>))}
            </ul>
        </nav>
    </>
  )
}

// Estilos inline básicos (pode colocar em CSS também)
const navStyle: React.CSSProperties =
{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "#222",
    padding: "10px 20px",
    zIndex: 1000, // para garantir que fique sobre outros elementos
    opacity: "50%"
}

const ulStyle: React.CSSProperties =
{
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "20px",
}

const liStyle: React.CSSProperties =
{

}

const linkStyle: React.CSSProperties =
{
    color: "#fff",
    textDecoration: "none",
}

export default Navbar