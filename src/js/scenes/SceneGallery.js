export const gallery = document.getElementById('scene-gallery');

const showGallery = (showVideo) => {
    gallery.classList.remove('hidden');
    gallery.addEventListener('click', () => {
        let position = 1
        gallery.classList.add('hidden');
        showVideo(position)
    })
}

export default showGallery;