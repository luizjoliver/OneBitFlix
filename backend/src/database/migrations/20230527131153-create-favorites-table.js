'use strict';


module.exports = {
  up: async  (queryInterface, Sequelize)=> {
    await queryInterface.createTable("favorites",{
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        references: {model:"users", key:"id"},
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      course_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        references:{model:"courses", key:"id"},
        onUpdate:"CASCADE",
        onDelete:"CASCADE"

      },
      created_at:{
        type : Sequelize.DataTypes.DATE,
        allowNull:false
      },
      update_at:{
        type : Sequelize.DataTypes.DATE,
        allowNull:false
      }
    })
  },

  down : async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable("favorites")
  }
};
