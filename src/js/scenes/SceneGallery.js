import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const gallery = document.getElementById('scene-gallery');

const showGallery = (showVideo) => {
    gallery.classList.remove('hidden');

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
    });

    document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        slide.addEventListener('click', () => {
            gallery.classList.add('hidden');
            showVideo(index + 1);
        });
    });

}

export default showGallery;