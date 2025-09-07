import path from "path";
function resolveFile(filePath) {
  const ext = path.extname(filePath);
  const contentTypeMap = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".json": "application/json",
  };
  return contentTypeMap[ext] || "text/plain";
}
export default resolveFile;
