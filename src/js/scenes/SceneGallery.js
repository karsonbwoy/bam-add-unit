import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import gsap from 'gsap';
import { logSceneChange, logUserInteraction } from '../utils/eventTracking';

export const gallery = document.getElementById('scene-gallery');

const showGallery = (showVideo) => {
    gallery.classList.remove('hidden'); // shows gallery
    logSceneChange('gallery');

    //initialize swiper
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: { //for desktop view
            1025: {
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

    //add listeners to each gallery item
    document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        slide.addEventListener('click', () => {
            gallery.classList.add('hidden'); // hide gallery
            logUserInteraction('slide_click', index % 4)
            //go to scene 3
            showVideo(index % 4); // Use modulo to cycle through 4 unique imgs(there are duplicates for loop to work properly)
        });
    });

    document.getElementById('cta-button').addEventListener('click', () => {
        logUserInteraction('cta_click');
    })

    //animate cta button, you can use tween object to control animation.
    let tween = gsap.to("#cta-button", { scale: 1.1, duration: 0.5, yoyo: true, repeat: -1 });

}

export default showGallery;