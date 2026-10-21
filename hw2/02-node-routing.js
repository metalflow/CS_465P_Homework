const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

app.use(
  session({
    store: new session.MemoryStore(),
    secret: "a secret to sign the cookie",
    resave: false,
    saveUninitialized: false,
    cookie: {
      'hello=world'
      maxAge: 86400000,
    },
  }),
);

const server = http.createServer((req, res) => {
  const routes = [
    "welcome",
    "redirect",
    "redirected",
    "cache",
    "cookie",
    "other",
  ];

  app.get("/welcome", (req, res) => {
    res.status(200);
    res.set({ "Content-Type": "text/plain" });
    res.send("Welcome to the Jungle!");
  });

  app.get("/redirect", (req, res) => {
    //302 status is default
    res.redirect("/redirected");
  });

  app.get("/cache", (req, res) => {
    const options = {
      maxAge: "1d",
    };
    res.status(200);
    res.set({ "Content-Type": "text/html" });
    res.send("This resource was cached", options);
    maxAge: "1d";
  });

  app.get("/cookie", (req, res) => {
    const options = {
      maxAge: "1d",
    };
    res.status(200);
    res.set({ "Content-Type": "text/plain" });
    res.send("cookies… yummm", options);
    maxAge: "1d";
  });

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("404: No Page found");
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
