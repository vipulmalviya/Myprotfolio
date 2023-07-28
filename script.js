gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

function loder() {
    var a = 0
    setInterval(() => {
        a = a + Math.floor(Math.random() * 15)
        if (a < 100) {
            document.querySelector(".loder h1").innerHTML = a + "%"
        }
        else {
            a = 100
            document.querySelector(".loder h1").innerHTML = a + "%"
        }
    },150);
}


var tl = gsap.timeline()
tl.to(".loder h1",{
    delay:1,
    duration:1,
    onStart:loder(),
}).to(".loder",{
    top:"-100vh",
    delay:0.5,
    duration:1,
})


gsap.to(".slidingText h1", {
    x: -500,
    duration: 3,
    scrollTrigger: {
        trigger: ".slidingText h1",
        scroller: "body",
        scrub: 0.7
    }
})

gsap.to(".arrow", {
    rotate: 90,
    duration: 1,
    backgroundColor: "#00000045",
    borderRadius: 50,
    scrollTrigger: {
        trigger: ".arrow",
        scroller: "body",
        start: "bottom 15%",
        scrub: 1
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