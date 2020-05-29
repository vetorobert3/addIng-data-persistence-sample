
const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('games')
  .then(game => {
    res.json(game); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve games' });
  });
});

module.exports = router;