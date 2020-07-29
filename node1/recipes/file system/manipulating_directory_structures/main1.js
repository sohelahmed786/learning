var fs = require('fs'),
	dirExists = false;

//Normalize the arguments
args = process.argv.splice(2);
//loop through named args
args.forEach(function(arg) {
	//mkdirSync - manually handle errors
	try {
		fs.mkdirSync(arg);
	} catch(err) {
		handleError(err);
	}
	
	//mkdir async
	fs.mkdir(arg, function(err) {
		if (err) handleError(err);
	});


});

function handleError(err) {
	console.log(err);
	if (err.code === 'EEXIST') {
		console.log('That directory already exists');
	} else {
		console.log('An error occurred creating the directory');
	}
}