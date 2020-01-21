import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'
import LanguageReducer from './LanguageReducer'

export default combineReducers({
    counter: CounterReducer,
    locale: LanguageReducer
})