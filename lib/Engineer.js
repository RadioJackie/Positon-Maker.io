const EmployeeTemplate = require('./EmployeeTemplate');

class EngineerTemplate extends EmployeeTemplate {

    constructor(engineer) {
        super(engineer);
        this.officeNumber = engineer.officeNumber;
        this.setProfile();
    }
}

module.exports = EngineerTemplate;