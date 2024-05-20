'use strict';
const { MercadoPagoConfig, Preference } = require("mercadopago");
const client = new MercadoPagoConfig({
  accessToken:
    "TEST-7089495801591210-051620-c8afd387b8b58488e4e40a298da393fa-208171607",
});
/**
 * A set of functions called "actions" for `mercadopago`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
     try {
      const data = ctx.request.body;
      const body = {
        items: [
          {
            title: data.title,
            quantity: Number(data.quantity),
            unit_price: Number(data.price),
            currency_id: "COP",
          },
        ],
        back_urls: {
          success: "http://localhost:5173",
          failure: "http://localhost:5173",
          pending: "http://localhost:5173",
        },
        auto_return: "approved",
      };
      const preference = new Preference(client);
      const result = await preference.create({ body });
      ctx.body = {
        id:result.id
       };
     } catch (err) {
      console.log(err)
       ctx.body = {error:"Error al crear preference"};
     }
   }
};
