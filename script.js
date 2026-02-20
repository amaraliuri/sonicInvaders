const width = window.screen.width
const height = window.screen.height

const LEFT =    37
const RIGHT =   39
const LAUNCH =  32
const VEL =     20
const VEL_M =   15

var pos_hn =  (width / 2)
var pos_vn =  height - 300
var pos_hm1 = pos_hn + 170
var pos_hm2 = pos_hn - 20

var sec=0, min=0, hou=0 
var pos_vm =  height - 270
var pause = false;
var flag1 = 0
var flag2 = 0;

function loadComics(){

    let plane = document.querySelector("#egg");
    let missil1 = document.querySelector("#missil1");
    let missil2 = document.querySelector("#missil2");

    plane.style.top = pos_vn + "px"
    plane.style.left = pos_hn + "px"

    missil1.style.top = pos_vm + "px"
    missil1.style.left = pos_hm1 + "px"

    missil2.style.top = pos_vm + "px"
    missil2.style.left = pos_hm2 + "px"

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

function press(e){

    let plane = document.querySelector("#egg");
    let missil1 = document.querySelector("#missil1");
    let missil2 = document.querySelector("#missil2");

    switch(e.keyCode){

        case LEFT:
            if(pos_hn >= 340 && !pause) {
                pos_hn -= VEL 
                if(flag1 == 0) pos_hm1 -= VEL
                if(flag2 == 0) pos_hm2 -= VEL  
            }
            break
            
        case RIGHT:
            if(pos_hn <= 1200 && !pause) {
                pos_hn += VEL
                 if(flag1 == 0) pos_hm1 += VEL  
                 if(flag2 == 0) pos_hm2 += VEL  
            }
            break
    }

    if(!pause) {
        plane.style.left = pos_hn + "px";
        missil1.style.left = pos_hm1 + "px";
        missil2.style.left = pos_hm2 + "px";
    }
}