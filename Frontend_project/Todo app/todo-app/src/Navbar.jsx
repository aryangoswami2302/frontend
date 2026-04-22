import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <h1 className='bg-dark text-center text-white p-2'>This is todo app</h1>
                <nav className="navbar bg-warning text- px-5 d-flex justify-content-between">

                    {/* Left */}
                    <NavLink className="nav-link text-dark" to="/">
                        Home
                    </NavLink>

                    {/* Right */}
                    <NavLink className="nav-link text-dark" to="/Addpages">
                        Addpages
                    </NavLink>

                </nav>
            </div>
        </div>
    )
}

export default Navbar