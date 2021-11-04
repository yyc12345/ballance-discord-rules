window.addEventListener("load", remove_url);
//document.addEventListener("DOMSubtreeModified", remove_url);

function remove_url() {
    var shitNav = document.querySelector('nav.md-footer__inner');
    shitNav.parentNode.removeChild(shitNav);
}