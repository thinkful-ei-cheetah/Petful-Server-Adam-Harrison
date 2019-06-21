'use strict';
const express = require('express');

const catRoute = express.Router();
catRoute
  .get('/', (req, res, next) => {
    const cat = {
      imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    };

    res
      .status(200)
      .json(cat)
      .send();
  });

module.exports = catRoute;
