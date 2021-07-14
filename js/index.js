// const toggleBtn = document.getElementById('nav-toggle')
// const navbar = document.getElementById('nav-menu')

// toggleBtn.addEventListener('click', ()=>{
//     if(navbar.style.top === -100%){
//         navbar.style.display = 'block'
//     }
//     else{
//         navbar.style.display = 'none'
//     }
// })
const showMenu = () =>{
    const toggle = document.getElementById('nav-toggle')
    const nav = document.getElementById('nav-menu')

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu();


// close pop up and open pop up 
const showPopUp = document.querySelectorAll('#vid-content');
const containerPopUp = document.getElementById('popup');
const closeBtn = document.getElementById('close');

const displayPopUp = () => {
    showPopUp.forEach((popUp) => {
        popUp.addEventListener('click', ()=>{
            console.log('click');
            containerPopUp.classList.remove('popup')
        })

    })
}

closeBtn.addEventListener('click', ()=>{
    containerPopUp.classList.add('popup')
})

displayPopUp()



// swiper js framework in used
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
});

let swiper2 = new Swiper(".mySwiper2", {
    effect: 'fade',
    thumbs: {
        swiper: swiper,
    },
});

let swiper3 = new Swiper(".mySlide", {
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
