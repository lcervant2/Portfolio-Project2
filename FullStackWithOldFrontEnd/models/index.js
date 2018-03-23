'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development'; //this will resolve to the environment, like "production" or default to "development"
var config    = require(__dirname + '/../config/config.json')[env]; //this will resolve to use either the development or the production object
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config); //config is only looking at dialect and host
} else {
  var sequelize = new Sequelize(config.database, process.env[config.username], process.env[config.password], config); //config is only looking at dialect and host
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync(); //this will create our model as a table if it doesn't exist already

module.exports = db;
