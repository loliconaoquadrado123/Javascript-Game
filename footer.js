screen = document.getElementById('tela');
screen2d = screen.getContext('2d');
screenH = window.innerHeight;

screen.style.height = screenH+"px";

///Player
player ={

    cords:{
        Rx:0,
        Ry:0,
        x:0,
        y:0,
    },
    
};







//start all images

img = new Image(100,200);
img.src='player.jpg';
//draw all

//KEYS
x = 0;
y = 0;
function frame(){
    physics
    screen2d.clearRect(0,0,tela.width,tela.height);
    screen2d.beginPath();
    screen2d.drawImage(img,x,y);
    screen2d.closePath();
    
    
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
            y+=1;

            break;
    } })

function scroll(){
    if(player.cords.rX <= 10){
        
    }
}



