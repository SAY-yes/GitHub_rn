import Types from './actionTypes'
export const onThemeChange = (theme) => {
	return {
		type: Types.THEME_CHANGE,
		theme: theme
	}
}