import React from 'react'
import Button from './Button'
import pp from "../assets/Rond_rouge.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar flex-wrap gap-4 bg-base-100 shadow-sm">
        
        <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="avatar shrink-0">
                <div className="w-24 rounded">
                    <img src= {pp}/> 
                </div>
            </div>
            <a className="truncate text-xl">MAXIME COLLETTE POUJOL</a>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-4">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/"> Homepage  </Link></li>
            <li><Link to="/portfolio"> Portfolio </Link></li>
            <li><Link to="/cv"> Cv        </Link></li>
            <li><Link to="/contact"> Contact   </Link></li>
            </ul>
            <label className="swap">
            <input type="checkbox" />
            <div className="swap-on">Fr</div>
            <div className="swap-off">En</div>
            </label>
            <Button taille={"btn-primary"} message={"Thème"} onClick={() => {}} />
        </div>
    </div>
  )
}

export default Navbar