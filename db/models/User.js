const bookshelf = require(`./bookshelf`);

require(`./Incident`);

class User extends bookshelf.Model {
  get tableName() { return `users`; }
  get hasTimestamps() { return true; }

  incidents() {
    return this.hasMany(`Incident`);
  }
}

module.exports = bookshelf.model(`User`, User);