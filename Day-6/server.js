require("dotenv").config();
const app = require("./src/app");
const ConnectToDb = require("./src/config/Database");

ConnectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
