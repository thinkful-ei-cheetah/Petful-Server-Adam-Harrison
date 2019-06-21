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
    age: 4,
    breed: 'Black Lab',
    story: 'Rescued stray'
  },
  {
    imageURL: 'Corgie eating some food',
    imageDescription: 'Corgie eating food.',
    name: 'Sarge',
    sex: 'Female',
    age: 1,
    breed: 'Corgie',
    story: 'unwanted puppy'
  },
];

let dogQueue = new Queue();

function dogsQueue(dogs){
  
  for(let i = 0; i< dogs.length; i++){
    dogQueue.enqueue(dogs[i]);
  }
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
  .get('/next', (req, res, next) => {
    let nextDog = dogQueue.peekNext();
    res
      .status(200)
      .json(nextDog)
      .send();
  })
  .delete('/', (req, res, next) =>{
    let currentDog = dogQueue.peek();
    dogQueue.dequeue();
    res
      .status(202)
      .send(`Congradulations on Adopting ${currentDog.name}'`);
  });

module.exports = dogRoute;  