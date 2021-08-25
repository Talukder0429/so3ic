const express = require("express");
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const app = express();

//mw
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

const tables = ["alch", "cmpd", "cook", "crft", "eng", "smth", "writ"];
const PORT = process.env.PORT || 5000;

// add to db

// app.post("/insert", (req, res) => {
//   table = tables[parseInt(req.get("table"))];
//   req.body.forEach(async (element) => {
//     const { item, cost, rating, inventors } = element;
//     try {
//       const newItem = await pool.query(
//         "INSERT INTO " +
//           table +
//           " (item, cost, rating, inventors) VALUES ($1, $2, $3, $4) RETURNING *",
//         [item, cost, rating, [inventors]]
//       );
//       res.json("Inserted into table: " + table);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// });

// get table
app.get("/get_ic_items/:ic", async (req, res) => {
  const { ic } = req.params;
  table = tables[parseInt(ic)];
  console.log(req.hostname);
  try {
    const allItems = await pool.query("SELECT * FROM " + table);
    res.json(allItems.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
