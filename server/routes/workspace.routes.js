const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.post('/',rejectUnauthenticated,(req,res) =>{

    const userId = req.user.id;
    const workspaceName= req.body.workspaceName;
    const imageUrl = req.body.imageUrl
    const category = req.body.selectedCategory
    const notes = req.body.notes
    const sqlText = `
        INSERT INTO workspaces
        (user_id,name,image_url,notes,category)
        VALUES
        ($1,$2,$3,$4,$5)
    `;
    const sqlValues = [userId,workspaceName,imageUrl,notes,category]

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

    router.put('/:id', rejectUnauthenticated,(req,res) => {
        console.log('this is req.body',req.body);
        console.log('in put route');
        const name = req.body.name
        const category = req.body.category
        const image_url= req.body.image_url
        const notes = req.body.notes
        const workplaceId= req.body.id
        const userId = req.user.id
        console.log('this is req.body' , req.body);
        const sqlText = `
        UPDATE workspaces
        SET "name" = $1,
        "category"=$2,
        image_url=$3,
        notes=$4
        WHERE id=$5
        AND user_id = $6
        `;
        const sqlValues = [name,category,image_url,notes,workplaceId,userId]
        console.log('this is sqlValues',sqlValues);
        pool.query(sqlText,sqlValues)
        .then(() => {res.sendStatus(200)})
        .catch((error) => {
            console.log('error in put route in workspace routes--->',error);
        })
    } )

module.exports = router;