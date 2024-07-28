// JavaScript to hide the preloader once the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        preloader.style.display = 'none';
    });
});
