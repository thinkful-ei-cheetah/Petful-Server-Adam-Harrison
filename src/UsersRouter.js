'use strict';
const express = require('express');
const Queue = require('./Queue');

const usersRoute = express.Router();
const jsonBodyParser = express.json();

let users = new Queue();

users.enqueue({name: 'Jake'});
users.enqueue({name: 'Samantha'});

function userData(users){
  let output =[];
  let user=users.first;
  while (user !== null){
    output.push(user.data);
    user=user.next;
  }
  return output;
}

usersRoute
  .get('/', (req, res, next) => {
    res
      .json(userData(users))
      .send();
  })
  .post('/', jsonBodyParser, (req, res, next) => {
    const user = req.body;
    users.enqueue(user);
    res
      .json(userData(users))
      .send();
  })
  .delete('/', (req, res, next)=> {
    users.dequeue();
    res
      .json(userData(users))
      .send();
  });

module.exports = usersRoute;