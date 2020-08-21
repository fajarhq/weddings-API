/* const Sequelize = require("sequelize");
const user = require("./models/users");
const sequelize = new Sequelize("mydb", "root", "derit123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
 

user(sequelize,sequelize.DataTypes).findAll().then(book => {
  res.json(book);
});
 */

 
const models = require('./models');

/* var sequelize = models.sequelize;
var Sequelize = models.Sequelize; */

 models.users.findAll({
    raw: true 
    // include: [ models.Task ]
  }).then(function(users) {
      console.log(users)
  })  
   /*  res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    }); */

/* authenticate database connection */
/* sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database successful.');
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  }); */