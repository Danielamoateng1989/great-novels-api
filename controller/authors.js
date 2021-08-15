const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.Authors.findAll()

  return res.send(authors)
}

const getAuthorById = async (request, response) => { const { id } = request.params
  const authorById = await models.Authors.findOne({ where: { id }, include: [{ model: models.Authors }] })

  return authorById ? response.send(authorById) : response.sendStatus(404)
}




module.exports = {
  getAllAuthors,
  getAuthorById
}
