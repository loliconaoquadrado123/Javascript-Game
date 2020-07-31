tela = document.getElementById('tela');
aheight = window.innerHeight;
tela.style.height = aheight+"px";
///Player
player ={

    cords:{
        Rx:0,
        Ry:0,
        x:0,
        y:0,
    },
    
};




tela = tela.getContext('2d');


//start all images

img = new Image(100,200);
img.src='player.jpg';
//draw all

//KEYS
x = 0;
y = 0;
function frame(){
    tela.clearRect(0,0,tela.width,tela.height);
    tela.beginPath();
    tela.drawImage(img,x,y);
    tela.closePath();
    
  
    
    
    
}
setInterval(frame,10);
window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case "ArrowRight":
            x+=1;
            break;
        case "ArrowLeft":
            x-=1;
            break;
        case "ArrowUp":
            
            y-=1;
            break;
        case "ArrowDown":
            y+=;

            break;
    } })

function scroll(){
    if(player.cords.rX <= 10){
        
    }
}



