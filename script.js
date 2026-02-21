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

        if(!pause){
            document.querySelector("#time").textContent = Timer();
        }
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

function launch(){
    let mis
    let  id
    let pos = pos_vm

    if(flag1 == 0){
        mis = document.querySelector("#missil");
        flag1 = 1
    }
    else if(flag2 == 0){
        mis = document.querySelector("#missil2");
        flag2 = 1
    }

    id = setInterval(() => {
        
        if(!pause){

            pos -= VEL_M
            mis.style.top = pos + "px"
            
            if(pos < -10) {
                recarregarMssil()
                clearInterval(id)
            }
        }
    }, 10);
}

function recarregarMissil(){
    let mis1
    let mis2 

    if(flag2 == 1){
         mis1 = document.querySelector("#missil1");
        pos_hm1 = pos_hn + 10
        mis1.style.left = pos_hm1 + "px"
        mis1.style.top = pos_vm + "px"

        mis2 = document.querySelector("#missil2");
        pos_hm2 = pos_hn + 75
        mis2.style.left = pos_hm2 + "px"
        mis2.style.top = pos_vm + "px"

        flag1 = 0
        flag2 = 0
    }
}

function press(e){

    let plane = document.querySelector("#egg");
    let missil1 = document.querySelector("#missil1");
    let missil2 = document.querySelector("#missil2");

    switch(e.keyCode){

        case 80:  
            paused()
            break

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

        case LAUNCH:
            if(flag2 == 0 && !pause) {
                launch()
            }
            break
    }

    if(!pause) {
        plane.style.left = pos_hn + "px";
        missil1.style.left = pos_hm1 + "px";
        missil2.style.left = pos_hm2 + "px";
    }
}

function paused(){
    let p = document.querySelector("#pause");
    pause = !pause

    if(pause) p.style.visibility = "visible"
    else p.style.visibility = "hidden"
}