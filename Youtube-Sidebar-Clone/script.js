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

//sidebar active buttons
const asideBtn = document.querySelector(".sidebar");
const asideActive = document.querySelectorAll(".nav-link")

asideBtn.addEventListener('click', function(e){
    //we need current target id or parrentElement id
    const id = e.target.id;
    const parrentId = e.target.parentElement.id
    if(id || parrentId) {
        //first remove all active class
        asideActive.forEach( (activeBtn) => {
            activeBtn.classList.remove('active')
        })
        //After add active class
        e.target.classList.add('active')
        e.target.parentElement.classList.add('active')
    }
})