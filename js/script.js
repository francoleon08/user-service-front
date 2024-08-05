const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


document.getElementById('sign-in-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username_login').value;
    const password = document.getElementById('password_login').value;

    const body = new URLSearchParams(
        {
            username: username,
            password: password
        }
    );

    try {
        const response = fetch('https://user-service-s2mr.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body.toString()
        })
        .then(response => {
            response.status === 200 ? alert('Inicio de sesión exitoso') : alert('Error en el inicio de sesión');
        });
        
    } catch (error) {
        alert('Error en el inicio de sesión');         
    }
});

document.getElementById('create-acount-form').addEventListener('submit', async function(event) {    
    event.preventDefault();

    const username = document.getElementById('username_create').value;
    const email = document.getElementById('email_create').value;
    const password = document.getElementById('password_create').value;

    if (!username || !email || !password) {
        alert('Todos los campos son obligatorios');
        return;
    }


    const body = {
        username: username,
        email: email,
        password: password
    };
    console.log(body);

    try {
        const response = await fetch('https://user-service-s2mr.onrender.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            alert('Error en la creación de usuario');
        }
        alert('Usuario creado exitosamente');
    } catch (error) {
        alert('Error en el inicio de sesión');
        console.error('Error:', error);        
    }
});