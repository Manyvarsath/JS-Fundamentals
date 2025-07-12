const args = process.argv.slice(2);

if (args.length === 0 || isNaN(args[0])) {
	console.log("Missing size");
} else {
	for (let i = 0; i < parseInt(args[0]); i++) {
		console.log("x".repeat(parseInt(args[0])));
	}
}
