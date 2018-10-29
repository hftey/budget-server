const env = {
  database: 'budget',
  username: 'root',
  password: 'qwe098poi',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;