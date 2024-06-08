
const mobile= document.querySelector(".togglemenu");
const mobileLink= document.querySelector(".menubar");
const search= document.querySelector(".searchwrapper");

mobile.addEventListener("click",function(){
    console.log("clicked")
    mobile.classList.toggle("isactive");
    mobileLink.classList.toggle("active");
    mobileLink.style.display="flex";
    search.style.display="none";
    
    mobileLink.style.backgroundColor="lightblue";
})
mobileLink.addEventListener("click",function(){
    const menubars = document.querySelector(".isactive");
    if(window.innerWidth<=768 && menubars){
        mobile.classList.toggle("isactive");
        mobileLink.classList.remove("active");
        search.style.display="inherit";
        mobileLink.style.display="none";
    }
})