const button = document.getElementById('downloads');
const accordion = document.getElementById('accordion');
const icon = document.getElementById('icon');
const result = button.contains(icon);
const btn = document.getElementById('menu-btn');
const menu = document.querySelector('#menu');
const background = document.getElementById('background');

// Hamburger event listner
btn.addEventListener('click', ()=>{
background.classList.add('background');
// btn.classList.toggle('open');
menu.classList.toggle('flex');
menu.classList.toggle('hidden');
});

// Event listner on download button
button.addEventListener('click', ()=>{
    accordion.classList.toggle('active');
})

// Event listner for global window obj to close accordion menu
window.addEventListener('click', (e)=>{
    if(e.target !== button){
        accordion.classList.remove('active');
     } 
   });