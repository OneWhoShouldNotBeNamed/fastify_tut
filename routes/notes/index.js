const { notesSchema } = require("./schemas");
const NotesDAL = require("./notesDAL");
module.exports = async function (fastify, opts, next) {
  const notesDAL = NotesDAL(fastify.db);

  fastify.route({
    method: "GET",
    url: "/notes",
    schema: {
      tags: ["Notes"],
      description: "Get All Notes",
      response: {
        200: {
          type: "array",
          items: notesSchema,
        },
      },
    },
    handler: async (req, res) => {
      return notesDAL.getNotes();
    },
  });
  fastify.route({
    method: "POST",
    url: "/notes",
    schema: {
      tags: ["Notes"],
      description: "Create A Notes",
      body: {
        type: "object",
        required: ["title", "body"],
        properties: {
          title: { type: "string" },
          body: { type: "string" },
        },
      },
      response: {
        200: notesSchema,
      },
    },
    handler: async (req, res) => {
      const { title, body } = req.body;
      const newNote = await notesDAL.createNote(title, body);
      return newNote;
    },
  });

  fastify.route({
    method: "PUT",
    url: "/notes/:id",
    schema: {
      tags: ["Notes"],
      description: "Update A Notes by Id",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
      body: {
        type: "object",
        required: ["title", "body"],
        properties: {
          title: { type: "string" },
          body: { type: "string" },
        },
      },
      response: {
        200: notesSchema,
      },
    },
    handler: async (req, res) => {
      const { id } = req.params;
      const { title, body } = req.body;
      const updateNote = await notesDAL.updateNote(id, title, body);
      return updateNote;
    },
  });

  fastify.route({
    method: "DELETE",
    url: "/notes/:id",
    schema: {
      tags: ["Notes"],
      description: "Delete a Note",
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
      response: {
        200: {
          type: "string",
          default: "No Content",
        },
      },
    },
    handler: async (req, res) => {
      await notesDAL.deleteNote(req.params.id);
      res.status(204);
    },
  });

  next();
};
