import {AutocompleteActionTypes} from './autocomplete.types'

const initialState = {
    options: [],
    isFetching: false,
    errorMessage: undefined
}

const autocompleteReducer = (state = initialState, action) => {
    switch(action.type) {
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_START:
            return {
                ...state,
                isFetching: true
            }
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                options: [...action.payload],
                isFetching: false
            }
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default autocompleteReducer