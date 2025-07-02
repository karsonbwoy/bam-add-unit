const video = document.getElementById('scene-video');
const showVideo = (position) => {
    video.classList.remove('hidden');
    console.log(position)
}

export default showVideo;