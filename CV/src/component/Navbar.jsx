import React from 'react'
import Theme from './Theme'
import pp from "../assets/Rond_rouge.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="avatar">
            <div className="w-24 rounded">
                <img src= {pp}/> 
            </div>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl"> MAXIME</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/"> Homepage  </Link></li>
            <li><Link to="/portfolio"> Portfolio </Link></li>
            <li><Link to="/cv"> Cv        </Link></li>
            <li><Link to="/contact"> Contact   </Link></li>
            </ul>
        </div>
        <Theme/>
    </div>
  )
}

export default Navbar