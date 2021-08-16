
const Books = (connection, Sequelize, Authors) => {
  return connection.define('books',
    {
      id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
      authorId: { type: Sequelize.INTEGER, references: { model: Authors, key: 'id' } },
      title: { type: Sequelize.STRING },

    }, { paranoid: true })
}

module.exports = Books
