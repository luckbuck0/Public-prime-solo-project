const express = require('express')
const pool = require ('../modules/pool')

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()


let currentWorkspaceId = []
function current(currentWorkspaceId,id){
    if (currentWorkspaceId.length ===0){
        currentWorkspaceId.push(id)
    } else {
        currentWorkspaceId.length=0
        currentWorkspaceId.push(id)
    }
}

//-----------------------------GET ROUTE TABS--------------------------------------
router.get('/:id',rejectUnauthenticated, (req,res) =>{

    const userId= req.user.id
    const id = req.params.id;
    const tabId= req.body.tabId
    currentWorkspaceId.push(id)
    
    current(currentWorkspaceId,id)
   

    console.log('this is current workspaces id--->',id,userId);
  
    const queryValues = [id,userId]
    const queryText = `SELECT * FROM "tabs"
    WHERE id=$1
    AND user_id=$2
    ;
    `;
   

    pool.query(queryText,queryValues)
    .then((results) => {
        res.send(results.rows[0])
        console.log('this is results.rows in tab get ',results.rows);
    }). catch ((error ) => {
        console.log('error in the tabs router file --->', error);
        res.sendStatus(500)
    })
})

module.exports =router;