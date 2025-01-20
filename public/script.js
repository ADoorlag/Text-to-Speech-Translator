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

//translate text with serverless function
async function translateText(text, target) {
  try{
    const response = await fetch('/api/translate.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, target: target })
    })

    if (!response.ok) {
        throw new Error(`Translation failed: ${response.status}: $await response.text()}`);
    }

    const data = await response.json();
    return data.data.translations[0].translatedText;

  } catch (error) {
    console.error('Translation error:', error);
    alert('Translation failed. Please try again.');
    return text;  
  } 
}

//TTS
function playText(text, voiceIndex) {
    const utterance = new SpeechSynthesisUtterance(text);
    if(voices[voiceIndex]) {
        utterance.voice = voices[voiceIndex];
    }
    speechSynthesis.speak(utterance);
}

// Play text-to-speech
playButton.addEventListener('click', async () => {
    const text = textInput.value.trim();
    const target = languageSelect.value;
    const selectedVoiceIndex = voiceSelect.value;

    if (!text) {
        alert('Please enter text to translate.');
        return;
    }

    try {
        // Translate text
        const translatedText = await translateText(text, target);

        // Play translated text
        playText(translatedText, selectedVoiceIndex);
    } catch (error) {
        console.error('Processing error:', error);
        alert('Processing failed. Please try again.');
    }
});