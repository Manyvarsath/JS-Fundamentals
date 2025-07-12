const args = process.argv.slice(2);

if (typeof(+args[0]) === 'number' && !isNaN(+args[0])) {
	console.log("My number: " + parseInt(args[0]));
} else {
	console.log("Not a number");
}