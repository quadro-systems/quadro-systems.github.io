function redirectToLangSpecificPage(){
  var lang = Cookies.get('lang');

  if (typeof lang === 'undefined' || lang === null || lang === 'undefined') {
    lang = 'ru';
    Cookies.set('lang', lang);
  }

  if (lang == 'ru') {
    window.location.href = 'ru.html';
  }
  else {
    window.location.href = 'en.html';
  }
}