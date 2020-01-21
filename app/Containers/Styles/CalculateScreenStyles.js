import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    whiteBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    viewButton: {
        flexDirection: 'row'
    },
    btnCalculate: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#DDDDDD',
        borderRadius: 10
    },
    textMiddle: {
        color: 'black',
        fontSize: 20
    }
})