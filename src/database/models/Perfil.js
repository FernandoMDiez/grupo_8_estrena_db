module.exports = (sequelize, DataTypes) => {
  let alias = "Perfil";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namePerfil: {
      type: DataTypes.STRING,
    },
    /* createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },*/
  };
  let config = {
    tableName: "perfiles",
    // underscored: true,
    timestamps: true,
    paranoid: true,
  };

  const Perfil = sequelize.define(alias, cols, config);

  Perfil.associate = function (models) {
    Perfil.hasMany(models.User, {
      as: "users",
      foreignkey: "perfilId",
    });
  };

  return Perfil;
};
