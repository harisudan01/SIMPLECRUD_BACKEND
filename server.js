const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
var v1 = require('./routes/v1');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1/product', v1);
// Start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
module.exports=app
