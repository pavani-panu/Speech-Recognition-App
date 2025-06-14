const output = document.getElementById("output");

function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.textContent = "You said: " + transcript;
  };

  recognition.onerror = function(event) {
    output.textContent = 'Error occurred: ' + event.error;
  };
}
