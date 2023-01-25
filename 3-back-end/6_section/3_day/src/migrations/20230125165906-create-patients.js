module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientsTable = queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'plans',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

    return PatientsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('patients'),
};