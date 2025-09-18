const express = require('express');

const router = express.Router()

const coursClassFile = require('../controllers/cours');
const coursClass = new coursClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await coursClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await coursClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await coursClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await coursClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router