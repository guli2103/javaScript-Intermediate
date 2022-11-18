alert("Document object model")

let ism = prompt('Ismingizni kiriting: ')
let familiya = prompt('Familiyangini kiriting: ')
let yosh = prompt('Yoshingizni kiriting: ')
let rasm_url = prompt('Rasm manzilingizni kiriting: ')


document.getElementById('ism').innerHTML = `${ism}`
document.getElementById('familiya').innerHTML = `${familiya}`
document.getElementById('yosh').innerHTML = `${yosh}`
document.getElementById('image').innerHTML = `<img class = "rasm" src= "${rasm_url}"> `
