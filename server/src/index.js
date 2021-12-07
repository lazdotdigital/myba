const express = require('express');
const app = express();
const port = process.env.PORT;

const initialModel = () => ({
  playerOne: {
    x: 0,
    y: 0,
  },
  playerTwo: {
    x: 15,
    y: 15,
  },
  lastPlayer: 0,
  victor: 0,
});

let model = initialModel();
const width = 25;
const height = 25;

app.get('/', (_, res) => {
  res.send(JSON.stringify(model));
});

app.get('/:key', (req, res) => {
  switch (req.params.key) {
    case 'w':
      model.lastPlayer = 1;
      if (model.playerOne.y > 0) {
        model.playerOne.y -= 1;
      }
      break;
    case 'u':
      model.lastPlayer = 2;
      if (model.playerTwo.y > 0) {
        model.playerTwo.y -= 1;
      }
      break;
    case 'a':
      model.lastPlayer = 1;
      if (model.playerOne.x > 0) {
        model.playerOne.x -= 1;
      }
      break;
    case 'h':
      model.lastPlayer = 2;
      if (model.playerTwo.x > 0) {
        model.playerTwo.x -= 1;
      }
      break;
    case 's':
      model.lastPlayer = 1;
      if (model.playerOne.y < height - 1) {
        model.playerOne.y += 1;
      }
      break;
    case 'j':
      model.lastPlayer = 2;
      if (model.playerTwo.y < height - 1) {
        model.playerTwo.y += 1;
      }
      break;
    case 'd':
      model.lastPlayer = 1;
      if (model.playerOne.x < width - 1) {
        model.playerOne.x += 1;
      }
      break;
    case 'k':
      model.lastPlayer = 2;
      if (model.playerTwo.x < width - 1) {
        model.playerTwo.x += 1;
      }
      break;
    case ' ':
      if (model.victor > 0) {
        model = initialModel();
      } else {
        if (
          model.playerOne.x == model.playerTwo.x ||
          model.playerOne.y == model.playerTwo.y
        ) {
          if (model.lastPlayer == 1) {
            model.victor = 1;
          } else {
            model.victor = 2;
          }
        }
      }
      break;
  }
  res.send(JSON.stringify(model));
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
