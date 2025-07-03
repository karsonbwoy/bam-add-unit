const globalEventsTracking = () => {
    window.addEventListener('load', () => {
        console.log('ad_load');
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            console.log('window_resize');
        }, 100);
    });
}

export default globalEventsTracking;