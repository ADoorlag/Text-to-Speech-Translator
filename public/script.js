const voiceSelect = document.getElementById('voice-select');
const playButton = document.getElementById('play-button');
const textInput = document.getElementById('text-input');

//Load available voices
let voices = [];
function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices.map((voice, index) => `<option value="${index}">${voice.name} (${voice.lang})</option>`).join('');
}

// Trigger voice loading when options become available
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

// Play text-to-speech
playButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    speechSynthesis.speak(utterance);
});