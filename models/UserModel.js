import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    firstname: DataTypes.STRING,
    lastname:DataTypes.STRING,
    location:DataTypes.STRING,
    email: DataTypes.STRING,
    dob:DataTypes.date,
    education: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();