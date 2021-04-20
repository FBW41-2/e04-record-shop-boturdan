const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const records = [
  { "name": "Metallica",
    "title": "Unforgiven",
    "year": "1998"
  },

  { "name": "Beatles",
    "title": "Let It Be",
    "year": "1975"
  },

  { "name": "System Of A Down",
    "title": "Chop Suey",
    "year": "2002"
  }
]


router.get('/api/records', function(req, res) {
  res.json(records)
})

router.post('/api/records', (req, res) => {
  
  records.push({

    name: req.body.name,
    title: req.body.title,
    year: req.body.year,
  
  });
  
  res.redirect("/api/records");
});

module.exports = router;
