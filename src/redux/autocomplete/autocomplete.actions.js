import {AutocompleteActionTypes} from './autocomplete.types'

export const fetchAutocompleteStart = () => ({
    type: AutocompleteActionTypes.FETCH_AUTOCOMPLETE_START
})

export const fetchAutocompleteSuccess = (autocomplete, searchQuery) => ({
    type: AutocompleteActionTypes.FETCH_AUTOCOMPLETE_SUCCESS,
    payload:  [...autocomplete], searchQuery 
})


export const fetchAutocompleteFailure = errorMessage => ({
    type: AutocompleteActionTypes.FETCH_AUTOCOMPLETE_FAILURE,
    payload: errorMessage
})

export const fetchSearchQuery = searchQuery => ({
    type: AutocompleteActionTypes.FETCH_SEARCH_QUERY,
    payload: searchQuery 
})

export const checkVaildInput = searchQuery => ({
    type: AutocompleteActionTypes.CHECK_MATCH_INPUT,
    payload: searchQuery 
})

export const fetchAutocompleteStartAsync = (searchQuery) => {
    return async dispatch => {
        try {
            dispatch(fetchSearchQuery(searchQuery))
            dispatch(fetchAutocompleteStart())
            const key = process.env.REACT_APP_WEATHER_API_KEY
            const autocompleteUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${searchQuery}`
    
            const response = await fetch(autocompleteUrl)
            const data = await response.json()
            dispatch(fetchAutocompleteSuccess(data))
        } catch (error) {
            dispatch(fetchAutocompleteFailure(error.message))
        }
   
    }
}