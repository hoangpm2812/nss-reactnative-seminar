/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import YellowScreen from './../Containers/YellowScreen'
import WhiteScreen from './../Containers/WhiteScreen'
import CalculateScreen from './../Containers/CalculateScreen'
import CalculateWithComp from './../Containers/CalculateWithComp'
import CalculateReduxScreen from './../Containers/CalculateReduxScreen'
import BlueScreen from './../Containers/BlueScreen'
import DesignScreen from './../Containers/DesignScreen'
import ChangeLanguageScreen from './../Containers/ChangeLanguageScreen'
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './../stores'


const AppNavigator = createStackNavigator(
    {
        Yellow: YellowScreen,
        Blue: BlueScreen,
        Design: DesignScreen,
        White: WhiteScreen,
        Calculate: CalculateScreen,
        CalculateWithComp: CalculateWithComp,
        CalculateRedux: CalculateReduxScreen,
        ChangeLanguage: ChangeLanguageScreen
    },
    {
        headerMode: 'float',
        initialRouteName: 'CalculateRedux',
        defaultNavigationOptions: {
            gestureEnabled: false
        }
    }
)
 
let Navigation = createAppContainer(AppNavigator)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
