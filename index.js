//* variaveis para o slider
let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

//* variaveis para o texto animado
var i            = 0;
var tag          = document.getElementById("text");
var html         = document.getElementById("text").innerHTML;
var attr         = tag.setAttribute("data", html);
var txt          = tag.getAttribute("data");
var speed        = 170;

document.querySelector('.slider--width').style.width     = `calc(100vw * ${totalSliders})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

//* area do slide 
function goPrev() {
    currentSlide--;
    if ( currentSlide < 0) {
        currentSlide = totalSliders - 1;
    } 
    updateMargin();
}

function goNext() {
    currentSlide++;
    if ( currentSlide > (totalSliders-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin       = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft =  `-${newMargin}px`;
}
setInterval(goNext,3000);

//* método do texto animado
    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
typeWriter();
