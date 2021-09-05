import React, { useState, Fragment, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyJogs from './/EmptyJogs'
import jogImg from '../img/jog.png'
import { setSelectedJogId } from '../redux/actions'
import FilterPanel from './FilterPanel'
import JogContext from '../context/JogContext'

const JogsPageContent = () => {
    const { jogs } = useContext(JogContext)
    const dispatch = useDispatch()
    const filterStatus = useSelector(state => state.filterStatus)
    const [activeId, setActiveId] = useState(null)

    return (
        <main>
            <div className="wrapper-jogs-page" >
                {filterStatus && <FilterPanel />}
                {jogs.length > 0 &&
                    <section className="jogs-content">
                        {jogs.sort((a, b) => b.date - a.date).map(({ distance, time, date, id }) => (
                            <Fragment key={id} >
                                <article
                                    className={activeId === id ? "jogs-item active" : "jogs-item"}
                                    onClick={() => {
                                        if (id === activeId) {
                                            dispatch(setSelectedJogId(null))
                                            return setActiveId(null)
                                        }
                                        dispatch(setSelectedJogId(id))
                                        return setActiveId(id)
                                    }}>
                                    <img className="jogs-item__img" src={jogImg} alt="jog" />
                                    <div className="jogs-item__info">
                                        <time
                                            className="jogs-item__info-date">
                                            {new Date(date).toLocaleDateString()}
                                        </time>
                                        <p
                                            className="jogs-item__info-speed">
                                            <b>Speed:</b>{time === 0 ? 0 : Math.round(distance / (time / 60))}
                                        </p>
                                        <p
                                            className="jogs-item__info-distance">
                                            <b>Distance:</b>{distance} km
                                        </p>
                                        <p
                                            className="jogs-item__info-time">
                                            <b>Time:</b>{time} min
                                        </p>
                                    </div>
                                </article>
                                <div className="jogs-content__underline"></div>
                            </Fragment>
                        ))}
                    </section>}
                {!jogs.length && <EmptyJogs filterStatus={filterStatus} />}
            </div>
        </main>
    )
}

export default JogsPageContent