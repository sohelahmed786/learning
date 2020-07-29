process.stdout.write("hello");

console.log("test");


process.on('exit', fs => {
    console.log("on fuction");

});