document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuResponsive = document.querySelector(".menu-responsive");

    // Asegúrate de que el menú responsive comience oculto
    menuResponsive.style.display = "none";
    
    if (menuToggle && menuResponsive) {
        menuToggle.addEventListener("click", function() {
            // Alterna la clase 'active' para mostrar u ocultar el menú
            menuResponsive.classList.toggle("active");

            // Si el menú está activo, muestra; si no, oculta
            if (menuResponsive.classList.contains("active")) {
                menuResponsive.style.display = "flex";
            } else {
                menuResponsive.style.display = "none";
            }
        });
    } else {
        console.error("No se encontró el menú o el botón de menú.");
    }

    // Seleccionar todos los carruseles
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carouselContainer) => {
        let slideIndex = 1;
        const slides = carouselContainer.querySelectorAll('.carousel-image');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');
        const thumbnailImages = carouselContainer.querySelectorAll('.thumbnails img');

        // Mostrar el primer slide al cargar
        showSlides(slideIndex, slides, thumbnailImages);

        // Eventos para botones de navegación del carrusel
        if (prevButton && nextButton) {
            prevButton.addEventListener("click", function() {
                changeSlide(-1);
            });

            nextButton.addEventListener("click", function() {
                changeSlide(1);
            });
        }

        // Eventos para miniaturas del carrusel
        if (thumbnailImages.length > 0) {
            thumbnailImages.forEach((thumbnail, index) => {
                thumbnail.addEventListener("click", function() {
                    currentSlide(index + 1);
                });
            });
        } else {
            console.error("No se encontraron miniaturas del carrusel.");
        }

        // Función para cambiar de slide
        function changeSlide(n) {
            showSlides(slideIndex += n, slides, thumbnailImages);
        }

        // Función para cambiar a un slide específico
        function currentSlide(n) {
            showSlides(slideIndex = n, slides, thumbnailImages);
        }

        // Función que muestra el slide actual
        function showSlides(n, slides, thumbnails) {
            if (slides.length === 0 || thumbnails.length === 0) {
                console.error("No se encontraron slides o miniaturas.");
                return;
            }

            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => slide.style.display = 'none');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));

            slides[slideIndex - 1].style.display = 'block';
            thumbnails[slideIndex - 1].classList.add('active');
        }
    });
});
