const express = require('express')
const app = express()

const { getAllAuthors, getAuthorById } = require('./controller/authors')

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)




const port = 3000

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening om port ${port}`)
})


