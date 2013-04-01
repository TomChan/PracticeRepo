conn = new Mongo();
db = conn.getDB("printServer");
db.dropDatabase();
