import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header__name'>
            <Link to='/'>
                <h2>Masson LeMieux</h2>
            </Link>
        </div>
    )
}

export default Header
