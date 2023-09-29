 const { StatusCodes } = require('http-status-codes')

class ValidationError extends Error {
    constructor(error) {
        super();
        let explanation =[];                             // sequelize return errors in this form so 
        error.errors.forEach((err)=>{                   //message properties extracted from the error.errors array
            explanation.push(err.message);    
        })
        this.name = 'ValidationError';
        this.message='Not able to validate the data sent in the request';
        this.explanation=explanation;
        this.statusCode=StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;