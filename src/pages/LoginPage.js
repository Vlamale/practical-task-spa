import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from '../components/Header'
import { MAIN_PAGE_ROUTE } from '../const/routePaths'
import { getToken, getUserData } from '../http/userApi'
import '../scss/loginPage/loginPage.scss'
import { changeLoginStatus } from '../redux/actions'

const LoginPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const singIn = async () => {
        try {
            const token = await getToken()
            const userData = await getUserData()
            if (!token || !userData) {
                alert('Что-то пошло не так.')
                return false
            }
            dispatch(changeLoginStatus(true))
            history.push(MAIN_PAGE_ROUTE)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
            <Header hideFilterBtn={true} />
            <main>
                <div className="wrapper-login">
                    <section className="rectangle">
                        <button
                            className="rectangle__btn"
                            onClick={singIn.bind(null)}
                        >Let me in
                        </button>
                    </section>
                </div>
            </main>
        </Fragment>
    )
}

export default LoginPage