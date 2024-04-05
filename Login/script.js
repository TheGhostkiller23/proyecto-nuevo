document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registrarseLink = document.getElementById('registrarseLink');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const warningsElement = document.getElementById('warnings');

    // Función para validar el nombre de usuario
    function validarNombreUsuario() {
        if (usernameInput.value.length < 6) {
            warningsElement.innerHTML = 'El nombre de usuario debe tener al menos 6 caracteres.';
            return false;
        }
        return true;
    }

    // Función para validar el correo electrónico
    function validarEmail() {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!emailRegex.test(emailInput.value)) {
            warningsElement.innerHTML = 'El email no es válido.';
            return false;
        }
        return true;
    }

    // Función para validar la contraseña
    function validarContraseña() {
        if (passwordInput.value.length < 8) {
            warningsElement.innerHTML = 'La contraseña debe tener al menos 8 caracteres.';
            return false;
        }
        return true;
    }

    // Controlador de eventos para el formulario de inicio de sesión
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío del formulario por defecto

        if (validarNombreUsuario() && validarEmail() && validarContraseña()) {
            // Aquí puedes verificar si el usuario existe en localStorage
            const storedUserData = localStorage.getItem(usernameInput.value);
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (userData.password === passwordInput.value) {
                    console.log('Inicio de sesión exitoso');
                    // Redirige al usuario a la página principal
                    window.location.href = 'Dashboard/index.html';
                } else {
                    console.log('Contraseña incorrecta');
                }
            } else {
                console.log('Usuario no registrado');
            }
        }
    });

    // Controlador de eventos para el enlace de registro
    registrarseLink.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la acción por defecto del enlace

        if (validarNombreUsuario() && validarEmail() && validarContraseña()) {
            // Si todo está correcto, guarda el objeto en localStorage
            const userData = {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };
            localStorage.setItem(usernameInput.value, JSON.stringify(userData));
            console.log('Datos guardados en localStorage');
            // Muestra un mensaje de éxito
            warningsElement.innerHTML = 'Registro exitoso. Ahora puedes iniciar sesión.';
            // Limpiar los campos del formulario después del registro
            usernameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
        }
    });
});
