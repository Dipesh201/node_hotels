const monggose = require("mongoose");

const  menuItemSchema = new monggose.Schema({
    name:{
        type: String,
        required: true,
    },

    price:{
        type: Number,
        required: true,
        default: false,
    },
    taste:{
        type:  String,
        enum: [ 'sweet','spicy', 'sour'], 
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false,
    },

    ingredients:{
        type: [String],
        default: [],
    },

    num_sales:{
        type: Number,
        default : 0,
    },
});


const MenuItem = monggose.model("MenuItem", menuItemSchema);

module.exports = MenuItem ;