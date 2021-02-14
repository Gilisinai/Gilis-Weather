import { uiActionTypes } from './ui.types'

export const toggleDarkMode = mode => ({
    type: uiActionTypes.TOGGLE_DARK_MODE,
    payload: !mode
})


