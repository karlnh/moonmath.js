const { numToArr, addZeroes } = require("./lib/converters");
const { moonSum } =require("./lib/operations");

function moon(op, n1, n2) {
	let [arr1, arr2] = addZeroes(numToArr(n1), numToArr(n2));
	switch (op) {
	case '+':
		return moonSum(arr1, arr2);
	case '*':
		return "Multiplication doesn't work yet. Sorry."
	default:
		return null;
	}
};

module.exports = moon;