
document.addEventListener('DOMContentLoaded', () => {
  
  console.log("js loaded")
  // const mainContent = document.getElementById("main-content");

  gsap.fromTo(".main-content", { opacity: 0}, { opacity: 1, duration: 2, ease: "power2.out" })
  gsap.registerPlugin(ScrollTrigger);

  const ease = "power2.inOut";
  if (document.querySelector(".anim-text")) {
    var tl2 = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      yoyo: false,
      onComplete: function () {
        tl2.restart();
      },
      defaults: {
        immediateRender: false
      }
    });

    const parent = document.getElementById("anim-text");

    for (const child of parent.children) {
      tl2.fromTo(child, { opacity: 0, x: -50, display: "none" }, { opacity: 1, x: 0, duration: .5, display: "flex", ease: ease })
      tl2.fromTo(child, { opacity: 1, x: 0, display: "flex" }, { opacity: 0, x: 50, duration: .5, ease: ease, delay: 1.7 })
    }



    // service scroll animation


    let sections = gsap.utils.toArray(".panel");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".h-container",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     end: () => "+=" + document.querySelector(".container").offsetWidth
    //   }
    // });
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: '.h-container',
        pin: true,
        scrub: 1,
        end: "+=3500",
        markers: true,
      }
    });
  }
});




