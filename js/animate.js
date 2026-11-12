// Loaded synchronously in <head>, so this runs before the body paints. The CSS
// only hides .animate under .js; without scripts the content is just visible.
document.documentElement.classList.add('js')

function animate() {
  const animateElements = document.querySelectorAll('.animate')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
    }, index * 150)
  });
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)