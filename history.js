const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var round=document.querySelector(".pkr")
var sqr2=document.querySelector("#square2")
var sqr3=document.querySelector("#square3")
var un=document.querySelector("#UN")
var flag=0;
round.addEventListener("click",function(){

    if(flag===0){
    sqr2.style.left = "30%";
    sqr2.style.boxShadow="-10px -12px 15px #C9BDAE";
    sqr3.style.boxShadow="10px 12px 15px #C9BDAE";
    sqr3.style.left = "70%";
    un.style.display ="flex"
    flag=1;

    }
    else{
        sqr2.style.left = "40%"
        sqr3.style.left = "60%" 
        un.style.display ="none"
        sqr2.style.boxShadow="none";
        sqr3.style.boxShadow="none";
        flag=0;  
    }
    
}) 

var hous=document.querySelector(".hous")
var ac=document.querySelector("#ac")

hous.addEventListener("click",function(){

    if(flag===0){
    // hous.style.backgroundColor ="#F15302";
    hous.style.backgroundColor ="#3E3E3E";
    
    flag=1;
    }
    else{
        hous.style.backgroundColor ="transparent";
        ac.style.backgroundColor ="#F15302";
        flag=0;
    }
})




// var tl = gsap.timeline();
// tl
// .to("h1",{
//     scale:0,
//     duration:3,
//     delay:5
// })
// .to("h1",{
//     scale:1,
// })


// var cursor=document.querySelector("#cursor");

// document.addEventListener("mousemove",function(dets){
//     cursor.style.left =`${dets.x}px`;
//     cursor.style.top =`${dets.y}px`;

// })

// var slide2=document.querySelector("#slide2")
// var lol=0;
// window.addEventListener("keydown",function(dets){
//     if(dets.keycode====39){
//         slide2.style.left=`${lol}px`
//         lol=lol+50;
//     }
//     if(dets.keycode===40){
//         slide2.style.left=`${lol}px`
//         lol=lol-50
//     }
// })