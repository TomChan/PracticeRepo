var C = require('./constants_path.js');

var app = require('http').createServer(handler);
var url = require('url');
var fs = require("fs");
var logger = require('./print_logger');

app.listen(8089);

function handler (req, res) {
	var path = url.parse(req.url).pathname;

	var body = '';
	req.on('data', function (data) {
	    body += data;
	    logger.info("Partial body: " + body);
	});
	req.on('end', function () {
	    logger.info("Body: " + body);
	});

	var result = '';
	var resString = '';

	switch (path)
	{
		case gloval.PATH_HOMEPAGE:
			logger.info("Path: " + global.PATH_HOMEPAGE);
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
			//logger.info("Path: "+global.PATH_LOGIN);
			logger.info("Path: " + global.PATH_LOGIN);
			result = {API_KEY:'apikey'};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_VALIDATE_API_KEY :
			logger.info("Path: "+global.PATH_VALIDATE_API_KEY);
			result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_REQUEST_PRINT_JOBS :
			logger.info("Path: "+global.PATH_REQUEST_PRINT_JOBS);
			result = {PRINT_JOBS: [
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
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_AMEND_PRINT_JOB :
			logger.info("Path: "+global.PATH_AMEND_PRINT_JOB);
			result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_DELETE_PRINT_JOB : 
			logger.info("Path: "+global.PATH_DELETE_PRINT_JOB);
			result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_LAUNCH_PRINT_JOB :
			logger.info("Path: "+global.PATH_LAUNCH_PRINT_JOB);
			result = {RESPONSE_TYPE: 0, RESPONSE_MSG: "Successful"};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
	}

}
