var fs = require("fs");

var out;
var args;

args = process.argv.splice(3);

console.log(__dirname);


args.forEach(function (arg) {
    console.log(arg);

    process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  //console.error(err.stack);
  console.log("helolllllllllllllllllll");
  process.exit(1);
})
    //read current directory asynchronous
    fs.realpath(arg, function (err, /* [cache], */ path) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('realpath async: ' + path);
    });
   // out = fs.realpathSync(arg);
    //console.log('real path sync: ' + out);
    fs.stat(arg, function (err, stat) {
        if (err) return;
        fs.readdir(arg, function (err, contents) {
            if (err) return;
            contents.forEach(function (f) {
                console.log('contents: ' + f);
            });
        });
    });

    
    //get list of what’s in the directory
    out = fs.readdirSync(arg);
    console.log('readdir sync: ' + out);
});

