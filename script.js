document.addEventListener("DOMContentLoaded", () => {
    const tl= gsap.timeline();
    
    tl.from("#title", {
        opacity: 0, // Start fully transparent
        y: -50, // Start 50px above its final position
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing for the movement
      })
        // Animate the subtitle
        .from(
          "#subtitle",
          {
            opacity: 0, // Start fully transparent
            y: 50, // Start 50px below its final position
            duration: 1.0, // Animation duration
            ease: "power1.out", // Smooth easing for the movement
          },
          "-=1" // Overlap the subtitle animation with the title by 0.5 seconds
        )
        // Optional: Add a color change effect
        .to(" #subtitle", {
          color: "#4C4C4C", // Change the text color to white
          duration: 1.0, // Animation duration for the color change
        //   delay: 0.5, // Delay before starting the color change
        });    

   
    tl.to("#box1",{
        scale:1,
        duration:1,
        delay:0.5,
        ease:"power1.inOut",
    })
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
       tl.to(boxes,{
        opacity:1,
        ease:"power1.inOut",
        duration:0.5,
        scale:1,
        stagger:0.05
       })
    });
});
const toggleSwitch = document.querySelector(".input");
const body = document.querySelector(".main");
const h1Elements = document.querySelectorAll("h1");
const boxes= document.querySelectorAll(".box");
const boxes2= document.querySelectorAll(".box2");
const is= document.querySelectorAll("i");
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.style.backgroundColor = "#0D0D0D";
    h1Elements.forEach(h1 => {
      h1.style.color = "#CBCBCB";
    });
    boxes.forEach(box => {
      box.style.backgroundColor = "#181818";
    });
    boxes2.forEach(box2 => {
      box2.style.backgroundColor = "#0D0D0D";
    });
    is.forEach(i => {
      i.style.color = "#CBCBCB";
    });
  } else {
    body.style.backgroundColor = "#A5A5A5";
    h1Elements.forEach(h1 => {
      h1.style.color = "#0D0D0D";
    });
    boxes.forEach(box => {
      box.style.backgroundColor = "#CBCBCB";
    });
    boxes2.forEach(box2 => {
      box2.style.backgroundColor = "#A5A5A5";
    });
    is.forEach(i => {
      i.style.color = "#0D0D0D";
    });
  }
});
