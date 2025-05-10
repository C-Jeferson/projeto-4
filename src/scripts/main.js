document.addEventListener('DOMContentLoaded', function() {
    const imgPrincipal = document.querySelector('.hero__imagem');
    const buttonImg = document.querySelectorAll('[data-per-button]')
    
    //troca img mobile e pc
    function atualizarImagem() {
        if (window.innerWidth <= 900) {
            imgPrincipal.src = "./dist/images/logos/principal-mobile.png";
        } else {
            imgPrincipal.src = "./dist/images/logos/principal.jpg";
        }
    }
    window.addEventListener('resize', atualizarImagem);
    atualizarImagem()
    
    // presente
    const btnPresente = document.querySelector('#buttonPresente');
    btnPresente.addEventListener('click', function() {
        const presente = document.querySelector('.rodape__presente') 
        presente.classList.toggle('rodape__presente--ativo');
    })
    

    // header
    const hero = document.querySelector('.hero')
    const alturaHero = hero.clientHeight;
    function verificaScroll() {
        const posicaoAtual = this.window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader()
        } else {
            exibeElementosDoHeader()
        }
    }
    window.addEventListener('scroll', verificaScroll);
    verificaScroll()

    // troca de personagens
    for (let i = 0; i < buttonImg.length; i++) {
        buttonImg[i].addEventListener('click', function(botao) {
            const personagem = botao.currentTarget.getAttribute('data-per-button');
            const aba = document.querySelector(`[data-per-sobre="${personagem}"]`);
            const bb = botao.currentTarget

            escondeSobre()
            aba.classList.add('personagens__completos__ativo')

            escondeButton()
            bb.classList.add('personagens__button__personagem--ativo')
        })
    }
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--ativo');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--ativo');
}

function escondeSobre() {
    const tabssobre = document.querySelectorAll('[data-per-sobre]')
    
    for (let i = 0; i < tabssobre.length; i++) {
        tabssobre[i].classList.remove('personagens__completos__ativo')
    }
}  

function escondeButton() {
    const tabsbutton = document.querySelectorAll('[data-per-button]')

    for (let i = 0; i < tabsbutton.length; i++) {
        tabsbutton[i].classList.remove('personagens__button__personagem--ativo')
    }
}
