const {Sequelize,Datatypes,DataTypes,Op} = require('sequelize')

const sequelize = new Sequelize ('experion',"root","Shafsam@11",{
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate()
// .then(()=>{
//     console.log('Connection established successfully')
// })
// .catch((error)=>{
//     console.error('Unable to connect to the database:', error);
// })

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false

    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique:true
    },
    age:{
        type: DataTypes.INTEGER,
        defaultValue: 18,
        allowNull: false
    },
//     country:{
//         type: DataTypes.STRING(45),
//          defaultValue: 'IN',
//         allowNull: false    
// }
});

// User.sync();                        //create table if not exists
// User.sync({force: true});       // it will delete the existing data in the row
// User.sync({alter:true});

// User.create({name: 'Jon', email: 'jonH@gmail.com',age:25})
// .then((user)=>{
//     console.log("Data saved successfully", user.toJSON());
// })
// .catch(err =>{
//     console.log("error");
// })




 User.findAll({
    where: {
        id: {
            [Op.gte]:2
        }
    }
 }).then(function(users){
    users.forEach(function(user){
    console.log(user.dataValues.id, user.dataValues.name,);
    })
 });



// User.findByPk(2).then(user=>{
//     console.log(user.dataValues.id,user.dataValues.name)
// })