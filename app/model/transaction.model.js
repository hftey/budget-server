module.exports = (sequelize, Sequelize) => {
    const transaction = sequelize.define('transaction', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },date: {
            type: Sequelize.DATEONLY
        },
        amount: {
            type: Sequelize.FLOAT(12,2)
        },
        payee: {
            type: Sequelize.STRING
        },
        desc: {
            type: Sequelize.STRING
        },
        category_id: {
            type: Sequelize.INTEGER
        },
        budget_month_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return transaction;
}