exports.index = function(req,res){
	var api = require("../lib/api");
	api.index.execute(function(err,response){
		res.send(response);
	});
}