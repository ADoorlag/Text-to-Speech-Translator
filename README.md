Text-to-Speech Translator

Overview

The Text-to-Speech Translator is a web-based application that enables users to input text, translate it into a desired language, and play the translated text using text-to-speech (TTS) functionality. This project leverages modern web technologies and integrates with Google Cloud Translation API for accurate translations.

Features

Input text and translate it into a variety of supported languages.

Select voices for text-to-speech playback.

User-friendly interface built with TailwindCSS.

Asynchronous serverless API calls for real-time translation.

Support for multiple languages, including English, Spanish, French, German, Italian, Chinese, and Japanese.

Technologies Used

HTML5 and CSS3 (TailwindCSS) for responsive UI design.

JavaScript for client-side functionality.

Google Cloud Translation API for language translation.

Speech Synthesis API for text-to-speech playback.

Node.js for serverless backend integration.

How to Use

Open the app in a web browser.

Enter text in the input field labeled "Enter your text to translate...".

Select the target language from the "Select Language" dropdown.

(Optional) Choose a voice from the "Select Voice" dropdown.

Click the "Play" button to hear the translated text spoken aloud.

Environment Variables

Ensure the following environment variable is set in the .env file:

GOOGLE_TRANSLATE_API_KEY: Your Google Cloud Translation API key.

Supported Languages

English (United States)

Spanish (Spain)

French (France)

German (Germany)

Italian (Italy)

Chinese (Simplified)

Japanese (Japan)

Future Improvements

Add support for more languages.

Implement error-specific messages for better debugging.

Enhance UI with additional themes and accessibility features.

Include offline support for TTS playback.
