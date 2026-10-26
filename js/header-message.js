(function () {
  var bubble = document.querySelector('.logo-speech-bubble');
  var text = document.querySelector('.logo-speech-text');
  if (!bubble || !text) return;

  var messages = [
    'Let\'s talk about your property',
    'NYC investment sales, BKREA'
  ];
  var i = 0;

  bubble.addEventListener('animationiteration', function () {
    i = (i + 1) % messages.length;
    text.textContent = messages[i];
  });
})();
