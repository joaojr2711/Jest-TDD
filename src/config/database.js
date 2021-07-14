require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
})

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_URL,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: './__tests__/database.sqlite',
  operatorsAliases: 1,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};
