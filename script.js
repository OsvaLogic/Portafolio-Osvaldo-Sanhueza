// DATOS DE LOS PROYECTOS
const projectData = {
    tubebeat: {
        title: "TubeBeat",
        stack: "Python | CustomTkinter | Pillow | yt-dlp | FFmpeg | Archivo de texto plano (txt)",
        desc: "TubeBeat es una potente herramienta de escritorio diseñada para la descarga y conversión de contenido multimedia. Integra CustomTkinter para ofrecer una interfaz gráfica moderna, oscura e intuitiva. Su motor de extracción está impulsado por yt-dlp, garantizando descargas de alta velocidad y compatibilidad con múltiples plataformas, mientras que FFmpeg se encarga de la conversión nativa de medios sin pérdida de calidad. Destaca por su capacidad para procesar descargas masivas automatizadas leyendo secuencias desde archivos de texto (.txt), optimización de recursos locales, y una experiencia fluida con renderizado de miniaturas en tiempo real usando Pillow. Una solución robusta que prioriza el rendimiento y la privacidad del usuario al procesar todo de manera local.",
        img: "templates/Portada TubeBeat.jpg",
        repo: "https://github.com/OsvaLogic/TubeBeat",
        demo: "#"
    },
    ecommerce: {
        title: "Gamer E-commerce",
        stack: "Python | Django | PostgreSQL | psycopg2-binary | Pillow",
        desc: "Plataforma web de comercio electrónico High-End diseñada específicamente para el exigente nicho gamer. Desarrollada con el robusto framework Django y respaldada por una base de datos relacional PostgreSQL, garantizando máxima seguridad, integridad referencial y fiabilidad en la gestión de datos críticos. El diseño de la interfaz destaca por una estética 'dark' agresiva y de alto contraste, optimizada para ofrecer una experiencia de usuario altamente inmersiva y tiempos de retención prolongados. Incluye gestión escalable de inventario, un panel de administración avanzado, y procesamiento eficiente de medios a través de Pillow. Su arquitectura lógica está estructurada para soportar alto tráfico y ofrecer tiempos de respuesta ultrarrápidos.",
        img: "templates/portada ecommerce.jpg",
        repo: "https://github.com/OsvaLogic",
        demo: "#"
    }
};

// LÓGICA DEL MODAL
function openModal(id) {
    const project = projectData[id];
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalStack').innerText = project.stack;
    document.getElementById('modalDesc').innerText = project.desc;
    document.getElementById('modalImg').src = project.img;
    document.getElementById('modalRepo').href = project.repo;
    document.getElementById('modalDemo').href = project.demo;

    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ANIMACIÓN AL HACER SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('appear');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

// CERRAR MODAL SI CLICAN FUERA
window.onclick = (e) => {
    if (e.target.className === 'modal-overlay') closeModal();
};

// CERRAR MODAL CON LA TECLA ESCAPE
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('projectModal').style.display === 'flex') {
        closeModal();
    }
});

// EFECTO TIPO TERMINAL PARA EL SUBTÍTULO
const description = document.querySelector('.description');
const text = description.innerText;
description.innerText = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        description.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 15); // Velocidad de escritura
    }
}

// PANTALLA DE CARGA Y ANIMACIÓN INICIAL
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded'); // Desvanece la pantalla de carga
        setTimeout(typeWriter, 600); // Inicia el texto de la terminal justo después de cargar
    }, 2500); // La pantalla de carga dura 2.5 segundos
});

// LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Cerrar menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});