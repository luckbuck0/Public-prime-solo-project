const express = require('express')
const pool = require ('../modules/pool')
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

const router = express.Router()

router.post('/',rejectUnauthenticated,(req,res) =>{
    
    
})