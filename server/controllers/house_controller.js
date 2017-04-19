const db = require('../models');

let dataHouse = (req, res) => {
  db.house
    .findAll({order: '"updatedAt" DESC'})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}
let dataHouseById = (req, res) => {
  db.house
    .findAll({where: {id: req.params.id}})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err.message)
    })
}
let createDataHouse = (req, res) => {
  db.house
    .create(req.body)
    .then((result) => {
      db.house
        .findAll({order: '"updatedAt" DESC'})
        .then((houses) => {
          res.send(houses)
        })
        .catch((err) => {
          res.send(err.message)
        })
    })
    .catch((err) => {
      res.send(err.message)
    })
}
let updateDataHouse = (req, res) => {
  db.house
    .update(
      {title: req.body.title, description: req.body.description, photo: req.body.photo, address: req.body.address, price: req.body.price, lat: req.body.lat, long: req.body.long},
      {where: {id: req.body.id}}
    )
    .then((result) => {
      db.house
        .findAll({order: '"updatedAt" DESC'})
        .then((houses) => {
          res.send(houses)
        })
        .catch((err) => {
          res.send(err.message)
        })
    })
    .catch((err) => {
      res.send(err.message)
    })
}
let deleteDataHouse = (req, res) => {
  db.house
    .destroy(
      {where: {id: req.params.id}}
    )
    .then((result) => {
      db.house
        .findAll({order: '"updatedAt" DESC'})
        .then((houses) => {
          res.send(houses)
        })
        .catch((err) => {
          res.send(err.message)
        })
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  dataHouse, dataHouseById, createDataHouse, updateDataHouse, deleteDataHouse
}
