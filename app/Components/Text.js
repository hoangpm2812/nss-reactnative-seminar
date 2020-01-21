import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './Styles/TextStyles'

class CustomText extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
        this.getLabel = this.getLabel.bind(this)
        this.setValue = this.setValue.bind(this)
    }

    setValue(text) {
        console.log('set value child : ' + text)
        this.setState({
            value: text
        })
    }

    getLabel() {
        var value = this.props.children

        if (this.props.upper) {
            value = value.toUpperCase()
        }

        if (this.props.lower) {
            value = value.toLowerCase()
        }

        return value
    }

    render() {
        return (
            <Text>
                {this.state.value == null ? this.getLabel() : this.state.value}
            </Text>
        )
    }

    componentDidMount() {
        if (this.props.onRef) this.props.onRef(this)
    }

    componentWillUnmount() {
        if (this.props.onRef) this.props.onRef(undefined)
    }
}

export default CustomText