const Router = require('express').Router();
const PouchDB = require('pouchdb');
const controller = require('./controller/api.js');
var randomUser = require('random-user');
var db = new PouchDB('myKittens');


var cats = [];

Router.get('/', (req, res) =>{
    console.log("params", req.params);
    db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function(doc) {
      res.status(200).send(doc);
    }).catch(function (err) {
      console.log(err);
      res.status(404).json(err)
    });
})

Router.post('/', (req, res) =>{
    controller.createCat(req.body)
        .then((cat)=>{
            cats.push(cat);
            console.log("CAT", cat);
            db.post(cat).then(function (dbCat) {
              res.status(201).send(dbCat );
            }).catch(function (err) {
              console.log(err);
            })

        })
        .catch((err)=>{
            res.status(403).send(err);
        });
    // randomUser('simple').then((user)=>{
    //     people.push(user);
    //     res.status(201).send(user);
    // })
})

Router.put('/', (req, res) =>{
    res.status(200).send('PUT');
})

Router.delete('/', (req, res) =>{
    res.status(200).send('DELETE');
})

module.exports = Router;
