var code = document.createElement('pre');
document.body.appendChild(code);
fetch(`https://raw.githubusercontent.com${window.location.pathname}`)
    .then(response => response.text().then(data => code.innerText = data));