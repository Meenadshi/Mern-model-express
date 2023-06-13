require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500;
const employeesRouter = require('./routes/employeesRoute')
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',errorMessage => console.log(errorMessage))
db.once('open', () => console.log('Connection established'))

app.use('/api/v1/employees',employeesRouter)
app.listen(PORT, console.log(`Listening on Port: ${PORT}`))