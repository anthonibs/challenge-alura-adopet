const preloader = document.querySelector('.preloader')

new Vivus('preloader', {
    duration: 150,
    type: 'sync',
    animTimingFunction: Vivus.EASE
})


window.onload(
    setTimeout(() => {
        preloader.classList.remove('active-preloader')
        const svg = document.querySelector('.preloader')
        const removerSVG = document.getElementById('preloader')
        svg.removeChild(removerSVG)
    }, 1500)
)