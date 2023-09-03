// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("body", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });

// function loder() {
//     var a = 0
//     setInterval(() => {
//         a = a + Math.floor(Math.random() * 15)
//         if (a < 100) {
//             document.querySelector(".loder h1").innerHTML = a + "%"
//         }
//         else {
//             a = 100
//             document.querySelector(".loder h1").innerHTML = a + "%"
//         }
//     },150);
// }


// var tl = gsap.timeline()
// tl.to(".loder h1",{
//     delay:1,
//     duration:1,
//     onStart:loder(),
// }).to(".loder",{
//     top:"-100vh",
//     delay:0.5,
//     duration:1,
// })

const ima = document.querySelectorAll(".im")
document.querySelector(".craft").addEventListener("mousemove", (dets) => {
    ima.forEach(elem => {
        const position = elem.getAttribute("value")
        const x = (window.innerWidth - dets.clientX * position) / 100;
        const y = (window.innerHeight - dets.clientY * position) / 100;
        elem.style.transform = `translatex(${x}px) translatey(${y}px)`;
    });
});



const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
























var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".heroSection",
        pin: true,
        scrub: true,
        // markers: true,
        start: "50% 50%",
        end: "150% 50%"
    }
});

tl.to(".topcontent", {
    rotateX: "110deg",
    opacity: 0,
    ease: "power1",
    duration: 5,
}, "a").to(".heroImg video", {
    width: "100%",
    height: "100%",
    duration: 8,
    ease: "power1",
    delay: 2,

}, "a").to(".bottomcontent", {
    rotationX: "-110deg",
    opacity: 0,
    ease: "power1",
    duration: 5,
}, "a")


// gsap.to(".Nav .logo , .right", {
//     opacity: 0,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".slidingText h1",
//         scroller: "body",
//         scrub: 0.7

//     }
// })
gsap.to(".slidingText h1", {
    x: -500,
    duration: 3,
    scrollTrigger: {
        trigger: ".slidingText h1",
        scroller: "body",
        scrub: 0.7
    }
})
gsap.from(".about h1:nth-child(1)", {
    scrollTrigger: {
        trigger: ".about h1:nth-child(1)",
        scroller: "body",
        start: "top 70%"
    },
    opacity: 0
})
gsap.from(".about h1:nth-child(2)", {

    scrollTrigger: {
        trigger: ".about h1:nth-child(2)",
        scroller: "body",
        start: "top 60%"
    },
    duration: 1,
    opacity: 0
})
gsap.from(".about h1:nth-child(3)", {
    scrollTrigger: {
        trigger: ".about h1:nth-child(3)",
        scroller: "body",
        start: "top 60%",
    },
    opacity: 0,
    duration: 1,
})

gsap.from(".normalButton", {
    scrollTrigger: {
        trigger: ".normalButton",
        scroller: "body",
    },
    opacity: 0,
    duration: 1,
    x: -30,
})

gsap.from(".icone img", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".icone img",
        scroller: "body",
        // markers:true,
        start: "top 80%"
    },
    y: 20,
    stagger: {
        amount: 2
    }

})
gsap.from(".icone2 img", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".icone2 img",
        scroller: "body",
        // markers:true,
        start: "top 80%"
    },
    y: 20,
    stagger: {
        amount: 1
    }
})



var crsr = document.querySelector("#cursor");
window.addEventListener("mousemove", (dets) => {
    const translateX = (dets.clientX);
    const translateY = (dets.clientY);
    crsr.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
});
var arrow = document.querySelector(".arrow");
const position = parseFloat(arrow.getAttribute("value"))
window.addEventListener("mousemove", (dets) => {
    const translateX = (window.innerWidth - dets.clientX * position) / 100;
    const translateY = (window.innerHeight - dets.clientY * position) / 100;
    arrow.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
});

const craft = document.querySelector(".craft")
craft.addEventListener("mouseenter", () => {
    crsr.style.borderColor = "black"
    arrow.style.backgroundColor = "black"
})
craft.addEventListener("mouseleave", () => {
    crsr.style.borderColor = "white"
    arrow.style.backgroundColor = "white"
})

const listitems = document.querySelectorAll(".listitems")
listitems.forEach(ele => {
    ele.addEventListener("mouseenter", () => {
        crsr.style.borderColor = "transparent"
        arrow.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave", () => {
        crsr.style.borderColor = "white"
        arrow.style.backgroundColor = "white"
    })
});

const a = document.querySelector(".hello")
a.addEventListener("mouseenter", () => {
    crsr.style.display = "none"
})
a.addEventListener("mouseleave", () => {
    crsr.style.display = "block"
})


// const artworkcontainet = document.querySelectorAll(".artworkcontainet")
// const artworksi = document.querySelector(".i")
// artworkcontainet.forEach(elem => {
//     elem.addEventListener("mousemove", (dets) => {
//         const x = dets.clientX
//         const y = dets.clientY;
//         artworksi.style.transform = `translateX(${x}px) translateY(${y}px)`;
//         elem.addEventListener("mouseenter",()=>{
//             artworksi.style.display = "block"
//         })
//         elem.addEventListener("mouseleave",()=>{
//             artworksi.style.display = "none"
//         })
//     })
// });