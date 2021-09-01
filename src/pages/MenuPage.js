import React, { Fragment } from 'react'
import HeaderTransperent from '../components/HeaderTransperent'
import '../scss/menuPage/menuPage.scss'

const MenuPage = () => {
    return (
        <Fragment>
            <HeaderTransperent />
            <main>
                <ul className="menu-page">
                    <li className="menu-page__item">Jogs</li>
                    <li className="menu-page__item">Info</li>
                    <li className="menu-page__item">Contact Us</li>
                </ul>
            </main>
        </Fragment>
    )
}

export default MenuPage