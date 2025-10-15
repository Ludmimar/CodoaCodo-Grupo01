// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== HAMBURGER MENU ====================
const menuToggle = document.getElementById('menuToggle');
const menuNav = document.querySelector('.menuppal');
const body = document.body;

if (menuToggle && menuNav) {
    menuToggle.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Toggle clases
        this.classList.toggle('active');
        menuNav.classList.toggle('is_active');
        body.classList.toggle('menu-open');
        
        // Actualizar aria-expanded
        const isExpanded = menuNav.classList.contains('is_active');
        this.setAttribute('aria-expanded', isExpanded);
        
        // Prevenir scroll cuando el menú está abierto
        if (isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Cerrar menú al hacer click en un enlace (móvil)
    const menuLinks = menuNav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                menuNav.classList.remove('is_active');
                body.classList.remove('menu-open');
                body.style.overflow = '';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Cerrar menú al hacer click fuera (en el overlay)
    menuNav.addEventListener('click', function(event) {
        if (event.target === this && this.classList.contains('is_active')) {
            menuToggle.classList.remove('active');
            this.classList.remove('is_active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ==================== DROPDOWN MENU (Desktop y Mobile) ====================
const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

menuItemsWithChildren.forEach(item => {
    const link = item.querySelector('a');
    
    if (link) {
        link.addEventListener('click', function(e) {
            // Siempre prevenir navegación en enlaces con dropdown
            e.preventDefault();
            
            // En móvil, manejar el toggle del dropdown
            if (window.innerWidth <= 768) {
                // Cerrar otros dropdowns abiertos
                menuItemsWithChildren.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle el dropdown actual
                item.classList.toggle('active');
            }
            // En desktop, el hover CSS ya lo maneja, pero prevenimos navegación
        });
    }
});

// ==================== HEADER SCROLL EFFECT ====================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== CAROUSEL AUTO-PLAY ====================
let currentSlide = 1;
const totalSlides = 3;
let carouselInterval;

function startCarousel() {
    const slideInputs = document.querySelectorAll('.slide-open');
    
    if (slideInputs.length > 0) {
        carouselInterval = setInterval(() => {
            currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
            const targetSlide = document.getElementById(`slide-${currentSlide}`);
            if (targetSlide) {
                targetSlide.checked = true;
            }
        }, 5000); // Cambiar cada 5 segundos
    }
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Iniciar carousel si existe
const carousel = document.querySelector('.slide');
if (carousel) {
    startCarousel();
    
    // Pausar al hacer hover
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    
    // Pausar cuando el usuario hace click manual
    const slideControls = document.querySelectorAll('.slide-control, .slide-circulo');
    slideControls.forEach(control => {
        control.addEventListener('click', () => {
            stopCarousel();
            setTimeout(startCarousel, 10000); // Reiniciar después de 10 segundos
        });
    });
}

// ==================== FORM VALIDATION ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        
        // Validate name
        if (name.value.trim() === '') {
            showError(name, 'Por favor ingrese su nombre');
            isValid = false;
        } else if (name.value.trim().length < 3) {
            showError(name, 'El nombre debe tener al menos 3 caracteres');
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Por favor ingrese su email');
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, 'Por favor ingrese un email válido');
            isValid = false;
        }
        
        // Validate phone
        const phonePattern = /^[0-9]{8,15}$/;
        if (phone.value.trim() === '') {
            showError(phone, 'Por favor ingrese su teléfono');
            isValid = false;
        } else if (!phonePattern.test(phone.value.replace(/[\s-]/g, ''))) {
            showError(phone, 'Por favor ingrese un teléfono válido (8-15 dígitos)');
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            showError(message, 'Por favor ingrese un mensaje');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showSuccessMessage();
            contactForm.reset();
        }
    });
}

function showError(input, message) {
    input.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = '<i class="bx bx-check-circle"></i> ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.';
    contactForm.insertAdjacentElement('beforebegin', successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ==================== ACCESSIBILITY IMPROVEMENTS ====================
// Add keyboard navigation for dropdown menu
const menuItems = document.querySelectorAll('.nav > li');
menuItems.forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.cursos');
    
    if (link && submenu) {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                link.setAttribute('aria-expanded', submenu.style.display === 'block');
            }
        });
    }
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

console.log('✅ Todas las funcionalidades JavaScript cargadas correctamente');
