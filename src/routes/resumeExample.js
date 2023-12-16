const express = require ('express');

const resumeExampleController = require ('../controller/resumeExample.js');

const router = express.Router();

//GET all the resume example
router.get ('/', resumeExampleController.getAllResumeExample);

//create (POST) new resume example
router.post ('/', resumeExampleController.createNewResumeExample)

//GET resume example by id
router.get('/:resume_id', resumeExampleController.getResumeExampleById)

module.exports = router;