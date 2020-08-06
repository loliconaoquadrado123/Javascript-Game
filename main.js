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
function verify(key){
    for(i=0;keysPressed[i]==keysPressed.lengh;i++){
        if(keysPressed[i]=key){
            return 1;
        }else{
            return 0;
        }
    }
    
}
keysPressed=[];
    window.addEventListener('keydown',function(event){
        
        
        switch(event.key){
            
            case 'ArrowUp':
                
                key = 'up';
                if(verify(key)){
                    keysPressed[].push(key);
                }
                y-=1;
                break;
            case 'ArrowDown':
                key = 'down';
                y+=1;
        
                break;
            case 'ArrowLeft':
                key = 'left';
                x-=1;
                break;
            case 'ArrowRight':
                key = 'right';
                x+=1;
                break;
                        
        }
})
window.addEventListener('keyup',function(event){
        for(i = 0;i==keysPressed.lengh;i++){
            keysPressed[i]=false;
        }

})
setInterval(frame,10);

})
