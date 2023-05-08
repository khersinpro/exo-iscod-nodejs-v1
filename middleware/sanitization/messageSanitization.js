const { check } = require('express-validator');

exports.messageSanitization = [
    check('title').trim().escape().isLength({min: 5, max: 150}).withMessage('Le titre doit faire entre 5 et 150 caractères.'),
    check('content').trim().escape().isLength({min: 5, max: 255}).withMessage('Le contenu du message doit faire entre 5 et 255 caractères.'),
    check('author').trim().escape().isLength({min: 5, max: 20}).withMessage('Votre pseudo doit contenir entre 5 et 20 caractères')
];