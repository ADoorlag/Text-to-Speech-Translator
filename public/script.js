const voiceSelect = document.getElementById('voice-select');
const playButton = document.getElementById('play-button');
const textInput = document.getElementById('text-input');

// Play text-to-speech
playButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    speechSynthesis.speak(utterance);
});