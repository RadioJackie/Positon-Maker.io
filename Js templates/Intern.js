const EmployeeTemplate = require('./EmployeeTemplate');

class InternTemplate extends EmployeeTemplate {

    constructor(intern) {
        super(intern);
        this.officeNumber = intern.officeNumber;
        this.setProfile();
    }
}

module.exports = InternTemplate;