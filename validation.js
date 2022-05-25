const { check } = require('express-validator');
const joi = require('@hapi/joi');
const authSchema = joi.object({
    name: joi.string().required(),
    type: joi.string().required(),
    price: joi.string().required(),
    city: joi.string().required(),
    month: joi.string().required(),
    year: joi.string().required(),
    country: joi.string().required()
})

module.exports = {
    authSchema
}

