import React, { Fragment } from 'react'
import Header from '../components/Header'
import JogForm from '../components/JogForm'
import '../scss/addJogPage/addJogPage.scss'

const AddJogPage = () => {

    return (
        <Fragment>
            <Header />
            <main>
                <div className="wrapper-add-jog">
                    <JogForm />
                </div>
            </main>
        </Fragment>
    )
}

export default AddJogPage