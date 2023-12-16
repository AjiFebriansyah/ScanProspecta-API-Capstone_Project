const express = require ('express');

const findJobController = require ('../controller/findJob.js');

const router = express.Router();

// GET all find job
router.get('/', findJobController.getAllFindJob);

// create (POST) new job
router.post('/', findJobController.createNewJob);

// GET all find job
router.get('/:job_id', findJobController.getJobById);

module.exports = router;