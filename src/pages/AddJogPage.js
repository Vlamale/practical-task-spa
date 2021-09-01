import React, { Fragment } from 'react'
import Header from '../components/Header'
import cancelBtn from '../img/cancel.png'
import '../scss/addJogPage/addJogPage.scss'

const AddJogPage = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <section className="add-jog-content">
                    <form className="add-jog-form">
                        <img className="add-jog-form__cancel-btn" src={cancelBtn} alt="Cancel button" />
                        <div className="add-jog-form__input-row">
                            <label className="add-jog-form__label" for="add-jog-form__distance">Distance:</label>
                            <input className="add-jog-form__input" id="add-jog-form__distance" />
                        </div>
                        <div className="add-jog-form__input-row">
                            <label className="add-jog-form__label" for="add-jog-form__time">Time:</label>
                            <input className="add-jog-form__input" id="add-jog-form__time" />
                        </div>
                        <div className="add-jog-form__input-row">
                            <label className="add-jog-form__label" for="add-jog-form__date">Date:</label>
                            <input className="add-jog-form__input" id="add-jog-form__date" />
                        </div>
                        <button className="add-jog-form__submit" type="submit">Save</button>
                    </form>
                </section>
            </main>
        </Fragment>
    )
}

export default AddJogPage