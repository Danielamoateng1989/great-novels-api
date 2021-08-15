const models = require('../models')

const getAllAuthors = async (req, res) => {
  const authors = await models.Authors.findAll()

  return res.send(authors)
}



// const getAuthorById = async (request, response) => { const { id } = request.params
//   const authorById = await models.Authors.findOne({ where: { id }, include: [{ model: models.Authors }] })

//   return authorById ? response.send(authorById) : response.sendStatus(404)
// }

const getAuthorById = async (req, res) => {
const { id } = req.params


const author = await models.Authors.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: id },
        { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return author
    ? res.send(author)
    : res.sendStatus(404)
}


module.exports = {
  getAllAuthors,
  getAuthorById
}
