import Types from '../type'
export const onThemeChange = (theme) => {
	console.log('onThemeChange',theme)
	return {
		type: Types.THEME_CHANGE,
		theme: theme
	}
}