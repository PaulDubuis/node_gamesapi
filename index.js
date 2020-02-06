const express = require('express');
const app = express();

const port = process.env.port || 3000;

const gamesRoutes = require('./routes/games');


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome player !');
});


app.use('/api/games', gamesRoutes);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});