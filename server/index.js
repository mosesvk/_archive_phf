require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express');
const session = require('express-session');
const { Pool } = require('pg');
const morgan = require('morgan')
const user = require('./controllers/userCtrl')
// const program = require('./controllers/programCtrl')
const massive = require('massive')
const path = require('path')


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, NODE_ENV} = process.env;

const app = express();
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
//top level middleware converting json to javaScript. 
app.use(session({
  secret: SESSION_SECRET, 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  }
}))

app.post('/auth/login', user.login)
app.post('/auth/register', user.register)
app.get('/auth/logout', user.logout)
app.get('/auth/getUser', user.userData) 
app.put('/auth/userUpdate', user.userUpdate)
// app.delete('/auth/:id', user.deleteUser)

// app.use((req, res, next) => {
//   if (req.session.user) return next();
//   else res.sendStatus(401)
// })

// app.post('/api/programs', program.newUserProgram)
// app.delete('/api/programs/:id',program.deleteUserProgram)

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:<your admin password>@localhost:5432/<your db name>',
  ssl: process.env.DATABASE_URL ? true : false
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance);
        app.listen(SERVER_PORT, () => {
          console.log(`db is running and server is listening on ${SERVER_PORT}.`)
        });
      })
      .catch(err => console.log(err));