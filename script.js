const button = document.getElementById('downloads');
const accordion = document.getElementById('accordion');

// Event listner for button
button.addEventListener('click', ()=>{
    accordion.classList.toggle('active');
})

// Event listner for all document
window.addEventListener('click', (e)=>{
 if(e.target !== button){
    accordion.classList.remove('active');
 }
})