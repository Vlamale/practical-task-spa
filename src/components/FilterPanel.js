import React from 'react'
import '../scss/filterPanel/filterPanel.scss'

const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <div className="container">
                <label className="filter-panel__label" for="filter-panel__input" >Date from</label>
                <input className="filter-panel__input" id="filter-panel__input" />
                <label className="filter-panel__label" for="filter-panel__input" >Date to</label>
                <input className="filter-panel__input" id="filter-panel__input" />
            </div>
        </div>
    )
}

export default FilterPanel