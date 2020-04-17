const mysql = require('mysql')
const dev = {
    //connection: dev_connection,
    'host': 'localhost',
    'user': 'carion',
    'password': 'root',
    'database': 'sercovid19',
    'socketPath': '/var/run/mysqld/mysqld.sock',
    'port': 3306
}
const prod = {
    //connection: prod_connection,
    'host': '35.184.160.65',
    'user': 'carion',
    'password': 's3rc0v1d19',
    'database': 'sercovid19',
    'port': 3306
}

const prod2 = {
    //connection: prod_connection,
    'host': 'us-cdbr-iron-east-01.cleardb.net',
    'user': 'bfe30706612150',
    'password': '1fe73429',
    'database': 'heroku_4c3a026e723f817',
    'port': 3306
}
//mysql://bfe30706612150:1fe73429@us-cdbr-iron-east-01.cleardb.net/heroku_4c3a026e723f817?reconnect=true

const env = prod2


const HOST = env.host
const USER = env.user
const PASS = env.password
const DATA = env.database
const PORT = env.port
const SOCKET = env.socketPath

// config base de données en local

const dev_connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DATA,
    port: PORT,
    socketPath: SOCKET
})

const prod_connection = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASS,
    database: DATA,
    port: PORT,
    connectionLimit: 1000,
50,
  acquireTimeout :  100000,
  connectTimeout :  100000
    port: 3306,
    charset: 'utf8'
})


prod_connection.getConnection(function(err, connection) 
{
    if (err) 
    {
         console.log("Connection ERROR")
         console.log(err);
    }
    else 
    {
        prod_connection.query('SELECT * FROM `Individu`', function (error, results, fields) 
       {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) 
            {
               console.log("ERROR")
               console.log(error);
            }
            if (results)
            {
               console.log("Results")
               console.log(results)
            }
            if(fields)
            {
               console.log("FIELDS")
               //console.log(fields)
            }
        });
     }
});
/*

dev_connection.connect((err) => {
    if (err) {
        //connection.end()
        throw err
    }
    console.log("Base de donnée Connectée avec l'id : " + dev_connection.threadId)
    //console.log(connection)
    //connection.end()
});
*/
/**
connection.query('SELECT * FROM Individu', function (error, results, fields) {
  if (error) {
    console.error('error connecting: ' + err.stack)
    //throw error
  }
  console.log('Le contenu est: ', results[0])
});
**/

//connection.end();

module.exports = prod_connection