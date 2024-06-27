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
  left:"-7%",
},"page1");

// animation for the page 3 start here 

var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".page3",
  scrub:true, 
  start: "-30% 50%",
  end: "50% 50%",
  // markers: true,
}})

tl2.to(".page1right img",{
  transform:"none",
  top:"210%",
  left:"43%",
},"page2");

// animation for the page4 start here 
var tl3 = gsap.timeline({scrollTrigger:{
  trigger:".page4",
  scrub:true,
  start:"-30%, 50%",
  end:"50%, 50%",
  // markers:true,
}})

tl3.to(".page1right img",{
  scaleX:"-1",
  top:"310%",
  left:"-7%",
},"page3");


function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}