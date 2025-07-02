const intro = document.getElementById('scene-intro');
const gallery = document.getElementById('scene-gallery');
const video = document.getElementById('scene-video');

setTimeout(() => {
    intro.classList.add('hidden');
    gallery.classList.remove('hidden');
}, 1000); // Change to 8000 later

gallery.addEventListener('click', () => {
    gallery.classList.add('hidden');
    video.classList.remove('hidden');
})