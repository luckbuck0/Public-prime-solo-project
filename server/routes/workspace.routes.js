const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.post('/',rejectUnauthenticated,(req,res) =>{

    const userId = req.user.id;
    const workspaceName= req.body.workspaceName;
    const imageUrl = req.body.imageUrl
    const category = 'design'
    const sqlText = `
        INSERT INTO workspaces
        (user_id,name,image_url,category)
        VALUES
        ($1,$2,$3,$4)
    `;
    const sqlValues = [userId,workspaceName,imageUrl,category]

    pool.query(sqlText,sqlValues)
    .then((results) => {
        res.sendStatus(201)
    })
    .catch ((error) => {
        console.log('error in the post route in workspace router--->', error);
        res.sendStatus(500)
    })
    
})

router.get('/' ,rejectUnauthenticated, (req,res) => {

const userId = req.user.id
  const  queryValues=[userId]
const queryText = `
SELECT * FROM workspaces
    WHERE user_id=$1;
    `
    pool.query(queryText,queryValues)
    .then((results) => {
        console.log('this is the workspace results from get route--->',results.rows);
        res.send(results.rows)}).catch ((error) => {
            console.log('error in the get route for workspaces -->',error);
            res.sendStatus(500)
        })
})

module.exports = router;