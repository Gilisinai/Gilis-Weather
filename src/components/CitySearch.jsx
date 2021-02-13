import React from 'react'

function CitySearch() {
    return (
        <div className="search">
            <input name="autocomplete" id="search-input" list="autocomplete" />
            <datalist id="autocomplete">
                <option>Harry Potter</option>
                <option>Hermione</option>
                <option>Dumbledore</option>
                <option>Merlin</option>
                <option>Gandalf</option>
            </datalist>
        </div>
    )
}

export default CitySearch
