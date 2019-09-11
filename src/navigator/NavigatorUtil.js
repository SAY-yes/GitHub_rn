// 全局导航跳转工具类
export default class NavigatorUtil {
	/**
	 * 跳转到指定页面
	 * @param params 要传递的参数 
	 * @param page 要跳转的页面名
	 */
	static goPage(page,params) {
		const { navigation } = params
		if (!navigation){
			console.log('navigation can not be bull')
			return;
		}
		navigation.navigate(page,{...params})
	}
	/**
	 * 返回上一页
	 * @param navigation 
	 */
	static goBack(navigation) {
		navigation.goBack()
	}
/**
 * 返回至首页
 * @param navigation
 */
	static resetToHomePage(params){
		const { navigation } = params
		navigation.navigate('Main')
	}
}