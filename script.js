const webMenuOpen=document.querySelector(".option-btn");
const webMenuClose=document.querySelector(".web-menu-back-btn");
const webMenuCont=document.querySelector(".web-menu");

webMenuOpen.addEventListener("click",()=>{
    webMenuCont.classList.toggle("web-menu-dupli");
});
webMenuClose.addEventListener("click",()=>{
    webMenuCont.classList.toggle("web-menu-dupli");
});

function updateClock(){

    const clockText=document.getElementById("clock");
    const hours=new Date().getHours();

    switch(true){
        case (hours>=1 && hours<2): 
            clockText.innerHTML="🕐";
            break;
        case (hours>=2 && hours<3):
            clockText.innerHTML="🕑";
            break;
        case (hours>=3 && hours<4): 
            clockText.innerHTML="🕒";
            break;
        case (hours>=4 && hours<5):
            clockText.innerHTML="🕓";
            break;
        case (hours>=5 && hours<6): 
            clockText.innerHTML="🕔";
            break;
        case (hours>=6 && hours<7):
            clockText.innerHTML="🕕";
            break;
        case (hours>=7 && hours<8): 
            clockText.innerHTML="🕖";
            break;
        case (hours>=8 && hours<9):
            clockText.innerHTML="🕗";
            break;
        case (hours>=9 && hours<10): 
            clockText.innerHTML="🕘";
            break;
        case (hours>=10 && hours<11):
            clockText.innerHTML="🕙";
            break;
        case (hours>=11 && hours<12): 
            clockText.innerHTML="🕚";
            break;
        case (hours>=12 && hours<13):
            clockText.innerHTML="🕛";
            break;
        case (hours>=13 && hours<14): 
            clockText.innerHTML="🕑";
            break;
        case (hours>=14 && hours<15):
            clockText.innerHTML="🕑";
            break;
        case (hours>=15 && hours<16): 
            clockText.innerHTML="🕒";
            break;
        case (hours>=16 && hours<17):
            clockText.innerHTML="🕓";
            break;
        case (hours>=17 && hours<18): 
            clockText.innerHTML="🕔";
            break;
        case (hours>=18 && hours<19):
            clockText.innerHTML="🕕";
            break;
        case (hours>=19 && hours<20): 
            clockText.innerHTML="🕖";
            break;
        case (hours>=20 && hours<21):
            clockText.innerHTML="🕗";
            break;
        case (hours>=21 && hours<22): 
            clockText.innerHTML="🕘";
            break;
        case (hours>=22 && hours<23):
            clockText.innerHTML="🕙";
            break;
        case (hours>=23 && hours<24): 
            clockText.innerHTML="🕚";
            break;
        case (hours>=0 && hours<1):
            clockText.innerHTML="🕛";
            break;
    }
}
updateClock();
setInterval(updateClock, 2000);

function openclose(){
    const hours=new Date().getHours();
    const openClose=document.querySelector(".open-close-text1");
    const closeOpen=document.querySelector(".open-close-text2");
    const closeOpenTime=document.querySelector(".open-close-text3");
    if(hours>=11 && hours<23){
        openClose.innerHTML="Open.";
        openClose.style.color="green";
        closeOpen.innerHTML="Close";
        closeOpen.style.color="red";
        closeOpenTime.innerHTML="11:00 pm";
    }else{
        openClose.innerHTML="Close.";
        openClose.style.color="red";
        closeOpen.innerHTML="Open";
        closeOpen.style.color="green";
        closeOpenTime.innerHTML="11:00 am";
    }
}
openclose();
setInterval(openclose, 2000);

const options=document.querySelector(".options");
options.addEventListener("click", ()=>{
    webMenuCont.classList.toggle("web-menu-dupli");
})