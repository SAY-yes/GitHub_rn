import { applyMiddleware, createStore } from 'redux'
import reducers from '../reducers'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const middleware = createReactNavigationReduxMiddleware(
	state => state.nav
);
const store = createStore(reducers, applyMiddleware(middleware))
export default store