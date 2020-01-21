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
import styles from './Styles/WhiteScreenStyles'

class WhiteScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            middleText: "White Screen"
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText(text) {
        this.setState({middleText: text})
    }

    render() {
        return (
            <View style={styles.whiteBackground}>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={styles.btnNavigateBlue}
                        onPress={() => {
                            this.props.navigation.navigate('Blue', {
                                changeText: this.changeText
                            })
                        }}>
                        <Text>Go to Blue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnNavigateBlue}
                        onPress={() => {
                            this.props.navigation.navigate('Design', {
                                changeText: this.changeText
                            })
                        }}>
                        <Text>Go to Design</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textMiddle}>
                        {this.state.middleText}
                    </Text>
                </View>

                

            </View>
        )
    }

    componentWillUnmount() {
        console.log('WHITE componentWillUnmount')
    }
}

export default WhiteScreen