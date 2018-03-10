const bookshelf = require(`./bookshelf`);

require(`./User`);

class Incident extends bookshelf.Model {
  get tableName() { return `incidents` }
  get hasTimestamps() { return true; }

  user() {
    return this.belongsTo(`User`);
  }
}

module.exports = bookshelf.model(`Incident`, Incident);