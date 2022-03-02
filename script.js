const button = document.querySelector('#button')
const navigation = document.querySelector('.navigation')

button.addEventListener('click', open)
button.addEventListener('click', close)

function open() {
  navigation.classList.add('active')
  button.classList.remove('menuOpen')
  button.classList.add('menuClose') 
}


function close() {
  navigation.classList.remove('active')
  button.classList.remove('menuClose')
  button.classList.add('menuOpen')
}

