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
    imageURL: 'https://i.ytimg.com/vi/RgjIK8Q8J4s/maxresdefault.jpg',
    imageDescription: 'a black lab next to a body of water.',
    name: 'Checkers',
    sex: 'Female',
    age: 4,
    breed: 'Black Lab',
    story: 'Rescued stray'
  },
  {
    imageURL: 'https://woofdog.org/wp-content/uploads/2017/08/Corgi-puppy-eating.jpg',
    imageDescription: 'puppy Corgie eating food.',
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
      .json(currentDog)
      .send();
  });

module.exports = dogRoute;  