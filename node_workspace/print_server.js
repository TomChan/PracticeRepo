var C = require('./constants_path.js');

var app = require('http').createServer(handler);
var url = require('url');
var fs = require("fs");


app.listen(8081);

function handler (req, res) {
	var path = url.parse(req.url).pathname;

	switch (path)
	{
		case "/":
			console.log("Path: /");
			fs.readFile(__dirname + '/print_simulator.html',
				function (err, data) {
			    	if (err) {
			      		res.writeHead(500);
			      		return res.end('Error loading index.html');
			    	}

			    	res.writeHead(200);
			    	res.end(data);
			  });
			break;
		case global.PATH_LOGIN :
			console.log("Path: "+global.PATH_LOGIN);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.USERNAME);
				console.log(jsonObj.PASSWORD);
			});
			var result = {API_KEY:'apikey'};
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_VALIDATE_API_KEY :
			console.log("Path: "+global.PATH_VALIDATE_API_KEY);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.API_KEY);
			});
			var result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_REQUEST_PRINT_JOBS :
			console.log("Path: "+global.PATH_REQUEST_PRINT_JOBS);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.LAST_PID);
				console.log(jsonObj.SIZE);
			});
			var result = {PRINT_JOBS: [
      {
        PID: "TEST_PID_1",
        DOC_NAME: "printingDoc1.pdf",
        SUBMIT_TIME: "2013-03-09T14:00:00.000Z",
        PRINT_JOB_STATUS: 1,
        DOC_URL: "www.ust.hk",
        PRINTER_ID: 1,
        COPIES: 1,
        PAGES_PER_SHEET: 9,
        ORIENTATION: 0
      },
      {
        PID: "TEST_PID_2",
        DOC_NAME: "printingDoc2.pdf",
        SUBMIT_TIME: "2013-03-09T15:00:00.000Z",
        PRINT_JOB_STATUS: 1,
        DOC_URL: "www.ust.hk",
        PRINTER_ID: 1,
        COPIES: 1,
        PAGES_PER_SHEET: 9,
        ORIENTATION: 0
      }
    ]
}
;
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_AMEND_PRINT_JOB :
			console.log("Path: "+global.PATH_AMEND_PRINT_JOB);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.PID);
			});
			var result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_DELETE_PRINT_JOB : 
			console.log("Path: "+global.PATH_DELETE_PRINT_JOB);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.PID);
			});
			var result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_LAUNCH_PRINT_JOB :
			console.log("Path: "+global.PATH_LAUNCH_PRINT_JOB);
			var body = '';
			req.on('data', function (data) {
			    body += data;
			    console.log("Partial body: " + body);
			});
			req.on('end', function () {
			    console.log("Body: " + body);
				var jsonObj = JSON.parse(body);
				console.log(jsonObj.PID);
			});
			var result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			var resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
	}

}
