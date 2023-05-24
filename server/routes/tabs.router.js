const express = require('express')
const pool = require ('../modules/pool')

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

//-----------------------------POST ROUTE TABS--------------------------------------
router.post('/', rejectUnauthenticated, (req,res) => {
    
    const name = req.body.name;
    const  url = req.body.url;
    const photo= req.body.photo;
    const notes=req.body.notes
    const workspaceId=req.body.id;
    const userId= req.user.id
    console.log('this is user id and workspace id--->',userId,workspaceId);
    const sqlText = `
        INSERT INTO tabs 
        (name,url,photo,notes,workspace_id,user_id)
        VALUES
        ($1,$2,$3,$4,$5,$6)
    `;
    const sqlValues = [name,url,photo,notes,workspaceId,userId]

    pool.query(sqlText,sqlValues)
    .then((results) => {
        res.sendStatus(201)
    })
    .catch ((error) => {
        console.log('error in the post route in workspace router', error);
        res.sendStatus(500)
    })
})

//-----------------------------GET ROUTE TABS--------------------------------------
router.get('/:id',rejectUnauthenticated, (req,res) =>{

    const userId= req.user.id
    const id = req.params.id;
    console.log('this is workspace id--->',id);
    const queryValues = [id,userId]
    const queryText = `SELECT * FROM "tabs"
    WHERE workspace_id=$1
    AND user_id=$2;
    `;
   

    pool.query(queryText,queryValues)
    .then((results) => {
        res.send(results.rows)
    }). catch ((error ) => {
        console.log('error in the tabs router file --->', error);
        res.sendStatus(500)
    })
})

module.exports =router;