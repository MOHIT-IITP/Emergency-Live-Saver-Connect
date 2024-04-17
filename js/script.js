const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger:{
  trigger: ".page2",
  scrub:true, 
  start: "-30% 50%",
  end: "50% 50%",
  // markers: true,
}})


tl.to(".page1right img",{
  scaleX:"-1",
  top:"105%",
  left:"5%",
},"page1");

tl.to(".circle",{
  top:"120%",
  left:"10%",
  rotate:"360deg",
},"page1");

var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".page3",
  scrub:true, 
  start: "-30% 50%",
  end: "50% 50%",
  // markers: true,
}})

tl2.to(".page1right img",{
  transform:"none",
  // scaleX:"-1",
  top:"200%",
  left:"50%",
},"page2");

tl2.to(".circle",{
  top:"225%",
  left:"57%",
  rotate:"0deg",
},"page2");

var tl3 = gsap.timeline({scrollTrigger:{
  trigger:".page4",
  scrub:true,
  start:"-30%, 50%",
  end:"50%, 50%",
  // markers:true,
}})

tl3.to(".page1right img",{
  scaleX:"-1",
  top:"300%",
  left:"7%",
},"page3");

tl3.to(".circle",{
  top:"320%",
  left:"13%",
  rotate:"360deg",
},"page3");


