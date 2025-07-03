import { logSceneChange } from "../utils/eventTracking";

const sceneVideo = document.getElementById('scene-video');
const video = sceneVideo.children[0];

const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const showVideo = (positionIndex) => {
    sceneVideo.classList.remove('hidden');
    logSceneChange('video');
    video.classList.add(positions[positionIndex]);
}

export default showVideo;