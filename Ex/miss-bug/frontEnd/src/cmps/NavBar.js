import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return <nav className="main-header">
        <ul className="container flex align-center">
            <h2><NavLink activeClassName="active" to='/' exact>Login</NavLink></h2>
            <h2><NavLink activeClassName="active" to='/user/signup' exact>Sign Up</NavLink></h2>
            <h2><NavLink activeClassName="active" to='/bug'>Bugs</NavLink></h2>
            <h2><NavLink activeClassName="active" to='/BugAdd'>New Bug</NavLink></h2>
        </ul>
    </nav>
}