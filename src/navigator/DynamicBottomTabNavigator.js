import React, { Component, Fragment } from 'react';
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs'
import PopularPage from '../pages/PopularPage'
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const BottomTabs = {
	PopularPage: {
		screen: PopularPage(),
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
}
export default DynamicTabNavigator = () => {
	const { PopularPage, TrendingPage, FavoritePage, MyPage } = BottomTabs
	// PopularPage.navigationOptions.tabBarLabel = '最新'  // 动态配置tab属性
	const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage}
	return createBottomTabNavigator(tabs,{
		tabBarOptions:{
			activeTintColor:'green'
		},
		tabBarComponent: props => (   //自定义底部导航
			<TabBarComponent 
				{...props} 
				style={{ borderTopColor: '#605F60' }} 
			/>
		),
	})
}

class TabBarComponent extends Component{
	constructor(props){
		super(props);
		this.theme = {
			tintColor:props.activeTintColor,
			update:new Date().getTime()
		}
	}
	
	render(){
		const {routes,index} = this.props.navigation.state
		if(routes[index].params){
			const { theme } = routes[index].params
			// 以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
			if(theme&&theme.update>this.theme.update){
				this.theme = theme
			}
		}
		return <BottomTabBar
			{...this.props}
			activeTintColor={this.theme.tintColor||this.props.activeTintColor}
		/>
	}
}
