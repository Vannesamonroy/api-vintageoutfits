module.exports = {
  routes: [
     {
      method: 'POST',
      path: '/mercadopago',
      handler: 'mercadopago.exampleAction',
      config: {
        policies: [],
        middlewares: [],
     },
     },
  ],
};
