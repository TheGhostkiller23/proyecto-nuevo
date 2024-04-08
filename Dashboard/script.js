document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessageElement = document.getElementById('welcomeMessage');

    // Obtén los datos del usuario del localStorage
    const loggedInUserData = localStorage.getItem('loggedInUser');
    if (loggedInUserData) {
        const userData = JSON.parse(loggedInUserData);
        // Muestra el mensaje de bienvenida personalizado
        welcomeMessageElement.innerHTML = `¡Bienvenido, ${userData.username}!`;
    } else {
        // Si no hay datos de usuario en localStorage, redirige al usuario a la página de inicio de sesión
        window.location.href = '/Login/index.html';
    }
});
