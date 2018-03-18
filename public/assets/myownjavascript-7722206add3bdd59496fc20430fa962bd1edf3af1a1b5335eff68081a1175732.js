document.addEventListener("DOMContentLoaded", function() {
  var phrases = [
    'A good photograph is knowing where to stand. - Ansel Adams',
    'The single most important component of a camera is the twelve inches behind it. - Ansel Adams',
    'There are always two people in every picture: the photographer and the viewer. - Ansel Adams',
    'The important thing is, you have to have something important to say about the world. - Paul Strand',
    'Your first 10,000 photographs are your worst. - Henri Cartier-Bresson',
    'A photograph is like a recipe memory the finished dish. - Carrie Latet'
  ]


  document.getElementById('myjsContainer').innerHTML = phrases[randomPhrase];
  
  function newPhrase()
  {
    var randomPhrase = Math.floor(Math.random() * (phrases.length));
    document.getElementById('myjsContainer').innerHTML = phrases[randomPhrase];
  }
});
