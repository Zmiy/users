class Student {
    constructor (data) {
        this.createDate = new Date();
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.isActive = data.isActive;
    }
    setAsActive(){
        this.isActive = true;
    }
    get userName() {
        return this.firstName + " " + this.lastName;
    }
    
}

module.exports = {
    Student: Student
}
