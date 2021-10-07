const emailinput = document.querySelector('#email-id');
const form = document.querySelector('form');
const displayOut = document.querySelector('.text')
const storedItem = localStorage.getItem('userEmail');

if(storedItem){
    emailinput.value = storedItem
}


emailinput.addEventListener('input', (e) =>{
    e.preventDefault();
    console.log(e.target.value)
});

const saveToLocalStorage = ()=>{
    localStorage.setItem('userEmail', emailinput.value);
}

form.addEventListener('submit', saveToLocalStorage);