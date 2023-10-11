//type words

function name() {
  var typed = new Typed("#welcome-greeting", {
    strings: ["Hey, I am Komal"],
    typeSpeed: 40,
  });
  return typed;
}

function title() {
  setTimeout(() => {
    var typed = new Typed("#welcome-title", {
      strings: ["a web developer"],
      typeSpeed: 40,
    });
    return typed;
  }, "1000");
}

name();
title();

//scroll appear
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
