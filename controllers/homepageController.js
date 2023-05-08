const Message               = require('../models/Message');
const { validationResult }  = require('express-validator');

exports.getHomepage = async (req, res, next) => {
    const messages  =   await Message.getAll();
    const errors    =   req.errors ? req.errors : [];

    res.render('pages/homepage', {
        pageTitle : 'Projet Iscod',
        messages  : messages ? messages : [],
        errors    : errors
    })
}