const express = require('express');

const router = express.Router()

const AuthClassFile = require('../controllers/auth');
const AuthClass = new AuthClassFile()


router.post('/', async(req, resp, next)=>{
    const result = await AuthClass.login(req.body);
    return resp.status(200).json({data : result})
})

router.post('/verify', async(req, resp, next)=>{
    const result = await AuthClass.verify(req.body);
    return resp.status(200).json({data : result})
})



module.exports = router