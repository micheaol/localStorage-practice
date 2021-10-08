const saveTolocalForm = document.querySelector('#add-to-local');
const removeFromLocalForm = document.querySelector('#remove-local');
const emailId = document.querySelector('#email-id');
const addKey = document.querySelector('#key');
const removeKey = document.querySelector('#removeKey');


saveTolocalForm.addEventListener('submit', createNewEmail);
removeFromLocalForm.addEventListener('submit', removeLocal)
const emailData = [];

function EmailData(key, email){
    this.key = key;
    this.email = email;
}

function createNewEmail() {
    const newEmailData = new EmailData(addKey.value, emailId.value)
    emailData.push(newEmailData);
    saveToLocal()
}

function saveToLocal(){
    let key = addKey.value;
    localStorage.setItem(key, JSON.stringify(emailData))
}

function removeLocal(){
    let key = removeKey.value;
    localStorage.removeItem(key)
}