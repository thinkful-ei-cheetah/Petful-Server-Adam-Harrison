'use strict';
const express = require('express');
const Queue = require('./Queue');

const usersRoute = express.Router();

let users = new Queue();

users.enqueue('Jake');
users.enqueue('Samantha');

function userData(users){

  while (users !== null){
    return users.peek();
  }
}



usersRoute
  .get('/', (req, res, next) => {
    res
      .send(users);
  })
  .post('/', (req, res, next) => {
    const { user } = req.body;
    users.enqueue(user);
    res.send();
  });

module.exports = usersRoute;