conn = new Mongo();
db = conn.getDB("printserver");
db.printServer.printJobs.insert({"username":"tm_cvx","pid":"15A4A7F0-887E-11E2-9E96-0800200C9A66","doc_name":"printingDoc1.pdf","submit_time":"2013-03-09T14:00:00.000Z","print_job_status":1,"doc_url":"www.ustprint.com/getdocs/123456","config":{"modifiable":true,"printer_id":1,"copies":1,"pages_per_sheet":9,"orientation":0}});
db.printServer.printJobs.insert({"username":"tm_cvx","pid":"25A4A7F0-887E-11E2-9E96-0800200C9A66","doc_name":"printingDoc2.pdf","submit_time":"2013-03-09T15:00:00.000Z","print_job_status":1,"doc_url":"www.ustprint.com/getdocs/1234567","config":{"modifiable":true,"printer_id":1,"copies":1,"pages_per_sheet":9,"orientation":0}});
db.printServer.users.insert({"username":"tm_cvx","password":"abc"});
db.printServer.userSessions.insert({"username":"tm_cvx","api_key":"05A4A7F0-887E-11E2-9E96-0800200C9A66"});
