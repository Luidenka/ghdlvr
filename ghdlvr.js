var link = new URL(window.location.href);
var file = link.searchParams.get('f');

if (file == null) {
    document.write('\<!DOCTYPE html>\
    \
    <head>\
        <title>GHDlvr</title>\
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
                document.getElementById(\'output\').value =\
                    `https://ghdlvr.github.io?f=${new URL(document.getElementById(\'ghlink\').value).pathname}`\
            }\
        </script>\
    </body>')
}
else {
    var meta = document.createElement('meta');
    var code = document.createElement('pre');
    meta.httpEquiv = "content-type";
    meta.content = "application/javascript";
    code.style = "word-wrap: break-word";
    code.style.whiteSpace = "pre-wrap";
    document.head.appendChild(meta);
    document.body.appendChild(code);
    fetch(`https://raw.githubusercontent.com${file}`)
        .then(response => response.text().then(data => code.innerText = data));
}