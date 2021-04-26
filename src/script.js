$(document).ready(() => {
    /* ----- Script do Slide Banner ----- */
    const slickOptions = {
        autoplay: true, /*Ativa arolagem do slide auto*/
        autoplaySpeed: 2000, /* Tempo de rolagem 2000 = 2 segundos */
        dots: false, /*esconder pontinhos da barra de slide*/
        prevArrow: '<button type="button" class="slick-prev  slider__prev-arrow">Previous</button>;', /*Seta esquerda Slide*/
        nextArrow: '<button type="button" class="slick-next  slider__next-arrow">Previous</button>;' /*Seta direita Slide*/
    }
    $('.slider').slick(slickOptions);
    /*=======================================*/

    /*---------- Script do botão email do footer ---------*/
    $('.footer__form-button').on('click', () => {
        const email = $('#email').val(); /* puxando o ID de input do botão email do footer */

        /* Site do script abaixo que recebe emails: https://smtpjs.com/ */
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'lucashylario@hotmail.com', /* destino para onde irá o email enviado */
            From : email, /* email da pessoa que enviou */
            Subject : "E-mail teste do site studion", /* Assunto do E-mail */
            Body : `Olá, eu gostaria de ser adicionado à newsletter do site. 
            Meu email é ${email}` /* Mensage para o email */ 
            /* "${email}" é a função que mostra o email da pessoa que enviou */
        }).then(
          message => alert(message)
        );
    });
});