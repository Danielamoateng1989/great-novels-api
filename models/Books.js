
const Books = (connection, Sequelize) => {
  return connection.define('books',
    {
      id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
      authorId: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },

    }, { paranoid: true })
}

module.exports = Books
