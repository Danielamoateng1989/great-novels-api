const AuthorsModel = require('./Authors')
const BooksModel = require('./Books')
const BooksGenresModel = require('./BooksGenres')
const GenresModel = require('./Genres')
const { Sequelize } = require('sequelize')


const connection = new Sequelize('novels', 'damoateng', 'Dannyboy123!', {
  host: 'localhost', dialect: 'mysql'
})


const Authors = AuthorsModel(connection, Sequelize)
const Books = BooksModel(connection, Sequelize)
const BooksGenres = BooksGenresModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)


Authors.hasMany(Books)
Books.belongsTo(Authors)
Genres.hasMany(BooksGenres)
BooksGenres.belongsTo(Books)


module.exports = {
  Authors,
  Books,
  Genres,
  BooksGenres
}



