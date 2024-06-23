const app = require("./app");
const { connectDatabase } = require("./config/database");
const dotenv = require("dotenv");
const { socketConnection } = require("./config/socket");

//Config
dotenv.config({ path: "backend/config/config.env" });

//Mongoose Database
connectDatabase();

//Socket Connection
socketConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});