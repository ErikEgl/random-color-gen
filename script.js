const body = document.querySelector('body')
const btn = document.querySelector('button')
let r, g, b;

btn.addEventListener('click', clicker)

function clicker() {
  const opacity = +Math.random().toFixed(2)
  r = +Math.floor(Math.random()*252)
  g = +Math.floor(Math.random()*252)
  b = +Math.floor(Math.random()*252)
  const fontSize = +Math.floor(Math.random()*50)
  // btn.style.fontSize = fontSize + 'px'
  body.style.backgroundColor = 'rgba('+r+', '+g+', '+b+','+opacity+')'
  btn.textContent = 'rgba ' + r  +', ' + g +', '+ b + ', ' + opacity
  btn.style.backgroundColor = 'rgba('+r *2 +', '+g *2+', '+b *2+','+opacity *2+')'
  btn.style.border = '5px solid rgba('+r *2 +', '+g *2+', '+b *2+','+opacity *2+')'
}

// setInterval(() => {
//   clicker()
// }, 100);