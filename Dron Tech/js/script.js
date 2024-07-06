document.addEventListener('click', function (e){
    const targetElement = e.target;
    if (targetElement.closest('.menu-icon')){
        document.documentElement.classList.toggle('menu-open');
    }
})

$(document).ready(function(){
  $('.cards-brands').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,  
    dots: true      
  });
});

