'use strict';

/**
 * A set of functions called "actions" for `mercadopago`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
     try {
      console.log(ctx.request.body);
       ctx.body = 'ok';
     } catch (err) {
       ctx.body = err;
     }
   }
};
