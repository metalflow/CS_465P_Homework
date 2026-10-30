import { useCallback, useState } from "react";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// GET endpoint to fetch data
app.get("/home", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Express Routing Exercise");
});

// POST endpoint to add data
app.post("/api/items", (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(5000, () => console.log("Server running on port 5000"));
