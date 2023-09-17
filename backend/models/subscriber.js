const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    owner : String,
    createdAt: Date 
});

module.exports = model( 'subscribers', myschema );