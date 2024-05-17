module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: "dchppqmwt",
          api_key: "515782169473746",
          api_secret: "FCSdY4CwUgsgtxFqTU9Uchj1X3E",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });