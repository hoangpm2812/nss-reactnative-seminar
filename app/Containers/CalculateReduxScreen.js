import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Button,
    StatusBar,
} from 'react-native';
import CustomText from './../Components/Text'
import TextTrans from './../Components/TextTrans'
import styles from './Styles/CalculateScreenStyles'
import * as actions from './../actions'
import { connect } from 'react-redux';

class CalculateReduxScreen extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        console.log("render")
        return (
            <View style={styles.whiteBackground}>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.counterDecrease()
                        }}>
                        <TextTrans>DECREASE</TextTrans>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.counterIncrease()
                        }}>
                        <TextTrans>INCREASE</TextTrans>
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <CustomText style={styles.textMiddle}>
                        {this.props.counter}
                    </CustomText>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.navigation.navigate('White')
                        }}>
                        <TextTrans>GO_TO_NAVIGATION</TextTrans>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.navigation.navigate('ChangeLanguage')
                        }}>
                        <Text>GO_TO_CHANGE_LANGUAGE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps, actions)(CalculateReduxScreen)