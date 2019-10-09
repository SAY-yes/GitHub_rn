import React, { Component,Fragment } from 'react';
import { View } from 'react-native'
import {
	createAppContainer
} from 'react-navigation'
import DynamicTabNavigator from '../navigator/DynamicBottomTabNavigator'

export default class HomePage extends Component{

	render(){
		const Tabs = createAppContainer(DynamicTabNavigator())
		return <Tabs />
	}
}
