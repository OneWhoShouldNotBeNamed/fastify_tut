const notesSchema = {
  type: "object",
  required: ["id", "title", "body"],
  items: {
    type: "object",
    properties: {
      id: { type: "number", description: "Unique identifier" },
      title: { type: "string" },
      body: { type: "string", description: "Body of the note" },
    },
  },
};

module.exports ={
    notesSchema,
}