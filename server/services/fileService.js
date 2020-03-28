const fs = require('fs');

class FileService {
    constructor() {
        this.DATA_PATH = "./data/";
    }

    readFile(fileName, callback) {
        console.log("a2");

        fs.readFile(this.DATA_PATH + fileName, "utf8", (error,data) => {
            console.log("a3" + error);
            if(error) {
                callback([]);
            } else {
                callback(JSON.parse(data));
            }
        });
    }

    writeToFile(fileName, data, callback) {
        fs.writeFile(DATA_PATH + fileName, data, (error)=> {
             if(error) {
                 throw error;
             }
             callback();
         });
    }
}

module.exports = {
    FileService: FileService
}
