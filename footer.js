


screen = document.getElementById('tela');
screen2d = screen.getContext('2d');
screenH = window.innerHeight;

screen.style.height = screenH + "px";
x=0;
y=0;
haveGround=true;
ground=300;
inAir=true;
jump=false;



//start all images
function image(src){
    this.src=src;
}

img = new Image(100, 200);
img.src = 'player.jpg';


//draw all

//KEYS
function jump() {
    var a;
}
function gravity(){
    
    while(inAir==true){
        y+=1;
    }
    
}
function physics() {
    gravity();
     
    
}
function scene(){
    haveGround=true;
    ground=400;
}

function frame() {
    physics();
    screen2d.clearRect(0, 0, tela.width, tela.height);
    screen2d.beginPath();
    screen2d.drawImage(img, x, y);
    screen2d.closePath();


}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowRight":
            x += 1;
            break;
        case "ArrowLeft":
            x -= 1;
            break;
        case "ArrowUp":
            
            y -= 1;
            break;
        case "ArrowDown":
            y += 1;

            break;
    }
})

function scroll() {
    
}



