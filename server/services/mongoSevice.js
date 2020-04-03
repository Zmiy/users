class MongoService {
    connect(callback){
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";
        MongoClient.connect(url, (err, db) => {
            this.connection = db;
            console.log("Connected!");
            callback();
        });
    }
    createDatabase(databaseName, callback) {
        let func = () => {
            this.db = this.connection.db(databaseName);
            callback();
        }
        if (!this.connection) {
            this.connect(() => {
                func();
            })
        } else {
            func();
        }
        
    }
    createCollection(collectionName) {
        this.db.createCollection(collectionName, (err, res) => {
            if (err) throw err;
            console.log("Collection created!");
          });
    }

    insert(collectionName, params) {
        this.db.collection(collectionName).insertOne(params, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });

        
        // let sql = "INSERT INTO " + tableName + "(" + params +") VALUES (" + values + ")";
        // this.connection.query(sql, (err, result) => {
        // if (err) throw err;
        // console.log("1 record inserted");
        
        // });
    }
    find(collectionName, query = {}, condition = {}, callback = null) {
        this.db.collection(collectionName).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
          });
        
        // let sql = "SELECT " + params + 
        //          " FROM " + tableName + 
        //          (condition ? " WHERE " + condition : "");
        // this.connection.query(sql, (err, result) => {
        //     if (err) throw err;
        //     console.log(result);
        //     callback(result);
        // });
    }
}

module.exports = {
    MongoService: new MongoService()
}
