import React from 'react'
import {
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation'
import {
	createStackNavigator
} from 'react-navigation-stack'
import {
	createBottomTabNavigator
} from 'react-navigation-tabs'
import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

const InitNavigator = createStackNavigator({
	WelcomePage:{
		screen: WelcomePage,
		navigationOptions:{
			header:null
		}
	}
})

const MainNavigator = createStackNavigator({
	HomePage: {
		screen: HomePage(),
		navigationOptions: {
			header: null
		}
	},
	DetailPage: {
		screen: DetailPage
	}
})

const switchNavigator = createSwitchNavigator({
	Init: InitNavigator,
	Main: MainNavigator
},{
		initialRouteName:'Init',
		navigationOptions: {
			header: null
		}
})

export default createAppContainer(switchNavigator)