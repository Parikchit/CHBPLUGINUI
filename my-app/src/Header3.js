
import React, { Component } from 'react';

import './App.css';



class Header3 extends Component{

    render() {
        return(
            <div>
        <header className="app-logged-out">
            <div className="dc-branding-colors"/>
            <nav className="navbar large-nav-menu">
                <a className="navbar-brand" href="/">
                    <img src="https://design-system.azureedge.net/images/logos/damco-logo.png" alt="Logo Damco" /></a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-item active">

                            <a className="nav-link" href="/">menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Option 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Option 3</a>
                        </li>
                    </ul>
                </div>
                <button className="button-login button-blue" type="button">Login</button>
            </nav>
        </header>
            </div>
        );
    }

}

export default Header3;