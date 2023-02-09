const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')

const app = express()
app.use(express.json())
// passed the configuration
// const sequelize = new Sequelize('classroom', 'root', '12345678', {
//     host: 'localhost',
//     dialect: 'mysql'
// })

// authenticated the configurations to make a successful connection with the db
// sequelize.authenticate().then(() => {
//     console.log('successful connection to db')
// }).catch(() => {
//     console.log('failed to connect to db')
// })

// create a schema/model/table

// const Car = sequelize.define('cars', {
//     id: {
//         type: DataTypes.SMALLINT,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     brand: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })

// sync with db
// sequelize.sync().then(() => {
//     console.log('syncing is complete')
// }).catch(() => {
//     console.log('something went wrong')
// })

// create a record

// Car.create({
//     name:'Ertiga',
//     brand: 'Maruti'
// }).then(() => {
//     console.log('record created successfully')
// }).catch(() => {
//     console.log('failed to create the record')
// })

// app.post('/car', (req, res) => {
//     const carData = req.body
//     Car.create(carData).then(() => {
//         console.log('record created successfully')
//         return res.send('car created successfully')
//     }).catch(() => {
//         console.log('failed to create the record')
//         throw new Error('something went wrong')
//     })

// })

// app.get('/cars', (req, res) => {
//     Car.findAll().then((cars) => {
//         return res.send(cars)
//     }).catch(() => {
//         throw new Error('Failed to fetch from db')
//     })
// })

// Car.findOne({
//     where: {
//         id: 1
//     }
// }).then((car) => {
//     console.log(car)
// })

app.get('/hello', (req,res) => {
    res.send('hello from second server')
})
app.listen(80, () => {
    console.log('server started')
})