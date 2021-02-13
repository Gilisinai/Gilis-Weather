import {FavoritesActionTypes} from './favorites.types'

export const addCityToFavorites = city => ({
    type: FavoritesActionTypes.ADD_CITY_TO_FAVORITES,
    payload: city
})

export const removeCityFromFavorites = city => ({
    type: FavoritesActionTypes.REMOVE_CITY_FROM_FAVORITES,
    payload: city
})