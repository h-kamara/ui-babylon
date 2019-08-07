let userForm = document.getElementById('user-input');
userForm.addEventListener('submit', function(event)) {
  event.preventDefault()
  let userMessage = event.target[0].value
  let newParagraph = "<p class='bubble user'>" + userMessage + "</p>"
  let article = document.getElementByTagName('article')[0]
  let currentInnerHTML = article.innterHTML
  let newInnerHTML = currentInnerHTML + newParagraph
  article.innerHTML = newInnterHTML
})
