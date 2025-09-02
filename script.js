// Script para el control del menú lateral y la animación del logo

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const logo = document.getElementById('logo');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
    // Se puede cambiar el icono del menú aquí
    // Por ejemplo: menuToggle.textContent = sideMenu.classList.contains('show') ? '✕' : '☰';
  });

  // Cerrar el menú lateral cuando se hace clic en un enlace del menú
  sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('show');
    });
  });

  // Animación del logo al hacer click
  logo.addEventListener('click', () => {
    // Si ya tiene la clase 'animate', la quitamos y la volvemos a añadir para reiniciar la animación
    logo.classList.remove('animate');
    // Forzar un reflow para que la animación se reinicie
    void logo.offsetWidth;
    logo.classList.add('animate');
  });

  // Opcional: Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && sideMenu.classList.contains('show')) {
      sideMenu.classList.remove('show');
    }
  });

  // Comportamiento de desplazamiento suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Nota: particles.js o cualquier otro script de fondo dinámico
