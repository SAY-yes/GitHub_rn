import React, { Component, Fragment } from 'react';
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs'
import PopularPage from '../pages/PopularPage'
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux';
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
const DynamicTabNavigator = () => {
	const { PopularPage, TrendingPage, FavoritePage, MyPage } = BottomTabs
	// PopularPage.navigationOptions.tabBarLabel = '最新'  // 动态配置tab属性
	const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage}
	return createBottomTabNavigator(tabs,{
		tabBarOptions:{
			activeTintColor:'green'
		},
		tabBarComponent: props => {
			return (   //自定义底部导航
				<TabBarComponentCon
					{...props}
					style={{ borderTopColor: '#605F60' }}
				/>
			)
		},
	})
}
export default DynamicTabNavigator

class TabBarComponent extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <BottomTabBar
			{...this.props}
			activeTintColor={this.props.theme}
		/>
	}
}
const mapStateToProps = state => {
	return ({
		theme: state.themeReducer.theme
	})
}
const TabBarComponentCon = connect(mapStateToProps)(TabBarComponent)