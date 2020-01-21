import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';
import * as actions from './../actions'
import styles from './Styles/BlueScreenStyles'
import { connect } from 'react-redux';

class BlueScreen extends Component {

    constructor(props) {
        super(props)
        const { state, setParams, navigate } = this.props.navigation
        this.params = state.params || {}
    }

    render() {

        return (
            <View style={styles.blueBackground}>
                <Text style={styles.textMiddle}>
                    Blue Screen
                </Text>

                <Button title="Change text"
                    onPress={() => {
                        this.params.changeText("123")
                    }} />


            </View>
        )
    }
}

export default BlueScreen