import { logSceneChange } from "../utils/eventTracking";

const intro = document.getElementById('scene-intro');
const counter = document.getElementById('counter');

const playIntro = (showGallery) => {
    intro.classList.remove('hidden');
    logSceneChange('intro');

    let countdown = 8;
    counter.textContent = countdown;
    const interval = setInterval(() => {
        countdown--;
        counter.textContent = countdown.toString();
        if (countdown <= 0) {
            clearInterval(interval);
            counter.textContent = '';
        }
    }, 1000);

    setTimeout(() => {
        intro.classList.add('hidden');
        showGallery();
    }, 8000);
}

export default playIntro;