function randomColor(){
    const colorStr = '0123456789ABCDEF'.split('');
    let coloR = '#';
    for(let i =0;i<6;i++){
        coloR += colorStr[Math.floor(Math.random()*16)];
    }
    return coloR;
}

let startTimer = new Date().getTime(); 
function makeShapeAppear(){
    const toP=Math.random()*400;
    const lefT=Math.random()*400;
    const righT = Math.random()*400;
    const bottoM=Math.random()*400;
    const widtH=(Math.random()*200)+100;
    if(Math.random()<0.5){
        document.getElementById("shape").style.borderRadius="50%";
    }
    else{
        document.getElementById("shape").style.borderRadius="0%";
    }

    document.getElementById("shape").style.top=toP+"px";
    document.getElementById("shape").style.left=lefT+"px";
    document.getElementById("shape").style.right=righT+"px";
    document.getElementById("shape").style.bottom=bottoM+"px";
    document.getElementById("shape").style.width = widtH+"px";
    document.getElementById("shape").style.height = widtH+"px";
    document.getElementById("shape").style.backgroundColor=randomColor();

    document.getElementById("shape").style.display= "block";
    startTimer = new Date().getTime(); 
}
function delay(){
    setTimeout(makeShapeAppear,Math.random()*2000);
}


delay();
document.getElementById("shape").onclick= ()=>{
    let endTimer =new Date().getTime();
    document.getElementById("shape").style.display= "none";
    let timeTaken = (endTimer - startTimer)/1000;
    document.getElementById("msg").innerHTML = "<h3> time taken (Your reaction speed) is -> "+ timeTaken+"sec";
    delay();
}
