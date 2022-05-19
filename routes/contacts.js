/*const routes = require('express').Router();
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

routes.get('/', (req, res) => {
const results = connect.getCollection().find();
results.toArray().then((documents)=> {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(documents);
  console.log('Returned All Contacts')
});

});

routes.get('/:id', (req, res) => {
  const contactid = new ObjectId(req.params.id)
  const results = connect.getCollection().find({_id: contactid});
  results.toArray().then((documents)=> {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`)
  });
  
  });
  routes.post("/", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
        console.log(`ready for new info`);
    });
});
  module.exports = routes;*/
const express = require('express');
const router = express.Router();

const contactsController = require('../controller/contacts');

router.get('/', contactsController.getAll);

router.post('/', contactsController.createContact);

router.get('/:id', contactsController.getSingle);


router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;