module.exports = (sequelize, Sequelize) => {
    const budget_month = sequelize.define('budget_month', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        month: {
            type: Sequelize.INTEGER
        },
        year: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return budget_month;
}