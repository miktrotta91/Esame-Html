//funzioni per utilizzzare la nav bar e il footer in tutte le pagine
window.onload = function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML += data);

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav').innerHTML += data);
};
    

