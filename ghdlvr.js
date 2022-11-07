var ghlink = window.location.pathname;

if (ghlink == '/') {
    document.write('\<!DOCTYPE html>\
    \
    <head>\
        <title>GHDlvr</title>\
        <script src="https://cdn.jsdelivr.net/gh/Luidenka/ghdlvr@latest/ghdlvr.js"></script>\
    </head>\
    \
    <body>\
        <h1>GHDlvr - the new CDN for GitHub Repos</h1>\
        <form>\
            <input placeholder="Enter GitHub file link" id="ghlink">\
            <input disabled placeholder="GHDlvr link output here" id="output">\
        </form>\
        <script>\
            document.getElementById(\'ghlink\').onchange = (e) => {\
                document.getElementById(\'output\').innerText =\
                    `https://ghdlvr.github.io/${new URL(document.getElementById(\'ghlink\'.innerText).pathname)}`\
            }\
        </script>\
    </body>')
}
else {
    var code = document.createElement('pre');
    document.body.appendChild(code);
    fetch(`https://raw.githubusercontent.com/${ghlink}`)
        .then(response => response.text().then(data => code.innerText = data));
}