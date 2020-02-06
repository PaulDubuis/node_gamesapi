const express = require('express');

const router = express.Router();

const handlersGames = require('../handlers/games');

router.route('/')
  .post(handlersGames.createGame)
  .get(handlersGames.readAllGames);

router.route('/:id')
  .get(handlersGames.readOneGame)
  .put(handlersGames.updateOneGame)
  .delete(handlersGames.deleteOneGame);

module.exports = router;