const aboutbotton = document.querySelector(".seg-header-1");
const projectbotton = document.querySelector(".seg-header-2");
const contactbotton = document.querySelector(".seg-header-3");

aboutbotton.addEventListener("click", function() {
  document.querySelector(".seg-text").style.fontSize = 'large';
  document.getElementById("seg-1").style.border = '3px solid white';
  document.getElementById("seg-1").style.borderRadius = '50px';
  document.querySelector(".seg-header-1").style.color = 'blue';
  document.querySelector(".seg-header-1").style.backgroundColor = 'white';
  setTimeout(delay, 5000);

});

projectbotton.addEventListener("click", function() {
  document.querySelector(".seg-text-2").style.fontSize = 'large';
  document.getElementById("seg-2").style.border = '3px solid white';
  document.getElementById("seg-2").style.borderRadius = '50px';
  document.querySelector(".seg-header-2").style.color = 'blue';
  document.querySelector(".seg-header-2").style.backgroundColor = 'white';
  setTimeout(delay2, 5000);
});

contactbotton.addEventListener("click", function() {
  document.querySelector(".contact-1").style.fontSize = 'large';
  document.querySelector(".contact-2").style.fontSize = 'large';
  document.querySelector(".contact-3").style.fontSize = 'large';
  document.getElementById("seg-3").style.border = '3px solid white';
  document.getElementById("seg-3").style.borderRadius = '50px';
  document.querySelector(".seg-header-3").style.color = 'blue';
  document.querySelector(".seg-header-3").style.backgroundColor = 'white';
  setTimeout(delay3, 5000);
});

function delay () {
     document.querySelector(".seg-text").style.fontSize = '10px';          
     document.getElementById("seg-1").style.border = '0px';
     document.querySelector(".seg-header-1").style.color = 'white';
     document.querySelector(".seg-header-1").style.backgroundColor = 'blue'
}

function delay2 () {
  document.querySelector(".seg-text-2").style.fontSize = '10px';
  document.getElementById("seg-2").style.border = '0px';
  document.querySelector(".seg-header-2").style.color = 'white';
  document.querySelector(".seg-header-2").style.backgroundColor = 'blue';
}

function delay3 () {
  document.querySelector(".contact-1").style.fontSize = '10px';
  document.querySelector(".contact-2").style.fontSize = '10px';
  document.querySelector(".contact-3").style.fontSize = '10px';
  document.getElementById("seg-3").style.border = '0px';
  document.querySelector(".seg-header-3").style.color = 'white';
  document.querySelector(".seg-header-3").style.backgroundColor = 'blue';
}