
const orientationWarning = document.getElementById('orientation-warning');

export default function lockOrientation() {
    const checkOrientation = () => {
        let isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
        if (!isMobile) {
            orientationWarning.classList.add('hidden');
            return;
        }
        if (screen.orientation.type.startsWith('landscape')) {
            orientationWarning.classList.remove('hidden');
            console.log('Landscape mode detected on load');
        }
        else {
            orientationWarning.classList.add('hidden');
            console.log('Portrait mode detected on load');
        }
    }

    window.addEventListener('load', checkOrientation);

    window.addEventListener('orientationchange', checkOrientation)

    let debounceResize = null
    window.addEventListener('resize', () => {
        clearTimeout(debounceResize);
        debounceResize = setTimeout(checkOrientation, 200);
    })
}
