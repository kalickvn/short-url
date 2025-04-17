import mongoose from 'mongoose';
import { v4 as uuidV4 } from "uuid";
const linkSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Link', linkSchema);
