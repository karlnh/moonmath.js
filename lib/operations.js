const arrToNum = require("./converters");

function moonSum(arr1, arr2) {
	return arrToNum(arr1.map((n, index) => Math.max(n, arr2[index])));
}

function moonProduct(arr1, arr2) {
		// this is a little complex. Pretend like something is here.
}

module.exports = { moonSum };