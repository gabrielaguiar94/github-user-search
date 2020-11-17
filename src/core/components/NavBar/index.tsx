import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => (
    <nav>
        <Link to="/">
            <div className="main-nav">
                <h4 className="nav-logo-text">Bootcamp DevSuperior</h4>
            </div>
        </Link>
    </nav>
)

export default NavBar;