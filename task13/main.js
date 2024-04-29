const login = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const storedUser = localStorage.getItem(username);
   
    if (storedUser && JSON.parse(storedUser).password === password) { 
        displayProfile(JSON.parse(storedUser));
    } else {
    alert('Неверное имя пользователя или пароль!');
    }
}

const register = () => {
    const username = document.querySelector('#regUsername').value;
    const password = document.querySelector('#regPassword').value;
    const surname = document.querySelector('#regSurname').value;
    const name = document.querySelector('#regName').value;
    const patronamic = document.querySelector('#regPatronamic').value;
    const email = document.querySelector('#regEmail').value;
    const user = { username: username, password: password, surname: surname, name: name, patronamic: patronamic, email: email };
    localStorage.setItem(username, JSON.stringify(user));
    document.querySelector('#regForm').style.display = 'none';
    document.querySelector('#authForm').style.display = 'block';
}

const displayProfile = (user) => {
    document.querySelector('#userInfo').innerText = `Имя пользователя: ${user.username},
    ФИО: ${user.surname} ${user.name} ${user.patronamic},
    Электронная почта: ${user.email} `;
    document.querySelector('#authForm').style.display = 'none'; 
    document.querySelector('#profile').style.display = 'block';
}

const logout = () => {
    document.querySelector('#profile').style.display = 'none'; 
    document.querySelector('#authForm').style.display = 'block';
}

const showRegistrationForm = () => {
    document.querySelector('#authForm').style.display = 'none';
    document.querySelector('#regForm').style.display = 'block';
}

const showAuthForm = () => {
    document.querySelector('#regForm').style.display = 'none'; 
    document.querySelector('#authForm').style.display = 'block';
}