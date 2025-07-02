const intro = document.getElementById('scene-intro');
const gallery = document.getElementById('scene-gallery');
const video = document.getElementById('scene-video');
let orientationWarning = document.getElementById('orientation-warning');

setTimeout(() => {
    intro.classList.add('hidden');
    gallery.classList.remove('hidden');
}, 1000); // Change to 8000 later

gallery.addEventListener('click', () => {
    gallery.classList.add('hidden');
    video.classList.remove('hidden');
})

window.addEventListener('orientationchange', () => {
    if (screen.orientation.type.startsWith('landscape')) {
        orientationWarning.classList.remove('hidden');
        console.log('Landscape mode detected');
    }
    else {
        orientationWarning.classList.add('hidden');
        console.log('Portrait mode detected');
    }
})