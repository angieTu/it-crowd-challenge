const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const port = 8080;

mongoose.connect(
  `mongodb+srv://angietur:${process.env.PASSWORD}@cluster0.wky5n.gcp.mongodb.net/challenge?retryWrites=true&w=majority`
);

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
