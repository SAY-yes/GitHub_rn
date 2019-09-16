import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
} from 'react-native';

export default class TrendingPage extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text>TrendingPage</Text>
				<Button 
					title="改变主题色"
					onPress={()=>{
						this.props.navigation.setParams({
							theme:{
								tintColor:'red',
								update: new Date().getTime()
							}
						})
					}}
				/>
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
