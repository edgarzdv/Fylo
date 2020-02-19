import React from 'react'

export default function NavBar() {
    return (
        <nav className="nav-bar flex space-between">
            <div className="logo"></div>
            <ul className="flex">
                <li>home</li>
                <li>about</li>
            </ul>
            <span>contact us</span>
        </nav>
    )
}
