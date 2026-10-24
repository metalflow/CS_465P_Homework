const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(`
        <h2>A Simple Form</h2>
        <form action="/submit" method="POST">

            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="comments">Comments:</label><br>
            <input type="text" id="comments" name="comments"><br><br>

            <label for="signUp">Sign up for Newsletter?</label><br>
            <input type="checkbox" id="signUp" name="signUp"><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.set({ "Content-Type": "text/html" });
  const username = escapeHTML(req.body.username);
  const email = escapeHTML(req.body.email);
  const comments = escapeHTML(req.body.comments);
  const signUp = typeof req.body.signUp !== "undefined";
  let output =
    `<p>User ${username} has been created with email ${email}<br>` +
    `User had the following comments:${comments}</p>`;
  if (signUp) {
    output = output + `<p>User has signed up for the NewsLetter!</p>`;
  }
  output = output + `<a href="/form">Go Back to Form</a>`;
  res.send(output);
});

app.use((req, res, next) => {
  res.status(404).send("404 Route not found!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
