import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="avatar">
            <div className="w-24 rounded">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
            </div>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Cv</a></li>
            <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar