var sec=0, min=0, hou=0 

function loadComics(){
    document.querySelector("#time").textContent = Timer();

    setInterval(()=> {
        document.querySelector("#time").textContent = Timer();
    },1000);
}

function Timer(){
    
    let txt;
    sec ++

    if(sec == 60){
        min++
        if(min == 60){
            hou++
            min = 0;
        }
        sec = 0;
    }

    if(hou < 10) txt = "0" + hou + ":"
    else txt = hou + ":"
    if(min < 10) txt += "0" + min + ":"
    else txt += min + ":"
    if(sec < 10) txt += "0" + sec
    else txt += sec

    return txt
}