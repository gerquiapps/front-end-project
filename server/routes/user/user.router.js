const express = require('express');
const router = express.Router();
const { signin, login } = require('../../controllers/user/user.controller');


router.post('/signin', (req, res) => {
    return signin(req, res);
})

router.post('/login', (req, res) => {
    return login(req, res);
})


module.exports = router;