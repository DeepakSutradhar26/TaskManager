const mongoose = require("mongoose");

exports.connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((data) => { console.log(`Server connected at ${data.connection[0].name}`) })
        .catch((err) => { console.log(err) });
}