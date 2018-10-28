const db = require('../config/db.config.js');
const Category = db.category;


exports.list = (req, res) => {
    Category.findAll({
        where:{
            user_id: req.params.userId,
            budget_month_id: req.params.budgetmonthId
        },
        order: [['name', 'asc']]
    }).then(category => {
        // Send all customers to Client
        res.json(category);
    });
};

