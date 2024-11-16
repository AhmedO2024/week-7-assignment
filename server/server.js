import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (req, res) => {
  console.log("Root route accessed");
  res.json("You are looking at my root route. How rude!");
});

app.get("/player_review", async (req, res) => {
  console.log("GET /player_review accessed");
  const result = await db.query(`
    SELECT id, username, team, player, review, created_at
    FROM reviews;
  `);
  console.log("Fetched reviews:", result.rows);
  res.json(result.rows);
});

app.post("/player_review", async (req, res) => {
  const { username, team, player, review, password } = req.body;
  console.log("POST /player_review with data:", req.body);

  const result = await db.query(
    `
    INSERT INTO reviews (username, team, player, review, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, username, team, player, review, created_at;
    `,
    [username, team, player, review, password]
  );
  console.log("Inserted review:", result.rows[0]);
  res.json(result.rows[0]);
});

app.delete("/player_review/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  console.log("DELETE /player_review with id:", id, "and password:", password);

  const result = await db.query(`SELECT password FROM reviews WHERE id = $1`, [
    id,
  ]);
  if (result.rows.length > 0 && result.rows[0].password === password) {
    await db.query(`DELETE FROM reviews WHERE id = $1`, [id]);
    console.log("Review deleted with id:", id);
    res.status(200).json({ message: "Review deleted successfully" });
  } else {
    console.log("Failed to delete review: Incorrect password or no permission");
    res.status(403).json({ message: "Incorrect password or no permission" });
  }
});

app.listen(8080, () => console.log("App is running on port 8080"));
