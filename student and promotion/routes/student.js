const express = require('express');

const router = express.Router()

const StudentClassFile = require('../controllers/student');
const studentClass = new StudentClassFile()



router.get('/', async(req,resp, next)=>{
    const result = await studentClass.getAll();
    resp.status(200).json({data : result})
});

router.post('/', async(req, resp, next)=>{
    const result = await studentClass.add(req.body)
    resp.status(200).json({data : result})
})

router.patch('/', async(req, resp, next)=>{
    const result = await studentClass.update(req.body)
    resp.status(200).json({data : result})
})

router.delete('/', async(req, resp, next)=>{
    const result = await studentClass.delete(req.body)
    resp.status(200).json({data : result})
})

module.exports = router