const Authors = (connection, Sequelize) => {
  return connection.define('authors',
    {
      id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },

    }, { paranoid: true })
}

module.exports = Authors
