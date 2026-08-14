const users = [
    {
        "name" : "Jhon Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "john.png"
    }
]

var idx = 0;

const toggleuser = ()=>{
    if(idx == 0){
        idx = 1;
    }else{
        idx = 0;
    }
    document.getElementById("im").src = users[idx].image;
    document.getElementById("name").innerText = users[idx].name;
    document.getElementById("gender").innerText = users[idx].gender;
}

document.getElementById("toggle").addEventListener("click",toggleuser);

