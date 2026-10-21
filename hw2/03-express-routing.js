const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  "welcome",
  "redirect",
  "redirected",
  "cache",
  "cookie",
  "other",
];

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Express Routing Exercise");
});

app.get("/welcome", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  res.send("Welcome to the Express Jungle!");
});

app.get("/redirect", (req, res) => {
  res.status(302);
  res.redirect("/redirected");
});

app.get("/redirected", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  res.send("How did I get here?");
});

app.get("/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=1d");
  res.set({ "Content-Type": "text/html" });
  res.send("this resource was cached");
});

app.get("/cookie", (req, res) => {
  res.cookie("hello", "world");
  res.set({ "Content-Type": "text/plain" });
  res.send("cookies... yummm");
});

app.use((req, res, next) => {
  res.status(404).send("404 Route not found!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
