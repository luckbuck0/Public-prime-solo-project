const express = require('express')
const pool = require ('../modules/pool')

const router = express.Router()

const maleAvatars = [
    {
        url: `<img src="/imgs/01.png"> </img>`
    },

]

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware')

router.get('/', rejectUnauthenticated, (req, res) => {

    pool.query(`SELECT img.id AS img_id, photo_url
    FROM "img"
   JOIN "user" 
   ON img.id= "user".image_id;`)
      .then((results) => {
        console.log('this is the img of the user', results.rows);
        res.send(results.rows)
    }). catch ((error) => {
      console.log('error in the img routes file ---->', error);
      res.sendStatus(500);
    })
     // For testing only, can be removed
  });

module.exports = router;