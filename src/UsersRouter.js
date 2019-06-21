'use strict';
const express = require('express');
const Queue = require('./Queue');

const usersRoute = express.Router();

let users = new Queue();

users.enqueue('Jake');
users.enqueue('Samantha');

function userData(users){
  let output =[]
  let user=users.first
  while (user !== null){
    output.push(user.data)
    user=user.next
  }
  return output
}
console.log(userData(users))

usersRoute
  .get('/', (req, res, next) => {
    res
      .send(userData());
  })
  .post('/', (req, res, next) => {
    const { user } = req.body;
    users.enqueue(user);
    res.send(userData());
  });

module.exports = usersRoute;