import React, { Component,Fragment } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {
	Platform,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil'
class PopularTab extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>{this.props.tabLabel}</Text>
				<Text onPress={() => NavigatorUtil.goPage('DetailPage',{navigation:this.props.navigation})}>跳转到详情页</Text>
			</View>
		);
	}
}

export default PopularPage  = (props) => {
	const tabNames = ['Java', 'Android', 'IOS', 'React', 'ReactNative', 'PHP']
	const getTabs = () => {
		const tabs = {}
		tabNames.forEach((ele,index) => {
			tabs[`tab${index}`] = {
				screen: (props) => <PopularTab {...props} tabLabel={ele}/>,
				navigationOptions:{
					title:ele
				}
			}
		})
		console.log('tabs', tabs)
		return tabs
	}
	
	return createMaterialTopTabNavigator(getTabs(),{
			tabBarOptions: {
				tabStyle: styles.tabStyle,
				upperCaseLabel:false,    // 是否使标签大写，默认true
				scrollEnabled:true,     // 是否支持选项卡滚动，默认false
				style:{
					backgroundColor:'#678'   // tabBar的背景色
				},
			indicatorStyle: styles.indicatorStyle,     // 标签指示器的样式
			labelStyle: styles.labelStyle,     // 文字的样式
			}
	})
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fcfcfc'
	},
	tabStyle: { 
		marginTop: Platform.OS == 'ios' ? 30 : 0,
		minWidth:50
	},
	indicatorStyle:{
		height:1,
		backgroundColor:'white'
	},
	labelStyle:{
		fontSize:13
	}
});
