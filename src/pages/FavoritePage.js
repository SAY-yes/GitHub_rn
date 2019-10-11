import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import { fetchPost, fetchGet} from '../utils/fetch.js'

export default class FavoritePage extends Component {
	constructor(props){
		super(props);
		this.state={
			data:undefined
		}
	}
	componentDidMount(){
		const text = 'react'
		const url = `https://api.github.com/search/repositories?q=${text}`
		fetchGet(url,res => {
			this.setState({ data:res})
		})
	}
	render(){
		const dataText = this.state.data?JSON.stringify(this.state.data.items.slice(0,3)):''
		return (
			<View style={styles.container}>
				<Text style={styles.title}>网络请求</Text>
				<ScrollView style={styles.scroll}>
					<Text>{dataText}</Text>
				</ScrollView>
				
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'pink',
		paddingTop:50
	},
	title:{
		marginBottom:20
	},
	scroll:{
		backgroundColor:'#ccc',
		paddingTop:20
	},
});
