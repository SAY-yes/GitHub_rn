import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

export default class FavoritePage extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text>FavoritePage</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fcfcfc'
	}
});
