
function renderIcee(){return `<article class="olab-case icee-case"><span class="modal-category">MOTION GRAPHICS · AFTER EFFECTS · PROYECTO ACADÉMICO</span><h2>ICEE | Anuncio con elemento 3D</h2><div class="olab-intro"><div class="icee-intro-panel"><img src="assets/icee/poster.png" alt="Identidad visual roja y azul de ICEE"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>La marca en movimiento.</h3><p>Anuncio promocional realizado en After Effects que integra un elemento 3D dentro de una composición animada. El proyecto explora la relación entre volumen, movimiento e identidad visual para presentar el producto.</p><p>El rojo y el azul de ICEE construyen una propuesta de alto contraste, pensada para captar la atención en un formato vertical.</p><p class="olab-scope">After Effects · Motion graphics · Integración 3D · Anuncio vertical</p></div></div><figure class="icee-video"><video controls playsinline preload="metadata" poster="assets/icee/poster.png" aria-label="Anuncio de ICEE realizado en After Effects"><source src="assets/icee/anuncio.mp4" type="video/mp4">Tu navegador no puede reproducir este video. <a href="assets/icee/anuncio.mp4">Descargar anuncio</a></video><figcaption>Anuncio promocional · ICEE</figcaption></figure></article>`}

const mimiRenders=[["anuncio-vertical", "Anuncio vertical"], ["anuncio-horizontal", "Anuncio horizontal"], ["vista-02", "Vista de tres cuartos"], ["vista-03", "Vista frontal"], ["vista-04", "Vista lateral de tres cuartos"], ["detalle-calzado", "Detalle de vestuario y calzado"], ["detalle-producto", "Detalle del producto"], ["retrato", "Personaje y producto"]];
function renderMimi3D(){return `<article class="olab-case mimi3d-case"><span class="modal-category">MODELADO 3D · MAYA · PROYECTO ACADÉMICO</span><h2>SWAROVSKI | Personaje 3D</h2><div class="olab-intro"><div class="mimi3d-intro-panel"><img src="assets/mimi-3d/retrato.png" alt="Mimi, personaje 3D que presenta un estuche de plumas"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Un personaje que conecta.</h3><p>Modelado y caracterización de un personaje en Maya, llevado a una propuesta de anuncio para promocionar un producto. Las formas simplificadas y la paleta de azules y rosas construyen una personalidad cercana, expresiva y reconocible.</p><p>El personaje sostiene el estuche como centro de atención: su pose y la composición conducen la mirada hacia las plumas. Las piezas vertical y horizontal exploran cómo adaptar una misma escena a distintos formatos publicitarios.</p><p class="olab-scope">Modelado en Maya · Caracterización · Render · Composición publicitaria</p></div></div><div class="olab-collage mimi3d-gallery">${mimiRenders.map(([key,caption])=>`<figure class="mimi3d-${key}"><img src="assets/mimi-3d/${key}.png" alt="Mimi 3D — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

function renderCromatico(){return `<article class="olab-case cromatico-case"><span class="modal-category">DISEÑO EDITORIAL · PERIÓDICO</span><h2>CROMÁTICO | Periódico</h2><div class="olab-intro"><div class="cromatico-logo-panel"><img src="assets/cromatico-proyecto-opt.webp" alt="Cabecera del periódico Cromático"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>La ciudad como aula de diseño.</h3><p>Una propuesta editorial que reúne experiencias del diseño gráfico en Nueva York: museos, agencias, publicidad y empaque. La ciudad se convierte en un punto de encuentro entre aprendizaje, cultura visual e inspiración.</p><p>La composición en columnas, los titulares de alto contraste y los acentos amarillos organizan la información y guían la lectura. La fotografía conecta las noticias con los espacios que les dan vida.</p><p class="olab-scope">Diseño editorial · Retícula · Jerarquía tipográfica · Composición periodística</p></div></div><div class="olab-collage cromatico-gallery"><figure><img src="assets/cromatico/portada.png" alt="Primera plana de Cromático: diseño gráfico y digital en Nueva York"><figcaption>Primera plana · Del aula a Nueva York</figcaption></figure></div><a class="cromatico-pdf" href="assets/cromatico/CROMATICO.pdf" target="_blank" rel="noopener">Ver periódico en PDF ↗</a></article>`}

function renderPlie(){return `<article class="olab-case plie-case"><span class="modal-category">DISEÑO EDITORIAL · PROZINE GENERACIONAL</span><h2>PLIÉ | Prozine generacional</h2><div class="plie-intro"><span class="olab-concept-label">CONCEPTO</span><h3>El ballet a través de las generaciones.</h3><p>Un proyecto editorial que recorre la danza clásica a través de distintas generaciones. El diseño y los colores contemporáneos contrastan con la tradición del ballet, creando un diálogo entre su herencia clásica y una mirada visual actual.</p></div><div class="olab-collage plie-collage"><figure><img src="assets/plie/portada.jpg" alt="PLIÉ: portada, carta editorial e índice"><figcaption>Portada, carta editorial e índice</figcaption></figure><figure><img src="assets/plie/interiores.jpg" alt="PLIÉ: páginas interiores sobre el ballet a través de las generaciones" loading="lazy" decoding="async"><figcaption>Interiores · Ballet a través de las generaciones</figcaption></figure></div></article>`}

const raidGallery=[["productos", "Línea Arid Shield"], ["vela", "Vela repelente"], ["max", "Raid Max"], ["casa", "Casa y entorno"]];
function renderRaid(){return `<article class="olab-case raid-case"><span class="modal-category">DISEÑO DE EMPAQUE · PROYECTO ACADÉMICO</span><h2>RAID | Arid Shield</h2><div class="olab-intro"><div class="raid-logo-panel"><img src="assets/raid/logo.png" alt="Logotipo de RAID Arid Shield"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Protección inmediata.</h3><p>Propuesta conceptual de empaque para una línea de insecticidas inspirada en el desierto y sus cualidades de fuerza, persistencia y resistencia. Arid Shield traduce la idea de defensa y acción rápida en una identidad visual contundente.</p><p>Las texturas de suelo agrietado, los tonos cálidos y la gráfica de alto contraste conectan la colección con el entorno árido y diferencian sus presentaciones. El proyecto se centra en el diseño gráfico y de empaque.</p><p class="olab-scope">Identidad de línea · Etiquetas · Texturas · Sistema de empaque</p></div></div><div class="olab-collage raid-collage">${raidGallery.map(([key,caption])=>`<figure><img src="assets/raid/${key}.jpg" alt="RAID Arid Shield — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

const kleenexGallery=[["rectangular", "Caja rectangular · Lirio da Serra · Europa"], ["cuadrada", "Caja cuadrada · Magnolia · Asia"], ["tubo", "Tubo · Aloe classenii · África"], ["especial", "Edición especial · Hibiscus brackenridgei · Oceanía"]];
function renderKleenex(){return `<article class="olab-case kleenex-case"><span class="modal-category">DISEÑO DE EMPAQUE · PROYECTO ACADÉMICO</span><h2>KLEENEX | Botanical</h2><div class="olab-intro"><div class="kleenex-intro-panel"><img src="assets/kleenex/rectangular.jpg" alt="Kleenex Botanical, caja rectangular"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Preservar para florecer.</h3><p>Edición especial de empaques en la que cada diseño representa una planta en peligro de extinción de un continente distinto. Botanical conecta el cuidado cotidiano con la conservación de la biodiversidad bajo la idea: lo que cuidamos hoy, florece en el futuro.</p><p>Los patrones geométricos y las paletas de color nacen de las formas de cada especie. Cada empaque incluye información sobre la planta y su continente de origen, invitando a conocer y proteger la diversidad natural del mundo.</p><p class="olab-scope">Sistema de empaque · Patrones botánicos · Identidad de colección · Diseño estructural</p></div></div><div class="olab-collage kleenex-collage">${kleenexGallery.map(([key,caption])=>`<figure><img src="assets/kleenex/${key}.jpg" alt="Kleenex Botanical — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

const candelaGallery=[["tejocote", "Tejocote, canela y anís"], ["guayaba", "Guayaba y piloncillo"], ["ponche", "Ponche de frutas"], ["higo", "Higo con vino tinto"]];
function renderCandela(){return `<article class="olab-case candela-case"><span class="modal-category">DISEÑO DE ETIQUETA · PROYECTO ACADÉMICO</span><h2>CANDELA | Momentum</h2><div class="olab-intro"><div class="candela-logo-panel"><img src="assets/candela/logo.png" alt="Logotipo de Candela, colección Momentum"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Un abrazo al corazón.</h3><p>Identidad y diseño de etiquetas para una colección de cuatro salsas dulces gourmet inspirada en la Navidad mexicana. Momentum busca embotellar la calidez del hogar, la nostalgia y los momentos compartidos alrededor de la mesa.</p><p>Las ilustraciones de frutas y los patrones de esferas, piñatas, nochebuenas y luces de bengala conectan cada sabor con la tradición, en una propuesta cálida y elegante.</p><p class="olab-scope">Identidad visual · Ilustración · Etiquetas · Sistema de empaque</p></div></div><div class="olab-collage candela-collage">${candelaGallery.map(([key,caption])=>`<figure><img src="assets/candela/${key}.jpg" alt="Candela Momentum — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

const clubGallery=[["letrero.png", "Identidad en el espacio"], ["grupos.jpg", "Identificación de grupos por edad"], ["mochilas.jpg", "Mochilas"], ["credenciales.png", "Credenciales y cintas"], ["textura.png", "Textura y elementos gráficos"]];
function renderClub(){return `<article class="olab-case club-case"><span class="modal-category">IDENTIDAD DE MARCA · CENTRO CRISTIANO CALACOAYA</span><h2>CLUB SIETE | Rediseño de identidad</h2><div class="olab-intro"><div class="club-logo-comparison"><figure><img src="assets/club/logo-antes.png" alt="Logo anterior de Club Siete"><figcaption>ANTES</figcaption></figure><figure><img src="assets/club-proyecto-opt.webp" alt="Rediseño de Club Siete"><figcaption>REDISEÑO</figcaption></figure></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Semillas con propósito.</h3><p>Rediseño de identidad para Club Siete, un espacio de formación bíblica para niños de 6 a 12 años. El concepto reconoce a cada niño como una semilla con identidad y potencial, que crece con guía, cuidado y comunidad.</p><p>Una propuesta alegre y expresiva que combina colores vivos, formas lúdicas y un sistema gráfico por edades para acompañar el aprendizaje y fortalecer el sentido de pertenencia.</p><p class="olab-scope">Identidad visual · Elementos gráficos · Texturas · Identificación de grupos · Aplicaciones</p></div></div><div class="olab-collage club-collage">${clubGallery.map(([file,caption])=>`<figure><img src="assets/club/${file}" alt="Club Siete — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

const vesperGallery=[["bocina","Bocina"],["audifonos","Audífonos"],["microfono","Micrófono"],["bolsa","Bolsa de marca"],["blister","Blíster de cable de audio"]];
function renderVesper(){return `<article class="olab-case vesper-case"><span class="modal-category">IDENTIDAD DE MARCA · PROYECTO ACADÉMICO</span><h2>VESPER | Diseño de marca</h2><div class="olab-intro"><div class="vesper-logo-panel"><img src="assets/vesper/logo.png" alt="Logotipo de VESPER"></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Sinergia dinámica.</h3><p>Identidad para una marca de equipos de sonido inspirada en la ecolocalización del murciélago: la interacción entre emisión, percepción y adaptación del sonido.</p><p>La abstracción del murciélago, la tipografía geométrica Tachyon y una paleta de negro, blanco y gris construyen una imagen tecnológica, dinámica y sofisticada.</p><p class="olab-scope">Identidad visual · Abstracción gráfica · Aplicaciones de marca · Promocionales</p></div></div><div class="olab-collage vesper-collage">${vesperGallery.map(([key,caption])=>`<figure class="vesper-${key}"><div class="vesper-photo"><img src="assets/vesper/${key}.jpg" alt="VESPER — ${caption}" loading="lazy" decoding="async"></div><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}

const olabGallery=[["membresia", "Membresía de pacientes"], ["papeleria", "Papelería y resultados clínicos"], ["bata", "Bata médica"], ["sustancias", "Etiquetas para sustancias"], ["redes", "Comunicación en redes sociales"], ["credencial", "Credencial institucional"], ["camioneta", "Identidad en transporte"], ["muestras", "Identificación de muestras"], ["plumas", "Papelería promocional"], ["uniformes", "Uniformes del personal"]];
function renderOlab(){return `<article class="olab-case"><span class="modal-category">IDENTIDAD DE MARCA · PROYECTO ACADÉMICO</span><h2>OLAB | Rediseño de identidad</h2><div class="olab-intro"><div class="olab-logo-comparison"><figure><img src="assets/olab/logo-antes.png" alt="Logo de OLAB antes del rediseño"><figcaption>ANTES</figcaption></figure><figure><img src="assets/olab/logo-rediseno.png" alt="Rediseño de OLAB en azul y naranja"><figcaption>REDISEÑO</figcaption></figure></div><div><span class="olab-concept-label">CONCEPTO</span><h3>Bienestar y servicio.</h3><p>Una identidad que presenta al laboratorio como un aliado cercano en el cuidado de la salud. La propuesta busca transmitir confianza, atención humana y la tranquilidad de sentirse en buenas manos.</p><p>El símbolo conecta cuerpo, mente y alma. Los azules aportan equilibrio y confianza; el naranja, energía y calidez.</p><p class="olab-scope">Identidad visual · Papelería · Uniformes · Etiquetado · Transporte · Redes sociales</p></div></div><div class="olab-collage">${olabGallery.map(([key,caption])=>`<figure><img src="assets/olab/${key}.jpg" alt="OLAB — ${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption></figure>`).join('')}</div></article>`}
const projectImages={"olab": "olab-proyecto-opt.webp", "vesper": "vesper-proyecto-opt.webp", "club": "club-proyecto-opt.webp", "candela": "candela-proyecto-opt.webp", "raid": "raid-proyecto-opt.webp", "kleenex": "kleenex-proyecto-opt.webp", "cromatico": "cromatico-proyecto-opt.webp", "modelado": "modelado-proyecto-opt.webp", "agora": "icee/poster.png", "prozine": "prozine-proyecto-opt.webp"};
const groups=[{id:'marca',title:'IDENTIDAD DE MARCA',projects:[['OLAB','Rediseño de identidad','olab'],['VESPER','Diseño de marca','vesper'],['CLUB SIETE','Diseño de marca','club']]},{id:'etiqueta',title:'DISEÑO DE ETIQUETA',projects:[['CANDELA','Momentum','candela'],['KLEENEX','Botanical','kleenex'],['RAID','Arid Shield','raid']]},{id:'editorial',title:'DISEÑO EDITORIAL',projects:[['PLIÉ','Prozine generacional','prozine'],['CROMÁTICO','Periódico','cromatico']]},{id:'motion',title:'MODELADO 3D | MOTION GRAPHICS',projects:[['SWAROVSKI','Personaje 3D','modelado'],['ICEE','Motion graphics + 3D','agora']]}];
const root=document.querySelector('#project-groups');
for(const g of groups){const section=document.createElement('section');section.className='project-group';section.dataset.category=g.id;const heading=document.createElement('h2');heading.textContent=g.title;section.append(heading);const grid=document.createElement('div');grid.className='grid';for(const [name,subtitle,asset] of g.projects){const card=document.createElement('button');card.className='card';card.setAttribute('aria-label',`Ver proyecto ${name}, ${subtitle}`);card.innerHTML=`<span class="image">${asset?`<img src="assets/${projectImages[asset] || asset+'.webp'}" alt="${name} — ${subtitle}" loading="lazy" decoding="async">`:`<span class="placeholder">${name}</span>`}</span><span class="card-title"><span class="card-name">${name}</span><span class="card-subtitle">${subtitle}</span></span><span class="arrow" aria-hidden="true">↗</span>`;card.onclick=()=>openProject(g,name,subtitle,asset);grid.append(card)}section.append(grid);root.append(section)}
const dialog=document.querySelector('dialog');let lastTrigger;function openProject(g,name,subtitle,asset){lastTrigger=document.activeElement;dialog.classList.toggle('olab-dialog',asset==='olab'||asset==='vesper'||asset==='club'||asset==='candela'||asset==='kleenex'||asset==='raid'||asset==='prozine'||asset==='cromatico'||asset==='modelado'||asset==='agora');if(asset==='agora'){document.querySelector('#dialog-body').innerHTML=renderIcee();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='modelado'){document.querySelector('#dialog-body').innerHTML=renderMimi3D();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='cromatico'){document.querySelector('#dialog-body').innerHTML=renderCromatico();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='prozine'){document.querySelector('#dialog-body').innerHTML=renderPlie();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='raid'){document.querySelector('#dialog-body').innerHTML=renderRaid();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='kleenex'){document.querySelector('#dialog-body').innerHTML=renderKleenex();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='candela'){document.querySelector('#dialog-body').innerHTML=renderCandela();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='club'){document.querySelector('#dialog-body').innerHTML=renderClub();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='vesper'){document.querySelector('#dialog-body').innerHTML=renderVesper();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}if(asset==='olab'){document.querySelector('#dialog-body').innerHTML=renderOlab();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');return;}document.querySelector('#dialog-body').innerHTML=`<span class="modal-category">${g.title}</span><h2>${name} | ${subtitle}</h2>${asset?`<img src="assets/${projectImages[asset] || asset+'.webp'}" alt="${name} — vista ampliada"><p>Pieza del portafolio de Mimi.</p>`:`<p>La imagen de este proyecto no está disponible en el archivo original.</p>`}<a href="mailto:yohanannaomi@gmail.com?subject=${encodeURIComponent('Quiero saber más de '+name)}">Conversemos sobre este proyecto ↗</a>`;dialog.showModal();document.body.classList.add('modal-open')}
document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(video=>video.pause());document.body.classList.remove('modal-open');lastTrigger?.focus()});
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});document.querySelectorAll('.project-group').forEach(s=>s.hidden=b.dataset.filter!=='all'&&b.dataset.filter!==s.dataset.category)});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')});

// Move repeating text along the existing SVG ribbon paths.
(async function animateRibbonText(){
 await document.fonts.ready;
 const ns='http://www.w3.org/2000/svg';
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const ribbons=[...document.querySelectorAll('.ribbon svg')].map((svg,index)=>{
  const textPath=svg.querySelector('textPath');
  const path=svg.querySelector('defs path');
  const phrase=index===0
   ? 'IDENTIDAD DE MARCA · BRANDING · DISEÑO DE ETIQUETA · MODELADO 3D · MOTION GRAPHICS · '
   : 'MIMI · ';
  const measure=document.createElementNS(ns,'text');
  measure.style.whiteSpace='pre';
  measure.setAttribute('visibility','hidden');
  measure.textContent=phrase;
  svg.append(measure);
  const period=measure.getComputedTextLength();
  measure.remove();
  if(!period)return null;
  textPath.style.whiteSpace='pre';
  textPath.textContent=phrase.repeat(Math.ceil(path.getTotalLength()/period)+3);
  // Find the crossing of two non-adjacent portions of this ribbon.
  const length=path.getTotalLength(),step=6;
  const points=[];
  for(let at=0;at<=length;at+=step)points.push({...point(at),at});
  function point(at){const p=path.getPointAtLength(at);return {x:p.x,y:p.y}}
  let crossing;
  for(let i=0;i<points.length-1&&!crossing;i++){
   for(let j=i+18;j<points.length-1;j++){
    const a=points[i],b=points[i+1],c=points[j],d=points[j+1];
    const rx=b.x-a.x,ry=b.y-a.y,sx=d.x-c.x,sy=d.y-c.y;
    const det=rx*sy-ry*sx;if(Math.abs(det)<.0001)continue;
    const u=((c.x-a.x)*sy-(c.y-a.y)*sx)/det;
    const v=((c.x-a.x)*ry-(c.y-a.y)*rx)/det;
    if(u>=0&&u<=1&&v>=0&&v<=1){crossing=a.at+u*step;break}
   }
  }
  let overText,start=0;
  if(crossing!==undefined){
   start=Math.max(0,crossing-85);
   const end=Math.min(length,crossing+85);
   const segment=document.createElementNS(ns,'path');
   segment.id='ribbon-overpass-'+index;
   let shape='';
   for(let at=start;at<end;at+=2){const p=point(at);shape+=(at===start?'M':'L')+p.x+' '+p.y+' '}
   const last=point(end);shape+='L'+last.x+' '+last.y;
   segment.setAttribute('d',shape);svg.querySelector('defs').append(segment);
   const band=document.createElementNS(ns,'use');
   band.setAttribute('href','#'+segment.id);band.setAttribute('class','ribbon-band');
   svg.append(band);
   const over=document.createElementNS(ns,'text');over.setAttribute('dy','10');
   overText=document.createElementNS(ns,'textPath');
   // Extend the text guide beyond the painted overpass so entire glyphs
   // are redrawn at its edges, instead of being clipped by a short textPath.
   const textStart=Math.max(0,start-100),textEnd=Math.min(length,end+100);
   const textGuide=document.createElementNS(ns,'path');
   textGuide.id='ribbon-overpass-text-'+index;
   let textShape='';
   for(let at=textStart;at<textEnd;at+=1){const p=point(at);textShape+=(at===textStart?'M':'L')+p.x+' '+p.y+' '}
   const textLast=point(textEnd);textShape+='L'+textLast.x+' '+textLast.y;
   textGuide.setAttribute('d',textShape);svg.querySelector('defs').append(textGuide);
   start=textStart;
   overText.setAttribute('href','#'+textGuide.id);overText.style.whiteSpace='pre';
   overText.textContent=textPath.textContent;over.append(overText);svg.append(over);
  }
  return {svg,textPath,overText,start,period,phase:0,direction:index===0?1:-1,visible:false};
 }).filter(Boolean);
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){const ribbon=ribbons.find(r=>r.svg===entry.target);if(ribbon)ribbon.visible=entry.isIntersecting;}},{rootMargin:"100px"});
 ribbons.forEach(r=>observer.observe(r.svg));
 let previous;
 function frame(now){
  const elapsed=previous===undefined?0:Math.min((now-previous)/1000,.1);
  previous=now;
  if(!motion.matches&&!document.hidden){
   for(const ribbon of ribbons){
    if(!ribbon.visible)continue;
    ribbon.phase=(ribbon.phase+elapsed*28)%ribbon.period;
    const offset=ribbon.direction===1?ribbon.phase-ribbon.period:-ribbon.phase;
    ribbon.textPath.setAttribute('startOffset',String(offset));
    if(ribbon.overText)ribbon.overText.setAttribute('startOffset',String(offset-ribbon.start));
   }
  }
  requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
})();

// Fit the natural letter shapes without stretching or compressing them.
document.fonts.ready.then(() => {
 const svg = document.querySelector('footer .connect svg');
 const text = svg?.querySelector('text');
 if (!text) return;
 const box = text.getBBox();
 svg.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
});

// Estela decorativa del cursor: asteriscos de seis brazos.
(() => {
 const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
 const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
 const particles = new Set();
 let lastTime = 0, lastX, lastY, colorIndex = 0;
 const colors = ['#ff0097', '#ffe000', '#00b4e9'];
 const clear = () => { for (const node of particles) node.remove(); particles.clear(); lastX = lastY = undefined; };
 const star = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M39 0h22v31L88 15l12 20-28 16 28 16-12 20-27-16v29H39V71L12 87 0 67l28-16L0 35l12-20 27 16Z" fill="currentColor"/></svg>';
 document.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) return;
  const now = performance.now();
  if (now - lastTime < 35 || (lastX !== undefined && Math.hypot(event.clientX-lastX,event.clientY-lastY)<10)) return;
  lastTime = now; lastX = event.clientX; lastY = event.clientY;
  if (particles.size >= 24) { const oldest = particles.values().next().value; oldest.remove(); particles.delete(oldest); }
  const node = document.createElement('span'); node.className = 'cursor-asterisk'; node.setAttribute('aria-hidden','true');
  node.innerHTML = star;
  const size = 8 + Math.random()*8;
  node.style.cssText = `left:${event.clientX}px;top:${event.clientY}px;width:${size}px;height:${size}px;color:${colors[colorIndex++ % colors.length]}`;
  // Keep the effect visible inside project dialogs without covering controls.
  const host = document.querySelector('dialog[open]') || document.body;
  host.append(node); particles.add(node);
  const angle = Math.random()*90;
  const animation = node.animate([
   {transform:`translate(-50%,-50%) rotate(${angle}deg) scale(1)`,opacity:.85},
   {transform:`translate(calc(-50% + ${(Math.random()-.5)*20}px),calc(-50% + 18px)) rotate(${angle+70}deg) scale(.25)`,opacity:0}
  ], {duration:650,easing:'ease-out'});
  animation.onfinish = () => {node.remove();particles.delete(node)};
 }, {passive:true});
 reducedMotion.addEventListener('change',clear);
 finePointer.addEventListener('change',clear);
 document.addEventListener('visibilitychange',clear);
 document.documentElement.addEventListener('pointerleave',clear);
})();
