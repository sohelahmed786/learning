/**
* symbolic links
*/
var fs = require('fs');

//fs.link('/opt/Sublime Text 2/sublime_text', '/usr/bin/sublime', function(err) {
//	if (err) throw err;
//});

//fs.linkSync('/opt/Sublime Text 2/sublime_text', '/usr/bin/sublime');

//fs.symlink('/opt/Sublime Text 2/sublime_text', '/usr/bin/sublime', function(err) {
//	if (err) throw err;
//});

//fs.symlinkSync('/opt/Sublime Text 2/sublime_text', '/usr/bin/sublime');

fs.readlink('/usr/bin/sublime', function(err, string) {
	if (err) throw err;
	console.log(string);
});	

var rls = fs.readlinkSync('/usr/bin/sublime');
console.log(rls);