import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../img/logo-green.png'
import cancelBtn from '../img/cancel-gray.png'
import '../scss/menuPage/menuPage.scss'
import { MAIN_PAGE_ROUTE } from '../const/routePaths'

const HeaderTransperent = () => {
    const history = useHistory()

    return (
        <header className="header-transperent">
            <div className="container">
                <img
                    className="header-transperent__logo"
                    src={logo}
                    alt="logo"
                    onClick={() => history.push(MAIN_PAGE_ROUTE)}
                />
                <img
                    className="header-transperent__cancel-btn"
                    alt="Cancel batton"
                    src={cancelBtn}
                    onClick={() => history.goBack()}
                />
            </div>
        </header>
    )
}

export default HeaderTransperent