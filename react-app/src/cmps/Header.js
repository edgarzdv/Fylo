import React from 'react'

export default function Header() {
    return (
        <header className="main-header flex align-center column">
            <div className="main-hero"></div>
            <h2 className="hero-title text-center">
                All your files in one secure location, accessible anywhere.
            </h2>
            <p className="text-center">
                Fylo stores all your most important files
                in one secure location. Access them wherever
                you need, share and collaborate with friends
                 family, and co-workers.
            </p>
            <button>Get Started</button>
       
        </header>
    )
}