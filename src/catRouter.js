'use strict';
const express = require('express');
const Queue = require('./Queue');

const catRoute = express.Router();

const catList = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://cdn1-www.cattime.com/assets/uploads/gallery/abyssinian-cats-and-kittens/abyssinian-1.jpg',
    imageDescription: 'Abyssinian cat with orange and black fur staring at camera',
    name: 'Ruffles',
    sex: 'Male',
    age: 5,
    breed: 'Abyssinian',
    story: 'Found while searchin he was searching through some garbage'
  },
  {
    imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43827469/1/?bust=1548107818',
    imageDescription: 'Gray tabby with black stripes looking at camera',
    name: 'Chazzy',
    sex: 'female',
    age: 3,
    breed: 'Tabby',
    story: 'Given up for adoption by owner'
  }
];

let catQueue = new Queue();

function catsQueue(cats){
  
  for(let i = 0; i< cats.length; i++){
    catQueue.enqueue(cats[i]);
  }
}

catsQueue(catList);


catRoute
  .get('/', (req, res, next) => {
    let currentCat = catQueue.peek();
    res
      .status(200)
      .json(currentCat)
      .send();
  })
  .get('/next', (req, res, next) => {
    let nextCat = catQueue.peekNext();
    res
      .status(200)
      .json(nextCat)
      .send();
  })
  .delete('/', (req, res, next) =>{
    let currentCat = catQueue.peek();
    catQueue.dequeue();
    res
      .json(currentCat)
      .send();
  });

module.exports = catRoute;
