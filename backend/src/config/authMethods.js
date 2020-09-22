module.exports =  {
    ensureAuthenticate: (req, res, next) => {
        if (req.isAuthenticated()){
            return next()
        } else {
            res.send({valid : false, msg : "Not allowed"})
        }
    },
    checkNotAuthenticate: (req, res, next) => {
        if (!req.isAuthenticated()){
            return next()
        } else {
            res.send({valid : false, msg : "Already logged in"})
        }
    }
}
