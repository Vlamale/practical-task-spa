import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../img/logo.png'
import filterActive from '../img/filter-active.png'
import filterInactive from '../img/filter-inactive.png'
import menuBurger from '../img/menu.png'
import '../scss/header/header.scss'
import { CONTACT_US_PAGE_ROUTE, INFO_PAGE_ROUTE, MAIN_PAGE_ROUTE, MENU_PAGE_ROUTE } from '../const/routePaths'
import { setFilterStatus } from '../redux/actions'

const Header = ({ hideFilterBtn, setJogs }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { filterStatus, jogs, isAuth } = useSelector(state => state)

    return (
        <header className="header">
            <div className="container">
                <img
                    className="header__logo"
                    src={logo}
                    alt="logo"
                    onClick={() => history.push(MAIN_PAGE_ROUTE)}
                />
                <div className="header__menu">
                    {isAuth && 
                    <nav className="header__nav">
                        <img
                            className="header__nav-burger"
                            src={menuBurger}
                            alt="menu-burger"
                            onClick={() => history.push(MENU_PAGE_ROUTE)}
                        />
                        <ul className="header__nav-list">
                            <li
                                className="header__nav-list-item"
                                onClick={() => history.push(MAIN_PAGE_ROUTE)}
                            >jogs
                            </li>
                            <li
                                className="header__nav-list-item"
                                onClick={() => history.push(INFO_PAGE_ROUTE)}
                            >info
                            </li>
                            <li
                                className="header__nav-list-item"
                                onClick={() => history.push(CONTACT_US_PAGE_ROUTE)}
                            >contact us
                            </li>
                        </ul>
                    </nav>}

                    {!filterStatus &&
                        <img
                            className="header__menu-filter filter-inactive-btn"
                            alt="Filter-active"
                            src={filterInactive}
                            width="39"
                            height="39"
                            style={{ display: hideFilterBtn ? 'none' : 'block' }}
                            onClick={() => dispatch(setFilterStatus(true))}
                        />}

                    {filterStatus &&
                        <img
                            className="header__menu-filter"
                            alt="Filter-active"
                            src={filterActive}
                            width="39"
                            height="39"
                            style={{ display: hideFilterBtn ? 'none' : 'block' }}
                            onClick={() => {
                                dispatch(setFilterStatus(false))
                                setJogs(jogs)
                            }}
                        />}
                </div>
            </div>
        </header>
    )
}

export default Header