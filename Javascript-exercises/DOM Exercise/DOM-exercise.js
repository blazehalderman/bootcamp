var firHeader = document.getElementById('article-1').getElementsByTagName('h1')

var secHeader = document.getElementsByTagName('h1')[1]

var thirHeader = document.querySelector('#article-1').getElementsByTagName('h1');

var fouHeader = document.querySelectorAll('article')[0].querySelector('h1');

fouHeader.innerHTML = 'I am a SELECTOR';

secHeader.classList.toggle('article-heading');

var aTag = document.getElementById('article-1').querySelector('a');

aTag.setAttribute('href', 'www.google.com');

aTag.setAttribute('target', '_blank');
