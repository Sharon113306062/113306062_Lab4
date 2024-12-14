
const sounds = {
  w: new Audio('sounds/crash.mp3'),
  a: new Audio('sounds/kick-bass.mp3'),
  s: new Audio('sounds/snare.mp3'),
  d: new Audio('sounds/tom-1.mp3'),
  j: new Audio('sounds/tom-2.mp3'),
  k: new Audio('sounds/tom-3.mp3'),
  l: new Audio('sounds/tom-4.mp3')
};


function playSound(key) {
  if (sounds[key]) {
    sounds[key].play();
  }

  const button = document.querySelector(`.${key}`);
  button.classList.add('pressed');
  
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}


document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.classList[0];
    playSound(key);
  });
});


document.addEventListener('keydown', (event) => {
  const key = event.key;
  const validKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

  if (validKeys.includes(key)) {
    playSound(key);
  }
});