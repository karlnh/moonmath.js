function moonSum(...args) {
	// turn the arguments into string arrays
	let baseLength = [];
	// loop splitting arguments and setting max baselength
	for (let i = 0; i < args.length; i++) {
	  args[i] = args[i].toString().split('').map(x => x = Number(x));
	  
	  if (args[i].length > baseLength.length) {
		baseLength = args[i].map(x => x = 0);
	  }
	}
	// loop adding zeroes to args according to max baselength
	for (let i = 0; i < args.length; i++) {
	  let diff = baseLength.length - args[i].length;
	  
	  while (diff > 0) {
		args[i].unshift(0);
		diff--
	  }
	}
	// loop updating total index spots
	let total = baseLength;
	for (let i = 0; i < args.length; i++) {
	  for (let j = 0; j < args[i].length; j++) {
		if (args[i][j] > total[j]) {
		  total[j] = args[i][j]
		}
	  }
	}
	const numTotal = parseInt(total.map(n => n.toString()).join(''));
	return numTotal;
}

module.exports = { moonSum };