module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: "https://strapi-sqllite-test.netlify.app", 
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6efcb18110b740e4834d764a0c96b06f'),
    },
    serveAdminPanel: false
  },
});
