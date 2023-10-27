const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  "postgresql://doadmin:AVNS_j-5W8uko5FP79Ws0_Ml@assignmentsanta-strapi-db-do-user-13305520-0.c.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
);
console.log({
  url: process.env.DATABASE_URL,
  newURL:
    "postgresql://doadmin:AVNS_j-5W8uko5FP79Ws0_Ml@assignmentsanta-strapi-db-do-user-13305520-0.c.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
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
