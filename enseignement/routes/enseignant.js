const express = require('express');

const router = express.Router()

const EnsClassFile = require('../controllers/enseignant');
const ensClass = new EnsClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await ensClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await ensClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await ensClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await ensClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router