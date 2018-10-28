module.exports = function(app) {

    const category = require('../controller/category.controller.js');

    // Create a new Customer
    app.get('/api/category/:userId/:budgetmonthId', category.list);

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