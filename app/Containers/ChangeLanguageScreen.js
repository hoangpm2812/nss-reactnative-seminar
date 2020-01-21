import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';
import CustomText from './../Components/TextTrans'
import * as actions from './../actions'
import styles from './Styles/ChangeLangualeStyles'
import { connect } from 'react-redux';

class ChangeLanguageScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.blueBackground}>
                <CustomText style={styles.textBlue}>BLUE_SCREEN</CustomText>
                <Button title="VietNam"
                    onPress={() => {
                        this.props.changeLanguage('vi')
                    }} />

                <Button title="English"
                    onPress={() => {
                        this.props.changeLanguage('en')
                    }} />


            </View>
        )
    }
}

export default connect(null, actions)(ChangeLanguageScreen)