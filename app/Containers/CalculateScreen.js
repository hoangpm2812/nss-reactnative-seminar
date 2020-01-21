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

class CalculateScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText(text) {
        this.setState({count: text})
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }

    render() {        
        console.log("render")
        return (
            <View style={styles.whiteBackground}>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.setState({ count: this.state.count - 1 })
                        }}>
                        <Text>Decrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.setState({count: this.state.count + 1})
                        }}>
                        <Text>Increase</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textMiddle}>
                        {this.state.count}
                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnCalculate}
                        onPress={() => {
                            this.props.navigation.navigate('White')
                        }}>
                        <Text>Go to navigation</Text>
                    </TouchableOpacity>
                </View>
                

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

export default CalculateScreen