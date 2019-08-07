// Require constants
const 
    express = require('express');
    router = express.Router(),
    // Require controller
    Project = require('../controllers/project');

// Project API Routes
    // CREATE project
    router.post('/', Project.create);
    // Read INDEX of projects
    router.get('/', Project.index);
    // SHOW one project
    router.get('/:id', Project.show);
    // UPDATE one project
    router.patch('/:id', Project.update);
    // DELETE one project
    router.delete('/:id', Project.destroy);

// Make router exportable
module.exports = router;
