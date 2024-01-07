import mysql from "promise-mysql";
import config from "./../config";

const conection=mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})

const getConnection=()=>{
    return conection;
};
module.exports={
    getConnection
};