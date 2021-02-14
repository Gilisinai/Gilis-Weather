import { uiActionTypes } from './ui.types'

const initialState = {
    darkMode: null,
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiActionTypes.TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            }
        default:
            return state
    }
}

export default uiReducer