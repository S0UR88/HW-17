
// ***password

let passwordIcon = document.querySelector(".passwordIcon");
let inputPassword = document.querySelector(".inputPassword input");
function showHidePassword(){

    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        passwordIcon.innerHTML = `<i class="bi bi-eye"></i>`;
    }

    else{
        inputPassword.type = 'password';
        passwordIcon.innerHTML = `<i class="bi bi-eye-slash"></i>`;
    }

}

passwordIcon.addEventListener("click", showHidePassword);


let loginButton = document.querySelector("form button")

function loginForm(){

    if(inputPassword.value.length > 0){
        loginButton.innerHTML = `Successfully Completed <i class="bi bi-check-lg"></i>`;
    }

    else{
        loginButton.innerHTML = `Error <i class="bi bi-exclamation-circle"></i> `;
       

}}

loginButton.addEventListener("click", loginForm)


