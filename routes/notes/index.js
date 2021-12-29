module.exports = async function (fastify, opts, next) {
  fastify.route({
    method: "GET",
    url: "/notes",
    schema: {
      tags: ["Notes"],
      description: "Get All Notes",
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number", description: "Unique identifier" },
              title: { type: "string" },
              body: { type: "string", description: "Body of the note" },
            },
          },
        },
      },
    },
    handler: async (req, res) => {
      return [];
    },
  });
  fastify.route({
    method: "POST",
    url: "/notes",
    schema: {
      tags: ["Notes"],
      description: "Create A Notes",
      body:{
        type: "object",
        required:['title','body'] ,
        properties:{
            title:{type:'string'},
            body:{type:'string'},
        }
      },
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number", description: "Unique identifier" },
              title: { type: "string" },
              body: { type: "string", description: "Body of the note" },
            },
          },
        },
      },
    },
    handler: async (req, res) => {
      return [];
    },
  });

  fastify.route({
    method: "PUT",
    url: "/notes/:id",
    schema: {
      tags: ["Notes"],
      description: "Update A Notes by Id",
      params:{
        type: "object",
        required:['id'],
        properties:{
            id:{type:'number'},
          
        } 
      },
      body:{
        type: "object",
        required:['title','body'] ,
        properties:{
            title:{type:'string'},
            body:{type:'string'},
        }
      },
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number", description: "Unique identifier" },
              title: { type: "string" },
              body: { type: "string", description: "Body of the note" },
            },
          },
        },
      },
    },
    handler: async (req, res) => {
      return [];
    },
  });

  fastify.route({
    method: "DELETE",
    url: "/notes/:id",
    schema: {
      tags: ["Notes"],
      description: "Delete a Note",
      params:{
        type: "object",
        required:['id'],
        properties:{
            id:{type:'number'},
          
        } 
      },
      response: {
        200: {
         type:'string',default:'No Content'
        },
      },
    },
    handler: async (req, res) => {
      return ;
    },
  });

  next();
};
