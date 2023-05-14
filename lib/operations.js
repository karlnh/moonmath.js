const { arrToNum } = require("./converters");

function moonSum(arr1, arr2) {
	return arrToNum(arr1.map((n, index) => Math.max(n, arr2[index])));
}

function moonSum(...nums) {
	// turn the arguments into string arrays
	let baseLength = [];
	let total = [];
	// loop splitting arguments and setting max baselength
	for (let i = 0; i < nums.length; i++) {
	  nums[i] = nums[i].toString().split('').map(x => x = Number(x));
	  
	  if (nums[i].length > baseLength.length) {
		baseLength = nums[i].map(x => x = 0);
	  }
	}
	// loop adding zeroes to args according to max baselength
	for (let i = 0; i < nums.length; i++) {
	  let diff = baseLength.length - nums[i].length;
	  
	  while (diff > 0) {
		nums[i].unshift(0);
		diff--
	  }
	}
	// loop updating total index spots
	total = baseLength;
	for (let i = 0; i < nums.length; i++) {
	  for (let j = 0; j < nums[i].length; j++) {
		if (nums[i][j] > total[j]) {
		  total[j] = nums[i][j]
		}
	  }
	}
	const numTotal = parseInt(total.map(n => n.toString()).join(''));
	return numTotal;
  }

function moonProduct(arr1, arr2) {
		// this is a little complex. Pretend like something is here.
}

module.exports = { moonSum };