import { FavoritesActionTypes } from './favorites.types'

const initialState = {
    favorites: null
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FavoritesActionTypes.ADD_TO_FAVORITES:
            return {
                ...state
            }
        default:
            return state
    }
}

export default favoritesReducer