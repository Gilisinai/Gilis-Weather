import {FavoritesActionTypes} from './favorites.types'

export const addCityToFavorites = city => ({
    type: FavoritesActionTypes.ADD_CITY_TO_FAVORITES,
    payload: city
})