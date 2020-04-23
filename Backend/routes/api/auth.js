const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');


//loading DB model
const User = require('../../models/User')


//route - GET api/auth/test
//desc  - Teste post route
//access - Public
router.get('/test', (req, res) => res.json({ msg: "Auth works" }))

//route - GET api/auth/register
//desc  - Teste post route
//access - Public

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "email Already Exist" })
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: 200,
                    r: 'pg',
                    d: 'mm',
                });
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password,
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .then(err => console.log(err))
                    })
                });
            }
        });
})

module.exports = router;