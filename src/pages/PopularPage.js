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
	render(){
		// alert(JSON.stringify(this.props))
		return (
			<View style={styles.container}>
				<Text>PopularTab</Text>
				<Text onPress={() => NavigatorUtil.goPage('DetailPage',{navigation:this.props.navigation})}>跳转到详情页</Text>
			</View>
		);
	}
}

export default PopularPage  = () => {
	return createMaterialTopTabNavigator({
		PopularTab1: {
			screen: PopularTab,
			navigationOptions: {
				title: 'Tab1'
			}
		},
		PopularTab2: {
			screen: PopularTab,
			navigationOptions: {
				title: 'Tab2'
			}
		}
	},{
			tabBarOptions: {
			tabStyle: { marginTop: Platform.OS=='ios'?30:0 }
			}
	})
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fcfcfc'
	}
});
