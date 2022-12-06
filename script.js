const button = document.getElementById('downloads');
const accordion = document.getElementById('accordion');

button.addEventListener('click', ()=>{
    accordion.classList.toggle('active');
})