const models = require('../models')

const getAllbooks = async (req, res) => {
  const books = await models.Books.findAll({ include: [{ model: models.Books }] })

  return res.send(books)
}

const getBookById = async (request, response) => { const { id } = request.params
  const bookId = await models.Books.findOne({ where: { id }, include: [{ model: models.Books }] })

  return bookId ? response.send(bookId) : response.sendStatus(404)
}




module.exports = {
  getAllbooks,
  getBookById
}
