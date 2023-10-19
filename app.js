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
