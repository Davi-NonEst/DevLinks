const img = document.querySelector('#avatar')
const html = document.querySelector('html')
const switchb = document.querySelector('#switch button')

function alterar_tema(){
    html.classList.toggle('light')
    if (html.classList.contains('light')) {
        img.src = 'assets/avatar-light.png'
    } else{
        img.src = 'assets/avatar.png'
    }
}

switchb.addEventListener('click', alterar_tema)