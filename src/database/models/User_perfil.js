module.exports = (sequelize, DataTypes) => {
  let alias = "User_perfil";
  let cols = {
    idPerfil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
    },
    FechaDeBaja: {
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: "user_perfil",
    timestamps: false,
  };

  const User_perfil = sequelize.define(alias, cols, config);

  return User_perfil;
};
