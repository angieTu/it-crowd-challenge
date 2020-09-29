const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
