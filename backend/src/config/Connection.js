//conexion a la base de datos
import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()

const stringConnection = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    options : {
        trustServerCertificate : true,
    }
}

const getConnection = new sql.ConnectionPool(stringConnection)
.connect()
.then(pool => {
    console.log('Connected to database')
    return pool
})
.catch(err => console.log('Error : ', err))

export {sql, getConnection}