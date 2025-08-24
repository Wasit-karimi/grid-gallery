const up = document.getElementById('up')
 up.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
 })