const express = require("express")
const app = express()


app.use(express.json())
const port = process.env.PORT ||  3333;

const users = [
    {
        "id" : 1,
        "name" : "Jhon",
        "gender" : "Male",
        "img"  :  "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        "id" : 2,
        "name" : "Willie",
        "gender" : "Male",
        "img"  :  "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        "id" : 3,
        "name" : "Caroline",
        "gender" : "female",
        "img"  :  "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        "id" : 4,
        "name" : "CarFelixoline",
        "gender" : "Male",
        "img"  :  "https://randomuser.me/api/portraits/men/87.jpg"
    },
    {
        "id" : 5,
        "name" : "Diane",
        "gender" : "female",
        "img"  :  "https://randomuser.me/api/portraits/women/60.jpg"
    }
]

app.get("/api/users",(req,res)=>{
    res.status(200).json(users);
})

app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id;
    const m = users[getUser(id)];
    res.status(200).json(m);
})

app.get("/api/random",(req,res)=>{
    const id = Math.floor(Math.random()*(users.length+1))
    res.status(200).json(users[id]);
})

const getUser = (uid)=>{
    for(let i=0;i<users.length;i++){
        if(uid == users[i].id){
            return i;
        }
    }
    return -1;
}

var newuserid = users.length;

app.post("/api/newuser",(req,res)=>{
    let data = req.body;
    data.id = newuserid;
    newuserid++;
    users.push(data)
    console.log(users)
    res.status(200).json({"message":"done"})
})

app.put("/api/up/:id",(req,res)=>{
    let m = req.params.id;
    var idx = getUser(m);
    if(req.body.name){
        users[idx].name = req.body.name;
    }
    if(req.body.img){
        users[idx].img = req.body.img;
    }
    if(req.body.gender){
        users[idx].name = req.body.gender;
    }
    res.status(200).json({"message":"done","updated":users[idx]})
})

app.delete("/api/users/:id",(req,res)=>{
    let m = req.params.id;
    let idx = getUser(m);
    if(idx == -1){
        res.status(404)
    }
    users.splice(idx,1);
    res.status(200).json({"message":"done deleted"});
})


app.use(express.static("frontend"))

app.listen(port,()=>{
    console.log("runnnig at"+port);
});





