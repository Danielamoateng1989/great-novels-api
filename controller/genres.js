const models = require('../models')

const getAllGenres = async (req, res) => {
  const genres = await models.Genres.findAll()

  return res.send(genres)
}

const getGenreById = async (request, response) => { const { id } = request.params
  const genreId = await models.Genres.findOne({ where: { id }, include: [{ model: models.Genres }] })

  return genreId ? response.send(genreId) : response.sendStatus(404)
}


module.exports = {
  getAllGenres,
  getGenreById
}
