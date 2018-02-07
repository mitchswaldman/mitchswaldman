export const tileKey = (word, index) => {
	return `${word}_${index}`
}

export const arr_diff = (arr1, arr2) => {
	const diff = {}
	for(let i = 0; i < arr2.length; i++) {
		diff[arr2[i]] = true
	}
	for (let j = 0; j < arr1.length; j++) {
		if(diff[arr1[j]]) {
			delete diff[arr1[j]]
		}
	}
	return Object.keys(diff)
}