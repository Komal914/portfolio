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

function quote() {
  setTimeout(() => {
    var typed = new Typed("#welcome-quote", {
      strings: [
        "I am a passionate learner who enjoys creating beautiful user interfaces. With expertise in open-source contribution, front-end development, code review, and peer programming.",
      ],
      typeSpeed: 20,
    });
    return typed;
  }, "2000");
}

name();
title();
quote();

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
