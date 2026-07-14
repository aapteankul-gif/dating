const profiles = [

{
name:"Sophia, 24",
bio:"Loves traveling and coffee.",
img:"https://picsum.photos/350/400?random=1"
},

{
name:"Emma, 26",
bio:"Fitness lover and foodie.",
img:"https://picsum.photos/350/400?random=2"
},

{
name:"Olivia, 23",
bio:"Beach, music and dogs.",
img:"https://picsum.photos/350/400?random=3"
},

{
name:"Isabella, 25",
bio:"Artist and photographer.",
img:"https://picsum.photos/350/400?random=4"
},

{
name:"Mia, 27",
bio:"Movie addict and traveler.",
img:"https://picsum.photos/350/400?random=5"
}

];

let index=0;

function showProfile(){

document.getElementById("name").innerHTML=profiles[index].name;
document.getElementById("bio").innerHTML=profiles[index].bio;
document.getElementById("profileImg").src=profiles[index].img;

}

function nextProfile(){

index++;

if(index>=profiles.length){
index=0;
}

showProfile();

}

function likeProfile(){

alert("❤️ It's a Match!");

nextProfile();

}
