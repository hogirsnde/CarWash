
window.addEventListener("load",()=>{
const pre=document.querySelector(".loaderd");
const sw=document.querySelector(".js-switch");
const nv=document.querySelector(".js-header");

sw.style.display="none";
nv.style.display="none";

setTimeout(()=>{
    pre.style.display="none";
    sw.style.display="block";
    nv.style.display="block";

    AOS.init();
},2000)
 
});


const toggle=()=>{
const switcher=document.querySelector(".js-switch");
const toggler=document.querySelector(".js-s-toggler");
toggler.addEventListener("click",function(){
    switcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");

})
}
toggle();

//Theme
var  heads=document.querySelector("header");
window.onscroll=function(){
    if(window.scrollY>0){
        heads.classList.add("bg");
        }
        else{
            heads.classList.remove("bg");
        }
}


// theme
const ThemeColor=()=>{

    const hueslider=document.querySelector(".js-hue-slider"); //input range
    const html=document.querySelector("html");
    const sethue=(value)=>{
        html.style.setProperty("--hue",value);
        document.querySelector(".js-hue").innerHTML=value;

    }
    hueslider.addEventListener("input",function(){

sethue(this.value)
localStorage.setItem("--hue", this.value)
    });
    //function sethue
const slider=(value)=>{
    console.log(value);
hueslider.value=value;
}
const pl=(value)=>{
   const cl= document.querySelector(".bt");
    cl.addEventListener("click",function(){
       let stoped= window.setInterval(function(){
             sethue(localStorage.getItem(+"--hue")+value++);
             slider(localStorage.getItem(+"--hue")+value++);
             if(value>360){
                value=0;
             }
            //  localStorage.setItem("--huenew",localStorage.getItem(+"--hue")+value++);
            },250);

            document.querySelector(".bts").addEventListener("click",function(){
                clearInterval(stoped);
                sethue(localStorage.getItem("--hue").value=value);
                slider(localStorage.getItem("--hue").value=value);
                pl(localStorage.getItem("--hue").value=value);

            })


    })


}

    if(localStorage.getItem("--hue") !== null){
        sethue(localStorage.getItem("--hue"));
         slider(localStorage.getItem("--hue"));
         pl(localStorage.getItem("--hue"));

      }





}
ThemeColor();



//dark
const themeLightDark=()=>{
    const darkModeCheckbox=document.querySelector(".js-dark-mode");
const themeMode=()=>{
    if(localStorage.getItem("theme-dark")==="false"){
        document.body.classList.remove("darkk");
    }
    else{
        document.body.classList.add("darkk");
    }
}

    darkModeCheckbox.addEventListener("click",function(){
localStorage.setItem("theme-dark", this.checked);
themeMode();
})
}
themeLightDark();
// nav

const navbar=()=>{
    const ntoggler=document.querySelector(".js-nav-toggler"); 
const nav=document.querySelector(".js-nav");
const navitems=nav.querySelectorAll("li");
const navtoggle=()=>{

nav.classList.toggle("open");
ntoggler.classList.toggle("active");
}
ntoggler.addEventListener('click',navtoggle);
navitems.forEach(li=>{
li.addEventListener("click",function(){
    navtoggle();
})
})

}
navbar();