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

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const idToGet = req.params.id;
    const userId = req.user.id;

  console.log('this is the params in get route to get',idToGet,userId,req.body);
    const sqlQuery = `
    SELECT * FROM "tabs"
      WHERE "workspace_id"=$1
        AND "user_id"=$2;
    `
  
    const sqlValues = [idToGet, userId];
  console.log('this is sql values in tab.router-->',sqlValues);
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.send(dbRes.rows)
        console.log('this is the dbres.rows in get route',dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('GET /api/tabs/:id fail:', dbErr);
        res.sendStatus(500);
      })
  })

//-----------------------------PUT ROUTE TABS--------------------------------------

router.put('/',rejectUnauthenticated, (req,res) => {

    const workSpaceId= req.body.workspace_id
    const name = req.body.name
    const url = req.body.url
    const photo = req.body.photo
    const notes = req.body.notes
    const userId= req.user.id
    const tabId=req.body.id
    console.log('this is tab id and workspace id',tabId,workSpaceId);
    const sqlValues = [name,url,photo,notes,workSpaceId,userId,tabId]
    const sqlText = `
    UPDATE tabs
    SET "name" = $1,
    "url"=$2,
   "photo"=$3,
   "notes"=$4
    WHERE workspace_id=$5 AND
    user_id = $6
    AND id=$7
    `;
    console.log('this is all the data from put route in tabs router',sqlValues);

    pool.query(sqlText,sqlValues)
    .then((results) => {
        console.log('this is the tabs results');
        res.sendStatus(200)
    }). catch ((error) => {
        console.log('error in the put route in tabs --->',error);
    })
})

router.delete('/:id',rejectUnauthenticated, (req,res) => {
  const sqlText = `DELETE FROM tabs
  WHERE id = $1
  AND user_id=$2;
  `;
  const tabsId = req.params.id
  const userId = req.user.id
  console.log('this is the tabs id--->',tabsId);
  const sqlValues = [tabsId,userId]

  pool.query(sqlText,sqlValues)
  .then((results) => {
    res.send(results.rows)
  })
  .catch ((error) => {
    console.log('error in the delete route in tabs',error);
  })
})

module.exports =router;