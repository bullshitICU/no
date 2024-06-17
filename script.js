document.querySelector('.floating-button').addEventListener('click', function() {
    const menu = document.querySelector('.floating-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});