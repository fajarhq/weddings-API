module.exports = {
    development: {
      // set env variables by running app as
      // $ DB_USERNAME="username" DB_PASSWORD="password" ... node app.js
      username:"root" ,//process.env.DB_USERNAME,
      password: "12345" ,//process.env.DB_PASSWORD,
      database: "wedding",//process.env.DB_NAME,
      host: "localhost", //process.env.DB_HOSTNAME,
      dialect: 'mysql'
    }
  };