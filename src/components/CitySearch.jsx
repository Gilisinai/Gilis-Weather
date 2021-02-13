import React from 'react'
import { connect } from 'react-redux'
import { fetchAutocompleteStartAsync } from '../redux/autocomplete/autocomplete.actions'
import { fetchCurrentWeatherStartAsync } from '../redux/weather/weather.actions'

function CitySearch({ fetchAutocompleteStartAsync, options, searchQuery, fetchCurrentWeatherStartAsync }) {


    return (
        <div className="search">
            <input name="autocomplete" id="search-input" list="autocomplete" placeholder="enter city" onChange={(e) => fetchAutocompleteStartAsync(e.target.value)} />
            <datalist id="autocomplete">
                {options.length > 0 ?
                    options.map((option) => (
                        <option key={option.Key}>{option.LocalizedName}</option>
                    )) : <option>no options </option>}
            </datalist>
            <button onClick={() => fetchCurrentWeatherStartAsync(searchQuery)}>search</button>
        </div>
    )
}


const mapStateToProps = state => ({
    options: state.autocomplete.options,
    searchQuery: state.autocomplete.searchQuery
})

const mapDispatchToProps = dispatch => ({
    fetchAutocompleteStartAsync: (searchQuery) => dispatch(fetchAutocompleteStartAsync(searchQuery)),
    fetchCurrentWeatherStartAsync: (city) => dispatch(fetchCurrentWeatherStartAsync(city))
})

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch)
