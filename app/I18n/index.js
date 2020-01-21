import vi from './languages/vi'
import en from './languages/en'

const translate = (text, locale) => {
    if (locale == 'vi') {
        return vi[text]
    } else if (locale == 'en') {
        return en[text]
    }
}

export default {
    translate
}