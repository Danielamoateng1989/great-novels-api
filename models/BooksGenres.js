const BooksGenres = (connection, Sequelize) => {
  return connection.define('booksGenres',
    {
      bookId: { type: Sequelize.INTEGER },
      genreId: { type: Sequelize.INTEGER },

    }, { paranoid: true })
}

module.exports = BooksGenres
