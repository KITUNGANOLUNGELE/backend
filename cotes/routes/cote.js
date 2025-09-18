const express = require('express');

const router = express.Router()

const coteClassFile = require('../controllers/cote');
const coteClass = new coteClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await coteClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await coteClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await coteClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await coteClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router