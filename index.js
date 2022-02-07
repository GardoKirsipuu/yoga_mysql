// application packages
const express = require('express')
const app = express()

const path = require('path')


const mysql = require('mysql2')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// create database connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
	database: "yoga_mysql"
})

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to yoga_mysql db");
})

// app start point
app.listen(3000, () => {
	console.log('App is started at http://localhost:3000')
})