import React, { Component,Fragment } from 'react';
import { View } from 'react-native'
import {
	createBottomTabNavigator
} from 'react-navigation-tabs'
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import DynamicTabNavigator from '../navigator/DynamicBottomTabNavigator'

export default class HomePage extends Component{
	_tabNavigator(){
		return createBottomTabNavigator({
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
		})
	}
	render(){
		const Tab = this._tabNavigator()
		return <Tab />
	}
}
