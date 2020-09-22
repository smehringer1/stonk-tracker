const express = require('express')
var cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const app = express();
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

app.use('/api/users', userRoutes)



app.listen(8000, () => console.log("Listening on 8000"))