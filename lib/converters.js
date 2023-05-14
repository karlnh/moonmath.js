// function numToArr(num) {
// 	return Math.round(num).toString().split("").map(n => parseInt(n));
// }

// function arrToNum(arr) {
// 	return parseInt(arr.map(n => n.toString()).join(''));
// }

function addZeros(baseArr, arr) {
	let counter = baseArr.length - arr.length;
	let newArr = arr;
	while (counter > 0) {
		newArr.unshift(0);
		counter--
	}
	return newArr;
}

module.exports = { addZeros };