const Note = require('./note')

async function createNote(req, res, next) {
  const note = await Note.create(req.body)
  res.status(200).send(note)
}

async function getNotes (req, res, next) {
  const notes = await Note.find()
  res.status(200).send(notes)
}

module.exports = {
  createNote,
  getNotes
}

Math.random()