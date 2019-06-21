'use strict';
const express = require('express');
const Queue = require('./Queue');

const dogRoute = express.Router();

const dogList = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'black lab image',
    imageDescription: 'A panting black lab just getting out of a pond.',
    name: 'Checkers',
    sex: 'Female',
    age: 3,
    breed: 'Black Lab',
    story: 'Rescued stray'
  },
];

let dogQueue = new Queue();

function dogsQueue(dogs){
  
  for(let i = 0; i< dogs.length; i++){
    dogQueue.enqueue(dogs[i]);
  }

  return dogQueue.peek();
}

dogsQueue(dogList);


dogRoute
  .get('/', (req, res, next) => {
    let currentDog = dogQueue.peek();
    res
      .status(200)
      .json(currentDog)
      .send();
  })
  .delete('/', (req, res, next) =>{

    res
      .send("Congradulations on Adopting 'dog name here' ");
  });

module.exports = dogRoute;  