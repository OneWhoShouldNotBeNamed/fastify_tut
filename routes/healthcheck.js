"use strict";

module.exports = function (fastify, opts, next) {
  fastify.route({
    method: "GET",
    schema: {
      tags:['Health Check'],
      description:'Health Check Endpoint',
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
            timestamp: { type: "string", format: "date-time" },
          },
        },
      },
    },
    url: "/",
    handler: async (req, rep) => {
      return { status: "ok", timestamp: new Date().toISOString() };
    },
  });
  next();
};
