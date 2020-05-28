module.exports = function(app) {

    const transaction = require('../controller/transaction.controller.js');

    // Create a new Customer
    app.get('/api/transaction/:userId/:budgetmonthId/:categoryId', transaction.list);
    app.post('/api/transaction', transaction.add);
    app.delete('/api/transaction/:transactionId', transaction.delete);
    app.get('/api/transaction-detail/:transactionId', transaction.detail);
    app.put('/api/transaction', transaction.update);
    app.get('/api/transaction-list/:userId/:filterPayee', transaction.filter);
    app.get('/api/transaction-list-description/:userId/:filterDescription', transaction.filterDescription);


}