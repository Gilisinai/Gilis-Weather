import React from 'react'
import { connect } from 'react-redux'
import { fetchAutocompleteStartAsync } from '../redux/autocomplete/autocomplete.actions'

function CitySearch({fetchAutocompleteStartAsync, options}) {

   
    return (
        <div className="search">
            <input name="autocomplete" id="search-input" list="autocomplete" placeholder="enter city" />
            <datalist id="autocomplete">
                {options.length > 0 ? 
                options.map((option) => (
                    <option key={option.Key}>{option.LocalizedName}</option>
                )) : <option>no options </option> }
            </datalist>
            <button onClick={()=> fetchAutocompleteStartAsync('te')}>search</button>
        </div>
    )
}


const mapStateToProps = state => ({
    options: state.autocomplete.options
})

const mapDispatchToProps = dispatch => ({
    fetchAutocompleteStartAsync: (searchQuery) => dispatch(fetchAutocompleteStartAsync(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch)
