window.addEventListener('scroll', onScroll)

const navigation = document.getElementById('navigation')

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeigth = section.offsetHeight
  const sectionTopReachOrPassedLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeigth
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 35) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  navigation.classList.add('scroll')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  if (scrollY < 35) {
    navigation.classList.remove('scroll')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
