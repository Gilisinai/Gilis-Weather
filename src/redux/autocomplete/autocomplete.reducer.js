import { AutocompleteActionTypes } from './autocomplete.types'
import { checkValidInput } from './autocomplete.utils'

const initialState = {
    options: [],
    searchQuery: null,
    isFetching: false,
    errorMessage: undefined,
    isMatch: false
}

const autocompleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_START:
            return {
                ...state,
                isFetching: true
            }
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                options: [...action.payload],
                isFetching: false,
                isMatch: checkValidInput([...action.payload], state.searchQuery)
            }
        case AutocompleteActionTypes.FETCH_AUTOCOMPLETE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case AutocompleteActionTypes.FETCH_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        case AutocompleteActionTypes.CHECK_MATCH_INPUT:
            return {
                ...state,
                isMatch: checkValidInput(state.options, action.payload)
            }
        default:
            return state
    }
}

export default autocompleteReducer