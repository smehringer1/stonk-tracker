const express = require('express')
var cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const app = express();
const { ensureAuthenticate, checkNotAuthenticate } = require('./config/authMethods')
const userRoutes = require('./routes/user')
const {dbConnect} = require('./config/db')

dbConnect()

app.use(express.json())
app.use(cors({origin : "http://localhost:3000", credentials : true}));
app.use(
    session({
      secret: "bungo",
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize())
app.use(passport.session())
// app.use((req, res, next) => {
//   console.log('req.session', req.session)
//   return next()
// })

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send("Hello")
})



app.listen(8000, () => console.log("Listening on 8000"))