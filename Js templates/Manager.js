const EmployeeTemplate = require('./EmployeeTemplate');

class EmployeeTemplate extends EmployeeTemplate {

    constructor(manager) {
        super(manager);
        this.officeNumber = manager.officeNumber;
        this.setProfile();
    }
}

module.exports = EmployeeTemplate;