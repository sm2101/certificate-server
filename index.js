const express = require("express"),
  pdf = require("html-pdf"),
  cors = require("cors"),
  template = require("./Certificate Template/index"),
  app = express(),
  port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/create-pdf", (req, res) => {
  pdf
    .create(template(req.body), { height: "650px", width: "800px" })
    .toFile("rezultati.pdf", (err) => {
      if (err) {
        return console.log("error");
      }
      res.send(Promise.resolve());
    });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/rezultati.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
