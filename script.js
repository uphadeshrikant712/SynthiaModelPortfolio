const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  function firstPageAnim()
  {
    var tl=gsap.timeline()

    tl.from('#nav',{

      y:-10,
      opacity:0,
      duration:1.5,
      ease:Expo.easeInOut

    })
    
    tl.to(".boundingelem",
    {
      y:0,
      ease:Expo.easeInOut,
      duration:2,
      delay:-1,
      stagger:0.2,
      
    })
    .from("#herofooter",  //(tl.from) is same as (.from)u can use any ur choice.!
    {
      y:-10,
      opacity:0,
      duration:1.5,
      delay:-1,
      ease:Expo.easeInOut,
    });
  }



var crsr=document.querySelector("#minicircle")
document.addEventListener("mousemove",function(dets)
{
    crsr.style.left=dets.x + "px"
    crsr.style.top = dets.y + "px"
    
});

firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) 
  {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), 
    {
      opacity: 1,
      ease: 6,
      // scale:1.5,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});