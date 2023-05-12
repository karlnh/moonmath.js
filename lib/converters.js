function numToArr(num) {
	return Math.round(num).toString().split("").map(n => parseInt(n));
}

function arrToNum(arr) {
	return parseInt(arr.map(n => n.toString()).join(''));
}

function addZeroes(arr1, arr2) {	
	if (arr1.length === arr2.length) {
		return [arr1, arr2];
	}
	const largest = Math.max(arr1.length, arr2.length) === arr1.length ? arr1 : arr2;
	const smallest = Math.min(arr1.length, arr2.length) === arr1.length ? arr1 : arr2;
	const lengthDiff = Math.max(arr1.length, arr2.length) - Math.min(arr1.length, arr2.length);
	
	for (let i = 0; i < lengthDiff; i++) {
		smallest.unshift(0);
	}
	return [largest, smallest];
}

module.exports = { numToArr, arrToNum, addZeroes };