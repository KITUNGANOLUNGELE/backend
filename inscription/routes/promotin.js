const express = require('express');

const router = express.Router()

const promotionClassFile = require('../controllers/promotion');
const { replaceOne } = require('../models/student');
const promClass = new promotionClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await promClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await promClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await promClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await promClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router