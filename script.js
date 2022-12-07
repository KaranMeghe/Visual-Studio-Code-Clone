const button = document.getElementById('downloads');
const accordion = document.getElementById('accordion');
const icon = document.getElementById('icon');
const result = button.contains(icon);
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

// navToggle()
function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    
    if(menu.classList.contains('flex')){
        logo.setAttribute('src','./images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src','./images/logo-bookmark.svg')   
    }
}

// Hamburger event listner
btn.addEventListener('click', navToggle);



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