document.addEventListener('DOMContentLoaded', function () {
    function loadAndPlayAudio(audioElement) {
        if (audioElement.readyState === 0) {
            // Audio is not preloaded, so start preloading
            audioElement.load();
            audioElement.addEventListener('canplaythrough', function () {
                // Audio is preloaded, play it
                audioElement.play();
            });
        } else {
            // Audio is already preloaded, play it directly
            audioElement.play();
        }
    }

    const ipaButtons = document.querySelectorAll('.ipa-button[data-audio-id]');
    ipaButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const audioId = button.getAttribute('data-audio-id');
            const audioElement = document.getElementById(audioId);
            if (audioElement) {
                loadAndPlayAudio(audioElement);
            }
        });
    });
});
