var e={none:0,subtle:1,lively:2,showpiece:3};function t(){let t=document.documentElement.dataset.motion;return t&&t in e?t:`showpiece`}function n(n){return e[t()]>=e[n]}var r=()=>!matchMedia(`(hover: hover) and (pointer: fine)`).matches;function i(){document.addEventListener(`click`,e=>{let t=e.target.closest?.(`a`);if(t&&t.origin===location.origin&&t.target!==`_blank`)try{sessionStorage.setItem(`vt-origin`,JSON.stringify({x:e.clientX,y:e.clientY}))}catch{}})}function a(e={}){let t={text:`standard`,emphasis:`flat`,type:`regular`,weight:`regular`,...e.style};return`(function(){var vt=document.createElement('style');vt.textContent='@view-transition{navigation:auto}';document.head.appendChild(vt);var d=document.documentElement,l=${JSON.stringify(e.motion??`showpiece`)},t=${JSON.stringify(e.transition??`wipe`)},s=${JSON.stringify(t)},h=${JSON.stringify(e.hover??`underline`)},c=${JSON.stringify(e.cursor??`site`)},m=${JSON.stringify(e.magnetic?`on`:`off`)};
d.dataset.hoverStyle=h;d.dataset.cursorStyle=c;d.dataset.magneticMode=m;
try{l=localStorage.getItem('proto-motion')||l;t=localStorage.getItem('proto-vt')||t;
d.dataset.hoverStyle=localStorage.getItem('proto-hover')||h;d.dataset.cursorStyle=localStorage.getItem('proto-cursor')||c;d.dataset.magneticMode=localStorage.getItem('proto-magnetic')||m;
var st=JSON.parse(localStorage.getItem('proto-style')||'{}');for(var k in st)if(st[k])s[k]=st[k];
var o=JSON.parse(sessionStorage.getItem('vt-origin')||'null');sessionStorage.removeItem('vt-origin');
if(o){d.style.setProperty('--vt-x',o.x+'px');d.style.setProperty('--vt-y',o.y+'px');
var e=[['left',o.x],['right',innerWidth-o.x],['top',o.y],['bottom',innerHeight-o.y]].sort(function(a,b){return a[1]-b[1]})[0][0];d.dataset.vtDir=e;}}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)l='none';d.dataset.motion=l;d.dataset.vt=t;
d.dataset.text=s.text;d.dataset.emphasis=s.emphasis;d.dataset.type=s.type;d.dataset.weight=s.weight;
var calm=function(v){if(!v)return;['ready','finished','updateCallbackDone'].forEach(function(k){v[k]&&v[k].catch(function(){})})};
addEventListener('pageswap',function(e){calm(e.viewTransition)});
addEventListener('pagereveal',function(e){calm(e.viewTransition);var n=window.navigation&&navigation.activation;
if(e.viewTransition&&n&&n.navigationType==='traverse'){var o={left:'right',right:'left',top:'bottom',bottom:'top'};d.dataset.vtDir=o[d.dataset.vtDir||'right'];}});})();`}a();export{r as i,i as n,t as r,n as t};