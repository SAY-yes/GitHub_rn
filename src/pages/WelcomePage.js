/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

export default class WelcomePage extends Component {
	componentDidMount(){
		this.timer = setTimeout(() => {
			const {navigation} = this.props
			navigation.navigate('Main')
		}, 2000);
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
