const db = require('../config/db.config.js');
const BudgetMonth = db.budget_month;


exports.list = (req, res) => {
    BudgetMonth.findAll({
        where:{
            user_id: req.params.userId
        },
        order: [['id', 'desc']]
    }).then(budgetmonth => {
        // Send all customers to Client
        res.json(budgetmonth);
    });
};


exports.latestId = (req, res) => {
    BudgetMonth.findOne({
        where:{
            user_id: req.params.userId
        },
        order: [['id', 'desc']]
    }).then(budgetmonth => {
        // Send all customers to Client
        res.json(budgetmonth);
    });
};


exports.detail = (req, res) => {
    id = req.params.budgetmonthId;
    BudgetMonth.findOne({
        where:{
            id: id
        }
    }).then(budgetmonth => {
        // Send all customers to Client
        console.log('budget month return', budgetmonth);
        res.json(budgetmonth);
    });
};

