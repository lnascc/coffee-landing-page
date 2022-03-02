const openButton = document.querySelector('.menuOpen')
const closeButton = document.querySelector('.menuClose')
const navigation = document.querySelector('.navigation')

openButton.addEventListener('click', open)

function open() {
  navigation.classList.add('active')
  openButton.classList.remove('menuOpen')
  openButton.classList.add('menuClose') 
}


function close() {
  navigation.classList.remove('active')
  closeButton.classList.remove('menuClose')
  closeButton.classList.add('menuOpen')
}
closeButton.addEventListener('click', close)