const mongoose = require("mongoose");
let conn = null;
const db = process.env.LOCAL;
process.env.DATABASE.replace("<password>", process.env.DB_PWD);
init = async () => {
  try {
    conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    if (conn) {
      console.log("Database connected");
    }
  } catch (err) {
    console.log(err.name);
  }
};
init();
