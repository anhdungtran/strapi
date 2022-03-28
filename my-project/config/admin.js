module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2311fb321355de18d592419a7a9bf59a'),
  },
});
