const { addZeros } = require('../converters');

function moonSum(...args) {
	// turn the arguments into string arrays
	let baseZeros = [];
	// loop splitting arguments and setting max baseZeros
	for (let i = 0; i < args.length; i++) {
	  args[i] = args[i].toString().split('').map(x => x = Number(x));
	  
	  if (args[i].length > baseZeros.length) {
		baseZeros = args[i].map(x => x = 0);
	  }
	}
	// loop adding zeroes to args according to max baseZeros
	
	for (let i = 0; i < args.length; i++) {
		addZeros(baseZeros, args[i]);
	}
	// loop updating total index spots
	let total = baseZeros;
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