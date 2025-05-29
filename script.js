
let btn=document.querySelectorAll(".btn");

for(let i=0;i<btn.length;i++){

    btn[i].addEventListener("click",function(){
        if(btn[i].innerHTML==="T"){
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }else if(btn[i].innerHTML==="A"){
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play(); 
        }else if(btn[i].innerHTML==="P"){
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play(); 
        }else if(btn[i].innerHTML==="Z"){
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play(); 
        }else if(btn[i].innerHTML==="O"){
            let audio = new Audio('sounds/crash.mp3');
            audio.play(); 
        }else if(btn[i].innerHTML==="N"){
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play(); 
        }else if(btn[i].innerHTML==="E"){
            let audio = new Audio('sounds/snare.mp3');
            audio.play(); 
        }else{
            alert("Please Enter Valid Button");
        } 
    
})
}


