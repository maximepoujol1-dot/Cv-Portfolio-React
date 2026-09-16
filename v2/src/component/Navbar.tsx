//import { useEffect, useState } from 'react'
import pp from "../assets/Rond_rouge.png"
import { Link } from 'react-router-dom'


    //                <img src={pp} alt="Profile"  className="h-full w-full object-cover"/>
const Navbar = () => {
    
    return (
    <div className="navbar flex-wrap gap-4 bg-base-100 shadow-sm">
        
        <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="avatar shrink-0">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                </div>
            </div>
            <a className="truncate text-xl">MAXIME COLLETTE POUJOL</a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/"> Homepage  </Link></li>
            <li><Link to="/portfolio"> Portfolio </Link></li>
            <li><Link to="/cv"> Cv        </Link></li>
            <li><Link to="/contact"> Contact   </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar