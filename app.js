AOS.init()
/* Adds the class active to elements by scrolling in section */
window.addEventListener('scroll', () => {
  let current = ''
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    let sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 300) {
      current = section.dataset.section
    }
  })
  console.log(current)
  const linkElements = document.querySelectorAll('li')
  linkElements.forEach((item) => {
    item.classList.remove('active')
  })
  const activatedLink = document.querySelector(
    `li[data-section="${current}"]`
  )
  activatedLink.classList.add('active')
})

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
  console.log(formData)
  fetch('https://formspree.io/f/xleyaqor', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => {
    console.log(res)
  })

  name.value = ''
  email.value = ''
  message.value = ''
  document.getElementById('success').classList.remove('hide')
  setTimeout(() => {
    document.getElementById('success').classList.add('hide')
  }, 10000)
})
