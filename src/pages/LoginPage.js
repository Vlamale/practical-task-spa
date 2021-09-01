import React, { Fragment } from 'react'
import Header from '../components/Header'
import '../scss/loginPage/loginPage.scss'

const LoginPage = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <div class="container">
                    <section class="rectangle">
                        <button class="rectangle__btn">Let me in</button>
                    </section>
                </div>
            </main>
        </Fragment>
    )
}

export default LoginPage