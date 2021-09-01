import React, { Fragment } from 'react'
import FilterPanel from '../components/FilterPanel'
import JogsPageContent from '../components/JogsPageContent'
import Header from '../components/Header'
import addBtn from '../img/add.png'
import '../scss/jogsPage/jogsPage.scss'
import EmptyJogs from '../components/EmptyJogs'

const JogsPage = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <FilterPanel />
                <JogsPageContent />
                <EmptyJogs />
            </main>
            {/* <img className="add-btn" src={addBtn} alt="add-btn" /> */}
        </Fragment>
    )
}

export default JogsPage