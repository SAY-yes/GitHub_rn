import React from 'react'
import { StyleSheet } from 'react-native'
import {
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation'
import {
	createStackNavigator
} from 'react-navigation-stack'
import {
	createBottomTabNavigator,
	createMaterialTopTabNavigator
} from 'react-navigation-tabs'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import LoginPage from '../pages/LoginPage'
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import BottomTabComponent from '../components/BottomTabComponent'
import PopularTab from '../components/PopularTab'
import DetailPage from '../pages/DetailPage'
const InitNavigator = createStackNavigator({
	LoginPage:{
		screen: LoginPage,
		navigationOptions:{
			header:null
		}
	}
})
const topTabNames = ['Java', 'Android', 'IOS', 'React', 'ReactNative', 'PHP']
const topTabsConfig = []
topTabNames.forEach((ele, index) => {
	topTabsConfig[`tab_${ele}`] = {
		screen: (props) => <PopularTab {...props} tabLabel={ele} />,
		navigationOptions: {
			title: ele
		}
	}
})
const TopTabNavigator = createMaterialTopTabNavigator(topTabsConfig, {
	tabBarOptions: {
		tabStyle: {
			marginTop: Platform.OS == 'ios' ? 30 : 0,
			minWidth: 50
		},
		upperCaseLabel: false,    // 是否使标签大写，默认true
		scrollEnabled: true,     // 是否支持选项卡滚动，默认false
		style: {
			backgroundColor: '#678'   // tabBar的背景色
		},
		indicatorStyle: {     // 标签指示器的样式
		height: 1,
		backgroundColor: 'white'
	},     
		labelStyle: {      // 文字的样式
			fontSize: 13
		}     
	}
})
const BottomTabNavigator = createBottomTabNavigator({
	PopularPage: {
		screen: TopTabNavigator,
		navigationOptions: {
			tabBarLabel: '最热',
			tabBarIcon: ({ tintColor, focused }) => {
				return <MaterialIcons size={20} name={'whatshot'} color={tintColor} />
			}
		}
	},
	TrendingPage: {
		screen: TrendingPage,
		navigationOptions: {
			tabBarLabel: '趋势',
			tabBarIcon: ({ tintColor, focused }) => {
				return <Ionicons size={20} name={'md-trending-up'} color={tintColor} />
			}
		}
	},
	FavoritePage: {
		screen: FavoritePage,
		navigationOptions: {
			tabBarLabel: '收藏',
			tabBarIcon: ({ tintColor, focused }) => {
				return <MaterialIcons size={20} name={'favorite'} color={tintColor} />
			}
		}
	},
	MyPage: {
		screen: MyPage,
		navigationOptions: {
			tabBarLabel: '我的',
			tabBarIcon: ({ tintColor, focused }) => {
				return <Entypo size={20} name={'user'} color={tintColor} />
			}
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: 'green'
	},
	tabBarComponent: props => (   //自定义底部导航
		<BottomTabComponent
			{...props}
			style={{ borderTopColor: '#605F60' }}
		/>
	),
})
const MainNavigator = createStackNavigator({
	HomePage: {
		screen: BottomTabNavigator,
		navigationOptions: {
			header: null
		}
	},
	DetailPage:{
		screen: DetailPage
	}
})

const switchNavigator = createSwitchNavigator({
	Init: InitNavigator,
	Main: MainNavigator
})
const switchReduxContainer = createReduxContainer(switchNavigator);
const mapStateToProps = (state) => ({
	state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(switchReduxContainer);

export default createAppContainer(AppWithNavigationState)
