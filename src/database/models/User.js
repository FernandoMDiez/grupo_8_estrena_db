module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    id: {
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
    perfilId: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "users",
    //underscored: true,
    timestamps: true,
    paranoid: true,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsTo(models.Perfil, {
      as: "perfil",
      foreignKey: "perfilId",
    });
  };

  return User;
};
