

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

const random = async()=>{
    const u = await fetch('https://randomuser.me/api')
    const user = await u.json();
    document.getElementById("im").src = user.results[0].picture.large;
    document.getElementById("name").innerText = user.results[0].name.title+ " "+user.results[0].name.first+" "+user.results[0].name.last;
    document.getElementById("gender").innerText = user.results[0].gender;
    console.log(user)
}
document.getElementById("change").addEventListener("click",random);

