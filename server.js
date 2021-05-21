const mongoose = require("mongoose");
const app = require("./app");

const port = 3000;
app.listen(port, () => {
  console.log(`listening to port ${port} ....`);
});

const DB = "mongodb://localhost:27017/Tiffina";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    //console.log(con.connections);
    console.log("DB connection successful !");
  });
