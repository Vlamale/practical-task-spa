import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderTransperent from '../components/HeaderTransperent'
import { CONTACT_US_PAGE_ROUTE, INFO_PAGE_ROUTE, MAIN_PAGE_ROUTE } from '../const/routePaths'
import '../scss/header/header.scss'
import '../scss/menuPage/menuPage.scss'

const MenuPage = () => {

    const history = useHistory()

    return (
        <Fragment>
            <HeaderTransperent />
            <main>
                <div className="wrapper-menu">
                    <ul className="menu-page">
                        <li
                            className="menu-page__item"
                            onClick={() => history.push(MAIN_PAGE_ROUTE)}
                        >Jogs
                        </li>
                        <li
                            className="menu-page__item"
                            onClick={() => history.push(INFO_PAGE_ROUTE)}
                        >Info
                        </li>
                        <li
                            className="menu-page__item"
                            onClick={() => history.push(CONTACT_US_PAGE_ROUTE)}
                        >Contact Us
                        </li>
                    </ul>
                </div>
            </main>
        </Fragment>
    )
}

export default MenuPage