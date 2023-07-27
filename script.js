

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