import {applyMiddleware,createStore} from 'redux'
import reducers from '../reducer'
import { middleware } from '../navigator/appNavigator'
const logger = store => next => action => {
	if(typeof action === 'function'){
		console.log('dispatch a function')
	}else{
		console.log('dispatch ',action)
	}
	const result = next(action)
	console.log('nextState',store.getState())
}
const middlewares = applyMiddleware(middleware, logger)
const store = createStore(reducers, middlewares)
export default store