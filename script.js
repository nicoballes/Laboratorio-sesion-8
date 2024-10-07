const carrusel = document.getElementById('carrusel');
const modal = document.getElementById('modal');
const sinopsisText = document.getElementById('sinopsis-text');
const closeButton = document.getElementsByClassName('close')[0];

// Mostrar sinopsis al hacer clic en un elemento
carrusel.addEventListener('click', (e) => {
    if (e.target.closest('.elemento')) {
        const sinopsis = e.target.closest('.elemento').getAttribute('data-sinopsis');
        sinopsisText.innerText = sinopsis;
        modal.style.display = 'block';
    }
});

// Cerrar el modal al hacer clic en la 'X'
closeButton.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
