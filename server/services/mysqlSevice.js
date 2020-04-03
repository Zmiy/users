const mysql = require('mysql');

class MySqlService {
    connect(callback){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: ""});
            this.connection.connect((err) => {
            if (err) throw err;
            console.log("Connected!");
            callback();
        });
    }
    createDatabase(databaseName, callback) {
        let func = () =>{
            this.connection.query("CREATE DATABASE IF NOT EXISTS " + databaseName, function (err, result) {
                if (err) throw err;
                console.log("Database created");
                callback();
            });
        }
        if (!this.connection) {
            this.connect(() => {
                func();
            })
        } else {
            func();
        }
        
    }
    createTable(tableName, params) {
        var sql = "CREATE TABLE IF NOT EXISTS " + tableName + " (" + params + ")";
        this.connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Table created");
        });
    }

    insert(tableName, params, values){
        let sql = "INSERT INTO " + tableName + "(" + params +") VALUES (" + values + ")";
        this.connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
        
        });
    }
    select(tableName, params, condition, callback) {
        let sql = "SELECT " + params + 
                 " FROM " + tableName + 
                 (condition ? " WHERE " + condition : "");
        this.connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    }
}

module.exports = {
    MySqlService: new MySqlService()
}
