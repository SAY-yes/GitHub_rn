import React, { Component,Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../actions'

class TrendingPage extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text>TrendingPage</Text>
				<Button 
					title="改变主题色"
					onPress={()=>{
						this.props.onThemeChange('red')
					}}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => {
	return ({
		theme: state.themeReducer.theme
	})
}
const mapDispatchToProps = dispatch => ({
	onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage)
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fcfcfc'
	}
});
