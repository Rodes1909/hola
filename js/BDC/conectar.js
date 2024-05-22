const mysql = require('mysql2');
const {MYSQLHOST, MYSQLUSER, MYSQLDATABASE, MYSQL_ROOT_PASSWORD, MYSQLPORT} = require("./../../config.js");

class Conectar{
    constructor(){
        let conection = mysql.createConnection({
            host : MYSQLHOST,
            user : MYSQLUSER,
            password : MYSQL_ROOT_PASSWORD,
            database : MYSQLDATABASE,
            port: MYSQLPORT
        });

        conection.connect();

        return conection;
    }
}

module.exports = Conectar;