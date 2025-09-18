const express = require('express');

const router = express.Router()

const InscriptionClassFile = require('../controllers/inscription');
const InscriptionClass = new InscriptionClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await InscriptionClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await InscriptionClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await InscriptionClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await InscriptionClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router