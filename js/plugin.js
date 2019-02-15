
$(document).ready(function () {


//AFTER LOAD THE PAGE REMOVE PRELOADER
// AFTER RELOAD THE PAGE CHECK THE URL FOR CONTAING #Project-
$(".preload").slideToggle(1000,function(){
    if (performance.navigation.type == 1){
        if (window.location.hash.indexOf('Project-') > -1) {
            document.body.style.overflowY = 'hidden';
        }
        else{
            document.body.style.overflowY = 'scroll'; 
        }

    }else{
        document.body.style.overflowY = 'scroll'; 
    }
    
});


// ADJUSTING THE HEADER HEIGHT TO EQUAL THE WINDOW HEIGHT
$("header").height($(window).height());
$(window).on("resize", function () { 
    $("header").height($(window).height());     
});



// LINKS TO SECTIONS
var navLinks = document.querySelectorAll('.nav__list .nav__list__link');

function removeActiveLink(){
    for (var i = 0; i < navLinks.length; i++){
        navLinks[i].classList.remove('active-link');
    }
}

$(".nav__list .nav__list__link").on("click", function () {
    $("body,html").animate({
        scrollTop : ($("#" + $(this).data('li')).offset().top)
    }, 400);
    removeActiveLink();
    this.classList.add('active-link');
    menuBarToggleActiveClass()
    
});

$('.header__text button').on("click", function () {
    console.log('clicked');
    $("body,html").animate({
        scrollTop : ($("#about").offset().top)
    }, 500);
})



// MAKE NAVBAR DARK ON SCROLL and in smaller screen sizes
var darkNav = function(){
    var nav = document.querySelector('.nav');
    if(window.scrollY > 150 || window.matchMedia("(max-width: 900px)").matches){
        nav.classList.add('dark')
    }  else{
        nav.classList.remove('dark')
    }
}
darkNav();
window.onresize = function(){
    darkNav(); 
}
window.onscroll = function(){
    darkNav(); 
}



// OPEN AND CLOSE MENU WHEN I CLICK ON MENU BAR!
var menuBar = document.querySelector('.menu_bars i');
var menu = document.querySelector('.nav ul');

menuBar.onclick = function(){
    menuBarToggleActiveClass ()
}


function menuBarToggleActiveClass (){
    menu.classList.toggle('open' );
    if (menu.classList.contains('open')){
        menuBar.classList.add('active');
    }else{
    menuBar.classList.remove('active'); 
    }
}




// ABOUT COMPANY PROGRESS BAR ANIMATION
var skillsSection = document.getElementById('skills');
var meterInner = document.querySelectorAll(".skills__inner");
var progressNumber = document.querySelectorAll('.skills span.number');
var skillsSectionOffsetTop = skillsSection.offsetTop;
var progressNumberWidths = [90,95,80,70,80,40,85,75,70];
var moveTimers = [];
var width = 0;
window.addEventListener("scroll", progressNumberAdd);
window.addEventListener("touchmove", progressNumberAdd);




function progressNumberAdd(){
    if (window.pageYOffset > (skillsSectionOffsetTop - 10)){
        window.removeEventListener("scroll", progressNumberAdd);
        window.removeEventListener("touchmove", progressNumberAdd);
        
        initProgressBar();
    }
}

function initProgressBar(){
  for(var i = 0; i < meterInner.length; i++){
    x(i);     
  }  	
}

function x(i){
    moveTimers[i] = setInterval(numberAddCheker, 5, i);
}

function numberAddCheker(i){
    if(width >= progressNumberWidths[i]){
        clearInterval(moveTimers[i])
    }else{
        width = width+.05;
        meterInner[i].style.width = width + "%";
        progressNumber[i].textContent = Math.round(width * 1) + "%" ;
    }
} 




//Hide scroll when i click on projects link

var links = document.querySelectorAll('.projects .project a');
for (let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        document.body.style.overflowY = 'hidden'  
    }
}

var closedLinks = document.querySelectorAll('.project-describtion__close');
for (let i = 0; i < closedLinks.length; i++){
    closedLinks[i].onclick = function(){
        document.body.style.overflowY = 'auto';
    }
}

var closedBtnLinks = document.querySelectorAll('.project-describtion__btnClose');
for (let i = 0; i < closedBtnLinks.length; i++){
    closedBtnLinks[i].onclick = function(){
        document.body.style.overflowY = 'auto';
    }
}




// CERTIFICATION SLIDER

var certificationsBullet = document.querySelectorAll('.certifications__toggle-bullet');
var certificationsCont = document.querySelector('.certifications__container');

function certSlider(){
    for (let i = 0; i < certificationsBullet.length; i++){
        certificationsBullet[i].onclick = function(){
            certificationsCont.classList = '';
            certificationsCont.classList.add('certifications__container');
            certificationsCont.classList.add('translate_'+i);
            for(let n = 0; n < certificationsBullet.length; n++){
                certificationsBullet[n].classList.remove('active');
                certificationsBullet[i].classList.add('active');
            }
    
        }
    }
}
certSlider();

certificationsCont.ontouchmove = function(){

}


//popup any certification when click on it

var certImg = document.querySelectorAll('.certifications__img');
var certificationsImgPopup = document.querySelectorAll('.certifications__img-popup');
var certClose = document.querySelectorAll('.certifications__close');

for (let i = 0; i < certImg.length; i++){
    certImg[i].onclick = function(){
        for (let x = 0; x < certImg.length; x++ ){
            certificationsImgPopup[x].classList.remove('active-img-cont');
        }
        certificationsImgPopup[i].classList.add('active-img-cont'); 
    }
    close(i);   
}



function close(i){
    certClose[i].onclick = function(){
        certificationsImgPopup[i].classList.remove('active-img-cont'); 
    }     
}

});



