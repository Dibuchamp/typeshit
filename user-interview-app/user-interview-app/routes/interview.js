const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');

router.post('/submit', async (req, res) => {
  const { lovedOne, favoriteThings } = req.body;
  try {
    const newInterview = new Interview({
      userId: req.user.id,
      lovedOne,
      favoriteThings,
    });
    await newInterview.save();
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
