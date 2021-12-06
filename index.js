const express = require("express");
const cors = require("cors");
const pa11y = require("pa11y");
const PORT = process.env.PORT || 8333;

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  //optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static('public'));

app.get("/api/test", async (req, res) => {
  //alert("hih");
  if (!req.query.url) {
    res.status(400).json({ error: "url is required" });
  } else {
    const results = await pa11y(req.query.url);
    res.status(200).json(results);
  }
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
