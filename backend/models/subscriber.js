const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    owner : {type : Types.ObjectId, ref:'users'},
    createdAt: Date 
});

module.exports = model( 'subscribers', myschema );