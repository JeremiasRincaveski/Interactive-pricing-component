const value = document.getElementById('preco')
const range = document.querySelector('.main__header--input')
const checkbox = document.getElementById('mes-ano')
let isAnual = false

range.addEventListener('input', () => {
  const max = parseInt(range.max)
  const min = parseInt(range.min)
  const width = range.clientWidth
  const calculo = (width / (max - min)) * (range.value - min)
  
  range.setAttribute('style', `background: linear-gradient(90deg, var(--strong-cyan) ${calculo}px, var(--light-grayish-blue)  ${calculo}px)`)
  value.innerHTML = `$${isAnual ? ((range.value * 12) - ((range.value * 12) * 0.25)).toFixed(0) : range.value}.00`
})

checkbox.addEventListener('change', () => {
  checkbox.nextElementSibling.classList.toggle('active')
  checkbox.nextElementSibling.classList.remove('no-animacao')
  if (checkbox.nextElementSibling.className == 'active') {
    isAnual = true
    value.innerText = `$${((range.value * 12) - ((range.value * 12) * 0.25)).toFixed(2)}`
  } else {
    isAnual = false
    value.innerText = `$${range.value}.00`
  }
})