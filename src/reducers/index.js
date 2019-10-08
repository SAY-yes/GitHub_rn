import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../navigator/appNavigator'
import themeReducer from './themeReducer'

const navReducer = createNavigationReducer(AppNavigator);

// 合并reducer
const rootReducer = combineReducers({
	nav: navReducer,
	themeReducer: themeReducer
})
export default rootReducer