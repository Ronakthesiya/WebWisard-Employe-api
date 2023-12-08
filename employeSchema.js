const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id : {
        type : mongoose.ObjectId,
        require : true
    },
    Name : {
        type : String
    },
    Salary : {
        type: Number
    },
    emailId : {
        type: String
    },
    joinningDate : {
        type: Date
    },
    medical : {type: Number, default: 10},
    casual : {type: Number, default: 10},
    marrage : {type: Number, default: 10},
    maternal : {type: Number, default: 10},
    gender : {
        type: String
    },
    department : {
        type: String
    },
    experianc : {
        type: Number
    },
    image : {
        type: String
    },
    city : {
        type: String
    },
    phone : {
        type: Number
    },
    leave : [
        {
            startDate : Date,
            endDate : Date
        }
    ]
})

module.exports = mongoose.model('employe',schema);