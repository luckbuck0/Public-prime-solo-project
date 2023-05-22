const express = require('express')

const app = express()

app.use(express.static('server/public'));

const maleAvatars = [
    {
        url: `<img src="/imgs/01.png"> </img>`
    },

]

app.get('/',(res,req) =>{
    res.send(maleAvatars)
})


