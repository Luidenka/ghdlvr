var code = document.createElement('pre');
document.body.appendChild(code);
fetch(`https://raw.githubusercontent.com${file}`)
    .then(response => response.text().then(data => code.innerText = data));