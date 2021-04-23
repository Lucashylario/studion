$(document).ready(() => {
    const slickOptions = {
        autoplay: true, /*Ativa arolagem do slide auto*/
        autoplaySpeed: 2000, /* Tempo de rolagem 2000 = 2 segundos */
        dots: false, /*esconder pontinhos da barra de slide*/
        prevArrow: '<button type="button" class="slick-prev  slider__prev-arrow">Previous</button>;', /*Seta esquerda Slide*/
        nextArrow: '<button type="button" class="slick-next  slider__next-arrow">Previous</button>;' /*Seta direita Slide*/
    }
    $('.slider').slick(slickOptions);
});