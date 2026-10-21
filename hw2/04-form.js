const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(`
        <h2>A Simple Form</h2>
        <form action="/submit" method="POST">
            <label><input type="radio" name="test" value="true"> Test?</label><br>

            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const test = req.body.test;
  const name = req.body.name;
  const message = req.body.message;
  let output = "";
  if (test === "true") {
    output = "This message is a test. ";
  }
  output = output + `Message from ${name} is ${message}.`;
  res.send(output);
});

app.use((req, res, next) => {
  res.status(404).send("404 Route not found!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
