import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import gsap from 'gsap';
import { logSceneChange, logUserInteraction } from '../utils/eventTracking';

export const gallery = document.getElementById('scene-gallery');

const showGallery = (showVideo) => {
    gallery.classList.remove('hidden');
    logSceneChange('gallery');
    let tween = gsap.to("#cta-button", { scale: 1.1, duration: 0.5, yoyo: true, repeat: -1 });
    tween.play();
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
    });


    document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        slide.addEventListener('click', () => {
            gallery.classList.add('hidden');
            logUserInteraction('slide_click', index % 4)
            showVideo(index % 4); // Use modulo to cycle through 4 unique imgs
        });
    });

    document.getElementById('cta-button').addEventListener('click', () => {
        logUserInteraction('cta_click');
    })

}

export default showGallery;