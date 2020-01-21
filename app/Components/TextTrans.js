import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import styles from './Styles/TextStyles'
import { connect } from 'react-redux';
import I18n from '../I18n';

class TextTrans extends Component {

    constructor(props) {
        super(props)

        this.getLabel = this.getLabel.bind(this)
    }


    getLabel() {
        var value = I18n.translate(this.props.children, this.props.locale)

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
            <Text style={this.props.style}>
                {this.getLabel()}
            </Text>
        )
    }

}

const mapStateToProps = state => ({
    locale: state.locale
})


export default connect(mapStateToProps, null)(TextTrans)