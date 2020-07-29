tela = document.getElementById('tela');
aheight = window.innerHeight;
tela.style.height = aheight+"px";





tela = tela.getContext('2d');
tela.fillStyle = "rgb(200,0,0)"; // define a cor de preenchimento do retângulo
tela.fillRect(10, 10, 55, 50);

//start all images

img = new Image(100,200);
img.src='player.jpg';
//draw all

//KEYS

window.addEventListener('keydown',(event)=>{
    alert(event.key);
})
function move(x,y){
    
}
function frame(x,y,id){
    tela.drawImage(img,x,y);
    console.log('a')
}
x = 10;
y = 20;
setInterval(frame(x,y),1000);