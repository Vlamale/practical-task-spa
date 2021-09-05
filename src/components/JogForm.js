import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MAIN_PAGE_ROUTE } from '../const/routePaths'
import { createJog, changeJog } from '../http/jogsApi'
import cancelBtn from '../img/cancel.png'
import '../scss/addJogPage/addJogPage.scss'

const JogForm = () => {
    const selectedJogId = useSelector(state => state.selectedJogId)
    const history = useHistory()
    const [distance, setDistance] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    const addJog = async (event) => {
        event.preventDefault()
        const numberRowRegex = /^\d+$/
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/
        if (!numberRowRegex.test(distance) || !numberRowRegex.test(time) || !dateRegex.test(date)) {
            return alert('Rows "Distance:" and "Time:" must contain only numeric values. Row "Date:" must be of the format "01.01.2020".')
        }
        const jogData = {
            distance,
            time,
            date: date.split('.').reverse().join('-')
        }

        try {
            if (selectedJogId === null) {
                await createJog(jogData)
            } else {
                const { id } = JSON.parse(localStorage.getItem('user-data'))
                await changeJog({
                    ...jogData,
                    jog_id: selectedJogId,
                    user_id: id
                })
            }
            return history.push(MAIN_PAGE_ROUTE)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form
            className="add-jog-form"
            onSubmit={addJog}
        >
            <img
                className="add-jog-form__cancel-btn"
                src={cancelBtn}
                alt="Cancel button"
                onClick={() => history.push(MAIN_PAGE_ROUTE)}
            />
            <div className="add-jog-form__input-row">
                <label className="add-jog-form__label" htmlFor="add-jog-form__distance">Distance:</label>
                <input
                    className="add-jog-form__input"
                    id="add-jog-form__distance"
                    value={distance}
                    onChange={event => setDistance(event.target.value)}
                />
            </div>
            <div className="add-jog-form__input-row">
                <label className="add-jog-form__label" htmlFor="add-jog-form__time">Time:</label>
                <input
                    className="add-jog-form__input"
                    id="add-jog-form__time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                />
            </div>
            <div className="add-jog-form__input-row">
                <label className="add-jog-form__label" htmlFor="add-jog-form__date">Date:</label>
                <input
                    className="add-jog-form__input"
                    id="add-jog-form__date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />
            </div>
            <button className="add-jog-form__submit" type="submit">Save</button>
        </form>
    )
}

export default JogForm