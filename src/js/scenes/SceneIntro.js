import { logSceneChange } from "../utils/eventTracking";

const intro = document.getElementById('scene-intro');

const playIntro = (showGallery) => {
    intro.classList.remove('hidden');
    logSceneChange('intro');
    setTimeout(() => {
        intro.classList.add('hidden');
        showGallery();
    }, 1000);
}

export default playIntro;