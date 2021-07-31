module.exports = ({ env }) => ({
  url: env("https://protected-depths-56006.herokuapp.com/"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "eb58cf382241d084697a4232539998ef"),
    },
  },
});
