const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);
console.log({
  url: process.env.DATABASE_URL,
  host,
  port,
  database,
  user,
  password,
});

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
