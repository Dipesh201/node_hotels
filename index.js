const express  = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const MenuItem = require("./models/MenuItem");

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome to restorent")
})

// import routes
const routes = require('./routes/PersonRoutes')

app.use("/",routes)

// import menu routes 
const menuroutes = require("./routes/MenuRoutes")
app.use('/menu',menuroutes)

     






app.listen(2000, ()=>console.log("server start"))  