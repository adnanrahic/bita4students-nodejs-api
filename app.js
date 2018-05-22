const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./db')

app.get('/api', (req, res, next) => {
  res.status(200).send('Api Works.')
})

const noteController = require('./note/note.controller')
app.use('/api/notes', noteController)

app.listen(3000, () => console.log('Server is running on port 3000'))