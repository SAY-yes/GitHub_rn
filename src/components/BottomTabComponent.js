import React, { Component, Fragment } from 'react';
import { BottomTabBar } from 'react-navigation-tabs'
import { connect} from 'react-redux'

class BottomTabComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <BottomTabBar
			{...this.props}
			activeTintColor={this.props.theme}
		/>
	}
}
const mapStateToProps = state => {
	return ({
		theme: state.themeReducer.theme
	})
}

export default connect(mapStateToProps)(BottomTabComponent)