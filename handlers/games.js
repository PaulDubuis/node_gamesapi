const db = require('../models');

exports.createGame = async (req, res) => {
  try {
    let newGame = await db.Game.create(req.body);
    return res
      .status(200)
      .json({
        message: 'Successed to create this game',
        newGame
      });
  } catch (err) {
    return res.status(400).json({
      message: 'Failed to create this game : ' + err,
      error: err
    });
  }
};

exports.readOneGame = async (req, res) => {
  try {
    let game = await db.Game.findById(req.params.id);
    return res
      .status(200)
      .json(game);
  } catch (err) {
    return res.status(400).json({
      message: 'Failed to find this game : ' + err,
      error: err
    });
  }
};

exports.readAllGames = async (req, res) => {
  try {
    let games = req.query
    ? await db.Game.find(req.query)
    : await db.Game.find();

    return res.status(200).json(games);

  } catch (err) {
    return res.status(400).json({
      message: 'Failed to get the games from : ' + err,
      error: err
    });
  }
};
// READ AWARD WINNERS

exports.updateOneGame = async (req, res) => {
  try {
    let game = await db.Game.findByIdAndUpdate(req.params.id,
      {$set: req.body},
      {new: true}
    );
    return res
      .status(200)
      .json(game);
  } catch (err) {
    return res.status(400).json({
      message: 'Failed to update this game : ' + err,
      error: err
    });
  }
}

exports.deleteOneGame = async (req, res) => {
  try {
    let game = await db.Game.findByIdAndRemove(req.params.id);
    return res
      .status(200)
      .json(game);
  } catch (err) {
    return res.status(400).json({
      message: 'Failed to delete this game : ' + err,
      error: err
    });
  }
}