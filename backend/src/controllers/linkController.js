import { v4 as uuidV4 } from "uuid";
import linkModels  from "../models/linkModels.js";
export const createLinks = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = uuidV4();
  const newLink = new linkModels({ originalUrl, shortId });
  await newLink.save();
  res.status(200).json({
    message: `Now retrieving data`,
    shortUrl: `${process.env.BASE_URL}/${shortId}`
  });
};
