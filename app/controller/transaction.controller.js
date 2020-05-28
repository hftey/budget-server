const db = require('../config/db.config.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Category = db.category;
const Transaction = db.transaction;

exports.list = (req, res) => {
    Transaction.findAll({
        where:{
            category_id: req.params.categoryId,
            user_id: req.params.userId,
            budget_month_id: req.params.budgetmonthId,
        },
        include:  [{model: Category}],
        order: [
            [{model: Category}, 'name', 'asc'],
            ['date', 'desc']
        ]
    }).then(transaction => {
        // Send all customers to Client
        res.json(transaction);
    });
};

exports.add = (req, res) => {
    let transaction = req.body;
    Transaction.create(transaction).then(result => {
        res.json(result);
    });

    if (transaction.type == 'transferout' && transaction.addCategoryTransferTo != ''){
        transaction.type = 'transferin';
        transaction.category_id = transaction.addCategoryTransferTo;
        Transaction.create(transaction).then(result => {
            res.json(result);
        });

    }


};

exports.update = (req, res) => {
    let transaction = req.body;
    let id = req.body.transaction_id;
    Transaction.update(transaction,
        { where: {id: id} }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a customer with id = " + id});
    });
};

exports.delete = (req, res) => {
    let id = req.params.transactionId;
    Transaction.destroy({
        where: {
            id: id,
        }
    }).then(result => {
        // Send created customer to client
        res.status(200).json({result: true, msg:"delete successfully"});
    });
};


exports.detail = (req, res) => {
    id = req.params.transactionId;
    Transaction.findOne({
        where:{
            id: id
        }
    }).then(transaction => {
        // Send all customers to Client
        console.log('budget month return', transaction);
        res.json(transaction);
    });
};


exports.filter = (req, res) => {
    filterPayee = req.params.filterPayee;
    user_id =  req.params.userId,
    Transaction.findAll({
        where:{
            user_id: user_id,
            payee: {
                [Op.like]: '%'+filterPayee+'%' 
            }
        },
        offset: 0,
        limit: 10,
        group: ['payee']
        
    }).then(transaction => {
        // Send all customers to Client
        console.log('budget month return', transaction);
        res.json(transaction);
    });
};

exports.filterDescription = (req, res) => {
    filterDescription = req.params.filterDescription;
    user_id =  req.params.userId,
    Transaction.findAll({
        where:{
            user_id: user_id,
            desc: {
                [Op.like]: '%'+filterDescription+'%' 
            }
        },
        offset: 0,
        limit: 10,
        group: ['desc']
        
    }).then(transaction => {
        // Send all customers to Client
        console.log('budget month return', transaction);
        res.json(transaction);
    });
};


