const sceneVideo = document.getElementById('scene-video');
const video = sceneVideo.children[0];

const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

const showVideo = (positionIndex) => {
    sceneVideo.classList.remove('hidden');
    video.classList.add(positions[positionIndex - 1]);
}

export default showVideo;