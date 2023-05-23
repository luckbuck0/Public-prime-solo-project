const express = require('express')
const pool = require ('../modules/pool')

const router = express.Router()


// used to call upon the function that will allow us to reject 
// unauthorized users
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware')


// router used to retrieve the profile image of the logged in users 
// from the database
router.get('/', rejectUnauthenticated, (req, res) => {

    pool.query(`SELECT img.id AS img_id, photo_url
    FROM "img"
   JOIN "user" 
   ON img.id= "user".image_id
   LIMIT 1;`)
      .then((results) => {
       
        res.send(results.rows)
    }). catch ((error) => {
      console.log('error in the img router file ---->', error);
      res.sendStatus(500);
    })
     
  });

module.exports = router;