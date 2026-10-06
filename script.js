const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>{const open=navLinks.classList.toggle("active");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("active");menuBtn.setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+"%";
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
