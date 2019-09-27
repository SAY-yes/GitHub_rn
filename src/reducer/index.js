import {combineReducers} from 'redux'
import themeReducer from './theme'
import { rootCom, switchNavigator} from '../navigator/AppNavigator'

// 指定默认state
const navState = switchNavigator.router.getStateForAction(switchNavigator.router.getActionForPathAndParams(rootCom))

// 创建自己的navigation reducer
const navReducer = (state = navState,action) => {
	const nextState = switchNavigator.router.getStateForAction(action,state)
	return nextState||state
}

// 合并reducer
const rootReducer = combineReducers({
	nav: navReducer,
	themeReducer: themeReducer
})
export default rootReducer