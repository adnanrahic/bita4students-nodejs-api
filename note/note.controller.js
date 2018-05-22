const express = require('express')
const noteController = express.Router()
const noteService = require('./note.service')

// CREATES A NEW NOTE
noteController.post('/', noteService.createNote)

// RETURNS ALL THE NOTES IN THE DATABASE
noteController.get('/', noteService.getNotes)

module.exports = noteController