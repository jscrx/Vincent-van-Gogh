/**abre e fecha o menu quando clicar no toggle */
/**o nav esta atribuido a header e a nav */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
    element.addEventListener('click', function() {
        /**toggle= liga/desliga */
        nav.classList.toggle('show')
    })
}


const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    /**link() method creates a string representing the code for an <a> HTML element to be used as a hypertext link to another URL.*/
    link.addEventListener('click', function() {
        /**quando clicar emm um item do menu,esconder o menu */
        nav.classList.remove('show')
    })
}

/**mudar o header quando der scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    
    window.addEventListener('scroll',function() {
        if(window.scrollY >= navHeight) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
        }
    })
}




/*review slider*/
const swiper = new Swiper('.swiper-container', {
    sliderPerView : 1,
    pagination: {
        el:'.swiper-pagination'
    },
    keyboard:true,
    breakpoints: {
        767:{
        slidesPerView: 2,
        setWrapperSize: true,
        }
    }
})

/**Mostrar elemntos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true,
})


scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand,footer .social`,
    { interval: 100 }
)

/**botão voltar para o topo**/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/**menu ativo */
const sections = document.querySelectorAll( 'main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <=sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href *=' + sectionId + ']' )
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href *=' + sectionId + ']' )
                .classList.remove('active')
        }
    }

}


window.addEventListener('scroll',function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

