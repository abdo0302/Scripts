let card=document.querySelector('.card');
let title=document.querySelector('.title');

card.addEventListener("mousemove",(e)=>{
    let xAxis=(window.innerWidth / 2-e.pageX) / 8;
    let yAxis=(window.innerHeight / 2-e.pageY) / 8;
    card.style.transform=`rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    card.style.transition="none";
    title.style.transform = "translateZ(150px)";
});

card.addEventListener("mouseout",()=>{
    card.style.transform='rotateY(0deg) rotateX(0deg)';
    card.style.transition="all 1s ease";
    title.style.transform="translateZ(0px)";
    
})