/*
function load(){
        

document.onload = ()=>{
    load.style.height=window.innerHeight;
        document.load(()=>{
        load.style.display="none";
        })
}
    setInterval(frame, 100);
}

function img(src){
    this.src=src;
}*/
window.addEventListener('load',function(){
    x=0;
    y=0;
    screenH = window.innerHeight;
    screen = document.getElementById('screen');
    screen2d = screen.getContext('2d');
    player=new Image();
    player.src='player.jpg';
    img=player;
    
function frame() {
    
    screen2d.clearRect(0, 0, screen.width, screen.height);
    screen2d.beginPath();
    screen2d.drawImage(img,x,y);
    screen2d.closePath();
    
    
}

    window.addEventListener('keydown',function(event){
        
        
        switch(event.key){
            
            case 'ArrowUp':
                key = 'arrowUp';
                y-=1;
                break;
            case 'ArrowDown':
                key = 'arrowDown';
                y+=1;
        
                break;
            case 'ArrowLeft':
                key = 'arrowLeft';
                x-=1;
                break;
            case 'ArrowRight':
                key = 'arrowRight';
                x+=1;
                break;
                        
        }
})
setInterval(frame,10);

})
