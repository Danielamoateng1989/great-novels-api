const express = require('express')
const app = express()

const { getAllAuthors, getAuthorById } = require('./controller/authors')
const { getAllGenres, getGenreById } = require('./controller/genres')

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)




const port = 3000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening om port ${port}`)
})


