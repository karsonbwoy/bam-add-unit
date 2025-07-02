
const orientationWarning = document.getElementById('orientation-warning');

export default function lockOrientation() {

    window.addEventListener('load', () => {
        if (screen.orientation.type.startsWith('landscape')) {
            orientationWarning.classList.remove('hidden');
            console.log('Landscape mode detected on load');
        }
        else {
            orientationWarning.classList.add('hidden');
            console.log('Portrait mode detected on load');
        }
    });

    window.addEventListener('orientationchange', () => {
        if (screen.orientation.type.startsWith('landscape')) {
            orientationWarning.classList.remove('hidden');
            console.log('Landscape mode detected');
        }
        else {
            orientationWarning.classList.add('hidden');
            console.log('Portrait mode detected');
        }
    })
}
