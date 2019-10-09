import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Text,BackHandler} from 'react-native'
import NavigatorUtil from '../navigator/NavigatorUtil'
import {connect} from 'react-redux'
import { NavigationActions} from 'react-navigation'

class PopularTab extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('nav', this.props.nav)
		BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
	}
	onBackPress = () => {
		const { navigation: { dispatch }, nav } = this.props
		if (nav.routes[1].index === 0) {
			return false
		}
		dispatch(NavigationActions.back())
		return true
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.tabLabel}</Text>
				<Text onPress={() => NavigatorUtil.goPage('DetailPage', { navigation: this.props.navigation })}>跳转到详情页</Text>
			</View>
		);
	}
}
const mapStateToProps = state => ({
	nav: state.nav
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(PopularTab)
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fcfcfc'
	}
});