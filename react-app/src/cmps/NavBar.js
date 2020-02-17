import React from 'react'

export default function NavBar() {
    return (
        <nav className="nav-bar flex space-between">
            <div className="logo"></div>
            <ul className="flex">
                <li>Featurs</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}
