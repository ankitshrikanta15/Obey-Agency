function loadingAnimation() {
  let tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from(".line1-part1", {
  opacity: 0,
  onStart: function () {
    let h5Timer = document.querySelector(".line1-part1 h5");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        // grow++;
        h5Timer.innerHTML = grow++;
      } else {
        // grow = 100
        h5Timer.innerHTML = grow;
      }
    }, 35);
  },
});

tl.to(".line h2",{
  animationName: 'anime',
  opacity: 0
})

tl.to(".loader", {
  opacity: 0,
  duration: 0.2,
  // delay: 3.9,
  delay: 0
});

tl.from(".page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});

tl.to(".loader", {
  display: "none",
});

tl.from("nav",{
  opacity: 0
})

tl.from(".underline-hero1 h1, .underline-hero2 h1, .underline-hero3 h2, .underline-hero3 h3, .underline-hero4 h1",{
  y: 120,
  stagger: 0.2
})

}

function cursorAnimation() {
  document.addEventListener('mousemove', function(dets){
    gsap.to(".cursor",{
      left: dets.x,
      top: dets.y
      });
      });
      
      Shery.makeMagnet(".nav-part2 h4");
      }

loadingAnimation();
cursorAnimation();