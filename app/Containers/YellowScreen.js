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
import styles from './Styles/YellowScreenStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';

class YellowScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            middleText: "Yellow Screen"
        }

        this.changeText = this.changeText.bind(this)
    }

    changeText(text) {
        this.setState({middleText: text})
    }

    render() {
        return (
            <View style={styles.yellowBackground}>
                <Text style={styles.textMiddle}>
                    {this.state.middleText}
                </Text>

                

                <View style={styles.viewButton}>

                    <TouchableOpacity
                        style={styles.btnNavigateBlue} onPress={() => {
                            this.props.navigation.navigate('Blue', {
                                changeText: this.changeText
                            })
                        }}>
                            <Text>sadasd</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnNavigateBlue} onPress={() => {
                            this.props.navigation.navigate('Design', {
                                changeText: this.changeText
                            })
                        }}>
                        <Text>sadasd</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

export default YellowScreen