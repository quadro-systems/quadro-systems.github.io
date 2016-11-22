var langSwitcher = (function() {

  return {

    setRu: function() {
      Cookies.set('lang', 'ru');
      window.location.href = 'ru.html';
    },

    setEn: function() {
      Cookies.set('lang', 'en');
      window.location.href = 'en.html';
    }
  }
})();
