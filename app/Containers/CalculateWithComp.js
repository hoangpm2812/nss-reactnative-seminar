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
import styles from './Styles/CalculateScreenStyles'

class CalculateWithComponentScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText(text) {
        this.setState({ count: text })
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        console.log("render")
        return (
            <View style={styles.whiteBackground}>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.child.setValue(--this.state.count)
                        }}>
                        <Text>Decrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.child.setValue(++this.state.count)
                        }}>
                        <Text>Increase</Text>
                    </TouchableOpacity>

                </View>

                {/* custom text component */}
                <View style={{ alignItems: 'center' }}>
                    <CustomText onRef={ref => {
                        this.child = ref
                    }}>
                        {this.state.count}
                    </CustomText>
                </View>

                {/* <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.navigation.navigate('White')
                        }}>
                        <Text>Go to navigation</Text>
                    </TouchableOpacity>
                </View> */}


            </View>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default CalculateWithComponentScreen