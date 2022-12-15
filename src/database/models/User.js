module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    tel: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
    perfil_id: {
      type: DataTypes.INTEGER,
    },
    // created_at: {
    //  type: DataTypes.DATE,
    // },
    //  updated_at: {
    //  type: DataTypes.DATE,
    //  },
    //  deleted_at: {
    //    type: DataTypes.DATE,
    // },
  };
  let config = {
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    //underscored: true,
    timestamps: true,
    paranoid: true,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsTo(models.User_perfil, {
      as: "user_perfil",
      foreignkey: "perfil_id",
    });
  };
  return User;
};
