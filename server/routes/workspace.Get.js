const express = require('express')
const pool = require ('../modules/pool')

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()


let currentWorkspaceId = []
if (currentWorkspaceId<2){
    currentWorkspaceId.shift()
}
//-----------------------------GET ROUTE TABS--------------------------------------
router.get('/:id',rejectUnauthenticated, (req,res) =>{

    const userId= req.user.id
    const id = req.params.id;
    currentWorkspaceId.push(id)
    
   

    console.log('this is workspace id--->',currentWorkspaceId[0]);
  
    const queryValues = [currentWorkspaceId[0],userId]
    const queryText = `SELECT * FROM "workspaces"
    WHERE id=$1
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