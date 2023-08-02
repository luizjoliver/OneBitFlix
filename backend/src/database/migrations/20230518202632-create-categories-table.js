'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) =>{
    await queryInterface.createTable("categories",{
      id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type: Sequelize.DataTypes.INTEGER
      },
      name:{
        allowNull:false,
        type: Sequelize.DataTypes.STRING
      },
      position:{
        allowNull:false,
        type: Sequelize.DataTypes.INTEGER
      },
      created_at:{
        allowNull:false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at:{
        allowNull:false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  down : async (queryInterface, Sequelize) =>{
    await queryInterface.dropTable("categories")
  }
};
