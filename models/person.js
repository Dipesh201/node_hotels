const monggose = require("mongoose");

// defind the person schema
const personSchema  = new monggose.Schema({
    name:{
        type:String,
        required: true,
    }, 
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true,
        urique: true,
    },
    address:{
        type: String,
    },
    salary:{
        type:Number,
        required: true,
    }
});

 
// create person model
const Person = monggose.model("user", personSchema);

module.exports = Person ;

