const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    // unique = true, stands for the unique user, only one.
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // unique links for each user
    links: [{ type: Types.ObjectId, ref: "Link" }]
})

// 28:31 model(name: "User", schema)
module.exports = model("User", schema);
