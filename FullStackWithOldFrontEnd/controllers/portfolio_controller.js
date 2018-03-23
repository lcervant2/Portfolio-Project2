var db = require("../models");

module.exports = {
    projectSelect: function(callback){
        db.Project.findAll() //call ORM on model
        .then(callback); //then return data through callback
    }
}