const express = require('express')
const pool = require ('../modules/pool')

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.post('/', rejectUnauthenticated, (req,res) => {
    
    const name = req.body.name;
    const  url = req.body.url;
    const photo= req.body.photo;
    const workspaceId=6;

    const sqlText = `
        INSERT INTO tabs 
        (name,url,photo,workspace_id)
        VALUES
        ($1,$2,$3,$4)
    `;
    const sqlValues = [name,url,photo,workspaceId]

    pool.query(sqlText,sqlValues)
    .then((results) => {
        res.sendStatus(201)
    })
    .catch ((error) => {
        console.log('error in the post route in workspace router', error);
        res.sendStatus(500)
    })
})

module.exports =router;