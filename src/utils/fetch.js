const postPromise = (url,params) => {
	return () => fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(params)
	})
}
const getPromise = (url) => {
	return () => fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json'
		}
	})
}
const fetchCommon = (promise, success, failure) => {
	promise()
		.then(res => {
			console.log('fetch-success', res)
			if (res.ok) {
				return res.json()
			}
			throw new Error(res.url)
		})
		.then(resText => {
			console.log('resText', resText)
			if(success){
				success(resText)
			}
		})
		.catch(err => {
			// 网络故障、权限问题
			console.log('fetch-error', err)
			if (failure){
				failure(false)
			}
		})
}
export const fetchPost = (url, params, success, failure) => fetchCommon(postPromise(url, params), success, failure)
export const fetchGet = (url, success, failure) => fetchCommon(getPromise(url), success, failure)