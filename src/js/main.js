import playIntro from "./scenes/SceneIntro";
import showGallery from "./scenes/SceneGallery";
import showVideo from "./scenes/SceneVideo";
import lockOrientation from "./utils/orientationLock";


const app = () => {
    lockOrientation();

    playIntro(() => showGallery(showVideo));
}

app()
