const express = require('express')
const mongoose = require('mongoose')

//api end-points
const auth = require('./routes/api/auth');
const user = require("./routes/api/user");

const app = express();

//Database config
const dbURI = require("./config/keys").mongoURI


mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected Sucessfully"))
    .catch(err => console.log(err));



//Use Routes
app.get('/', (req, res) => res.send("Hello"))
app.use('/api/user', user)
app.use('/api/auth', auth)



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running at ${port}`))