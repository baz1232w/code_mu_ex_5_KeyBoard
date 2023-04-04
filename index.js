const td = document.querySelectorAll('.td'),
      textArea = document.getElementById('text'),
      space = document.querySelector('.space'),
      backSpace = document.querySelector('.backspace'),
      chapslock = document.querySelector('.chapslock');

td.forEach(el => {
    el.addEventListener('click',()=>{
        textArea.value += el.textContent
    })
})

space.addEventListener('click',()=>{
    textArea.value += ' '
})

backSpace.addEventListener('click',()=>{
    textArea.value = textArea.value.substring(0,textArea.value.length-1)
})

chapslock.addEventListener('click', ()=>{
    if(!chapslock.classList.contains('active')){
        chapslock.classList.add('active')
        td.forEach(el => el.textContent = el.textContent.toUpperCase())
    }else{
        chapslock.classList.remove('active')
        td.forEach(el => el.textContent = el.textContent.toLowerCase())

    }
})


