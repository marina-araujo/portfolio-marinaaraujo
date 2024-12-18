function mudouTamanho() {
    const itens = document.querySelector('header nav');
    if (window.innerWidth >= 500) {
        itens.style.display = 'flex'; 
    } else {
        itens.style.display = 'none';
    }
}

function clickMenu() {
    const itens = document.querySelector('header nav');
    if (itens.style.display === 'none' || itens.style.display === '') {
        itens.style.display = 'flex'; 
        itens.style.flexDirection = 'column'; 
    } else {
        itens.style.display = 'none';
    }
}

window.addEventListener('resize', mudouTamanho);

mudouTamanho();
