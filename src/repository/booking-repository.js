const { Booking } = require ('../models/index');
const { AppError , ValidationError } = require('../utils/errors/index');
 

class BookingRepository {
    async create (data){
        try {
            
        } catch (error) {
            if(error.name === 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError;
        }
    }

}

module.exports = BookingRepository ;