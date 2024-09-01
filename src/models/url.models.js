import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unqiue: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    visitHistory: [
      {
        timestamps: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export const URL = mongoose.model("URL", urlSchema);
