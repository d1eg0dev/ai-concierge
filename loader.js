// Casa Tauro Booking Assistant — Loader
// This script fetches the bot HTML and injects it into the page
(function(){
  var baseUrl = document.currentScript.src.replace('/loader.js','');
  fetch(baseUrl + '/bot.html')
    .then(function(r){ return r.text(); })
    .then(function(html){
      var div = document.createElement('div');
      div.id = 'casa-tauro-bot';
      div.innerHTML = html;
      document.body.appendChild(div);
      // Execute scripts inside the injected HTML
      var scripts = div.querySelectorAll('script');
      scripts.forEach(function(s){
        var ns = document.createElement('script');
        if(s.src){ ns.src = s.src; }
        else { ns.textContent = s.textContent; }
        s.parentNode.replaceChild(ns, s);
      });
    })
    .catch(function(e){ console.error('Casa Tauro bot load error:', e); });
})();
