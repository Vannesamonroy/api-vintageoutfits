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

      const data = ctx.request.body?.products;
      const order = ctx.request.body?.order;
      console.log(`data recibida: `,data)
      console.log(`order recibida: `,order)
      const body = {
        items: [
          {
            title: data[0].title,
            quantity: Number(data[0].quantity),
            unit_price: Number(data[0].price),
            currency_id: "COP",
          },
        ],
        back_urls: {
          success: "https://frontend-vintage-outfits-9vsnqiplu-vannesamonroys-projects.vercel.app/",
          failure: "https://frontend-vintage-outfits-9vsnqiplu-vannesamonroys-projects.vercel.app/",
          pending: "https://frontend-vintage-outfits-9vsnqiplu-vannesamonroys-projects.vercel.app/",
        },
        auto_return: "approved",
      };
      const preference = new Preference(client);
      console.log(`body enviado a mercadopago: ${JSON.stringify(body)}`);
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
