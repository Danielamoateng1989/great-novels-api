/* eslint-disable no-console */
const express = require('express')
const app = express()

const { getAllAuthors, getAuthorById } = require('./controller/authors')
const { getAllGenres, getGenreById } = require('./controller/genres')

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)




const Port = 3000

app.listen(Port, () => {
  console.log(`listening om port ${Port}`)
})


