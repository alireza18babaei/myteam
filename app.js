const menubutton = document.getElementById('menuBTN');
const menu = document.getElementById('menu');

menubutton.addEventListener('click', () => {
    menu.classList.toggle('open');
});


// When the open class was added and the menu opened, resizing the page caused layout issues. I ensured that no such issues would occur and that the class would be removed appropriately. This was particularly important for users with large tablets who open the menu and then switch to landscape mode, which previously caused errors.
window.addEventListener('resize', () => {
    if (window.window.innerWidth >= 992) {
        menu.classList.remove('open')
    }
        
});