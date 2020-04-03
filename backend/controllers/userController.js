const { FileService } = require('../services/fileService');
const { Student } = require('../models/student')


class UserController {
    constructor() {
        this.FILE_NAME = "students.json";
        this.fileService = new FileService();
        this.users = [];
    }

    readStudents(req, res) {
        this.fileService.readFile(this.FILE_NAME, (data) => {
            data.forEach(element => {
                this.users.push(new Student(element));
            });
            res.send(this.users);
        });
    }
    readStudentsNames(req, res) {
        this.fileService.readFile(this.FILE_NAME, (data) => {
            data.forEach(element => {
                this.users.push(new Student(element));
            });
            res.send(this.users);
        });
    }
    writeNewStudent(req, res) {
        this.users.push(new Student(req.body));

        // fileName, data, callback
        this.fileService.writeToFile(this.FILE_NAME,JSON.stringify(this.users), () => {
            res.send("ok");
        });

        // TODO: check if user already exists. 
        // if not, add to arr and save in file. 
    }
    updateActive(req, res) {
    }
}

module.exports = {
    userController: new UserController ()
}