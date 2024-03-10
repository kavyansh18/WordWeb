function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to(".nav",{
  backgroundColor:"rgba(0,0,0,0.1)",
  backdropFilter: "blur(5px)",
  borderRadius:"10px",
  height:"10vh",
  scrollTrigger:{
      trigger:".nav",
      scroller:"#main",
      start:"10% top",
      end:"bottom -11%",
      // markers:true,
      scrub:0.8,
  }
})

gsap.to(".h",{
  opacity:"1",
  backgroundColor:"rgb(252, 244, 226)",
  scrollTrigger:{
    trigger:".h",
    scroller:"#main",
    start:"7% bottom",
    end:"40% top",
    // markers:true,
    scrub:1
  }
})
gsap.to(".cards",{
  gap:"10vw",
  transition:"2.4s none",
  opacity:"1",
  scrollTrigger:{
    trigger:".cards",
    start:"-80% top",
    end:"bottom bottom",
    // markers:true,
    scrub:1,
    scroller:"#main",
    }
})

gsap.to(".card11",{
  opacity:1,
  transition:"1.4s",
  scrollTrigger:{
    trigger:".card11",
    scrub:1,
    start: "-300% top",
    end:"bottom bottom",
    scroller:"#main",
    // markers:true,
  }
})
gsap.to(".cardss",{
  gap:"50vw",
  scrollTrigger:{
    trigger:".cardss",
    scrub:2,
    start:"100% bottom",
    end:"300% bottom",
    // markers:true,
    scroller:"#main"
    
  }
})

gsap.to("#india",{
  marginRight:"0vw",
  opacity:"1",
  transition:"0.4s",
  scrollTrigger:{
    trigger:"#india",
    scrub:1,
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"bottom bottom"
    
  }
})

gsap.to("#flag-img",{
  marginLeft:"0vw",
  opacity:"1",
  transition:"0.4s",
  scrollTrigger:{
    trigger:"#india",
    scrub:1,
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"bottom bottom"

  }
})

gsap.to("#events",{
  animation:"scroll 40s linear infinite",
  scrollTrigger:{
    trigger:"#events",
    scroller:"#main",
    scrub:1,
    start:"10% 80%",
    end:"top 10%",
    // markers:true,
  }
})

