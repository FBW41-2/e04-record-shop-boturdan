const express = require('express');
const router = express.Router();

/* Creating database */

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./data/db.json');
const db = low(adapter);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/records', function(req, res) {
  res.json(db)
})

/* Writing a new entry to the database */

db.get('db')
  .push()
.write();

router.post('/api/records', (req, res) => {
  
  db.push({

    /* {
      "name": "Vladislav Malezhik",
      "title": "Die, Yuri Antonov, Die!",
      "year": "1976"
    } */
    
    name: req.body.name,
    title: req.body.title,
    year: req.body.year,
  
  }).write();
  
  res.redirect("/api/records");
});

module.exports = router;
