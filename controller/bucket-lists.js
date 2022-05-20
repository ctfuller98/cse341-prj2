const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const connect = require('../db/connect');

const getAll = async (req, res) => {
  console.log("first console")
  const results = connect.getCollection().find();
  results.toArray().then((documents) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(documents);
    console.log('Returned All')
  });
};

const getSingle = async (req, res) => {
    const contactid = new ObjectId(req.params.id)
    const results = connect.getCollection().find({_id: contactid});
    results.toArray().then((documents) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`)
  });
};

const createNew = async (req, res) => {
  const list_item = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    city: req.body.city,
    month: req.body.month,
    year: req.body.year,
    country: req.body.country,
  };
  const response = await connect.getCollection().insertOne(list_item);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the list item.');
  }
};

const updateItem = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const item = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    city: req.body.city,
    month: req.body.month,
    year: req.body.year,
    country:req.body.country
  };
  
  const response = await connect
    .getCollection()
    .replaceOne({ _id: userId }, item);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the item.');
  }
};

const deleteItem = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await connect.getCollection().deleteOne({ _id: userId }, true);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the item.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createNew,
  updateItem,
  deleteItem
};