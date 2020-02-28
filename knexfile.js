// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/userDB',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      director: './data/migrations',
      tableName: 'knex_migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }, 
    useNullAsDefault: true 
  },

  testing : {
    client: 'pg',
    connection: 'postgresql://localhost/testing',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      director: './data/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: "",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      director: './data/migrations',
      tableName: 'knex_migrations'
    }
  }

};
