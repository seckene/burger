const liste =document.querySelector(".liste");
console.log(liste);
window.addEventListener("scroll",()=>{
    if (window.scrollY>110) {
        liste.style.visibility="hidden";
        
    }

    else{
        window.scrollY>90;
        liste.style.visibility="visible";
        liste.style.top="0px";
    }
});

const mousemouve =document.querySelector(".mousemouve");
console.log(mousemouve);
window.addEventListener("mousemove",(e)=>{
    mousemouve.style.left= e.pageX+"px";
       mousemouve.style.top= e.pageY+"px";
});