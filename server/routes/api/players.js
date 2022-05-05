const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Player} = require('../../models/Player');

router.get('/', async (req, res, next) => {
  try{
    const players= await Player.find();
    if(!players) return res.status(404).send('No Players are in the list');
    res.send(players);
  }
  catch (err) {
    next(err);
  }
  
});


router.get('/:id', async (req, res) => {
  try{
    const player= await Player.findById(req.params.id)
    if(!player) return res.status(404).send('No Players are in the list by this id');
    res.send(player);
  }
  catch (err) {
    next(err);
  }
 
});

router.post('/', async (req, res) => {
  try{
    const player= new Player({
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      best_score: req.body.best_score,
      hundred: req.body.hundred,
      fifty: req.body.fifty,
      debut_date: req.body.debut_date
    });
    await player.save();
    console.log('hello');
    res.send(player);
  }
  catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const player = await Player.findByIdAndUpdate(req.params.id,{
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      best_score: req.body.best_score,
      hundred: req.body.hundred,
      fifty: req.body.fifty,
      debut_date: req.body.debut_date
    },{new : true} );
    if(!player) return res.status(404).send('The Player with given id was not found.');
      res.send(player);
  }
  catch (err) {
      next(err);
    }
});

router.delete('/:id', async (req, res) => {
  try{
    const player= await Player.findByIdAndRemove(req.params.id)
    if(!player) return res.status(404).send('The Player with given id was not found.');
    res.send(player);
  }
  catch(err){
    next(err);
  }
});

module.exports = router;