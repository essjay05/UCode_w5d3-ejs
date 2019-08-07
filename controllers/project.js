// Require model
const Project = require('../models/Project');

// Make route methods exportable:
module.exports = {
    // Create
    create: (req, res) => {
        Project.create(req.body, (err, newProject) => {
            if (err) res.json({ success: false, err });
            res.json({ success: true, newProject })
        });
    }
    // Read/Index All

    // Read/Show 1

    // Update

    // Destroy
}