  var phrases = [
    ['A good photograph is knowing where to stand.','-Ansel Adams-'],
    ['The single most important component of a camera is the twelve inches behind it.','-Ansel Adams-'],
    ['A photograph is like a recipe memory the finished dish.','-Carrie Latet-'],
    ['The camera sees more than the eye, so why not make use of it?','-Edward Weston-'],
    ['Results are uncertain even among the more experienced photographers.','-Matthew Brady-'],
    ['Once photography enters your bloodstream, it is like a disease.','-Arnold Newman-'],
    ['Photography to me is catching a moment which is passing, and which is true.','-Jacques-Henri Lartigue-'],
    ['Photography must be integrated with the story.','-James Wong Howe-'],
    ['In photography there are no shadows that cannot be illuminated.','-August Sander-'],
    ['Which of the photographs is my favorite? The one I\'m going to take tomorrow.','-Imogen Cunningham-'],
  ]


  document.getElementById('myjsContainer').innerHTML = phrases[randomPhrase];

  function newPhrase()
  {
    var randomPhrase = Math.floor(Math.random() * (phrases.length));
    document.getElementById('phrase').innerHTML = phrases[randomPhrase][0];
    document.getElementById('author').innerHTML = phrases[randomPhrase][1];
  }
