const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    "welcome",
    "redirect",
    "redirected",
    "cache",
    "cookie",
    "other",
  ];

  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to the Jungle!");
  }

  if (req.url === "/redirect") {
    // Set the status code and the redirection target URL
    res.writeHead(302, { Location: "/redirected" });
    return res.end(); // Always return to prevent further code execution
  }

  if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("All roads lead to Rome.");
  }

  if (req.url === "/cache") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    });
    return res.end("This resource was cached");
  }

  if (req.url === "/cookie") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Set-Cookie": "hello=world",
    });
    return res.end("cookies... yummm");
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404 - Page Not Found</h1>");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
