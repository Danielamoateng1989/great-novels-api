const BooksGenres = (connection, Sequelize, Genres, Books) => {
  return connection.define('booksGenres',
    {
      bookId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
      genreId: { type: Sequelize.INTEGER, references: { model: Books, key: 'id' } },

    }, { paranoid: true })
}

module.exports = BooksGenres
