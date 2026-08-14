const express = require("express")
const app = express()



const port = process.env.PORT ||  3333;

app.use(express.static("frontend"))

app.listen(port,()=>{
    console.log("runnnig at"+port);
});





