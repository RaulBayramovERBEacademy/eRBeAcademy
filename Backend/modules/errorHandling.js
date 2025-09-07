export function errorHandler(res, statusCode) {
  const messages = {
    404: "404 Not Found - The resource you requested could not be found.",
    500: "500 Internal Server Error - An unexpected error occurred on the server.",
  };
  const message = messages[statusCode] || "An unknown error occured.";
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(message);
  console.error(`Error ${statusCode}: ${message}`);
}
