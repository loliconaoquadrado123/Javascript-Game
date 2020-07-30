tela = document.getElementById('tela');
aheight = window.innerHeight;
tela.style.height = aheight+"px";





tela = tela.getContext('2d');


//start all images

img = new Image(100,200);
img.src='player.jpg';
//draw all

//KEYS

x = 10;
y = 20;
function frame(){
    tela.beginPath();
    tela.drawImage(img,x,y);
    tela.closePath();
    
    tela.clearRect(0, 0, tela.width,tela.height);
    
    
    
}
window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case "ArrowRight":
            x+=1;
            break;
        case "ArrowLeft":
            x-=1;
            break;
        case "ArrowUp":
            y+=1;
        case "ArrowDown":
            y-=1;
            break;
    } })
setInterval(frame,1);

