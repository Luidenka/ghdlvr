var ghlink = window.location.pathname;
var code = document.createElement('pre');
document.body.appendChild(code);

fetch(`https://raw.githubusercontent.com/${ghlink}`)
    .then(response => response.text().then(data => code.innerText = data));