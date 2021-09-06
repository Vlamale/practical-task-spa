import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import JogContext from '../context/JogContext'
import JogsPageContent from '../components/JogsPageContent'
import Header from '../components/Header'
import addBtn from '../img/add.png'
import { ADD_JOG_PAGE_ROUTE } from '../const/routePaths'
import { Loader } from '../components/Loader'
import { getJogsAction } from '../redux/actions'
import '../scss/jogsPage/jogsPage.scss'

const JogsPage = () => {
    const dispatch = useDispatch()
    const [jogs, setJogs] = useState([])
    const [loading, setLoading] = useState(true)

    const history = useHistory()

    useEffect(() => {
        let cleanUpFunction = false

        if (!cleanUpFunction) {
            const setData = async () => {
                try {
                    const response = await dispatch(getJogsAction())
                    setJogs(response)
                    setLoading(false)
                } catch (err) {
                    console.log(err);
                }
            }
            setData()
        }
        return () => cleanUpFunction = true
    }, [])

    return (
        <JogContext.Provider value={{ setJogs, jogs }}>
            <Header setJogs={setJogs} />

            {loading ? <Loader /> : <JogsPageContent />}

            <img
                className="add-btn"
                src={addBtn}
                alt="add-btn"
                onClick={() => history.push(ADD_JOG_PAGE_ROUTE)}
            />
        </JogContext.Provider>
    )
}

export default JogsPage