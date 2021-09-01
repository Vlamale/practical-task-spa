import React from 'react'
import logo from '../img/logo.png'
import filterActive from '../img/filter-active.png'
import filterInactive from '../img/filter-inactive.png'
import menuBurger from '../img/menu.png'
import '../scss/header/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img className="header__logo" src={logo} alt="logo" />
                <div className="header__menu">
                    <div className="header__nav">
                        <img className="header__nav-burger" src={menuBurger} alt="menu-burger" />
                        <ul className="header__nav-list">
                            <li className="header__nav-list-item">jogs</li>
                            <li className="header__nav-list-item">info</li>
                            <li className="header__nav-list-item">contact us</li>
                        </ul>
                    </div>
                    {/* <img className="header__menu-filter" alt="Filter-active" src={filterInactive} /> */}
                    <img className="header__menu-filter" alt="Filter-active" src={filterActive} />
                </div>
            </div>
        </header>
    )
}

export default Header