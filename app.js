AOS.init()
/* Adds the class active to elements by scrolling in section */

const sections = document.querySelectorAll('section')
const linkElements = document.querySelectorAll('li')

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 550
    let height = sec.offsetHeight
    let id = sec.dataset.section

    if (top >= offset && top < offset + height) {
      linkElements.forEach((links) => {
        links.classList.remove('active')
        if (links.dataset.section === id) {
          links.classList.add('active')
        }
      })
    }
  })
}

const projects = document.querySelectorAll('.project')
projects.forEach((project) => {
  project.addEventListener('click', (e) => {
    const clickedProject = e.target.closest('.project')
    if (clickedProject.dataset.src === '#') return
    window.open(clickedProject.dataset.src)
  })
})

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.querySelector('#nameInput')
  const email = document.querySelector('#emailInput')
  const message = document.querySelector('#messageInput')

  const formData = new URLSearchParams({
    name: name.value,
    email: email.value,
    message: message.value,
  })
  fetch('https://formspree.io/f/xoqgalnr', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {})
    .catch((error) => {
      document.getElementById('error').classList.remove('hide')
      setTimeout(() => {
        document.getElementById('error').classList.add('hide')
      }, 10000)
      return
    })

  name.value = ''
  email.value = ''
  message.value = ''
  document.getElementById('success').classList.remove('hide')
  setTimeout(() => {
    document.getElementById('success').classList.add('hide')
  }, 10000)
})
