window.addEventListener('load',function(){
    class Object{
        constructor(x,y,width,height,vel,direction,color){
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.vel=vel;
            this.direction=direction;
            this.color=color;
            this.sprite=new Image(width,height);

        }
    }
    class ComboKeys{
        constructor(){
            
        }

    }
    // class Player extends Object{
        
    // mainScene={
        
    //     Player:new Object(0,0,100,1000,0,0,"#ffffff")
    // };

    // }
    i=0;
    function physics(){
        switch(Player.direction){
            case 0:
                break;
            case 1:
                Player.x-=Player.vel;
                break;
            case 2:
                Player.x+=Player.vel;
                break;
            case 3:
                Player.y-=Player.vel;
                break;
            case 4:
                Player.y+=Player.vel;
                break;
        }
        
        if(!i==1){
            if(Player.x==game.width||Player.x<0)Player.x=-Player.width;
            if(Player.y==game.height||Player.y<0)Player.y=-Player.height;
        }
        i++;
        
    }
        
    const Player=new Object(0,0,100,1000,1,2,"#ffffff");
    const game=document.querySelector('#game');
    const gameContext=game.getContext('2d');
    function update(){
        gameContext.clearRect(0,0,game.width,game.height);
        physics();
        gameContext.fillStyle="blue";
        gameContext.fillRect(Player.x,Player.y,Player.width,Player.height);
        
        
    }
    keysPressed=[];


    window.addEventListener('keydown',(e)=>{
        if(!keysPressed.includes(e.key))keysPressed.push(e.key);
        // switch(keysPressed){
        //     case 'left':
        //         function left(){

        //         }
        //     break;
        //     case 'right':
        //         function left(){
                    
        //         }
        //     break;
        //     case 'up':
        //         function left(){

        //         }
        //     break;
        //     case 'down':
        //         function left(){
                    
        //         }
        //     break;
        // }
    })
    window.addEventListener('keyup',(e)=>{
        // if(!keysPressed.remove
    })
setInterval(update,100);
});