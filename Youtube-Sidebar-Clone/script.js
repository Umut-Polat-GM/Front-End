// implement toggle menu

//Get the menu
const menuBtn = document.querySelector(".js-btn");

if(menuBtn){
    //Add a Click listener
    menuBtn.addEventListener('click', function(){
        // if the body has the class "closed" we remove it
        // if not we add it
        // this is called toggle
        document.querySelector('body').classList.toggle('closed')
    })
}

// Let's add a script to detect scrollbar so we can be able to add border when scroll needed
const resizeObserver = new ResizeObserver((entries) => { // Resize Listener
    const asideNav = document.querySelector('.js-aside-nav') // Target our element with a class '.js-aside-nav'
    if (asideNav) { // If element exists
        // check if the height of the element is different than the height with scroll
        if(asideNav.scrollHeight !== asideNav.clientHeight) {
            // we add a border class if there is a scroll
            asideNav.classList.add('border')
        } else {
            // else we remove the class border
            asideNav.classList.remove('border')
        }
    }
})
// we need to call the listner on resizing page
resizeObserver.observe(document.querySelector('.js-aside-nav'))