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
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: "user_perfil",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    // underscored: true,
    timestamps: true,
    paranoid: true,
  };

  const User_perfil = sequelize.define(alias, cols, config);

  User_perfil.associate = (models) => {
    User_perfil.hasMany(models.User, {
      as: "users",
      foreignkey: "perfil_id",
    });
  };

  return User_perfil;
};
