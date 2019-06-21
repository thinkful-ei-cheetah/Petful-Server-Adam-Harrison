'use strict';
const express = require('express');

const dogRoute = express.Router();

dogRoute
  .get('/', (req, res, next) => {
    const dog = {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    };

    res
      .status(200)
      .json(dog)
      .send();
  });

module.exports = dogRoute;  