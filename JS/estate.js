//change backgraound header
function scrollHeader(){
  const header = document.getElementById("header")
  //whe the scroll is greater tha 50 viewport height, and the 
  if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

//popular swiper

var swiperPopular = new Swiper(".popular__container", {
  spaceBetwween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// value accordion
const accordionItems = document.querySelectorAll(".value__accordion__item")

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector(".value__accordion-header")

  accordionHeader.addEventListener("click", () =>{
    const openItem = document.querySelector(".accordion-open")

    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector(".value__accordion-content")

  if(item.classList.contains("accordion-open")){
    accordionContent.removeAttribute("style")
    item.classList.remove("accordion-open")
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + "px"
    item.classList.add("accordion-open")
  }

  
}

// scroll section active link
const sections = document.querySelectorAll("section[id]")

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id")

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.add("active-link")
    }else{
      document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

// scrollup
function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is heigher than 350 viewport height, add the show-scroll class to the a tag with the scroll-tag
  if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

