var video = document.getElementById('myVideo');

video.onplay = function() {
  console.log('Videoclipul a început redarea.');
};

video.onpause = function() {
  console.log('Videoclipul a fost întrerupt.');
};

video.onended = function() {
  console.log('Videoclipul a fost redat până la sfârșit.');
};
