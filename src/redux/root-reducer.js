import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import weatherReducer from './weather/weather.reducer'
import favoritesReducer from './favorites/favorites.reducer'
import autocompleteReducer from './autocomplete/autocomplete.reducer'
import uiReducer from './ui/ui.reducer'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites']
}

const rootReducer = combineReducers({
    weather: weatherReducer,
    favorites: favoritesReducer,
    autocomplete: autocompleteReducer,
    ui: uiReducer
})

export default persistReducer(persistConfig, rootReducer)