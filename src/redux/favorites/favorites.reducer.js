import { FavoritesActionTypes } from './favorites.types'
import { addCityTofavorites, removeCityFromfavorites } from './favorites.utils'

const initialState = {
    favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FavoritesActionTypes.ADD_CITY_TO_FAVORITES:
            return {
                ...state,
                favorites: addCityTofavorites(state.favorites, action.payload)
            }
        case FavoritesActionTypes.REMOVE_CITY_FROM_FAVORITES:
            return {
                ...state,
                favorites: removeCityFromfavorites(state.favorites, action.payload)
            }
        default:
            return state
    }
}

export default favoritesReducer