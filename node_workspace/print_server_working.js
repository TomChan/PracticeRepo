var C = require('./constants_path.js');

var app = require('http').createServer(handler);
var url = require('url');
var qs = require('querystring');
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

	logger.info("Query string: " + JSON.stringify(qs.parse(url.parse(req.url).query)));

	var result = '';
	var resString = '';

	switch (path)
	{
		case global.PATH_HOMEPAGE:
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
			result = {success: true, api:{key:"05A4A7F0-887E-11E2-9E96-0800200C9A66", expired_date: "2013-03-09T14:00:00.000Z"}};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_VALIDATE_API_KEY :
			logger.info("Path: "+global.PATH_VALIDATE_API_KEY);
			result = {valid: true, msg: "successful"};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_REQUEST_PRINT_JOBS :
			logger.info("Path: "+global.PATH_REQUEST_PRINT_JOBS);
			result = {last_pid: "1234567890", print_jobs: [
			      {
				pid: "15A4A7F0-887E-11E2-9E96-0800200C9A66",
				doc_name: "printingDoc1.pdf",
				submit_time: "2013-03-09T14:00:00.000Z",
				print_job_status: 1,
				doc_url: "www.ustprint.com/getdocs/123456",
				config: {
					modifiable: true,
					printer_id: 1,
					copies: 1,
					pages_per_sheet: 9,
					orientation: 0
				}
			      },
			      {
				pid: "25A4A7F0-887E-11E2-9E96-0800200C9A66",
				doc_name: "printingDoc2.pdf",
				submit_time: "2013-03-09T15:00:00.000Z",
				print_job_status: 1,
				doc_url: "www.ustprint.com/getdocs/1234567",
				config: {
					modifiable: true,
					printer_id: 1,
					copies: 1,
					pages_per_sheet: 9,
					orientation: 0
				}
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
			result = {success: true};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_DELETE_PRINT_JOB : 
			logger.info("Path: "+global.PATH_DELETE_PRINT_JOB);
			result = {error: {code: 10, msg: "Server error"}};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
		case global.PATH_LAUNCH_PRINT_JOB :
			logger.info("Path: "+global.PATH_LAUNCH_PRINT_JOB);
			result = {success: true};
			resString = JSON.stringify(result);
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(resString);
			break;
	}

}
