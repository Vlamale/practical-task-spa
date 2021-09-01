import React from 'react'
import logo from '../img/logo-green.png'
import cancelBtn from '../img/cancel-gray.png'
// import '../scss/menuPage/menuPage.scss'

const HeaderTransperent = () => {
    return (
        <header className="header">
            <div className="container">
                <img className="header__logo" src={logo} alt="logo" />
                <img className="header__cancel-btn" alt="Cancel batton" src={cancelBtn} />
            </div>
        </header>
    )
}

export default HeaderTransperent