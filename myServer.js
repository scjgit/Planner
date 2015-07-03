var express = require('express');
var config = require('./myConfig.json');

var myServer = express();

myServer.listen(config.port, function(req, res){
	console.log('listening... to port: %s',config.port, config.contextroot);
});

myServer.use(config.contextroot,express.static(__dirname));

myServer.use(function(req, res){
	if(req.path === "/"){
		res.redirect(config.contextroot);
	}
});