tela = document.getElementById('tela');
aheight = window.innerHeight;
tela.style.height = aheight+"px";





tela = tela.getContext('2d');
tela.fillStyle = "rgb(200,0,0)"; // define a cor de preenchimento do retângulo
tela.fillRect(10, 10, 55, 50);


tela.drawImage(document.getElementById('player'),100,10);

