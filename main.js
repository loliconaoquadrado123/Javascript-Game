function load(){
        load = document.createElement('div').setAttribute('id','load');
        document.load(()=>{
        load.style.display="none";
        })
}

document.onload = ()=>{
    load();
    setInterval(frame, 100);
}