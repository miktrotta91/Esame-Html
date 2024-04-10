window.onload = function() {
    fetch('footerEng.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML += data);

    fetch('navbarEng.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav').innerHTML += data);
};
    

