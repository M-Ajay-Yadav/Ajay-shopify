const {signupValidation} = require('../Middlewares/AuthValidation')
const {signup} = require('../Controllers/AuthConterller')
const router = require('express').Router();

router.post('/login', (req, res) => {
    res.send('login success');
}) ;

router.post('/signUp', signupValidation, signup);

module.exports = router;  