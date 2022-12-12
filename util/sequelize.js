module.exports = {
    mutipleSequelizeToObject: function(sequelizes) {
        return sequelizes.map(sequelize => sequelize.toObject())
    },
    SequelizeToObject: function(sequelize) {
        return sequelize ? sequelize.toObject() : sequelize
    },
}