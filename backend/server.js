const app = require("./app");
const { connectDatabase } = require("./config/database");
const dotenv = require("dotenv");

//Config
dotenv.config({ path: "backend/config/config.env" });

//Mongoose Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});