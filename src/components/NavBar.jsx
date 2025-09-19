import React from 'react'
import { Link } from 'react-router-dom'
function Navbar({ hc , ac , pc , cc}) {
  return (
    <div className="flex justify-around items-center bg-black text-white py-10"> 
      <h1 className="text-3xl font-bold">
        ดูเมะ
      </h1>
      <Link style={hc} to="/">Home</Link>
      <Link style={ac} to="/about">About</Link>
      <Link style={pc} to="/protfolio">Protfolio</Link>
      <Link style={cc} to="/contact" className="border-2 border-white py-2 px-6 rounded-3xl">Let's talk</Link>
    </div>
  )
}

export default Navbar
