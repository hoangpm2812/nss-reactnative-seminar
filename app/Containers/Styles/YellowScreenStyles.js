import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    yellowBackground: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    viewButton: {
        flexDirection: 'row'
    },
    btnNavigateBlue: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'red'
    },
    textMiddle: {
        color: 'black',
        fontSize: 20
    }
})