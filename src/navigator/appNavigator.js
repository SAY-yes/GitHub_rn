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
import {connect} from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers'
import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'
import DynamicBottomTabNavigator from './DynamicBottomTabNavigator'
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
		screen: HomePage,
		navigationOptions: {
			header: null
		}
	},
	DetailPage: {
		screen: DetailPage
	}
})

export const switchNavigator = createSwitchNavigator({
	Init: InitNavigator,
	Main: MainNavigator
},{
		initialRouteName:'Init',
		navigationOptions: {
			header: null
		}
})
export const rootCom = 'Init'  //设置根路由

export const middleware = createReactNavigationReduxMiddleware(
	state => state.nav,
	'reduxMiddleware'
);
const navigatorReduxContainer = createReduxContainer(switchNavigator,'reduxMiddleware');
const mapStateToProps = (state) => ({
	state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(navigatorReduxContainer);

export default createAppContainer(AppWithNavigationState)