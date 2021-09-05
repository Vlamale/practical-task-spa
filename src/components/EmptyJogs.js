import React from 'react'
import { useHistory } from 'react-router-dom'
import { ADD_JOG_PAGE_ROUTE } from '../const/routePaths'
import sadSmile from '../img/sad-rounded-square-emoticon.png'
import '../scss/jogsPage/jogsPage.scss'

const EmptyJogs = ({ filterStatus }) => {
    const history = useHistory()

    return (
        <div className="empty-jogs-content" style={{ height: filterStatus && '65vh' }}>
            <div className="empty-jogs">
                <img className="empty-jogs__img" src={sadSmile} alt="Sad smile" />
                <h1 className="empty-jogs__title">Nothing is there</h1>
                <button
                    className="empty-jogs__btn"
                    onClick={() => history.push(ADD_JOG_PAGE_ROUTE)}
                >Create your jog first
                </button>
            </div>
        </div>
    )
}

export default EmptyJogs