const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.classList.add('highlight', true)
};
const blurHandler = event => {
  event.target.classList.remove('highlight')
};

nameInput.addEventListener('focus', focusHandler)
nameInput.addEventListener('blur', blurHandler)

messageTextArea.addEventListener('focus', focusHandler)
messageTextArea.addEventListener('blur', blurHandler)
