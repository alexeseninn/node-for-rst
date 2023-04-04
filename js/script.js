const TOKEN = '5961153363:AAEHsfVlAxzE8MwONrbUFiFaw5XVZurtbsg';
const CHAT_ID = '-859608299';
const formData = new FormData();

let sendMessage = document.getElementById('sendMessage');
let enterButton = document.getElementById('enterButton');
// let loginButton = document.getElementById('loginButton');

sendMessage.onclick = sendMsg;
enterButton.onclick = openLogin;
// loginButton.onclick = authorozation;
// 
// function authorozation() {
//     let login = document.getElementById('login').value;
//     let password = document.getElementById('password').value;
//     console.log(password + " " + login);

//     formData.delete('username');
//     formData.delete('password');

//     formData.append('username', login);
//     formData.append('password', password);

//     fetch('/auth', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//     // handle response
//     })
//     .catch(error => {
//         console.error(error);
//     });

//     const name = document.querySelector('.auth');
//     name.style.display = "none";
// }

function openLogin() {
    const name = document.querySelector('.auth');
    name.style.display = "flex";
}

function sendMsg() {
    const name = document.querySelector('.form-control1').value;
    const phone = document.querySelector('.form-control2').value;
    const mess = document.querySelector('.form-control3').value;

    if (name =='' || phone == '' || mess == ''){
        alert("Пожалуйста, заполните все три поля")
        return
    }

    text = "Имя: " + name + ".     Телефон: " + phone + ".     Сообщение: " + mess;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();

    alert("Сообщение отправлено!")

    document.querySelector('.form-control1').value = null;
    document.querySelector('.form-control2').value = null;
    document.querySelector('.form-control3').value = null;
    sendMessage.disabled = true;

    setTimeout(enab, 10000);
    function enab() {
        sendMessage.disabled = false;
    }
}