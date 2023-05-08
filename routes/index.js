const router                    = require('express').Router();
const { getHomepage }           = require('../controllers/homepageController');
const { createMessage }         = require('../controllers/messageController');
const { messageSanitization }   = require('../middleware/sanitization/messageSanitization');

router.get('/', getHomepage);
router.post('/', messageSanitization, createMessage, getHomepage);
router.use('/*', (req, res, next) => { throw new Error('Page introuvable'); });

module.exports = router;