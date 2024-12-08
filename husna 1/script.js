// 1. Slideshow untuk Galeri
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}
function nextSlide() {
    const slides = document.querySelectorAll('.gallery-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function prevSlide() {
    const slides = document.querySelectorAll('.gallery-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// 2. Validasi Form Kontak
function validateContactForm(event) {
    event.preventDefault(); // Mencegah submit default
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        alert('Semua bidang harus diisi!');
        return;
    }

    if (!email.includes('@')) {
        alert('Masukkan email yang valid!');
        return;
    }

    alert('Form berhasil dikirim!');
}

// 3. Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// 4. Pop-up Modal untuk Video
function showModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<video src="${videoUrl}" controls autoplay></video>`;
    modal.style.display = 'block';
}
function closeModal() {
    const modal = document.getElementById('video-modal');
    modal.style.display = 'none';
    document.getElementById('modal-content').innerHTML = '';
}

// Event Listener untuk Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.scroll-link');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Tampilkan slide pertama di galeri
    showSlide(currentSlide);
});
