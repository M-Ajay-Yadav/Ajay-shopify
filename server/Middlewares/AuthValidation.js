const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({

        name : Joi.string().min(3).max(100).required(),
        email: Joi.string().min(3).max(100).required(),
        password: Joi.string().min(4).max(100).required()
    })
    const {error} = schema.validate(req.body);
    if(error) {
        return res.status(400).json({msg:"Bad req",error})
    }
    next();
}

const loginValidation = (req, res, next )=> {
    const schema = joi.object({
        email: joi.string().min(3).max(100).required(),
        password: joi.string().min(4).max(100).required()        
    })
    const {error} = schema.validate(req.body);
    if(error) {
        return res.status(400).json({msg:"Bad req",error})
    }
    next();
}

module.exports = {signupValidation,loginValidation};