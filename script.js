// Перед стартом подгружу мои массивы соответствующие клавишам на клавиатуре
import enLang from './enkeys.js';
import ruLang from './rukeys.js';

// 
// Для начала задам структуру header, main, footer 
//

// Добавляю header, где будет размещен заголовок
const header = document.createElement('header');
header.classList.add('animation');
document.body.appendChild(header);

// Добавляю main, где будет размещена вся структура клавиатуры с полем вывода текста
const main = document.createElement('main');
document.body.appendChild(main);

// Добавляю footer, где будет размещена информация по смене языка
const footer = document.createElement('footer');
footer.classList.add('animation');
document.body.appendChild(footer);

//
// Контент для header
//

// Добавляю заголовок h1 с текстом в header
const h1 = document.createElement('h1');
header.appendChild(h1);
h1.textContent = 'Virtual Keyboard by Andrei Chaika';

//
// Контент для footer
//

// Добавляю подпись p с текстом в footer
const p = document.createElement('p');
footer.appendChild(p);
p.textContent = 'Клавиатура создана для Операционной системы Windows Переключение языка осуществляется через комбинацию Alt + Shift';





// Теперь начинается основа разработки 

//
// Структура для main
//

// Добавляю секцию с классом "input", где будет размещаться поле для вывода текста с клавиатуры
const input = document.createElement('section');
input.classList.add('input', 'animation');
main.appendChild(input);
// Размещаю поле для вывода текста с клавиатуры
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
input.appendChild(textarea);

// Добавляю секцию с классом "keyboardbody", где будет размещаться сама виртуальная клавиатура
const keyboardbody = document.createElement('section');
keyboardbody.classList.add('keyboard', 'animation');
main.appendChild(keyboardbody);

// Для начала привязываю массив с данными клавиш английской раскладки к переменной keys.
let keys = enLang;

// Создаю цикл, который сперва будет перебирать массив по элементам (оно же i)
for (let i = 0; i < keys.length; i += 1) {
  // Задаю условие создание новых блоков с классом "row" после прохождения каждого i
  const row = document.createElement('div');
  row.classList.add('row');
  //  Внутрь цикла размещаю ещё один цикл, который внутри i-ых элементов массива будет перебирать элементы вложенных в них массивов (они же j) 
  for (let j = 0; j < keys[i].length; j += 1) {
    // Задаю условие создания button внутри row после прохождения каждого j с добавлением класса (по ключу class извлекаю значение), с добавлением текста внутрь button (по ключу key извлекаю значение) и с добавлением в button своего id (по ключу code извлекаю значение)
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    button.setAttribute(keys[i][j].property, true);
    row.appendChild(button);
  }
  keyboardbody.appendChild(row);
}

const inputText = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');
const btnEnter = document.querySelector('#Enter');
const btnTab = document.querySelector('#Tab');
const btnDel = document.querySelector('#Delete');
const btnBackspace = document.querySelector('#Backspace');
const btnCapsLock = document.querySelector('#CapsLock');
const btnShiftL = document.querySelector('#ShiftLeft');
const btnShiftR = document.querySelector('#ShiftRight');
const btnCtrlL = document.querySelector('#ControlLeft');
const btnCtrlR = document.querySelector('#ControlRight');
const btnAltL = document.querySelector('#AltLeft');
const btnAltR = document.querySelector('#AltRight');
const btnSpace = document.querySelector('#Space');
const btnSymbols = document.querySelectorAll('button[printable]');

let lang = 'en';
let shiftState = 0;
let altState = 0;

function findKey(code) {
  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      if (keys[i][j].code === code) return keys[i][j];
    }
  }
  return null;
}

function changeLetters() {
  btnSymbols.forEach((el) => {
    const elt = el;
    if (shiftState === 0) {
      elt.innerHTML = findKey(elt.id).name;
    } else {
      elt.innerHTML = findKey(elt.id).nameShift;
    }
  });
}

function setLang(langT) {
  switch (langT) {
    case 'en':
      keys = enLang;
      break;
    case 'ru':
      keys = ruLang;
      break;

    default:
      break;
  }
  changeLetters();
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    setLang(lang);
  }
}
window.addEventListener('load', getLocalStorage);

function getCursorPosition() {
  let position = 0;
  if ((inputText.selectionStart != null) && ( inputText.selectionStart !== undefined)) {
    position = inputText.selectionStart;
  }
  return position;
}

function insertSymbols(str) {
  const position = getCursorPosition();
  const leftPart = inputText.value.substring(0, position);
  const rightPart = inputText.value.substring(position);
  let strLen = str.length;
  if (str === '\r\n') strLen = 1;
  inputText.value = leftPart + str + rightPart;
  inputText.focus();
  inputText.setSelectionRange(position + strLen, position + strLen);
}

function btnsClicked(event) {
  const { id } = event.currentTarget;
  if (findKey(id).location > 0) return;
  if (id === 'Enter' || id === 'Tab' || id === 'Space') return;
  insertSymbols(event.currentTarget.innerHTML);
}

function enterClicked() {
  insertSymbols('\r\n');
}

function tabClicked() {
  insertSymbols('    ');
}

function spaceClicked() {
  insertSymbols(' ');
}

function delClicked() {
  const position = getCursorPosition();
  inputText.value = inputText.value.substring(0, position)
    + inputText.value.substring(position + 1);
  inputText.focus();
  inputText.setSelectionRange(position, position);
}

function backspaceClicked() {
  const position = getCursorPosition();
  if (position > 0) {
    inputText.value = inputText.value.substring(0, position - 1)
    + inputText.value.substring(position);
    inputText.focus();
    inputText.setSelectionRange(position - 1, position - 1);
  }
}

function capslockClicked() {
  if (shiftState === 0) shiftState = 1;
  else shiftState = 0;
  changeLetters();
  btnCapsLock.classList.toggle('active');
}

let langswitched = false;

function shiftClicked() {
  if (langswitched) return;
  if (altState === 1) {
    langswitched = true;
    switch (lang) {
      case 'en':
        lang = 'ru';
        break;
      case 'ru':
        lang = 'en';
        break;

      default:
        break;
    }
    setLang(lang);
  } else {
    if (shiftState === 0) shiftState = 1;
    else shiftState = 0;
    changeLetters();
  }
}

function shiftUp() {
  if (langswitched) {
    langswitched = false;
    return;
  }
  if (shiftState === 0) shiftState = 1;
  else shiftState = 0;
  changeLetters();
}

function ctrlClicked() {

}

function altClicked() {
  altState = 1;
}

function altUp() {
  altState = 0;
}

function keyDown(event) {
  event.preventDefault();
  const k = findKey(event.code);
  if (k === null) return;
  if (k.key !== 'CapsLock') document.querySelector(`#${event.code}`).classList.add('active');
  if (k.property === 'printable') {
    let s;
    if (shiftState === 0) s = k.name;
    else s = k.nameShift;
    insertSymbols(s);
  } else {
    switch (k.key) {
      case 'Shift':
        if (!event.repeat) shiftClicked();
        break;
      case 'Alt':
        if (!event.repeat) altClicked();
        break;
      case 'CapsLock':
        if (!event.repeat) capslockClicked();
        break;
      case ' ':
        spaceClicked();
        break;
      case 'Enter':
        enterClicked();
        break;
      case 'Delete':
        delClicked();
        break;
      case 'Backspace':
        backspaceClicked();
        break;
      case 'Tab':
        tabClicked();
        break;

      default:
        break;
    }
  }
}

function keyUp(event) {
  event.preventDefault();
  const k = findKey(event.code);
  if (k === null) return;
  if (k.key !== 'CapsLock') document.querySelector(`#${event.code}`).classList.remove('active');
  if (k.property !== 'printable') {
    switch (k.key) {
      case 'Shift':
        shiftUp();
        break;
      case 'Alt':
        altUp();
        break;

      default:
        break;
    }
  }
}

inputText.addEventListener('keydown', keyDown);
inputText.addEventListener('keyup', keyUp);
keyboard.addEventListener('keydown', keyDown);
keyboard.addEventListener('keyup', keyUp);
btnEnter.addEventListener('click', enterClicked); 
btnTab.addEventListener('click', tabClicked);
btnDel.addEventListener('click', delClicked);
btnBackspace.addEventListener('click', backspaceClicked);
btnCapsLock.addEventListener('click', capslockClicked);
btnShiftL.addEventListener('mousedown', shiftClicked);
btnShiftL.addEventListener('mouseup', shiftUp);
btnShiftR.addEventListener('mousedown', shiftClicked);
btnShiftR.addEventListener('mouseup', shiftUp);
btnCtrlL.addEventListener('click', ctrlClicked);
btnCtrlR.addEventListener('click', ctrlClicked);
btnAltL.addEventListener('mousedown', altClicked);
btnAltR.addEventListener('mousedown', altClicked);
btnAltL.addEventListener('mouseup', altUp);
btnAltR.addEventListener('mouseup', altUp);
btnSpace.addEventListener('click', spaceClicked);
btnSymbols.forEach((el) => el.addEventListener('click', btnsClicked));
