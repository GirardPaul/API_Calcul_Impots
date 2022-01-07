const Joi = require('@hapi/joi')

const authSchema = Joi.object({
    salaire: Joi.number().required(),
    nbParts: Joi.number().required()
})

module.exports = {
    authSchema
}