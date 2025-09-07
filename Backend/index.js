import http from "http";
import fs from "fs";
// import slugify from "slugify";
import { getFilePath } from "./modules/getFIlePath.js";
import { errorHandler } from "./modules/errorHandling.js";
import getContentType from "./modules/getContentType.js";

const server = http.createServer((req, res) => {
  let filePath = getFilePath(req.url);
  if (filePath === null) {
    errorHandler(res, 404);
    return;
  }

  const contentType = getContentType(filePath);

  // Add caching headers for images
  if (contentType.startsWith("image/")) {
    res.setHeader("Cache-Control", "public, max-age=31536000"); // Cache for 1 year
    res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        errorHandler(res, 404);
      } else {
        console.error("Error reading file:", err);
        errorHandler(res, 500);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
