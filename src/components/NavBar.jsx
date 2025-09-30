import React from 'react'
import { Link } from 'react-router-dom'
function NavBar({ hc , ac , pc , cc}) {
  return (
    <>
        <div className="flex flex-col items-center bg-black text-white py-5">
        <h1 className="text-3xl font-bold">Nini sau</h1>
        <Link style={hc} to="/">Home</Link>
        <Link style={ac} to="/about">About</Link>     
        <Link style={cc} to="/protfolio">Protfolio</Link>
        <Link style={pc} to="/contact" className="border-2 border-white py-2 px-6 rounded-3xl ">Let's talk</Link>
        </div>
    </>
  )
}

export default NavBar
