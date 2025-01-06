document.addEventListener('DOMContentLoaded', () => {
  console.log("js loaded")
  const mainContent = document.getElementById("main-content");

  gsap.timeline(mainContent, { opacity: 0, y: -90 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })


  const ease = "bounce.out";
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
      tl2.fromTo(child, { opacity: 0, y: -30, display: "none" }, { opacity: 1, y: 0, duration: .8, display: "flex", ease: ease })
      tl2.fromTo(child, { opacity: 1, y: 0, display: "flex" }, { opacity: 0, y: 100, duration: 1, ease: ease, delay: 2 })
    }



    // tl2.fromTo()

    // tl2.fromTo(
    //   ".anim-text h1",
    //   { opacity: 0, y: -100, display:"none" },
    //   { opacity: 1, y: 0, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h1",
    //   { opacity: 1 },
    //   { opacity: 1, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h1",
    //   { opacity: 1, y: 0 },
    //   { opacity: 0, y: 100, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h2",
    //   { opacity: 0, y: -100 },
    //   { opacity: 1, y: 0, duration: 1, ease: ease, display:"flex" },
    //   "<0%"
    // );
    // tl2.fromTo(
    //   ".anim-text h2",
    //   { opacity: 1 },
    //   { opacity: 1, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h2",
    //   { opacity: 1, y: 0 },
    //   { opacity: 0, y: 100, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h3",
    //   { opacity: 0, y: -100 },
    //   { opacity: 1, y: 0, duration: 1, ease: ease, display:"flex" },
    //   "<0%"
    // );
    // tl2.fromTo(
    //   ".anim-text h3",
    //   { opacity: 1 },
    //   { opacity: 1, duration: 1, ease: ease, display:"flex" }
    // );
    // tl2.fromTo(
    //   ".anim-text h3",
    //   { opacity: 1, y: 0 },
    //   { opacity: 0, y: 100, duration: 1, ease: ease, display:"flex" }
    // );
  }
});




