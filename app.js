var express = require('express');
var mustache = require('mustache')

var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));


app.set('view engine', 'mustache');


app.get('/', function(request, response) {
	  var view = {
	  title: "Joe",
	  calc: function () {
	    return 2 + 4;
	  }
	};
 
	var output = mustache.render("{{title}} spends {{calc}}", view);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});