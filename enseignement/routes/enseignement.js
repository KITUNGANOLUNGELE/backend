const express = require('express');

const router = express.Router()

const EnseignClassFile = require('../controllers/cours');
const EnseignClass = new EnseignClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await EnseignClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await EnseignClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await EnseignClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await EnseignClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router