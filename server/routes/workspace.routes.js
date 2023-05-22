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


module.exports = router;