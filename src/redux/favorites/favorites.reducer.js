import { FavoritesActionTypes } from './favorites.types'
import { addCityTofavorites } from './favorites.utils'

const initialState = {
    favorites: []
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FavoritesActionTypes.ADD_CITY_TO_FAVORITES:
            return {
                ...state,
                // favorites: [...state.favorites, action.payload]
                favorites: addCityTofavorites(state.favorites, action.payload)
            }
        default:
            return state
    }
}

export default favoritesReducer