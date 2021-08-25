const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

//mw
app.use(cors());
app.use(express.json());

const tables = ["alch", "cmpd", "cook", "crft", "eng", "smth", "writ"];

// add to db
app.post("/insert", (req, res) => {
  table = tables[parseInt(req.get("table"))];
  req.body.forEach(async (element) => {
    const { item, cost, rating, inventors } = element;
    try {
      const newItem = await pool.query(
        "INSERT INTO " +
          table +
          " (item, cost, rating, inventors) VALUES ($1, $2, $3, $4) RETURNING *",
        [item, cost, rating, [inventors]]
      );
      res.json("Inserted into table: " + table);
    } catch (error) {
      console.log(error.message);
    }
  });
});

// get
app.get("/get_ic_items/:ic", async (req, res) => {
  const { ic } = req.params;
  table = tables[parseInt(ic)];
  try {
    const allItems = await pool.query("SELECT * FROM " + table);
    res.json(allItems.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
