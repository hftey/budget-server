module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.FLOAT(12,2)
        },
        budget_month_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return category;
}