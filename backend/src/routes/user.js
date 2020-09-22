const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../model/User')
const { ensureAuthenticate, checkNotAuthenticate } = require('../config/authMethods')
const passport = require('passport')
require('../config/passport')(passport)


router.post("/login", checkNotAuthenticate, (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (!user) res.send({valid : false, msg : "Not found"});
        else {
          req.logIn(user, (err) => {
              console.log({...user, valid : true})
                res.send({...user, valid : true});
          });
        }
    })(req, res, next);
  });

router.post("/register", checkNotAuthenticate, (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, async (err, user) => {
    if (err) throw err;
    if (user) res.send({valid : false, msg : "Email already exists"});
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email: email,
            password: hashedPassword,
        });
        await newUser.save();
        res.send({...user, valid : true});
    }
    });
});

router.get("/user", ensureAuthenticate , (req, res) => {
    const user = req.user;
    res.send({...user, valid : true}); 
});

router.post("/logout", ensureAuthenticate, (req, res) => {
    req.logOut();
    res.send("Logged out")
})

module.exports = router;