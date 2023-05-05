const mysql = require("mysql");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "aakrithi",
});
const db = connection;
connection.connect();

app.post("/data", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO new_table SET ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data added to database.");
    }
  );
});
app.post("/becomeArtist", (req, res) => {
  const data = req.body;
  connection.query(
    "INSERT INTO all_artist SET ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data added to database.");
    }
  );
});

app.post("/user", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO user SET ?", data, (error, results, fields) => {
    if (error) throw error;
    res.send("Data added to database.");
  });
});

app.post("/blog", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO blog SET ?", data, (error, results, fields) => {
    if (error) throw error;
    res.send("blog added to database.");
  });
});
app.post("/art", (req, res) => {
  const data = req.body;
  console.log(data);
  connection.query("INSERT INTO art SET ?", data, (error, results, fields) => {
    if (error) throw error;
    res.send("blog added to database.");
  });
});

app.get("/becomeArtist", (req, res) => {
  connection.query("SELECT * FROM  all_artist", (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from database: " + error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      const data = results.map((result) => ({
        id: result.id,
        image: result.image,
        email: result.email,
        name: result.name,
        proof: result.proof,
        country: result.country,
        city: result.city,
        age: result.age,
        gender: result.gender,
        category: result.category,
        contact: result.contact,
        description: result.description,
      }));
      res.send(data);
    }
  });
});

app.get("/blog", (req, res) => {
  connection.query("SELECT * FROM  blog", (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from database: " + error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      const data = results.map((result) => ({
        id: result.id,
        image: result.image,
        title: result.title,
        description: result.description,
        status: result.status,
        email: result.email,
      }));
      res.send(data);
    }
  });
});

app.get("/user", (req, res) => {
  connection.query("SELECT * FROM  user", (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from database: " + error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      const data = results.map((result) => ({
        id: result.id,
        image: result.image,
        email: result.email,
        name: result.name,
        number: result.number,
        address: result.address,
        pass: result.pass,
      }));
      res.send(data);
    }
  });
});

//get admin
app.get("/admin", (req, res) => {
  connection.query("SELECT * FROM  admin", (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from database: " + error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      const data = results.map((result) => ({
        id: result.id,
        email: result.email,
      }));
      res.send(data);
    }
  });
});
app.get("/art", (req, res) => {
  connection.query("SELECT * FROM  art", (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from database: " + error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      const data = results.map((result) => ({
        id: result.id,
        image: result.image,
        email: result.email,
        prodcutName: result.prodcutName,
        availableQty: result.availableQty,
        description: result.description,
        price: result.price,
        size: result.size,
      }));
      res.send(data);
    }
  });
});

app.get("/art/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM art WHERE id = ${id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Error executing query" });
      return;
    }
    res.json(results[0]); // Assumes the id is unique and returns only one row
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM user WHERE id = ${id}`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Error executing query" });
      return;
    }
    res.json(results[0]); // Assumes the id is unique and returns only one row
  });
});

app.get("/becomeArtist/:email", (req, res) => {
  const email = req.params.email;
  const query = `SELECT * FROM all_artist WHERE email = '${email}'`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Error executing query" });
      return;
    }
    if (results.length === 0) {
      res.json({}); // Return empty object
      return;
    }
    res.json(results[0]); // Assumes the email is unique and returns only one row
  });
});

app.get("/art/:email", (req, res) => {
  const email = req.params.email;
  const query = `SELECT * FROM art WHERE email = '${email}'`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Error executing query" });
      return;
    }
    if (results.length === 0) {
      res.json({}); // Return empty object
      return;
    }
    res.json(results[0]); // Assumes the email is unique and returns only one row
  });
});

//delete blog
app.delete("/blog/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM blog WHERE id = ?`;

  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Product deleted successfully" });
    }
  });
});
app.delete("/art/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM art WHERE id = ?`;

  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Art deleted successfully" });
    }
  });
});
//update blog status
app.patch("/blog/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE blog SET status = 'active' WHERE id = ?`;

  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Blog status updated successfully" });
    }
  });
});

app.patch("/art/:id", (req, res) => {
  const id = req.params.id;
  const { image, productName, availableQty, description, price, size } =
    req.body;
  console.log(req.body);

  const sql = `UPDATE art SET 
  image = ?,
  prodcutName = ?,
  availableQty = ?,
  description = ?,
  price = ?,
  size = ?
WHERE id = ?`;

  connection.query(
    sql,
    [image, productName, availableQty, description, price, size, id],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.status(200).json({ message: "Art updated successfully" });
      }
    }
  );
});

app.patch("/user/:id", (req, res) => {
  const id = req.params.id;
  const { image, name, number, address } = req.body;
  console.log(req.body);

  const sql = `UPDATE user SET 
               image = ?,
               name = ?,
               number = ?,
               address = ?`;

  connection.query(sql, [image, name, number, address], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Art updated successfully" });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
