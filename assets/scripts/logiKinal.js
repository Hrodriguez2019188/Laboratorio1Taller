document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ff6600'; // Cambiar el color del texto al naranja al pasar el ratón
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Restaurar el color original del texto al salir el ratón
    });
});

