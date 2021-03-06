import Types from '../actions/actionTypes'
const defaultState = {
	theme: 'blue'
}
export default themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case Types.THEME_CHANGE:
			return {
				...state,
				theme: action.theme
			};

		default:
			return state
	}
}