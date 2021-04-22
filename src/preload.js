const styles = require('./assets/css/styles')

window.onload = () => {
  const style = document.head.children.item(12)
  style.innerHTML += styles
  const watchButtonStatus = setInterval(() => {
    const button = document.getElementsByClassName('_2n-zq').item(0)
    if (button) {
      clearInterval(watchButtonStatus)
      clearElement(button)
    }
  }, 1000)

  const watchLogoInitial = setInterval(() => {
    const logo = document.getElementsByClassName('_2zr6K').item(0)
    if (logo) {
      clearInterval(watchLogoInitial)
      clearElement(watchLogoInitial)
    }
  }, 1000)
}

function clearElement(element) {
  element.style.display = 'none'
}
