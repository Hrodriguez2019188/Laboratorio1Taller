// Cambiar el color del texto de los enlaces de navegación al pasar el ratón por encima
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ff6600'; // Cambiar el color del texto al naranja al pasar el ratón
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Restaurar el color original del texto al salir el ratón
    });
});

function enviarFormulario() {
    document.getElementById('botonEnviar').setAttribute('disabled', 'true');
    document.querySelector('form').classList.add('cargando');
    window.location.href = 'https://www.youtube.com/embed/rpo_mZXoyig?si=TUhrHR62fGnSWpLF&amp;start=26' ;
}