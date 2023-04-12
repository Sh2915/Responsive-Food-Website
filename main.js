// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 // on clicking the menu button the list is being displayed -home,services
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 // remove the navigation bar list on opening the active link
window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
// here on click operation, it check if it contains moon icon , then replace it with 
// sun icon and then add active navigation links bar 
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
 
// Scroll Reveal
// on scroll operation the content goes on displaying with some duration
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});
 
 
sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})