const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
//db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.budget_month = require('../model/budgetmonth.model.js')(sequelize, Sequelize);
db.category = require('../model/category.model.js')(sequelize, Sequelize);
db.transaction = require('../model/transaction.model.js')(sequelize, Sequelize);


//db.category.belongsTo(db.transaction, {foreignKey: 'category_id'});
db.transaction.belongsTo(db.category, {foreignKey: 'category_id'});

module.exports = db;