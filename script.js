const galleryItems = document.querySelectorAll('.galeria-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxTitulo = lightbox.querySelector('.lightbox-titulo');
const cerrar = lightbox.querySelector('.cerrar');
const prev = lightbox.querySelector('.prev');
const next = lightbox.querySelector('.next');

let currentIndex = 0;

// Función para abrir lightbox en un índice específico
function openLightbox(index) {
  currentIndex = index;
  const img = galleryItems[currentIndex];
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  const titulo = img.nextElementSibling ? img.nextElementSibling.textContent : '';
  lightboxTitulo.textContent = titulo;
}

// Abrir lightbox al clicar cualquier imagen
galleryItems.forEach((img, index) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(index));
});

// Cerrar lightbox
cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Cerrar al clicar fuera de la imagen
lightbox.addEventListener('click', e => {
  if(e.target === e.currentTarget) {
    lightbox.style.display = 'none';
  }
});

// Navegación
prev.addEventListener('click', e => {
  e.stopPropagation(); // evita cerrar el lightbox al clicar la flecha
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentIndex);
});

next.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openLightbox(currentIndex);
});

// Navegación con teclado
document.addEventListener('keydown', e => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
    if (e.key === 'Escape') cerrar.click();
  }
});

elemento.classList.add("highlight");
