import playIntro from "./scenes/SceneIntro";
import showGallery from "./scenes/SceneGallery";
import showVideo from "./scenes/SceneVideo";
import lockOrientation from "./utils/orientationLock";
import globalEventsTracking from "./utils/eventTracking";


const app = () => {
    globalEventsTracking();
    lockOrientation();

    playIntro(() => showGallery(showVideo));
}

app()
