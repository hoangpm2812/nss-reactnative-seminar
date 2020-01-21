import { CHANGE_LANGUAGE } from './../actions/ActionTypes'

const defaultLocale = 'en'

export default LanguageReducer = (state = defaultLocale, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.locale

        default:
            return state
    }
}