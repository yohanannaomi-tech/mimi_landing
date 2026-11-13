const toast=document.querySelector('.toast');let timer;
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast.textContent='Copiado: '+b.dataset.copy}catch{toast.textContent=b.dataset.copy}toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),1800)});
const dialog=document.querySelector('dialog');let trigger;
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=e=>{trigger=e.currentTarget;dialog.showModal()});
document.querySelectorAll('.close,[data-close]').forEach(b=>b.onclick=()=>dialog.close());dialog.addEventListener('close',()=>trigger?.focus());

// La demostración se limita al área de los asteriscos.
(() => {
 const area=document.querySelector('.cursor-demo-area');
 if(!area)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const colors=['#ff0097','#ffe000','#00b4e9'];
 const particles=new Set();let last=0,index=0,x,y;
 const clear=()=>{particles.forEach(p=>p.remove());particles.clear();x=y=undefined};
 area.addEventListener('pointermove',e=>{
  if(reduced.matches||e.pointerType!=='mouse')return;
  const now=performance.now();
  if(now-last<35||(x!==undefined&&Math.hypot(e.clientX-x,e.clientY-y)<10))return;
  last=now;x=e.clientX;y=e.clientY;
  const rect=area.getBoundingClientRect();
  const p=document.createElement('span');p.className='cursor-demo-particle';p.setAttribute('aria-hidden','true');
  p.innerHTML=area.querySelector('svg').outerHTML;
  const size=8+Math.random()*8;
  p.style.cssText=`left:${x-rect.left}px;top:${y-rect.top}px;width:${size}px;height:${size}px;color:${colors[index++%3]}`;
  area.append(p);particles.add(p);
  if(particles.size>24){const old=particles.values().next().value;old.remove();particles.delete(old)}
  const angle=Math.random()*90;
  p.animate([{transform:`translate(-50%,-50%) rotate(${angle}deg)`,opacity:.85},{transform:`translate(-50%,calc(-50% + 18px)) rotate(${angle+70}deg) scale(.25)`,opacity:0}],{duration:650,easing:'ease-out'}).onfinish=()=>{p.remove();particles.delete(p)};
 },{passive:true});
 area.addEventListener('pointerleave',clear);reduced.addEventListener('change',clear);
})();

document.querySelectorAll('.cv-nav-sample button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.cv-nav-sample button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)))}));
