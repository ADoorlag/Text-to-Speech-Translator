const voiceSelect = document.getElementById('voice-select');
const playButton = document.getElementById('play-button');
const textInput = document.getElementById('text-input');
const languageSelect = document.getElementById('language-select');

// array of supported languages with their ISO codes
const supportedLanguages = [
    { code: 'en-US', name: 'English (United States)' },
    { code: 'es-ES', name: 'Spanish (Spain)' },
    { code: 'fr-FR', name: 'French (France)' },
    { code: 'de-DE', name: 'German (Germany)' },
    { code: 'it-IT', name: 'Italian (Italy)' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'ja-JP', name: 'Japanese (Japan)' }
];

// Generate language options
supportedLanguages.forEach(({ code, name }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    languageSelect.appendChild(option);
})

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