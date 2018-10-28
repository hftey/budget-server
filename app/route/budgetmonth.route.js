module.exports = function(app) {

    const budgetmonth = require('../controller/budgetmonth.controller.js');

    // Create a new Customer
    app.get('/api/budget-month/:userId', budgetmonth.list);
    app.get('/api/budget-month-latest/:userId', budgetmonth.latestId);
    app.get('/api/budget-month-detail/:budgetmonthId', budgetmonth.detail);

    // Retrieve all Customer
    // app.get('/api/customers', customers.findAll);
    //
    // // Retrieve a single Customer by Id
    // app.get('/api/customers/:customerId', customers.findById);
    //
    // // Update a Customer with Id
    // app.put('/api/customers', customers.update);
    //
    // // Delete a Customer with Id
    // app.delete('/api/customers/:customerId', customers.delete);
}