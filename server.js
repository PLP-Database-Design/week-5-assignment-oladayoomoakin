const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')

const app = express(); 
dotenv.config()

//connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})


app.get('/get-patients', (req, res) => {
  const getPatients = "SELECT * FROM patients"

  db.query(getPatients, (err, results) => {
    if(err) {
      return res.status(500).send("internal Server error")
    }
    res.status(200).send(results)
  })
})


app.get('/get-providers', (req, res) => {
  const getProviders = "SELECT * FROM providers"

  db.query(getProviders, (err, results) => {
    if(err) {
      return res.status(500).send("internal Server error")
    }
    res.status(200).send(results)
  })
})


app.get('/get-firstname', (req, res) => {
  const getFirst_name = "SELECT first_name FROM patients"
  

  db.query(getFirst_name, (err, results) => {
    if(err) {
      return res.status(500).send("internal Server error")
    }
    res.status(200).send(results)
  })
})


app.get('/get-specialty', (req, res) => {
  const getSpecialty = "SELECT provider_hspecialty FROM providers"

  db.query(getSpecialty, (err, results) => {
    if(err) {
      return res.status(500).send("internal Server error")
    }
    res.status(200).send(results)
  })
})
 // declear the port
  
const PORT = 3300;
app.listen(PORT, () => {
  console.log('server is running on PORT ${PORT}')
});