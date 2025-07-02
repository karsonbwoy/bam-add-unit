const intro = document.getElementById('scene-intro');

const playIntro = (showGallery) => {
    intro.classList.remove('hidden');
    setTimeout(() => {
        intro.classList.add('hidden');
        showGallery();
    }, 1000);
}

export default playIntro;