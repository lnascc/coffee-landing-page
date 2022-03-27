<<<<<<< HEAD
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
=======
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

>>>>>>> e35f0bbd30dbba3bcad330e11ef45957a656e8e7
