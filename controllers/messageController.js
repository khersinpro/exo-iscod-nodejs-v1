const Message               = require('../models/Message');
const { validationResult }  = require('express-validator');

exports.createMessage = async (req, res, next) => {
    const errors = !validationResult(req).isEmpty() ? validationResult(req).array() : null;
    if (errors !== null) 
    { 
        req.errors = errors;
        next();
    }
    else
    {
        const message = new Message(req.body.title, req.body.content, req.body.author);
        await message.createMessage();
        next();
    }
}