module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("empregos", {
    ano: {
      type: Sequelize.INTEGER
    },
    mes: {
      type: Sequelize.STRING
    },
    grupo: {
      type: Sequelize.STRING
    },
    setor: {
      type: Sequelize.STRING
    },
   }, {
      freezeTableName: true,
      schema: 'empregos',
      tableName: 'movimentacao_de_emprego_caged',
      timestamps: false,
    });

  return Tutorial;
};
