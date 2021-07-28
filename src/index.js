import './styles.scss';

import worlds from './data';

function returnedRandomIndex() {
  const lengthArrow = worlds.length;
  const randomIndex = Math.floor(Math.random() * lengthArrow);
  return randomIndex;
}

// DOM- elements

const btnNextWord = document.querySelector('.next-word');
const btnShowAnswer = document.querySelector('.show-answer');
const screen = document.querySelector('.screen');
const screen2 = document.querySelector('.screen2');

btnNextWord.addEventListener('click', nextWord);
btnShowAnswer.addEventListener('click', showAnswer);

let curentId;
function nextWord() {
  let rl = returnedRandomIndex();
  const id = worlds[rl].id;

  const curentElem = worlds.find(el => {
    return el.id === id;
  });

  curentId = curentElem;
  screen2.innerHTML = '';
  screen.innerHTML = `<p class="screen-next-word">${worlds[rl].uk}</p>`;
  btnShowAnswer.disabled = false;
}

function showAnswer() {
  screen2.innerHTML = `<p class="screen-answer">${curentId.en}</p>`;
  btnShowAnswer.setAttribute('disabled', 'disabled');
}
