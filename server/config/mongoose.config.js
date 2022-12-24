const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://geartf:Geartgf2006%40@exam.gharvyc.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));