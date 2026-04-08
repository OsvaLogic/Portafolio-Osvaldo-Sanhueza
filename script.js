// DATOS DE LOS PROYECTOS
const projectData = {
    tubebeat: {
        title: "TubeBeat",
        stack: "Python | CustomTkinter | Pillow | yt-dlp | FFmpeg | Archivo de texto plano (txt)",
        desc: "TubeBeat es una potente herramienta de escritorio para descargar videos y extraer audio. Integra CustomTkinter para una interfaz visual moderna e intuitiva, yt-dlp como motor de extracción de alta velocidad y FFmpeg para la conversión nativa de medios. Además, soporta descargas por lotes automatizadas mediante la lectura de enlaces desde archivos de texto (.txt) y renderiza las miniaturas en la interfaz utilizando Pillow.",
        img: "templates/Portada TubeBeat.jpg",
        repo: "https://github.com/OsvaLogic/TubeBeat",
        demo: "#"
    },
    ecommerce: {
        title: "Gamer E-commerce",
        stack: "Python | Django | PostgreSQL | psycopg2-binary | Pillow",
        desc: "Plataforma de ventas con diseño oscuro y agresivo. Optimización de carga y experiencia de usuario enfocada en el sector gaming.",
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

// Iniciar cuando la página cargue
window.onload = typeWriter;

document.querySelector('.modern-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Osva.Logic procesando información...');
    e.target.reset();
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