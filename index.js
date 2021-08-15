const express = require('express')
const app = express()

const { getAllAuthors, getAuthorById } = require('./controller/authors')
const { getAllGenres, getGenreById } = require('./controller/genres')

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening om port ${PORT}`)
})


