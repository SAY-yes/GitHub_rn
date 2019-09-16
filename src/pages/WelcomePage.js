import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil'

export default class WelcomePage extends Component {
	componentDidMount(){
		this.timer = setTimeout(() => {
			NavigatorUtil.resetToHomePage({
				navigation:this.props.navigation
			})
		}, 200);
	}
	componentWillUnmount(){
		this.timer && clearTimeout(this.timer)
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>welcomePage</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
});
