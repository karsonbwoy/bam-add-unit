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
    window.addEventListener('pagehide', () => {
        console.log('page_hide');
    });
}

export const logSceneChange = (sceneName) => {
    console.log(`scene_change:${sceneName}`);
}

export const logUserInteraction = (interactionType, information) => {
    console.log(`user_interaction:${interactionType}` + (information ? `:${information}` : ''));
}

export default globalEventsTracking;