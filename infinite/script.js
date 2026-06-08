const tri1 = document.querySelector('.tri1');
const tri2 = document.querySelector('.tri2');

document.getElementById("btn").addEventListener("click", (e)=>{
   tri1.style.animationPlayState = "running"
   tri2.style.animationPlayState = "running"
})


document.getElementById("pbtn").addEventListener("click", (e)=>{
   tri1.style.animationPlayState = "paused"
   tri2.style.animationPlayState = "paused"
})
