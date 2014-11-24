var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('#container');
document.body.appendChild(content.cloneNode(true));