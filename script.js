alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. Спасибо за понимание :)"
);

// Перед стартом подгружу мои массивы соответствующие клавишам на клавиатуре
import enLang from './enkeys.js';

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
p.textContent = `Клавиатура создана для Операционной системы Windows.<br>Переключение языка осуществляется через комбинацию Alt + Shift`;





// Теперь начинается основа разработки 

//
// Структура для main
//

// Добавляю секцию с классом "input", где будет размещаться поле для вывода текста с клавиатуры
const input = document.createElement('section');
input.classList.add('input animation');
main.appendChild(input);
// Размещаю поле для вывода текста с клавиатуры
const textarea = document.createElement('textarea');
textarea.classList.add('textarea animation');
input.appendChild(textarea);

// Добавляю секцию с классом "keyboard", где будет размещаться сама виртуальная клавиатура
const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
main.appendChild(keyboard);

// Вывожу клавиши клавиатуры 
let keys = enLang;
for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < keys[i].length; j += 1) {
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    row.appendChild(button);
  }
  keyboard.appendChild(row);
}