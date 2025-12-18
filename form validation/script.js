const name1 = document.querySelector(".user_name");
const email = document.querySelector(".user_email");
const pass = document.querySelector(".user_password");
const btn = document.querySelector(".submit");
const Error1 = document.querySelector(".name_error");
const Error2 = document.querySelector(".email_error");
const Error3 = document.querySelector(".pass_error");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

btn.addEventListener('click', () => {
    let nameValue = name1.value;
    let emailValue = email.value;
    for (nV of nameValue) {
        if (!alpha.includes(nV)) {
            Error1.innerHTML = 'Please enter correct Name!!'
        }
        else {
            Error1.innerHTML = '';
        }
    }

    if (emailValue == ''){
        Error2.innerHTML = ''
    }
    else if (!emailValue.includes("@") || !emailValue.includes("@gmail.com")) {
        Error2.innerHTML = "Enter a valid Email"
    }
    else {
        Error2.innerHTML = '';
    }

})

pass.addEventListener('input', () => {
    let passValue = pass.value;
    if (passValue == '') {
        Error3.innerHTML = ''
    }
    else if (passValue.length <= 4) {
        Error3.innerHTML = "Weak Password!!"
    }
    else if (passValue.length > 4 && passValue.length < 8) {
        Error3.innerHTML = "Medium"
        Error3.style.color = "#b0a908"
    }
    else {
        Error3.innerHTML = "Strong Password"
        Error3.style.color = "Green"
    }
})