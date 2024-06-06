module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "monorail.proxy.rlwy.net"),
      port: env.int("DATABASE_PORT", 24500),
      database: env("DATABASE_NAME", "store"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "BQYUraWHERkuSkLoxzUJfdwWuICQfsLh"),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "store"),
//       user: env("DATABASE_USERNAME", "root"),
//       password: env("DATABASE_PASSWORD", ""),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });


// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "monorail.proxy.rlwy.net"),
//       port: env.int("DATABASE_PORT", 58501),
//       database: env("DATABASE_NAME", "store"),
//       user: env("DATABASE_USERNAME", "root"),
//       password: env("DATABASE_PASSWORD", "kHqPCugcOuZVPAJcdslsTPiAXHZbyDtx"),
//       // ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });