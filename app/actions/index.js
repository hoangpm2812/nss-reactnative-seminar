import {INCREASE, DECREASE, CHANGE_LANGUAGE} from './ActionTypes'

export const counterIncrease = () => ({ type: INCREASE })
export const counterDecrease = () => ({ type: DECREASE })

export const changeLanguage = (locale) => ({ type: CHANGE_LANGUAGE, locale: locale })