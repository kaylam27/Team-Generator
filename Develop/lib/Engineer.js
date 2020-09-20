const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email);
        this.Github = Github;
    };
    getRole() {
        return "Engineer";
    };
    getUsername() {
        return this.username;
    };

};

module.exports = Engineer