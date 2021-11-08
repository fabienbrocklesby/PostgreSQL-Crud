const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASS,
    database:  process.env.DB,
    host:  process.env.HOST,
    port:  process.env.DBPORT,    
})

pool.on('conneect', () => {
    console.log('connected to the database')
})

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
}