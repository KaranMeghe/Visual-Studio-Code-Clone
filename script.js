const button = document.getElementById('downloads');
const accordion = document.getElementById('accordion');
const icon = document.getElementById('icon');
const result = button.contains(icon);


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