const args = process.argv.slice(2);

if (args.length === 2 && !isNaN(args[0]) && !isNaN(args[1])) {
	console.log(parseInt(args[0]) + parseInt(args[1]));
} else {
	console.log("NaN")
}