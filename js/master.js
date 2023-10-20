// check if there a main color in local storage
let mainColors =localStorage.getItem("color_option")

if (mainColors!== null) {
  document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"))
  //console.log("local storage is not empty");
  //console.log(mainColors);
  localStorage.setItem("color_option",mainColors)
  // remove active class from all color list item
 document.querySelectorAll(".color-list li").forEach(ele=>{
    ele.classList.remove("active");
    if(ele.dataset.color===mainColors){
      ele.classList.add("active")
    }
  });
  // add active class on selected element
 

}

//toggle spin class on icon
document.querySelector(".gear").onclick=function(){
  //toggle class fa spin forspin self
  this.classList.toggle("fa-spin")
  //toggle class open on main setting box
  document.querySelector(".settings-box").classList.toggle("open")
}

//switch color
const colorLi =document.querySelectorAll(".color-list li");
console.log(colorLi);

colorLi.forEach(li =>{
  li.addEventListener("click",(e)=>{
    console.log(e.target.dataset.color);
    // set color on root main color 
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

    //set color in local storage 
    localStorage.setItem("color_option",e.target.dataset.color)
    // remove active class from all children
 handleActive(e);


  })

});

//switch background random
const randombackEL =document.querySelectorAll(".random-background span");
console.log(randombackEL);

let backgroundOption= true ; 
let backInterval;
if (document.querySelector(".yes").classList.contains("active") ){
  randomOption();
  
}

randombackEL.forEach(span =>{
  span.addEventListener("click",(e)=>{
   
    // set color on root main color 
    
    // remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
      ele.classList.remove("active");
      
    });
    e.target.classList.add("active");

    if (e.target.dataset.background==="yes") {
      backgroundOption=true;
      randomOption();
      
    }else{
      backgroundOption=false;
      clearInterval(backInterval);

    }


  })

});

let landingPage = document.querySelector(".landing-page");
// get array of img
let imgarr=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

landingPage.style.backgroundImage='url(img/02.jpg)';
//random number
landingPage.style.transition="1s";
let i  =imgarr.length;


//variable to control the interval 

function randomOption(){
  if (backgroundOption==true) {
    backInterval= setInterval(() => {

      if(i===5)
      i=0;
      
        landingPage.style.backgroundImage=`url(img/${imgarr[i]})`;
        i++;
      }, 5000);  
  }
  

}


//select skills selectors
let ourSkills=document.querySelector(".skills");
window.onscroll =function (){
 // skills offset top
let skillsOffset =ourSkills.offsetTop;
//console.log(skillsOffset);
//outer height
let skillsOuterHeight =ourSkills.offsetHeight;
//console.log(skillsOuterHeight);

let windowHeight=this.innerHeight;
//console.log(windowHeight);
// window scrolltop
let scrolltop=this.pageYOffset;
//console.log(scrolltop);

if (scrolltop > (skillsOffset + skillsOuterHeight - windowHeight -300)) {
let allSkills= document.querySelectorAll(".skill-box .progress span");
allSkills.forEach(skill=>{
skill.style.width=skill.dataset.progress;


});
  
}
};
// create popup with the image 
let ourGallery=  document.querySelectorAll(".img-box img");
ourGallery.forEach(img=>{
  img.addEventListener("click", (e=>{
    // create overlay elem
    let overlay= document.createElement("div");
    overlay.className="popup-overlay";

    //append overlay to body
   
   //create popup box
     let popupBox =document.createElement("div");
     popupBox.className=("popup-box")
     if(img.alt!== null){
      //creat heading
      let imgH=document.createElement("h3");
      let imgText=document.createTextNode(img.alt)
      imgH.appendChild(imgText);
      popupBox.appendChild(imgH)

     }
     //create img
     let popupImg=document.createElement("img");
     //set src for img
     popupImg.src=img.src;
     //add img to popupbox and append to overlay
     popupBox.appendChild(popupImg)
     overlay.appendChild(popupBox)
     document.body.appendChild(overlay);
     //create close span
     let closbtn =document.createElement("span");

     let closebtntext=document.createTextNode("x")
     closbtn.appendChild(closebtntext);
     
     closbtn.className="close-btn";
     //add close btn to popup box
     popupBox.appendChild(closbtn);

    }))
})

//close popup
document.addEventListener("click" ,(e)=>{
 if (e.target.className==="close-btn") {
  //remove popup
  e.target.parentNode.remove();
  //romove over lay
  document.querySelector(".popup-overlay").remove();



  
 }


})


//select all links and bullets 
let allbullets =document.querySelectorAll(".nav-bullets .bullets");

 let alllinks =document.querySelectorAll(".links a");

 function scrollToSomewhare(element){
  element.forEach(ele=>{
    ele.addEventListener("click",(e)=>{
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:'smooth'
        
      })
      })
   });
 }
 scrollToSomewhare(allbullets);
 scrollToSomewhare(alllinks);
 //handle active state
 function handleActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(ele=>{
    ele.classList.remove("active")
  })
  ev.target.classList.add("active")

 }

 // toogle menu
 let togglebtn=document.querySelector(".toggle-menu");
 let tlinks=document.querySelector(".links");
 togglebtn.addEventListener("click",(e)=>{
  e.stopPropagation();

  togglebtn.classList.toggle("menu-active")
  tlinks.classList.toggle("open")
  

 });
 //click any where 
 document.addEventListener("click",(e)=>{
  if(e.target!==togglebtn && e.target!==tlinks){
  
    if (tlinks.classList.contains("open")) {

     togglebtn.classList.remove("menu-active")
     tlinks.classList.remove("open")
    }
  }
 })

//for a link only
 tlinks.addEventListener("click",(e)=>{
  e.stopPropagation();
 })
