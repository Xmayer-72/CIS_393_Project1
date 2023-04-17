const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('CSS'));
app.use(express.static('SCRIPT'));
app.use(express.static('ASSET'));

app.use(express.urlencoded({ extended: true }));

// use morgan middleware to log all requests, including the request body
const morgan = require('morgan');
app.use(morgan('dev'));

app.set('view engine', 'ejs');

// Import SQL module and connect to database
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'GamesDoneQuick',
  port: 3310
});

// Define a route to retrieve the game data from the database and render the EJS template
app.get('/', (req, res) => {
  connection.query(
    `SELECT gameName, duration AS shortestTime, submitter
      FROM gameTimes
      WHERE (gameName, duration) IN (
        SELECT gameName, MIN(duration)
        FROM gameTimes
        GROUP BY gameName
      );`,
    (error, results) => {
      if (error) {
        console.error(error);
        res.send((error.code == 'ECONNREFUSED') ? 'MySQL Connection Refused' : 'Unspecified Error');
      } else {
        res.render('index', { fastestGameTimes: results });
      }
    });
});

// Route to display game records
app.get('/game/:gameName', (req, res) => {
  const gameName = req.params.gameName;

  const query = 'SELECT * FROM gameTimes WHERE gameName = ? ORDER BY duration ASC';
  connection.query(query, [gameName], (err, results) => {
    if (err) {
      throw err;
    }
    res.render('game', { gameName: gameName, gameTimes: results });
  });
});

// Define a route to serve the submission form
app.get('/submit', (req, res) => {
  connection.query('SELECT DISTINCT gameName FROM gameTimes', (error, results) => {
    if (error) {
      console.error(error);
    } else {
      res.render('submit', { gameRecords: results });
    }
  });
});

// Define a route to handle the form submission and add the new time to the database
app.post('/push', (req, res) => {
  var gameName = req.body.gameName;
  if (gameName == 'newGame') {
    gameName = req.body.newGameName;
  }
  const timeHour = req.body.timeHour;
  const timeMinute = req.body.timeMinute;
  const timeSecond = req.body.timeSecond;
  const timeMilisecond = req.body.timeMilisecond;
  const submitter = req.body.submitter;

  const newTime = {
    gameName: gameName,
    duration: `${timeHour}:${timeMinute}:${timeSecond}.${timeMilisecond}`,
    submitter: submitter
  };

  connection.query('INSERT INTO gameTimes SET ?', newTime, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.redirect('/');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
