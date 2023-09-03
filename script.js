var timer=60;
var score=0;
var hitrn=0;

function increasescr(){
    score +=10;
    document.querySelector("#score").textContent=score;
}

function getnewhit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
function mkbubble(){
    var clutter=""
for(var i=1;i<=136;i++){
    var b=Math.floor(Math.random()*10);

clutter +=`<div class="bubble">${b}</div>`;
}

var a=document.querySelector("#pbtm").innerHTML=clutter;

}
function runtimer(){
var time= setInterval(function(){
if(timer>0){
    timer--;
document.querySelector("#timein").textContent=timer;
}
else{
clearInterval(time);
document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
}
},1000)

}


document.querySelector("#pbtm").addEventListener("click",function(dets){
 var click=Number(dets.target.textContent);
 if(click === hitrn){
    increasescr();
    mkbubble();
getnewhit();

 }
})




runtimer()
mkbubble()
getnewhit()