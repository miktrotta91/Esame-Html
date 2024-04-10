//Trascrizione risultato form su una pagina

window.onload = function() {
  // Estrae i parametri dall'URL
  var params = new URLSearchParams(window.location.search);
  // Crea un elemento per ogni parametro e lo aggiunge al body
  params.forEach(function(value, key) {
    console.log(key + ": " + value);
      var p = document.createElement('p');
      p.textContent = key + ": " + value;
      document.body.appendChild(p);
  });
};
