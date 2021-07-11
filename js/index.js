const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// close pop uo 
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



// swiper js framework i used
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  let swiper2 = new Swiper(".mySwiper2", {
    effect: 'fade',
    thumbs: {
      swiper: swiper,
    },
  });