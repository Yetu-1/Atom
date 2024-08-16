import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
import cors from "cors"

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "auto-bus",
  password: "swordfish",
  port: 5432,
});

const app = express();
const port = 5138;

db.connect();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors({
    origin: "http://localhost:5174",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.get("/", async (req, res) => {
    try{
        const result = await db.query("SELECT * FROM users");
        console.log(result.rows);
        const users = result.rows;
        res.json(users);
      }catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
});

app.get("/login", (req, res) => {
//   res.render("login.ejs");
});

app.get("/register", (req, res) => {
//   res.render("register.ejs");
});

app.post("/register", async (req, res) => {
    console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const user_id = req.body.user_id;
  const balance = 10000;

  console.log(req.body);

  try{
    const checkResult = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    
    if(checkResult.rows.length > 0){
      res.sendStatus(400) // Email already exists. Try logging in
    }else{
      const result = await db.query("INSERT INTO users (username, password, user_id, balance) VALUES ($1, $2, $3, $4)",[username, password, user_id, balance]);
      console.log(result);
      res.sendStatus(200);
    }
  }catch(err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try{
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if(result.rows.length > 0){
      const user = result.rows[0];
      const storedPassword = user.password;

      if(password === storedPassword){
        // res.render("secrets.ejs")
      }else {
        res.send("Incorrect Password")
      }
    }else{
      res.send("User not found");
    }
  }catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function getDistance(Coordinate1, coordinate2) {

}