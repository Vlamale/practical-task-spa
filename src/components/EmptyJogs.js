import React from 'react'
import sadSmile from '../img/sad-rounded-square-emoticon.png'
import '../scss/jogsPage/jogsPage.scss'

const EmptyJogs = () => {
    return (
        <div className="empty-jogs-content">
            <div className="empty-jogs">
                <img className="empty-jogs__img" src={sadSmile} alt="Sad smile" />
                <h1 className="empty-jogs__title">Nothing is there</h1>
                <button className="empty-jogs__btn">Create your jog first</button>
            </div>
        </div>
    )
}

export default EmptyJogs