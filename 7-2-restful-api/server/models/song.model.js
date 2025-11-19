import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title:  { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  year:   { type: Number, min: 1900, max: 2100 }
}, { timestamps: true });

//db schema

// rename _id
songSchema.set("toJSON", {
  virtuals: true,        // keep "id" as a virtual
  versionKey: false,     // removes "__v"
  transform: (_doc, ret) => {
    ret.id = ret._id.toString(); // rename _id → id
    delete ret._id;              // completely remove _id
  }
});

export const Song = mongoose.model("Song", songSchema);
