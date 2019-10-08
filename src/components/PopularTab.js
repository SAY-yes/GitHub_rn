import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import NavigatorUtil from '../navigator/NavigatorUtil'

export default class PopularTab extends Component {
	constructor(props) {
		super(props);
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fcfcfc'
	}
});