import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import JogContext from '../context/JogContext'
import '../scss/filterPanel/filterPanel.scss'

const FilterPanel = () => {
    const { setJogs } = useContext(JogContext)
    const jogsFromRedux = useSelector(state => state.jogs)
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [formIsValid, setFormIsValid] = useState(true)


    useEffect(() => {
        const dateRegex = /^\d{4}\-\d{2}\-\d{2}$/
        if (dateRegex.test(dateFrom) && dateRegex.test(dateTo)) {
            setFormIsValid(true)
            const dateFromParsed = Date.parse(new Date(dateFrom).toDateString())
            const dateToParsed = Date.parse(dateTo)

            const filteredJogs = jogsFromRedux.filter(({ date }) => {
                return Date.parse(new Date(date).toDateString()) >= dateFromParsed
                    && Date.parse(new Date(date).toDateString()) <= dateToParsed
            })
            setJogs(filteredJogs)
        } else {
            setFormIsValid(false)
            setJogs(jogsFromRedux)
        }
    }, [dateFrom, dateTo])

    return (
        <div className="filter-panel">
            <div className="container">
                <label className="filter-panel__label" htmlFor="filter-panel__input" >Date from</label>
                <input
                    className="filter-panel__input"
                    type="date"
                    id="filter-panel__input"
                    style={{ border: formIsValid ? '1px solid #979797' : '2px solid #d82222d4' }}
                    value={dateFrom}
                    onChange={e => setDateFrom(e.target.value)}
                />
                <label className="filter-panel__label" htmlFor="filter-panel__input" >Date to</label>
                <input
                    className="filter-panel__input"
                    type="date"
                    id="filter-panel__input"
                    style={{ border: formIsValid ? '1px solid #979797' : '2px solid #d82222d4' }}
                    value={dateTo}
                    onChange={e => setDateTo(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FilterPanel